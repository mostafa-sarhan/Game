import { Details } from "./details.js";
import { Ui } from "./ui.js ";

//  
export class Home {
    constructor() {
        document.querySelectorAll(".navbar-nav li a").forEach((link) => {
            link.addEventListener("click", () => {
                this.changeActiveLink(link);
                let category = link.getAttribute("data-category");
                this.getGames(category);
            });
        });
        this.loading=document.querySelector(".loading");
        this.details = document.getElementById("details");
        this.game =document.getElementById("game");
        this.ui = new Ui();
        this.getGames("MMORPG");
    }


    // Function change classList 
    async changeActiveLink(link){
        document.querySelector(".navbar-nav a.active").classList.remove("active");
        link.classList.add("active");
    }

    async getGames(cat) {
        this.loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5c1c00c2admsh626d4af5928e02ep12310bjsn87bc2db549a0',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const response = await api.json();
        this.loading.classList.add("d-none");
        // console.log(response);
        this.ui.displayGames(response);
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", ()=>{
                details.classList.remove("d-none");
                game.classList.add("d-none");
                this.detailsSection = new Details(card.getAttribute("data-id"));

            })
        })
        // return response;
        // let category = link.getAttribute("data-category");
        // let categoryData = await this.getGames(category);  // Call the getGames method of the Home class
        // displayGames(categoryData);
    }
}
