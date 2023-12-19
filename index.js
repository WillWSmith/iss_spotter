const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require(`./iss`);

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log(`It worked! Returned IP:`, ip);

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log(`Error:`, error);
      return;
    }

    console.log(`Location:`, coords);

    fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
      if (error) {
        console.log(`Error fetching ISS flyover times:`, error);
        return;
      }

      console.log(`ISS Flyover Times:`, flyoverTimes);
    });
  });
});
