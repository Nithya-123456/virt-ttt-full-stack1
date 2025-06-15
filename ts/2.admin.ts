//  Implement a user account system where each user has a private password field. 
// Allow setting and validating password only through methods. Extend this to an admin user that can reset passwords for other users.
// Base UserAccount class
class UserAccount {
  #password: string;

  constructor(public username: string) {
    this.#password = "";
  }

  setPassword(newPassword: string): void {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }
    this.#password = newPassword;
  }

  validatePassword(password: string): boolean {
    return this.#password === password;
  }

  resetPasswordByAdmin(newPassword: string): void {
    this.#password = newPassword;
  }
}

class AdminUser extends UserAccount {
  resetUserPassword(user: UserAccount, newPassword: string): void {
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


//output
//D:\TECH\virt-ttt-full-stack1\ts>node dist/2.admin.js
//false
//true
//Admin reset password for alice
//false
//true