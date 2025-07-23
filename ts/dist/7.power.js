"use strict";
const privilegedRoles = ["admin", "moderator", "superuser"];
const checkAccessAndPower = (user) => {
    const hasAccess = user.roles.some(role => privilegedRoles.includes(role));
    const powerScore = 2 ** user.roles.length;
    if (hasAccess) {
        console.log(`Access Granted. Power Score: ${powerScore}`);
    }
    else {
        console.log(`Access Denied. Power Score: ${powerScore}`);
    }
};
// Example users
const user12 = {
    name: "Anitha",
    roles: ["user", "editor", "admin"],
};
const user2 = {
    name: "Raja",
    roles: ["viewer", "contributor"],
};
// Test
checkAccessAndPower(user12); // Access Granted. Power Score: 8
checkAccessAndPower(user2); // Access Denied. Power Score: 4
