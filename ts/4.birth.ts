type Person = {
  name12: string;
  birthdate: string; // "YYYY-MM-DD"
};

const people: Person[] = [
  { name12: "ARUN", birthdate: "1990-06-1" },
  { name12: "ANITHA", birthdate: "1985-06-15" },
  { name12: "RANI", birthdate: "1992-12-01" },
  { name12: "RAJA",birthdate: "2000-01-01" },
];

// Get today's month and day
const today = new Date();
const todayMonth = today.getMonth(); // 0-based month
const todayDate = today.getDate();

const birthdayMessages = people
  .filter(person => {
    const birthDateObj = new Date(person.birthdate);
    return (
      birthDateObj.getMonth() === todayMonth &&
      birthDateObj.getDate() === todayDate
    );
  })
  .map(person => `Today is ${person.name12}'s birthday!`);

if (birthdayMessages.length === 0) {
  console.log("No birthdays today.");
} else {
  console.log(birthdayMessages.join("\n"));
}
//Today is ANITHA's birthday!