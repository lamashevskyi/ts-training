import { RandomHotel } from "./randomHotel";

const randomHotel = new RandomHotel('uk');
async function init() {
    await randomHotel.initialize();
    const sample = randomHotel.getRandomHotelName();
    console.log(sample);
}

init();
