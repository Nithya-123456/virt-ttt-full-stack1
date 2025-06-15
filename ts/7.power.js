var privilegedRoles = ["admin", "moderator", "superuser"];
var checkAccessAndPower = function (user) {
    var hasAccess = user.roles.some(function (role) { return privilegedRoles.includes(role); });
    var powerScore = Math.pow(2, user.roles.length);
    if (hasAccess) {
        console.log("Access Granted. Power Score: ".concat(powerScore));
    }
    else {
        console.log("Access Denied. Power Score: ".concat(powerScore));
    }
};
// Example users
var user12 = {
    name: "Alice",
    roles: ["user", "editor", "admin"],
};
var user2 = {
    name: "Bob",
    roles: ["viewer", "contributor"],
};
// Test
checkAccessAndPower(user12); // Access Granted. Power Score: 8
checkAccessAndPower(user2); // Access Denied. Power Score: 4
