type User = {
  name: string;
  roles: string[];
};

const privilegedRoles = ["admin", "moderator", "superuser"];

const checkAccessAndPower = (user: User): void => {
  const hasAccess = user.roles.some(role => privilegedRoles.includes(role));
  const powerScore = 2 ** user.roles.length;

  if (hasAccess) {
    console.log(`Access Granted. Power Score: ${powerScore}`);
  } else {
    console.log(`Access Denied. Power Score: ${powerScore}`);
  }
};

// Example users
const user12: User = {
  name: "Anitha",
  roles: ["user", "editor", "admin"],
};

const user2: User = {
  name: "Raja",
  roles: ["viewer", "contributor"],
};

// Test
checkAccessAndPower(user12); // Access Granted. Power Score: 8
checkAccessAndPower(user2); // Access Denied. Power Score: 4
