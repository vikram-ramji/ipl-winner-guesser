const main = document.querySelector("main");
const winner = document.querySelector(".winner");
const guessBtn = document.querySelector("button");

const teams = [
  {
    name: "Chennai Super Kings",
    logo: "./assets/CSK.avif",
    bgColor: "#FACB07",
    foregroundColor: "#1F3B86",
    btnColor: "#292E3B",
    captain: "MS Dhoni",
    trophies: 5,
  },
  {
    name: "Delhi Capitals",
    logo: "./assets/DC.avif",
    bgColor: "#B9251C",
    foregroundColor: "#FFFFFF",
    btnColor: "#05184C",
    captain: "Axar Patel",
    trophies: 0,
  },
  {
    name: "Gujarat Titans",
    logo: "./assets/GT.avif",
    bgColor: "#77C7F2",
    foregroundColor: "#FFFFFF",
    btnColor: "#0D1A30",
    captain: "Shubman Gill",
    trophies: 1,
  },
  {
    name: "Kolkata Knight Riders",
    logo: "./assets/KKR.avif",
    bgColor: "#ECC542",
    foregroundColor: "#3A225D",
    btnColor: "#28204A",
    captain: "Ajinkya Rahane",
    trophies: 3,
  },
  {
    name: "Lucknow Super Giants",
    logo: "./assets/LSG.avif",
    bgColor: "#f2f2f2ff",
    foregroundColor: "#28529F",
    btnColor: "#28529F",
    captain: "Rishabh Pant",
    trophies: 0,
  },
  {
    name: "Mumbai Indians",
    logo: "./assets/MI.avif",
    bgColor: "#2D6AB1",
    foregroundColor: "#F18701",
    btnColor: "#133266",
    captain: "Hardik Pandya",
    trophies: 5,
  },
  {
    name: "Punjab Kings",
    logo: "./assets/PBKS.avif",
    bgColor: "#D71921",
    foregroundColor: "#FFFFFF",
    btnColor: "#071026",
    captain: "Shreyas Iyer",
    trophies: 0,
  },
  {
    name: "Rajasthan Royals",
    logo: "./assets/RR.avif",
    bgColor: "#EB83B5",
    foregroundColor: "#2B429C",
    btnColor: "#2B429C",
    captain: "Ravindra Jadeja",
    trophies: 1,
  },
  {
    name: "Royal Challengers Bangalore",
    logo: "./assets/RCB.avif",
    bgColor: "#2B2A29",
    foregroundColor: "#D5BF6C",
    btnColor: "#3F191C",
    captain: "Rajat Patidar",
    trophies: 1,
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "./assets/SRH.avif",
    bgColor: "#F26523",
    foregroundColor: "#FFFFFF",
    btnColor: "#702324",
    captain: "Pat Cummins",
    trophies: 1,
  },
];

function render() {
  const randomIdx = Math.floor(Math.random() * teams.length);
  const team = teams[randomIdx];

  winner.innerHTML = "";

  const logo = document.createElement("img");
  logo.src = team.logo;
  logo.alt = team.name;

  const details = document.createElement("div");
  details.classList.add("details");

  const captain = document.createElement("p");
  captain.textContent = `Captain: ${team.captain}`;

  const trophies = document.createElement("p");
  trophies.textContent = `Trophies Won: ${team.trophies}`;

  details.appendChild(captain);
  details.appendChild(trophies);

  winner.appendChild(logo);
  winner.appendChild(details);

  main.style.backgroundColor = team.bgColor;
  main.style.color = team.foregroundColor;
  main.style.justifyContent = "space-between";

  guessBtn.style.backgroundColor = team.btnColor;
  guessBtn.style.color = "#FFFFFF";
}

guessBtn.addEventListener("click", render);
