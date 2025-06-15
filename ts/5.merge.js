var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var user21 = { name3: "Anitha", age: 30, city: "Chennai" };
var user22 = { age: 31, profession: "Developer", country: "India" };
// Merge user1 and user2 (user2 overrides user1 where keys conflict)
var mergedUser = __assign(__assign({}, user21), user22);
// Destructure name and age, and collect the rest
var name3 = mergedUser.name3, age = mergedUser.age, otherDetails = __rest(mergedUser, ["name3", "age"]);
// Print results
console.log(" Name:", name3);
console.log(" Age:", age);
console.log(" Other Details:", otherDetails);
