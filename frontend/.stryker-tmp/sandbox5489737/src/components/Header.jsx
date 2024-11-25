// @ts-nocheck
// import useRef  from "react";

// import { Container, Row } from "reactstrap";

// import { NavLink } from 'react-router-dom';
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
import "./header.css";
const Header = ({
  user,
  setUser
}) => {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    // If the Logout button has been clicked then clear the loggedInUser object from localStorage and
    // update "user" state to null, in order to logout, otherwise on the next reload, the Effect hook will again read the user
    // from the localStorage and relogin without showing the login form
    const logout = () => {
      if (stryMutAct_9fa48("3")) {
        {}
      } else {
        stryCov_9fa48("3");
        window.localStorage.removeItem(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), 'loggedInUser'));
        setUser(null);
      }
    };

    // Prevents Key Exception errors if "user" state hasn't loaded yet
    if (stryMutAct_9fa48("7") ? false : stryMutAct_9fa48("6") ? true : stryMutAct_9fa48("5") ? user : (stryCov_9fa48("5", "6", "7"), !user)) return null;
    return <header>
        <div className="container">
          <h1>Alumni Registration</h1>
          <nav>
            <ul>
              <li><button onClick={logout}>Logout</button></li>
              {/* <li><a href="/about">About</a></li> */}
              
            </ul>
          </nav>
        </div>
      </header>;
  }
};
export default Header;