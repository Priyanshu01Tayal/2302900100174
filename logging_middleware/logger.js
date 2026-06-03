const axios = require("axios");

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcml5YW5zaHV0YXlhbDM1QGdtYWlsLmNvbSIsImV4cCI6MTc4MDQ2MzUwOSwiaWF0IjoxNzgwNDYyNjA5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGE0ZmZmYmYtYWMzNy00MGZhLTkxNjUtZDM0NTMyNWU0Njg5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJpeWFuc2h1IHRheWFsIiwic3ViIjoiNTQyNmQwM2YtM2IwOC00ZmIwLWFjMzQtZWFmOGM2M2ZkMWUwIn0sImVtYWlsIjoicHJpeWFuc2h1dGF5YWwzNUBnbWFpbC5jb20iLCJuYW1lIjoicHJpeWFuc2h1IHRheWFsIiwicm9sbE5vIjoiMjMwMjkwMDEwMDE3NCIsImFjY2Vzc0NvZGUiOiJzZFdXZ2MiLCJjbGllbnRJRCI6IjU0MjZkMDNmLTNiMDgtNGZiMC1hYzM0LWVhZjhjNjNmZDFlMCIsImNsaWVudFNlY3JldCI6IkZzREhld3JRVGZKWnZjekUifQ.Pqb17M5iBKbzzETyKbWGCdz-hx-SYn94ZvHOe_Cyq9E"
        }
      }
    );

    console.log("SUCCESS");
    console.log(response.data);

  } catch (error) {

    console.log("STATUS:");
    console.log(error.response?.status);

    console.log("DATA:");
    console.log(error.response?.data);

    console.log("MESSAGE:");
    console.log(error.message);
  }
}

module.exports = Log;