// @ts-nocheck
// LoginForm.js
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
import "./LoginForm.css";
const LoginForm = ({
  startLogin
}) => {
  if (stryMutAct_9fa48("68")) {
    {}
  } else {
    stryCov_9fa48("68");
    // States for tracking form input which are the email address and password
    const [email, setEmail] = useState(stryMutAct_9fa48("69") ? "Stryker was here!" : (stryCov_9fa48("69"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("70") ? "Stryker was here!" : (stryCov_9fa48("70"), ''));

    // onSubmit event handler of this form
    const handleLogin = event => {
      if (stryMutAct_9fa48("71")) {
        {}
      } else {
        stryCov_9fa48("71");
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault();
        const credentials = stryMutAct_9fa48("72") ? {} : (stryCov_9fa48("72"), {
          email,
          password
        });

        // Calling startLogin with the provided credentials that will make a call to the backend
        startLogin(credentials);

        // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
        setEmail(stryMutAct_9fa48("73") ? "Stryker was here!" : (stryCov_9fa48("73"), ''));
        setPassword(stryMutAct_9fa48("74") ? "Stryker was here!" : (stryCov_9fa48("74"), ''));
      }
    };
    return <div className="login-form-container">
      <h2 className="login-heading">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <label className="form-label">
          Email ID : 
          <input className="form-input" type="text" value={email} onChange={stryMutAct_9fa48("75") ? () => undefined : (stryCov_9fa48("75"), e => setEmail(e.target.value))} placeholder="Enter your username" />
        </label>
        <label className="form-label">
          Password :
          <input className="form-input" type="password" value={password} onChange={stryMutAct_9fa48("76") ? () => undefined : (stryCov_9fa48("76"), e => setPassword(e.target.value))} placeholder="Enter your password" />
        </label>
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>;
  }
};
export default LoginForm;