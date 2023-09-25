
let teamDB = [{
    player: [
        {attacker: ["Martinelli" , "Saka" , "Jesus"]},
        {defender: "Gabriel"},
    ],
    team: "Arsenal",
    city: "London",
    ranking: "Excellent"},
    {   
    player: [
        {attacker: ["Salah" , "Nunez" , "Luis Diaz"]},
        {defender: "van Dijk"}
    ],
    team: "Liverpool",
    city: "Liverpool",
    ranking: "Excellent"}
];

//console.log(teamDB);

for (let teams of teamDB) {
    //if (team.ranking === "Excellent") {
        console.log(teams.player)
}







