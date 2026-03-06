/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */
// import the moment node module
import moment from "moment";

 // get user input
let year = Number(process.argv[2]);

// determines if the input year is a leap year or not

if (moment([year]).isLeapYear() === true) {
    console.log(`${year} is a leap year! Phil get's a birthday!`)
} else {
    console.log(`${year} is not a leap year. No birthday for Phil.`);
}