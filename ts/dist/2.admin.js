"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserAccount_password;
//  Implement a user account system where each user has a private password field. 
// Allow setting and validating password only through methods. Extend this to an admin user that can reset passwords for other users.
// Base UserAccount class
class UserAccount {
    constructor(username) {
        this.username = username;
        _UserAccount_password.set(this, void 0);
        __classPrivateFieldSet(this, _UserAccount_password, "", "f");
    }
    setPassword(newPassword) {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters.");
        }
        __classPrivateFieldSet(this, _UserAccount_password, newPassword, "f");
    }
    validatePassword(password) {
        return __classPrivateFieldGet(this, _UserAccount_password, "f") === password;
    }
    resetPasswordByAdmin(newPassword) {
        __classPrivateFieldSet(this, _UserAccount_password, newPassword, "f");
    }
}
_UserAccount_password = new WeakMap();
class AdminUser extends UserAccount {
    resetUserPassword(user, newPassword) {
        user.resetPasswordByAdmin(newPassword);
        console.log(`Admin reset password for ${user.username}`);
    }
}
// Usage example
const user1 = new UserAccount("alice");
user1.setPassword("secret123");
console.log(user1.validatePassword("wrong")); // false
console.log(user1.validatePassword("secret123")); // true
const admin = new AdminUser("admin");
admin.setPassword("adminpass");
admin.resetUserPassword(user1, "newpass456");
console.log(user1.validatePassword("secret123")); // false
console.log(user1.validatePassword("newpass456")); // true
