// @ts-nocheck
// Main.js
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
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import Search from './Search';
import Notification from './Notification';
// import './notification.css'
//import login from './login'
import loginService from './login';
//import { Navbar } from 'reactstrap';

const Main = () => {
  if (stryMutAct_9fa48("77")) {
    {}
  } else {
    stryCov_9fa48("77");
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [notification, setNotification] = useState(null);
    const [notificationType, setNotificationType] = useState(null);
    const notificationHandler = (message, type) => {
      if (stryMutAct_9fa48("78")) {
        {}
      } else {
        stryCov_9fa48("78");
        setNotification(message);
        setNotificationType(type);
        setTimeout(() => {
          if (stryMutAct_9fa48("79")) {
            {}
          } else {
            stryCov_9fa48("79");
            setNotificationType(null);
            setNotification(null);
          }
        }, 3000);
      }
    };
    const handleLogin = async credentials => {
      if (stryMutAct_9fa48("80")) {
        {}
      } else {
        stryCov_9fa48("80");
        try {
          if (stryMutAct_9fa48("81")) {
            {}
          } else {
            stryCov_9fa48("81");
            const userObject = await loginService.login(credentials);
            setUser(userObject);
            window.localStorage.setItem(stryMutAct_9fa48("82") ? "" : (stryCov_9fa48("82"), 'loggedInUser'), JSON.stringify(userObject));
            notificationHandler(stryMutAct_9fa48("83") ? `` : (stryCov_9fa48("83"), `Logged in successfully as ${userObject.first_name}`), stryMutAct_9fa48("84") ? "" : (stryCov_9fa48("84"), 'success'));
            // navigate('/search');
          }
        } catch (exception) {
          if (stryMutAct_9fa48("85")) {
            {}
          } else {
            stryCov_9fa48("85");
            notificationHandler(stryMutAct_9fa48("86") ? `` : (stryCov_9fa48("86"), `Log in failed, check username and password entered`), stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), 'error'));
          }
        }
        // Update the state to indicate that the user is logged in
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("88")) {
        {}
      } else {
        stryCov_9fa48("88");
        const loggedInUser = window.localStorage.getItem(stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), 'loggedInUser'));
        if (stryMutAct_9fa48("91") ? false : stryMutAct_9fa48("90") ? true : (stryCov_9fa48("90", "91"), loggedInUser)) setUser(JSON.parse(loggedInUser));
      }
    }, stryMutAct_9fa48("92") ? ["Stryker was here"] : (stryCov_9fa48("92"), []));
    return <div>
      {/* <Header /> */}
      
      <main>
      

          
          {stryMutAct_9fa48("95") ? user === null || <div className='text-center page-header p-10 regular-text-shadow regular-shadow'>
              <div className='display-14 font-weight-bold' style={{
            color: '#fff',
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            paddingLeft: '42%',
            fontSize: '50px'
          }}>
                Academia
              </div>
            </div> : stryMutAct_9fa48("94") ? false : stryMutAct_9fa48("93") ? true : (stryCov_9fa48("93", "94", "95"), (stryMutAct_9fa48("97") ? user !== null : stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96", "97"), user === null)) && <div className='text-center page-header p-10 regular-text-shadow regular-shadow'>
              <div className='display-14 font-weight-bold' style={stryMutAct_9fa48("98") ? {} : (stryCov_9fa48("98"), {
            color: stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), '#fff'),
            backgroundColor: stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'black'),
            padding: stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), '10px'),
            borderRadius: stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), '5px'),
            paddingLeft: stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), '42%'),
            fontSize: stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), '50px')
          })}>
                Academia
              </div>
            </div>)}

          {/* Show Login form when no login has happened */stryMutAct_9fa48("107") ? /* Show Login form when no login has happened */
        user === null || <LoginForm startLogin={handleLogin} /> : stryMutAct_9fa48("106") ? false : stryMutAct_9fa48("105") ? true : (stryCov_9fa48("105", "106", "107"), (stryMutAct_9fa48("109") ? user !== null : stryMutAct_9fa48("108") ? true : (stryCov_9fa48("108", "109"), user === null)) && <LoginForm startLogin={handleLogin} />)}
          
          {stryMutAct_9fa48("112") ? user || <div>
               <Header user={user} setUser={setUser} />
               <Search />
               
               {/* <Profile /> */}
               {/* <Notifications /> */}
               
             </div> : stryMutAct_9fa48("111") ? false : stryMutAct_9fa48("110") ? true : (stryCov_9fa48("110", "111", "112"), user && <div>
               <Header user={user} setUser={setUser} />
               <Search />
               
               {/* <Profile /> */}
               {/* <Notifications /> */}
               
             </div>)}
           <Notification notification={notification} type={notificationType} />
      </main>
      
    </div>;
  }
};
export default Main;