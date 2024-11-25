import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notification from './Notification';

const Contact = () => {
  const [profileData, setProfileData] = useState({
    address: '',
    collegeName: '',
    degree: '',
    joiningYear: '',
    passingYear: '',
    joiningDate: '',
    leavingDate: '',
    position: '',
    organizationId: '',
    contactNumber: '',
    email: '',
  });

  const changeProfileData = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);
  const [organizations, setOrganizations] = useState([]);

  const notificationHandler = (message, type) => {
    setNotification(message);
    setNotificationType(type);

    setTimeout(() => {
      setNotificationType(null);
      setNotification(null);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const accessToken = loggedInUser ? JSON.parse(loggedInUser).access_token : '';

        const response = await axios.get('/api/v1/organisations', {
          headers: {
            'access-control-allow-origin': '*',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrganizations(response.data);

        if (response.data.length > 0) {
          setProfileData((prevProfileData) => ({
            ...prevProfileData,
            organizationId: response.data[0].id,
          }));
        }
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchData();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const studentId = localStorage.getItem('studentId');
    const loggedInUser = localStorage.getItem('loggedInUser');
    const accessToken = loggedInUser ? JSON.parse(loggedInUser).access_token : '';

    try {
      const data = {
        address: profileData.address,
        collegeName: profileData.collegeName,
        degree: profileData.degree,
        joiningYear: profileData.joiningYear,
        passingYear: profileData.passingYear,
        joiningDate: profileData.joiningDate,
        leavingDate: profileData.leavingDate,
        position: profileData.position,
        organisationId: profileData.organizationId,
        contactNumber: profileData.contactNumber,
        studentId: studentId,
        email: profileData.email
      };

      await axios({
        method: 'post',
        url: '/api/v1/student/add',
        data,
        headers: {
          "Content-Type": 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${accessToken}`
        },
      });
      
      notificationHandler('Registration Successful', 'Success');
    } catch (error) {
      notificationHandler('Alumni is Already Registered', 'Failure');
    }
  };

  return (
    <div className="forms-container" data-testid="contact-form">
      <form onSubmit={handleContactSubmit}>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input 
              name="email" 
              type="email" 
              className="form-control" 
              id="inputEmail4" 
              value={profileData.email} 
              onChange={changeProfileData}
              aria-label="Email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputContactNumber" className="form-label">Contact Number</label>
            <input 
              name="contactNumber" 
              type="number" 
              className="form-control" 
              id="inputContactNumber"
              value={profileData.contactNumber} 
              onChange={changeProfileData}
              aria-label="Contact Number"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input 
              name="address" 
              type="text" 
              className="form-control" 
              id="inputAddress" 
              placeholder="1234 Main St" 
              value={profileData.address} 
              onChange={changeProfileData}
              aria-label="Address"
            />
          </div>
        </div>

        <div className="education-form">
          <h2>Education Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputDegree" className="form-label">Degree</label>
            <input 
              name="degree" 
              type="text" 
              className="form-control" 
              id="inputDegree" 
              value={profileData.degree} 
              onChange={changeProfileData}
              aria-label="Degree"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCollege" className="form-label">College Name</label>
            <input 
              name="collegeName" 
              type="text" 
              className="form-control" 
              id="inputCollege" 
              value={profileData.collegeName} 
              onChange={changeProfileData}
              aria-label="College Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputJoiningYear" className="form-label">Joining Year</label>
            <input 
              name="joiningYear" 
              type="text" 
              className="form-control" 
              id="inputJoiningYear" 
              value={profileData.joiningYear} 
              onChange={changeProfileData}
              aria-label="Joining Year"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassingYear" className="form-label">Passing year</label>
            <input 
              name="passingYear" 
              type="text" 
              className="form-control" 
              id="inputPassingYear" 
              value={profileData.passingYear} 
              onChange={changeProfileData}
              aria-label="Passing Year"
            />
          </div>
        </div>

        <div className="experience-form">
          <h2>Experience Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputPosition" className="form-label">Position</label>
            <input 
              name="position" 
              type="text" 
              className="form-control" 
              id="inputPosition" 
              value={profileData.position} 
              onChange={changeProfileData}
              aria-label="Position"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStartDate" className="form-label">Start Date</label>
            <input 
              name="joiningDate" 
              type="date" 
              className="form-control" 
              id="inputStartDate" 
              value={profileData.joiningDate} 
              onChange={changeProfileData}
              aria-label="Start Date"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEndDate" className="form-label">End Date</label>
            <input 
              name="leavingDate" 
              type="date" 
              className="form-control" 
              id="inputEndDate" 
              value={profileData.leavingDate} 
              onChange={changeProfileData}
              aria-label="End Date"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCompany" className="form-label">Organization</label>
            <select
              id="inputCompany"
              name="organizationId"
              className="form-control"
              value={profileData.organizationId}
              onChange={changeProfileData}
              aria-label="Organization"
            >
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit">Submit Form</button>
      </form>
      <Notification notification={notification} type={notificationType} />
    </div>
  );
};

export default Contact;