// @ts-nocheck
// Search.js
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState } from 'react';
import Contact from './Contact';
import './search.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const Search = () => {
  if (stryMutAct_9fa48("118")) {
    {}
  } else {
    stryCov_9fa48("118");
    const [grad_year, setGYear] = useState(stryMutAct_9fa48("119") ? "Stryker was here!" : (stryCov_9fa48("119"), ''));
    const [fname, setFname] = useState(stryMutAct_9fa48("120") ? "Stryker was here!" : (stryCov_9fa48("120"), ''));
    //const [lname, setLname] = useState('');
    const [alumniData, setAlumniData] = useState(stryMutAct_9fa48("121") ? ["Stryker was here"] : (stryCov_9fa48("121"), []));
    const [show, setShow] = useState(stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122"), false));
    const [noRecord, setNoRecord] = useState(stryMutAct_9fa48("123") ? true : (stryCov_9fa48("123"), false));
    const [propertyVal, setPropertyVal] = useState(1);
    const [register, setRegister] = useState(stryMutAct_9fa48("124") ? true : (stryCov_9fa48("124"), false));
    const [showContactForm, setShowContactForm] = useState(stryMutAct_9fa48("125") ? true : (stryCov_9fa48("125"), false));
    //const [uml, showUML] = useState(false);
    //const navigate = useNavigate();

    const handleChangeGYear = event => {
      if (stryMutAct_9fa48("126")) {
        {}
      } else {
        stryCov_9fa48("126");
        setGYear(event.target.value);
      }
    };
    const handleChangeFName = event => {
      if (stryMutAct_9fa48("127")) {
        {}
      } else {
        stryCov_9fa48("127");
        setFname(event.target.value);
      }
    };
    const getAlumniDetails = async () => {
      if (stryMutAct_9fa48("128")) {
        {}
      } else {
        stryCov_9fa48("128");
        try {
          if (stryMutAct_9fa48("129")) {
            {}
          } else {
            stryCov_9fa48("129");
            const token = JSON.parse(localStorage.getItem(stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), 'loggedInUser'))).access_token;
            console.log((stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), "token: ")) + token);
            const response = await axios.get(stryMutAct_9fa48("132") ? `` : (stryCov_9fa48("132"), `/api/v1/student/search?graduationYear=${grad_year}&name=${fname}`), stryMutAct_9fa48("133") ? {} : (stryCov_9fa48("133"), {
              headers: stryMutAct_9fa48("134") ? {} : (stryCov_9fa48("134"), {
                "access-control-allow-origin": stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), "*"),
                Authorization: stryMutAct_9fa48("136") ? `` : (stryCov_9fa48("136"), `Bearer ${token}`)
              })
            }));
            let arr = stryMutAct_9fa48("137") ? ["Stryker was here"] : (stryCov_9fa48("137"), []);
            console.log(stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), "Alumni Data: "), stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), "response: "), response.data.length);
            for (let i = 0; stryMutAct_9fa48("142") ? i >= response.data.length : stryMutAct_9fa48("141") ? i <= response.data.length : stryMutAct_9fa48("140") ? false : (stryCov_9fa48("140", "141", "142"), i < response.data.length); stryMutAct_9fa48("143") ? i-- : (stryCov_9fa48("143"), i++)) {
              if (stryMutAct_9fa48("144")) {
                {}
              } else {
                stryCov_9fa48("144");
                // console.log("Inside Loop ",response.data[i]);
                arr.push(response.data[i]);
              }
            }
            const data = response.data[0];
            setAlumniData(arr);
            console.log(stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), "response: "), data);
            if (stryMutAct_9fa48("148") ? alumniData || arr.length !== 0 : stryMutAct_9fa48("147") ? false : stryMutAct_9fa48("146") ? true : (stryCov_9fa48("146", "147", "148"), alumniData && (stryMutAct_9fa48("150") ? arr.length === 0 : stryMutAct_9fa48("149") ? true : (stryCov_9fa48("149", "150"), arr.length !== 0)))) {
              if (stryMutAct_9fa48("151")) {
                {}
              } else {
                stryCov_9fa48("151");
                console.log(stryMutAct_9fa48("152") ? "" : (stryCov_9fa48("152"), "record exist status"), noRecord);
                setNoRecord(stryMutAct_9fa48("153") ? true : (stryCov_9fa48("153"), false));
                setShow(stryMutAct_9fa48("154") ? false : (stryCov_9fa48("154"), true));
              }
            } else {
              if (stryMutAct_9fa48("155")) {
                {}
              } else {
                stryCov_9fa48("155");
                setNoRecord(stryMutAct_9fa48("156") ? false : (stryCov_9fa48("156"), true));
                console.log(stryMutAct_9fa48("157") ? "" : (stryCov_9fa48("157"), "No record Exist status"), noRecord);
                console.log(stryMutAct_9fa48("158") ? "" : (stryCov_9fa48("158"), "Alu Data"), alumniData);
              }
            }
          }
        } catch (error) {
          if (stryMutAct_9fa48("159")) {
            {}
          } else {
            stryCov_9fa48("159");
            console.error(stryMutAct_9fa48("160") ? "" : (stryCov_9fa48("160"), 'Error fetching data:'), error.message);
            // Handle specific error cases, if needed
          }
        }
      }
    };
    const handleRegister = student_id => {
      if (stryMutAct_9fa48("161")) {
        {}
      } else {
        stryCov_9fa48("161");
        setRegister(stryMutAct_9fa48("162") ? false : (stryCov_9fa48("162"), true));
        setShow(stryMutAct_9fa48("163") ? true : (stryCov_9fa48("163"), false));
        setNoRecord(stryMutAct_9fa48("164") ? true : (stryCov_9fa48("164"), false));
        setPropertyVal(student_id);
        // You can navigate to the Contact component or any other page as needed
        //navigate(`/contact/${student_id}`);
        setShowContactForm(stryMutAct_9fa48("165") ? showContactForm : (stryCov_9fa48("165"), !showContactForm));
        window.localStorage.setItem(stryMutAct_9fa48("166") ? "" : (stryCov_9fa48("166"), 'studentId'), student_id);
      }
    };

    // const toggleUML = () => {
    // showUML((prevUML) => !prevUML);
    // };

    return <div>
      {stryMutAct_9fa48("169") ? !showContactForm || <Form className="main_form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="graduation-year">Graduation Year</Form.Label>
        <Form.Control id="graduation-year" type="number" placeholder="Enter Graduation Year" onChange={handleChangeGYear} value={grad_year} />
        <Form.Text className="text-muted custom-text">
          Thank you for being a part of IIITB Fam..!
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first-name">First Name</Form.Label>
        <Form.Control id="first-name" type="text" placeholder="Enter First Name" onChange={handleChangeFName} value={fname} />
      </Form.Group>
    
      <Button className="mb-3" variant="primary" onClick={getAlumniDetails}>
        Search
      </Button>
    </Form> : stryMutAct_9fa48("168") ? false : stryMutAct_9fa48("167") ? true : (stryCov_9fa48("167", "168", "169"), (stryMutAct_9fa48("170") ? showContactForm : (stryCov_9fa48("170"), !showContactForm)) && <Form className="main_form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="graduation-year">Graduation Year</Form.Label>
        <Form.Control id="graduation-year" type="number" placeholder="Enter Graduation Year" onChange={handleChangeGYear} value={grad_year} />
        <Form.Text className="text-muted custom-text">
          Thank you for being a part of IIITB Fam..!
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first-name">First Name</Form.Label>
        <Form.Control id="first-name" type="text" placeholder="Enter First Name" onChange={handleChangeFName} value={fname} />
      </Form.Group>
    
      <Button className="mb-3" variant="primary" onClick={getAlumniDetails}>
        Search
      </Button>
    </Form>)}
      {stryMutAct_9fa48("173") ? showContactForm || <Contact /> : stryMutAct_9fa48("172") ? false : stryMutAct_9fa48("171") ? true : (stryCov_9fa48("171", "172", "173"), showContactForm && <Contact />)}

      {(stryMutAct_9fa48("176") ? show || alumniData.length !== 0 : stryMutAct_9fa48("175") ? false : stryMutAct_9fa48("174") ? true : (stryCov_9fa48("174", "175", "176"), show && (stryMutAct_9fa48("178") ? alumniData.length === 0 : stryMutAct_9fa48("177") ? true : (stryCov_9fa48("177", "178"), alumniData.length !== 0)))) ? <table className="alumniSearch">
          <thead>
            <tr>
              <th>NAME</th>
              <th>STUDENT ID</th>
              <th>GRADUATION YEAR</th>
              <th>ROLL NUMBER</th>
              
            </tr>
          </thead>
          <tbody>
            {alumniData.map(stryMutAct_9fa48("179") ? () => undefined : (stryCov_9fa48("179"), alumni => <tr key={alumni.student_id}>
                <td>{alumni.name}</td>
                <td> {alumni.student_id} </td>
                <td>{alumni.graduation_year}</td>
                <td>{alumni.roll_no}</td>
                <td>
                  <Button onClick={stryMutAct_9fa48("180") ? () => undefined : (stryCov_9fa48("180"), () => handleRegister(alumni.student_id))}>CLICK</Button>
                </td>
              </tr>))}
          </tbody>
        </table> : null}
      
    </div>;
  }
};
export default Search;