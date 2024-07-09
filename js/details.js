import { Ui } from "./ui.js";

export class Details {
    constructor(id){
        document.getElementById("btnClose").addEventListener("click", () => {
            document.getElementById("details").classList.add("d-none");
            document.getElementById("game").classList.remove("d-none");
        });

        this.loading=document.querySelector(".loading");

        this.getDetails(id);

    }
    async getDetails(id){
        this.loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5c1c00c2admsh626d4af5928e02ep12310bjsn87bc2db549a0',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        let response =await api.json();
        this.loading.classList.add("d-none");

        console.log(response);
        new Ui().displayDetails(response);
    }
}








// console.log('Hello');


// // Api

// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '5c1c00c2admsh626d4af5928e02ep12310bjsn87bc2db549a0',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) { 
// 	console.error(error);
// }


// Api Return Details


// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '5c1c00c2admsh626d4af5928e02ep12310bjsn87bc2db549a0',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }