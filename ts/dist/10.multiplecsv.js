"use strict";
function groupStudentCourses(csvLines) {
    const entries = [];
    // Custom recursive flatten function to handle deeply nested arrays
    function flatten(input) {
        const result = [];
        for (const item of input) {
            if (Array.isArray(item)) {
                result.push(...flatten(item));
            }
            else if (item != null) {
                result.push(String(item));
            }
        }
        return result;
    }
    for (const line of csvLines) {
        try {
            const [rawName, ...rest] = line;
            const name = String(rawName).trim();
            const courses = flatten(rest);
            entries.push([name, courses]);
        }
        catch {
            // optional catch binding – ignore lines that cause errors
        }
    }
    return Object.fromEntries(entries); // ES2019+ required
}
const data = [
    [" Anitha ", "DS", ["ED"]],
    ["Raja", ["DAA", "Math"], "PE"],
    ["  Arun ", [["PYTHON"]]],
    ["Daniel"], // No courses
    ["swetha", ["CS", ["Math", "AI"]]],
    ["..no..", undefined] // Will be handled safely
];
console.log(groupStudentCourses(data));
//output
//--------------------------------------
