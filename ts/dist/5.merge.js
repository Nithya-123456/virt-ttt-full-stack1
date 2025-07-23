"use strict";
const user21 = { name3: "Anitha", age: 30, city: "Chennai" };
const user22 = { age: 31, profession: "Developer", country: "India" };
// Merge user1 and user2 (user2 overrides user1 where keys conflict)
const mergedUser = { ...user21, ...user22 };
// Destructure name and age, and collect the rest
const { name3, age, ...otherDetails } = mergedUser;
// Print results
console.log(" Name:", name3);
console.log(" Age:", age);
console.log(" Other Details:", otherDetails);
