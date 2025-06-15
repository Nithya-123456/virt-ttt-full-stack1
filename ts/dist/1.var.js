"use strict";
//You are creating a user profile system for a web app. A user's name is stored in a variable. You define the profile using an object, and inside a block, you modify a role field. After the block, you want to confirm the original name is still used and the updated role is reflected.
//Write a program to implement this logic and explain how the role update works while the name remains unchanged.
let userName = "Arun";
let profile = {
    name: userName,
    roles: ["viewer"] // Now an array of roles
};
{
    // Block scope: Add more roles
    profile.roles.push("editor");
    profile.roles.push("admin");
}
console.log("User Name:", profile.name); // "Arun"
console.log("User Roles:", profile.roles); // ["viewer", "editor", "admin"]
