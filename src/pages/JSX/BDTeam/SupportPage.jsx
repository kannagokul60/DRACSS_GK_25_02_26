import React, { useEffect, useState } from "react";
import "../../CSS/BDteam/bdSupportPage.css";
import BreadCrumbs from "../BreadCrumbs";
import config from "../../../config";
import { useNavigate } from "react-router-dom";

export default function SupportPage() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  // Fetch tickets to calculate Open / Closed counts
  useEffect(() => {
    fetch(`${config.baseURL}/support/threads/`)
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error(err));
  }, []);

  const openCount = tickets.filter((t) => t.status === "OPEN").length;
  const closedCount = tickets.filter((t) => t.status === "CLOSED").length;

  return (
    <div className="bd-online-container">
      <div className="bd-support-breadcrumb-wrapper">
        <BreadCrumbs />
      </div>

      <h2 className="bd-title">Support Page</h2>

      <div className="bd-online-list">
        {/* ONLINE SUPPORT CARD */}
        <div
          className="bd-card online-card"
          onClick={() => navigate("/bd/online-support")}
        >
          <h3>Online Support</h3>
          <div className="bd-count-wrapper">
            <span className="open-count">Open: {openCount}</span>
            <span className="closed-count">Closed: {closedCount}</span>
          </div>
        </div>

        {/* ONSITE SUPPORT CARD */}
        <div
          className="bd-card onsite-card"
          onClick={() => navigate("/bd/support/onsite")}
        >
          <h3>Onsite Support</h3>
            <div className="bd-count-wrapper">
            <span className="open-count">Open: </span>
            <span className="closed-count">Closed: </span>
          </div>
        </div>

        {/* RETURN TO SERVICE CARD */}
        <div
          className="bd-card return-card"
          onClick={() => navigate("/bd/support/return")}
        >
          <h3>Return To Service</h3>
            <div className="bd-count-wrapper">
            <span className="open-count">Open: </span>
            <span className="closed-count">Closed: </span>
          </div>
        </div>
      </div>
    </div>
  );
}
