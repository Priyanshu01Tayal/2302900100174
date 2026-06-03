import React from "react";
import { Button } from "@mui/material";

function AllNotifications({ notifications, markRead }) {
return ( <div>
<h2 style={{ textAlign: "center" }}>
All Notifications </h2>

```
  {notifications.map((item) => (
    <div
      key={item.ID}
      style={{
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "800px",
        margin: "15px auto"
      }}
    >
      <h3>{item.Type}</h3>

      <p>{item.Message}</p>

      <p>{item.Timestamp}</p>

      <p>
        Status:
        <span
          style={{
            background: item.read
              ? "#22c55e"
              : "#ef4444",
            color: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            marginLeft: "10px"
          }}
        >
          {item.read
            ? "Read"
            : "Unread"}
        </span>
      </p>

      <Button
        variant="contained"
        color="success"
        onClick={() => markRead(item.ID)}
      >
        Mark Read
      </Button>
    </div>
  ))}
</div>


);
}

export default AllNotifications;
