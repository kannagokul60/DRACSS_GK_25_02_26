import React, { useState } from "react";
import "../../CSS/Technical/RCAreport.css";
import BreadCrumbs from "../BreadCrumbs";


export default function RCAReportPage() {
  const tabs = [
    "Basic Details",
    "Issue Report",
    "Collection of Evidence",
    "Physical Findings",
    "Environmental Condition",
    "RCA",
    "Corrective Actions",
    "Conclusions",
  ];

  const [activeTab, setActiveTab] = useState(0);

  const goNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const goBack = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = () => {
    alert("RCA Submitted (Dummy)");
  };

  return (
    <div className="rca-page">
          
<div className="rca-breadcrumb-wrapper">
  <div className="breadcrumb-left">
    <BreadCrumbs />
  </div>

  <h2 className="rca-header">RCA Report</h2>

  <div className="breadcrumb-right"></div>
</div>
      {/* TAB BUTTONS */}
      <div className="rca-tab-wrapper">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`rca-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT CARD */}
      <div
        className={`rca-card ${activeTab === 3 || activeTab === 4 ? "no-padding" : ""}`}
      >
        {activeTab === 0 && (
          <div className="rca-table-layout">
            {/* LEFT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Date</span>
                <span>:</span>
                <input type="date" placeholder="Enter the date" />
              </div>

              <div className="rca-row">
                <span>Serial Number</span>
                <span>:</span>
                <input type="text" placeholder="Enter serial number" />
              </div>

              <div className="rca-row">
                <span>Location</span>
                <span>:</span>
                <input type="text" placeholder="Enter location" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Model Name</span>
                <span>:</span>
                <input type="text" placeholder="Enter model name" />
              </div>

              <div className="rca-row">
                <span>Incident Date</span>
                <span>:</span>
                <input type="date" placeholder="Enter incident date" />
              </div>

              <div className="rca-row">
                <span>Pilot/Operator Name</span>
                <span>:</span>
                <input type="text" placeholder="Enter pilot/operator name" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="rca-table-layout">
            {/* LEFT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Issue Reported By</span>
                <span>:</span>
                <input type="text" placeholder="Enter issue reported by" />
              </div>

              <div className="rca-row">
                <span>Describe the Issue</span>
                <span>:</span>
                <textarea
                  className="rca-textarea"
                  placeholder="Describe issue here"
                ></textarea>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Impact</span>
                <span>:</span>

                <div className="rca-checkbox-group">
                  <label>
                    <input type="checkbox" /> Minor
                  </label>

                  <label>
                    <input type="checkbox" /> Moderate
                  </label>

                  <label>
                    <input type="checkbox" /> Critical
                  </label>

                  <label>
                    <input type="checkbox" /> Safety Concern
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="rca-table-layout">
            {/* LEFT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Flight Log Data</span>
                <span>:</span>
                <input type="file" placeholder="Upload flight log data" />
              </div>

              <div className="rca-row">
                <span>Remarks</span>
                <span>:</span>
                <textarea
                  className="rca-textarea"
                  placeholder="Describe issue here"
                ></textarea>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>ScreenShot of log/GCS/UAS</span>
                <span>:</span>
                <input type="file" placeholder="Upload screenshot" />
              </div>

              <div className="rca-row">
                <span>Video</span>
                <span>:</span>
                <input type="file" placeholder="Upload video" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="rca-table-wrapper">
            <table className="rca-main-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Component</th>
                  <th>Description</th>
                  <th>Accumulated hours </th>
                </tr>
              </thead>

              <tbody>
                {/* DUMMY ROW 1 */}
                <tr>
                  <td>1</td>
                  <td>22.06.26</td>
                  <td>Airframe</td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>

                {/* DUMMY ROW 2 */}
                <tr>
                  <td>2</td>
                  <td>22.06.26</td>
                  <td>Propulsion system</td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>22.06.26</td>
                  <td>Battery</td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>22.06.26</td>
                  <td>Payload</td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>22.06.26</td>
                  <td>Propeller</td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>22.06.26</td>
                  <td>Sensor/Electronics </td>
                  <td>
                    <input type="text" placeholder="Enter description" />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter accumulated hours"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 4 && (
          <div className="rca-table-container">
            {/* TABLE */}
            <div className="rca-table-wrapper">
              <table className="rca-main-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Visibility (meters)</th>
                    <th>WindSpeed (m/sec)</th>
                    <th>Condition (Day/Night)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>22.06.26</td>

                    <td>
                      <input type="text" placeholder="Enter temperature" />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="Enter visibility in meters"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="Enter wind speed in m/sec"
                      />
                    </td>

                    <td>
                      <div className="condition-radio">
                        <label>
                          <input type="radio" name="condition1" /> Day
                        </label>

                        <label>
                          <input type="radio" name="condition1" /> Night
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ATTACHED BOTTOM SECTION */}
            <div className="rca-bottom-section">
              <div className="rca-bottom-right">
                <div className="rca-row">
                  <span>Report made By</span>
                  <span>:</span>
                  <input type="text" placeholder="Enter name" />
                </div>

                <div className="rca-row">
                  <span>Name of OEM Representative</span>
                  <span>:</span>
                  <input
                    type="text"
                    placeholder="Enter OEM representative name"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="rca-table-layout vertical-layout">
            {/* TOP - POSSIBLE CAUSES IDENTIFICATION */}
            <div className="rca-row full-width">
              <span>Possible Causes Identification</span>
              <span>:</span>

              <div className="rca-checkbox-group vertical">
                <label>
                  <input type="checkbox" /> Mechanical (e.g., motor failure,
                  propeller damage)
                </label>

                <label>
                  <input type="checkbox" /> Electrical (e.g., battery issue,
                  wiring failure)
                </label>

                <label>
                  <input type="checkbox" /> Software (e.g., firmware bug, sensor
                  calibration)
                </label>

                <label>
                  <input type="checkbox" /> Environmental (e.g., strong winds,
                  obstacles)
                </label>

                <label>
                  <input type="checkbox" /> Human Error (e.g., pilot mistake,
                  maintenance issue)
                </label>
              </div>
            </div>

            {/* BOTTOM - REMARKS */}
            <div className="rca-row full-width">
              <span>Root Cause Identification</span>
              <span>:</span>

              <textarea
                className="rca-textarea"
                placeholder="Enter remarks here"
              ></textarea>
            </div>
          </div>
        )}
        {activeTab === 6 && (
          <div className="rca-table-layout">
            {/* LEFT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Immediate Actions Taken</span>
                <span>:</span>
                <input
                  type="text"
                  placeholder="Enter immediate actions taken"
                />
              </div>

              <div className="rca-row">
                <span>Temporary Fixes</span>
                <span>:</span>
                <input type="text" placeholder="Enter temporary fixes" />
              </div>

              <div className="rca-row">
                <span>Description of Test Flight</span>
                <span>:</span>
                <textarea
                  className="rca-textarea"
                  placeholder="Describe issue here"
                ></textarea>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rca-column">
              <div className="rca-row">
                <span>Reviewed By</span>
                <span>:</span>
                <input type="text" placeholder="Enter reviewer name" />
              </div>
              <div className="rca-row">
                <span>Test Flights Conducted</span>
                <span>:</span>

                <div className="rca-radio-group">
                  <label>
                    <input type="radio" name="testFlight" value="yes" /> Yes
                  </label>

                  <label>
                    <input type="radio" name="testFlight" value="no" /> No
                  </label>
                </div>
              </div>

              <div className="rca-row">
                <span>Results</span>
                <span>:</span>
                <textarea
                  className="rca-textarea"
                  placeholder="Describe results here"
                ></textarea>
              </div>
              <div className="rca-row">
                <span>Additional Recommendtions</span>
                <span>:</span>
                <textarea
                  className="rca-textarea"
                  placeholder="Describe issue here"
                ></textarea>
              </div>
            </div>
          </div>
        )}
        {activeTab === 7 && (
          <div className="rca-table-layout vertical-layout">
            {/* ROW 1 */}
            <div className="rca-row full-width">
              <span>No Fault in FC and barometer of drone</span>
              <span>:</span>
              <textarea
                className="rca-textarea"
                placeholder="Describe issue here"
              ></textarea>
            </div>

            {/* ROW 2 */}
            <div className="rca-row full-width">
              <span>No Software Issue or app killing at the time of crash</span>
              <span>:</span>
              <textarea
                className="rca-textarea"
                placeholder="Describe results here"
              ></textarea>
            </div>

            {/* ROW 3 */}
            <div className="rca-row full-width">
              <span>
                Drone has flown after crash by replacing propellers which have
                no issues
              </span>
              <span>:</span>
              <textarea
                className="rca-textarea"
                placeholder="Describe issue here"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="rca-navigation">
        {/* BACK BUTTON */}
        {activeTab > 0 && (
          <button className="cancel-rca-btn" onClick={goBack}>
            Back
          </button>
        )}

        {/* NEXT / SUBMIT */}
        {activeTab < tabs.length - 1 ? (
          <button className="view-rca-btn" onClick={goNext}>
            Next
          </button>
        ) : (
          <button className="submit-rca-btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
