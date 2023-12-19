const { nextISSTimesForMyLocation } = require(`./iss_promised`);
const { printPassTimes } = require(`./iss`);

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("An error has occured: ", error.message);
  });
