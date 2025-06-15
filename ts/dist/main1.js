"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const _6_movie_1 = require("./6.movie");
// Simulate an async fetch that returns movie details after 2 seconds
const fetchMovieDetails = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const movie = new _6_movie_1.Movie("touristfamily", "sasi", 2025);
            resolve(movie);
        }, 2000);
    });
};
// Main logic
const showMovieDetails = async (id) => {
    const movie = await fetchMovieDetails(id);
    // Destructure specific fields and use rest operator
    const { title, ...restDetails } = movie;
    // Print using template literals
    console.log(` Movie: ${title}`);
    console.log(`Other details:`, restDetails);
};
// Run
showMovieDetails(1);
//D:\TECH\virt-ttt-full-stack1\ts>node dist/main.js
//🎬 Movie: tourist family
//📋 Other details: { director: 'sasi', year: 2025 
