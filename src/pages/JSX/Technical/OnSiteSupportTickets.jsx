import React, { useState } from "react";
import "../../CSS/Technical/assignedDroneList.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";

export default function OnSiteSupportTickets() {
  const [viewOrder, setViewOrder] = useState(null);
  const navigate = useNavigate();

  const pendingOrders = [
    {
      id: 1,
      order_number: "ORD-001",
      customer_name: "Ravi Kumar",
      created_at: "2026-02-10",
      status: "PENDING",
      drone_model: "DJI Phantom",
      number_of_drone: 2,
      required_by_date: "2026-02-20",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 4,
          remarks: "Check quality",
        },
        {
          category: "Accessories",
          description: "Controller",
          quantity_ordered: 2,
          remarks: "",
        },
      ],
    },
    {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    }, {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    }, {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    }, {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
     {
      id: 2,
      order_number: "ORD-002",
      customer_name: "Arun",
      created_at: "2026-02-11",
      status: "IN-PROGRESS",
      drone_model: "Mavic Air",
      number_of_drone: 1,
      required_by_date: "2026-02-25",
      items: [
        {
          category: "Battery",
          description: "Battery Pack",
          quantity_ordered: 2,
          remarks: "Urgent",
        },
      ],
    },
  ];

  return (
    <div className="assigned-page">
      <div className="onsite-breadcrumb-wrapper">
  <div className="breadcrumb-left">
    <BreadCrumbs />
  </div>

      <h2 className="assigned-header">On-Site Requests</h2>

  <div className="breadcrumb-right"></div>
</div>

      {/* TABLE */}
      <div className="assigned-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Order ID</th>
              <th>Client</th>
              <th>Date</th>
              <th>Status</th>
              <th>RCA</th>
            </tr>
          </thead>

          <tbody>
            {pendingOrders.map((o, i) => (
              <tr key={o.id}>
                <td>{i + 1}</td>

                <td className="clickable-td" onClick={() => setViewOrder(o)}>
                  {o.order_number}
                </td>

                <td>{o.customer_name}</td>

                <td>{format(new Date(o.created_at), "dd-MM-yyyy")}</td>

                <td>
                  <span
                    className={`status-badge-assigned ${
                      o.status
                        ? `status-${o.status.toLowerCase().replace(/\s+/g, "-")}`
                        : "status-default"
                    }`}
                  >
                    {o.status.toLowerCase()}
                  </span>
                </td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate("/technical/rca-report")}
                  >
                    RCA Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW POPUP */}
      {viewOrder && (
        <div className="popup-bg">
          <div className="popup-box big-box">
            <h3 className="popup-title-centered">Order Delivery Details</h3>

            <div className="popup-input-row">
              <div className="input-group">
                <label>Customer Name</label>
                <input
                  className="top-input"
                  value={viewOrder.customer_name}
                  readOnly
                />
              </div>

              <div className="input-group">
                <label>Drone Model</label>
                <input
                  className="top-input"
                  value={viewOrder.drone_model}
                  readOnly
                />
              </div>

              <div className="input-group">
                <label>No. of Drones</label>
                <input
                  className="top-input"
                  value={viewOrder.number_of_drone}
                  readOnly
                />
              </div>

              <div className="input-group">
                <label>End Date</label>
                <input
                  className="top-input"
                  value={format(
                    new Date(viewOrder.required_by_date),
                    "dd-MM-yyyy",
                  )}
                  readOnly
                />
              </div>
            </div>

            {Object.values(
              viewOrder.items.reduce((acc, it) => {
                const key = it.category || "Other";
                if (!acc[key]) acc[key] = { title: key, items: [] };
                acc[key].items.push(it);
                return acc;
              }, {}),
            ).map((group, index) => (
              <div className="section" key={index}>
                <h4>{group.title}</h4>

                {group.items.map((it, idx) => (
                  <div className="form-row" key={idx}>
                    <div className="item-name">{it.description}</div>
                    <div className="item-qty">Qty: {it.quantity_ordered}</div>
                    <input
                      className="readOnly-input"
                      value={it.remarks || "Nil"}
                      readOnly
                    />
                  </div>
                ))}
              </div>
            ))}

            <div className="popup-actions">
              <button className="cancel-btn" onClick={() => setViewOrder(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
