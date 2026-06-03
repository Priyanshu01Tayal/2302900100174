import React, { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    {
      ID: "1",
      Type: "Placement",
      Message: "Amazon Hiring",
      Timestamp: "2026-06-03",
      read: false
    },
    {
      ID: "2",
      Type: "Placement",
      Message: "Microsoft Hiring",
      Timestamp: "2026-06-02",
      read: false
    },
    {
      ID: "3",
      Type: "Result",
      Message: "Mid Sem Result",
      Timestamp: "2026-06-03",
      read: false
    },
    {
      ID: "4",
      Type: "Event",
      Message: "Tech Fest 2026",
      Timestamp: "2026-06-01",
      read: false
    }
  ]);

  const [filter, setFilter] = useState("All");
  const [showPriority, setShowPriority] = useState(false);

  const priorityOrder = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  const priorityNotifications = [...notifications]
    .sort(
      (a, b) =>
        priorityOrder[b.Type] -
        priorityOrder[a.Type]
    )
    .slice(0, 10);

  const displayData = showPriority
    ? priorityNotifications
    : filtered;

  const markRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.ID === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification Dashboard</h1>

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <br />
      <br />

      <button
        onClick={() =>
          setShowPriority(!showPriority)
        }
      >
        {showPriority
          ? "All Notifications"
          : "Priority Notifications"}
      </button>

      <br />
      <br />

      {displayData.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{item.Type}</h3>

          <p>{item.Message}</p>

          <p>{item.Timestamp}</p>

          <p>
            Status:
            {item.read
              ? " Read"
              : " Unread"}
          </p>

          <button
            onClick={() =>
              markRead(item.ID)
            }
          >
            Mark Read
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;