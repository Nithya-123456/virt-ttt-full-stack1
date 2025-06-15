// main.ts
import { Movie } from './6.movie';

// Simulate an async fetch that returns movie details after 2 seconds
const fetchMovieDetails = (id: number): Promise<Movie> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movie = new Movie("touristfamily", "sasi", 2025);
      resolve(movie);
    }, 2000);
  });
};

// Main logic
const showMovieDetails = async (id: number): Promise<void> => {
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