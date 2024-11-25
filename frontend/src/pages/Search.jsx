// Search.js

import React, { useState } from 'react';
import Contact from './Contact';
import './search.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [grad_year, setGYear] = useState('');
  const [fname, setFname] = useState('');
  //const [lname, setLname] = useState('');
  const [alumniData, setAlumniData] = useState([]);
  const [show, setShow] = useState(false);
  const [noRecord, setNoRecord] = useState(false);
  const [propertyVal, setPropertyVal] = useState(1);
  const [register, setRegister] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  //const [uml, showUML] = useState(false);
  //const navigate = useNavigate();

  const handleChangeGYear = (event) => {
    setGYear(event.target.value);
  };

  const handleChangeFName = (event) => {
    setFname(event.target.value);
  };

  const getAlumniDetails = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('loggedInUser')).access_token;
      console.log("token: " + token);
  
      const response = await axios.get(`/api/v1/student/search?graduationYear=${grad_year}&name=${fname}`, {
        headers: {
          "access-control-allow-origin": "*",
          Authorization: `Bearer ${token}`
        }
      });
      let arr = []
      console.log("Alumni Data: ","response: ", response.data.length);
      for (let i = 0; i < response.data.length; i++) {
        // console.log("Inside Loop ",response.data[i]);
        arr.push(response.data[i]);
      }
  
      const data = response.data[0];
      setAlumniData(arr);
      console.log("response: ",data);
      if (alumniData && arr.length !== 0) {
        console.log("record exist status",noRecord);
        
        setNoRecord(false);
        setShow(true);
      } else {
        setNoRecord(true);
        console.log("No record Exist status",noRecord);
        console.log("Alu Data",alumniData)
      }
    }catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle specific error cases, if needed
    }
  };
  

  const handleRegister = (student_id) => {
    setRegister(true);
    setShow(false);
    setNoRecord(false);
    setPropertyVal(student_id);
    // You can navigate to the Contact component or any other page as needed
    //navigate(`/contact/${student_id}`);
    setShowContactForm(!showContactForm);
    window.localStorage.setItem('studentId', student_id);
  };

  // const toggleUML = () => {
    // showUML((prevUML) => !prevUML);
  // };

  return (
    <div>
      {!showContactForm && (
      <Form className="main_form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="graduation-year">Graduation Year</Form.Label>
        <Form.Control
          id="graduation-year"
          type="number"
          placeholder="Enter Graduation Year"
          onChange={handleChangeGYear}
          value={grad_year}
        />
        <Form.Text className="text-muted custom-text">
          Thank you for being a part of IIITB Fam..!
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first-name">First Name</Form.Label>
        <Form.Control
          id="first-name"
          type="text"
          placeholder="Enter First Name"
          onChange={handleChangeFName}
          value={fname}
        />
      </Form.Group>
    
      <Button className="mb-3" variant="primary" onClick={getAlumniDetails}>
        Search
      </Button>
    </Form>
    
      )}
      {showContactForm && <Contact />}

      {show && alumniData.length !== 0 ? (
        <table className="alumniSearch">
          <thead>
            <tr>
              <th>NAME</th>
              <th>STUDENT ID</th>
              <th>GRADUATION YEAR</th>
              <th>ROLL NUMBER</th>
              
            </tr>
          </thead>
          <tbody>
            {alumniData.map((alumni) => (
              <tr key={alumni.student_id}>
                <td>{alumni.name}</td>
                <td> {alumni.student_id} </td>
                <td>{alumni.graduation_year}</td>
                <td>{alumni.roll_no}</td>
                <td>
                  <Button onClick={() => handleRegister(alumni.student_id)}>CLICK</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      
    </div>
  );
}

export default Search;
