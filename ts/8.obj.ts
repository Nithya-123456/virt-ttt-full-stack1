// Simulated data
const userScores: Record<string, number> = {
  Anitha: 95,
  arun: 7,
  kavya: 1300,
  david: 42,
  "eve-long-name": 300
};

// Simulated fetch function
const fetchScores = async (): Promise<Record<string, number>> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(userScores), 2000);
  });
};

// Leaderboard function
const displayLeaderboard = async (): Promise<void> => {
  const scores = await fetchScores();

  console.log(" Leaderboard:");
  console.log("-----------------------------");

  Object.entries(scores).forEach(([username, score]) => {
    const paddedName = username.padEnd(15, ' ');
    const paddedScore = score.toString().padStart(5, '0');
    console.log(`${paddedName} | ${paddedScore}`);
  });
};

// Run it
displayLeaderboard();

//output


//D:\TECH\virt-ttt-full-stack1\ts>tsc

//D:\TECH\virt-ttt-full-stack1\ts>node dist/8.obj.js
// Leaderboard:
//-----------------------------
//Anitha          | 00095
//arun            | 00007
//kavya           | 01300
//david           | 00042
//eve-long-name   | 00300

