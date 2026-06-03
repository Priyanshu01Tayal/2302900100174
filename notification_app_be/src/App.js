import React, { useState } from "react";
import {
BrowserRouter,
Routes,
Route,
Link
} from "react-router-dom";

import {
Button,
Typography
} from "@mui/material";

import AllNotifications from "./AllNotifications";
import PriorityNotifications from "./PriorityNotifications";

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
Message: "Mid Sem Result Published",
Timestamp: "2026-06-03",
read: false
},
{
ID: "4",
Type: "Event",
Message: "Tech Fest Registration Open",
Timestamp: "2026-06-01",
read: false
}
]);

const [filter, setFilter] = useState("All");

const filteredNotifications =
filter === "All"
? notifications
: notifications.filter(
(item) => item.Type === filter
);

const markRead = (id) => {
setNotifications(
notifications.map((item) =>
item.ID === id
? { ...item, read: true }
: item
)
);
};

return ( <BrowserRouter>
<div
style={{
padding: "20px",
background: "#f4f6f9",
minHeight: "100vh"
}}
>
<Typography
variant="h3"
align="center"
sx={{
color: "#1e3a8a",
fontWeight: "bold",
mb: 4
}}
>
Notification Dashboard </Typography>

```
    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        marginBottom: "25px"
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          color="primary"
        >
          All Notifications
        </Button>
      </Link>

      <Link
        to="/priority"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          color="success"
        >
          Priority Notifications
        </Button>
      </Link>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
      }}
    >
      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          padding: "10px",
          borderRadius: "8px",
          minWidth: "200px"
        }}
      >
        <option value="All">All</option>
        <option value="Placement">
          Placement
        </option>
        <option value="Result">
          Result
        </option>
        <option value="Event">
          Event
        </option>
      </select>
    </div>

    <Routes>
      <Route
        path="/"
        element={
          <AllNotifications
            notifications={
              filteredNotifications
            }
            markRead={markRead}
          />
        }
      />

      <Route
        path="/priority"
        element={
          <PriorityNotifications
            notifications={
              filteredNotifications
            }
            markRead={markRead}
          />
        }
      />
    </Routes>
  </div>
</BrowserRouter>


);
}

export default App;
