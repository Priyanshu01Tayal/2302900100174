const axios = require("axios");

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getTopNotifications() {
  try {

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcml5YW5zaHV0YXlhbDM1QGdtYWlsLmNvbSIsImV4cCI6MTc4MDQ2Njc4OCwiaWF0IjoxNzgwNDY1ODg4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYWNkNmMyODYtODEwOC00YzI0LWE3MWQtYmU1OGJjMGE1NmVmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJpeWFuc2h1IHRheWFsIiwic3ViIjoiNTQyNmQwM2YtM2IwOC00ZmIwLWFjMzQtZWFmOGM2M2ZkMWUwIn0sImVtYWlsIjoicHJpeWFuc2h1dGF5YWwzNUBnbWFpbC5jb20iLCJuYW1lIjoicHJpeWFuc2h1IHRheWFsIiwicm9sbE5vIjoiMjMwMjkwMDEwMDE3NCIsImFjY2Vzc0NvZGUiOiJzZFdXZ2MiLCJjbGllbnRJRCI6IjU0MjZkMDNmLTNiMDgtNGZiMC1hYzM0LWVhZjhjNjNmZDFlMCIsImNsaWVudFNlY3JldCI6IkZzREhld3JRVGZKWnZjekUifQ.0tOf6pwuuG8-pwt6D1ngUBHXeXRfr_wBLP8oZZR6qfw"
        }
      }
    );

    const notifications = response.data.notifications;

    notifications.sort((a, b) => {

      if (
        priority[b.Type] !== priority[a.Type]
      ) {
        return (
          priority[b.Type] -
          priority[a.Type]
        );
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    });

    const top10 = notifications.slice(0, 10);

    console.log(top10);

  } catch (error) {
    console.log(error.response?.status);
    console.log(error.response?.data);
  }
}

getTopNotifications();