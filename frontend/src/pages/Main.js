// Main.js

import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import Search from './Search';
import Notification from './Notification';
// import './notification.css'
//import login from './login'
import loginService from './login'
//import { Navbar } from 'reactstrap';

const Main = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const navigate = useNavigate();
  const [ user, setUser ] = useState(null)

  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async(credentials) => {
    try {
        const userObject = await loginService.login(credentials)
        setUser(userObject)
        window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
        
        notificationHandler(`Logged in successfully as ${userObject.first_name}`, 'success')
       // navigate('/search');
      }
      catch (exception) {
        notificationHandler(`Log in failed, check username and password entered`, 'error')
      }
    // Update the state to indicate that the user is logged in
    
  };
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div>
      {/* <Header /> */}
      
      <main>
      

          
          {user === null && (
            <div className='text-center page-header p-10 regular-text-shadow regular-shadow'>
              <div className='display-14 font-weight-bold' style={{ color: '#fff', backgroundColor: 'black', padding: '10px', borderRadius: '5px' ,paddingLeft:'42%',fontSize:'50px'}}>
                Academia
              </div>
            </div>
          )}

          {
            /* Show Login form when no login has happened */
            user === null && 
            <LoginForm startLogin={handleLogin}/>
          }
          
          {user && (
             <div>
               <Header user={user} setUser={setUser}/>
               <Search />
               
               {/* <Profile /> */}
               {/* <Notifications /> */}
               
             </div>
           )}
           <Notification notification={notification} type={notificationType} />
      </main>
      
    </div>
  );
};

export default Main;
