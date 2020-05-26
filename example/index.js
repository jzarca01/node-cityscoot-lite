const Cityscoot = require("../dist/"); // require('node-cityscoot-lite');
const city = new Cityscoot();

async function init() {
  const scooters = await city.getScooters(4);
  console.log(scooters);
  const scooter = await city.getScooter(4, 5193);
  console.log(scooter);
}

init();
