"use strict";
// Simulated async generator for user data
async function* userStream() {
    const users = [
        { email: "anitha@gmail.com" },
        { email: "raja@test.edu.in" },
        { email: "rani@example.com" },
        { email: "swetha@gmail.com" }
    ];
    for (const user of users) {
        // simulate delay
        await new Promise(res => setTimeout(res, 500));
        yield user;
    }
}
// Regex to extract domain with named group 'domain'
const emailDomainRegex = /@(?<domain>[\w.-]+\.[a-z]{2,})$/i;
async function processUserEmails() {
    const domains = new Set();
    const stream = userStream();
    try {
        for await (const user of stream) {
            const match = user.email.match(emailDomainRegex);
            if (match && match.groups?.domain) {
                domains.add(match.groups.domain.toLowerCase());
            }
        }
    }
    catch (err) {
        console.error("Error processing stream:", err);
    }
    finally {
        console.log("Stream completed");
        console.log("Unique domains found:", [...domains]);
    }
}
// Run the processor
processUserEmails();
//output
//tsc
//D:\TECH\virt-ttt-full-stack1\ts>node dist/9.ex.js
//Stream completed
//Unique domains found: [ 'gmail.com', 'test.edu.in', 'example.com' ]
