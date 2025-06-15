var people = [
    { name12: "ARUN", birthdate: "1990-06-1" },
    { name12: "ANITHA", birthdate: "1985-06-15" },
    { name12: "RANI", birthdate: "1992-12-01" },
    { name12: "RAJA", birthdate: "2000-01-01" },
];
// Get today's month and day
var today = new Date();
var todayMonth = today.getMonth(); // 0-based month
var todayDate = today.getDate();
var birthdayMessages = people
    .filter(function (person) {
    var birthDateObj = new Date(person.birthdate);
    return (birthDateObj.getMonth() === todayMonth &&
        birthDateObj.getDate() === todayDate);
})
    .map(function (person) { return "Today is ".concat(person.name12, "'s birthday!"); });
if (birthdayMessages.length === 0) {
    console.log("No birthdays today.");
}
else {
    console.log(birthdayMessages.join("\n"));
}
