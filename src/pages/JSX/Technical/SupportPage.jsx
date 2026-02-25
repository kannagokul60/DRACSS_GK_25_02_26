import React, { useEffect, useState } from "react";
import "../../CSS/BDteam/bdSupportPage.css";
import BreadCrumbs from "../BreadCrumbs";
import config from "../../../config";
import { useNavigate } from "react-router-dom";

export default function SupportPage() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);


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
          onClick={() => navigate("/technical/on-site-support-tickets")}
        >
          <h3>On-Site Support</h3>
          <div className="bd-count-wrapper">
            <span className="open-count">Open: </span>
            <span className="closed-count">Closed:</span>
          </div>
        </div>

        {/* RETURN TO SERVICE CARD */}
        <div
          className="bd-card return-card"
          onClick={() => navigate("/technical/return-to-service")}
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
