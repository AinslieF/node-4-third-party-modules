/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

// imports the horoscope package so we can use its functions
import horoscope from "horoscope";

// gets the month, day, and year the user typed in the terminal
let month = Number(process.argv[2]);
let day = Number(process.argv[3]);
let year = Number(process.argv[4]);

// uses the horoscope package to find the astrological sign
let astroSign = horoscope.getSign({ month, day });

// uses the horoscope package to find the zodiac sign
let zodiacSign = horoscope.getZodiac(year); 

// prints the result to the terminal
console.log(`Your astrological sign is ${astroSign} and your zodiac sign is ${zodiacSign}`);