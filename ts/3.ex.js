var students = [
    { name: "Arun", grades: [80, 90, 85] },
    { name: "shiva" }, // no grades
    { name: "vino", grades: [70, 75] },
    { name: "anitha", grades: [] }, // empty grades
];
// Function to calculate average of numbers in array
var average = function (nums) {
    return nums.reduce(function (sum, val) { return sum + val; }, 0) / nums.length;
};
// Process students array
var messages = students.map(function (student) {
    var grades = student.grades;
    // Check if grades exist and are not empty using optional chaining and length check
    if (grades === null || grades === void 0 ? void 0 : grades.length) {
        var avg = average(grades);
        return "Student ".concat(student.name, " has an average grade of ").concat(avg.toFixed(2));
    }
    else {
        return "Student ".concat(student.name, " has no grades.");
    }
});
console.log(messages.join("\n"));
