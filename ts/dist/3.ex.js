"use strict";
const students = [
    { name: "Arun", grades: [80, 90, 85] },
    { name: "shiva" }, // no grades
    { name: "vino", grades: [70, 75] },
    { name: "anitha", grades: [] }, // empty grades
];
// Function to calculate average of numbers in array
const average = (nums) => nums.reduce((sum, val) => sum + val, 0) / nums.length;
// Process students array
const messages = students.map(student => {
    const grades = student.grades;
    // Check if grades exist and are not empty using optional chaining and length check
    if (grades?.length) {
        const avg = average(grades);
        return `Student ${student.name} has an average grade of ${avg.toFixed(2)}`;
    }
    else {
        return `Student ${student.name} has no grades.`;
    }
});
console.log(messages.join("\n"));
//Student Arun has an average grade of 85.00
//Student shiva has no grades.
//Student vino has an average grade of 72.50
//Student anitha has no grades.
