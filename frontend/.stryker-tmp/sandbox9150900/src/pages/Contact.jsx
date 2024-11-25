// @ts-nocheck
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
import axios from 'axios';
import Notification from './Notification';
const Contact = () => {
  if (stryMutAct_9fa48("10")) {
    {}
  } else {
    stryCov_9fa48("10");
    const [profileData, setProfileData] = useState(stryMutAct_9fa48("11") ? {} : (stryCov_9fa48("11"), {
      address: stryMutAct_9fa48("12") ? "Stryker was here!" : (stryCov_9fa48("12"), ''),
      collegeName: stryMutAct_9fa48("13") ? "Stryker was here!" : (stryCov_9fa48("13"), ''),
      degree: stryMutAct_9fa48("14") ? "Stryker was here!" : (stryCov_9fa48("14"), ''),
      joiningYear: stryMutAct_9fa48("15") ? "Stryker was here!" : (stryCov_9fa48("15"), ''),
      passingYear: stryMutAct_9fa48("16") ? "Stryker was here!" : (stryCov_9fa48("16"), ''),
      joiningDate: stryMutAct_9fa48("17") ? "Stryker was here!" : (stryCov_9fa48("17"), ''),
      leavingDate: stryMutAct_9fa48("18") ? "Stryker was here!" : (stryCov_9fa48("18"), ''),
      position: stryMutAct_9fa48("19") ? "Stryker was here!" : (stryCov_9fa48("19"), ''),
      organizationId: stryMutAct_9fa48("20") ? "Stryker was here!" : (stryCov_9fa48("20"), ''),
      contactNumber: stryMutAct_9fa48("21") ? "Stryker was here!" : (stryCov_9fa48("21"), ''),
      email: stryMutAct_9fa48("22") ? "Stryker was here!" : (stryCov_9fa48("22"), '')
    }));
    const changeProfileData = e => {
      if (stryMutAct_9fa48("23")) {
        {}
      } else {
        stryCov_9fa48("23");
        const {
          name,
          value
        } = e.target;
        setProfileData(stryMutAct_9fa48("24") ? () => undefined : (stryCov_9fa48("24"), prevData => stryMutAct_9fa48("25") ? {} : (stryCov_9fa48("25"), {
          ...prevData,
          [name]: value
        })));
      }
    };
    const [notification, setNotification] = useState(null);
    const [notificationType, setNotificationType] = useState(null);
    const [organizations, setOrganizations] = useState(stryMutAct_9fa48("26") ? ["Stryker was here"] : (stryCov_9fa48("26"), []));
    const notificationHandler = (message, type) => {
      if (stryMutAct_9fa48("27")) {
        {}
      } else {
        stryCov_9fa48("27");
        setNotification(message);
        setNotificationType(type);
        setTimeout(() => {
          if (stryMutAct_9fa48("28")) {
            {}
          } else {
            stryCov_9fa48("28");
            setNotificationType(null);
            setNotification(null);
          }
        }, 3000);
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("29")) {
        {}
      } else {
        stryCov_9fa48("29");
        const fetchData = async () => {
          if (stryMutAct_9fa48("30")) {
            {}
          } else {
            stryCov_9fa48("30");
            try {
              if (stryMutAct_9fa48("31")) {
                {}
              } else {
                stryCov_9fa48("31");
                const loggedInUser = localStorage.getItem(stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'loggedInUser'));
                const accessToken = loggedInUser ? JSON.parse(loggedInUser).access_token : stryMutAct_9fa48("33") ? "Stryker was here!" : (stryCov_9fa48("33"), '');
                const response = await axios.get(stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), '/api/v1/organisations'), stryMutAct_9fa48("35") ? {} : (stryCov_9fa48("35"), {
                  headers: stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
                    'access-control-allow-origin': stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), '*'),
                    Authorization: stryMutAct_9fa48("38") ? `` : (stryCov_9fa48("38"), `Bearer ${accessToken}`)
                  })
                }));
                setOrganizations(response.data);
                if (stryMutAct_9fa48("42") ? response.data.length <= 0 : stryMutAct_9fa48("41") ? response.data.length >= 0 : stryMutAct_9fa48("40") ? false : stryMutAct_9fa48("39") ? true : (stryCov_9fa48("39", "40", "41", "42"), response.data.length > 0)) {
                  if (stryMutAct_9fa48("43")) {
                    {}
                  } else {
                    stryCov_9fa48("43");
                    setProfileData(stryMutAct_9fa48("44") ? () => undefined : (stryCov_9fa48("44"), prevProfileData => stryMutAct_9fa48("45") ? {} : (stryCov_9fa48("45"), {
                      ...prevProfileData,
                      organizationId: response.data[0].id
                    })));
                  }
                }
              }
            } catch (error) {
              if (stryMutAct_9fa48("46")) {
                {}
              } else {
                stryCov_9fa48("46");
                console.error(stryMutAct_9fa48("47") ? "" : (stryCov_9fa48("47"), 'Error fetching organizations:'), error);
              }
            }
          }
        };
        fetchData();
      }
    }, stryMutAct_9fa48("48") ? ["Stryker was here"] : (stryCov_9fa48("48"), []));
    const handleContactSubmit = async e => {
      if (stryMutAct_9fa48("49")) {
        {}
      } else {
        stryCov_9fa48("49");
        e.preventDefault();
        const studentId = localStorage.getItem(stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), 'studentId'));
        const loggedInUser = localStorage.getItem(stryMutAct_9fa48("51") ? "" : (stryCov_9fa48("51"), 'loggedInUser'));
        const accessToken = loggedInUser ? JSON.parse(loggedInUser).access_token : stryMutAct_9fa48("52") ? "Stryker was here!" : (stryCov_9fa48("52"), '');
        try {
          if (stryMutAct_9fa48("53")) {
            {}
          } else {
            stryCov_9fa48("53");
            const data = stryMutAct_9fa48("54") ? {} : (stryCov_9fa48("54"), {
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
            });
            await axios(stryMutAct_9fa48("55") ? {} : (stryCov_9fa48("55"), {
              method: stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), 'post'),
              url: stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), '/api/v1/student/add'),
              data,
              headers: stryMutAct_9fa48("58") ? {} : (stryCov_9fa48("58"), {
                "Content-Type": stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), 'application/json'),
                'Access-Control-Allow-Origin': stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), '*'),
                Authorization: stryMutAct_9fa48("61") ? `` : (stryCov_9fa48("61"), `Bearer ${accessToken}`)
              })
            }));
            notificationHandler(stryMutAct_9fa48("62") ? "" : (stryCov_9fa48("62"), 'Registration Successful'), stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), 'Success'));
          }
        } catch (error) {
          if (stryMutAct_9fa48("64")) {
            {}
          } else {
            stryCov_9fa48("64");
            notificationHandler(stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'Alumni is Already Registered'), stryMutAct_9fa48("66") ? "" : (stryCov_9fa48("66"), 'Failure'));
          }
        }
      }
    };
    return <div className="forms-container" data-testid="contact-form">
      <form onSubmit={handleContactSubmit}>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" id="inputEmail4" value={profileData.email} onChange={changeProfileData} aria-label="Email" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputContactNumber" className="form-label">Contact Number</label>
            <input name="contactNumber" type="number" className="form-control" id="inputContactNumber" value={profileData.contactNumber} onChange={changeProfileData} aria-label="Contact Number" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={profileData.address} onChange={changeProfileData} aria-label="Address" />
          </div>
        </div>

        <div className="education-form">
          <h2>Education Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputDegree" className="form-label">Degree</label>
            <input name="degree" type="text" className="form-control" id="inputDegree" value={profileData.degree} onChange={changeProfileData} aria-label="Degree" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCollege" className="form-label">College Name</label>
            <input name="collegeName" type="text" className="form-control" id="inputCollege" value={profileData.collegeName} onChange={changeProfileData} aria-label="College Name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputJoiningYear" className="form-label">Joining Year</label>
            <input name="joiningYear" type="text" className="form-control" id="inputJoiningYear" value={profileData.joiningYear} onChange={changeProfileData} aria-label="Joining Year" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassingYear" className="form-label">Passing year</label>
            <input name="passingYear" type="text" className="form-control" id="inputPassingYear" value={profileData.passingYear} onChange={changeProfileData} aria-label="Passing Year" />
          </div>
        </div>

        <div className="experience-form">
          <h2>Experience Form</h2>
          <div className="col-md-6">
            <label htmlFor="inputPosition" className="form-label">Position</label>
            <input name="position" type="text" className="form-control" id="inputPosition" value={profileData.position} onChange={changeProfileData} aria-label="Position" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStartDate" className="form-label">Start Date</label>
            <input name="joiningDate" type="date" className="form-control" id="inputStartDate" value={profileData.joiningDate} onChange={changeProfileData} aria-label="Start Date" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEndDate" className="form-label">End Date</label>
            <input name="leavingDate" type="date" className="form-control" id="inputEndDate" value={profileData.leavingDate} onChange={changeProfileData} aria-label="End Date" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCompany" className="form-label">Organization</label>
            <select id="inputCompany" name="organizationId" className="form-control" value={profileData.organizationId} onChange={changeProfileData} aria-label="Organization">
              {organizations.map(stryMutAct_9fa48("67") ? () => undefined : (stryCov_9fa48("67"), org => <option key={org.id} value={org.id}>
                  {org.name}
                </option>))}
            </select>
          </div>
        </div>

        <button type="submit">Submit Form</button>
      </form>
      <Notification notification={notification} type={notificationType} />
    </div>;
  }
};
export default Contact;