import lostPage from "./views/lostPage.js"

const router = async () =>{
    const routes = [
        { path:'/', view : ()=> console.log("Viewing dashboard...") },
        // { path:'/login', view : ()=> console.log("Viewing Login...") },
        // { path:'/register', view : ()=> console.log("Viewing Register...")},
        { path:'/404', view : lostPage }
    ]

    const potentialMatches = routes.map(route =>{
        return {
            route : route,
            isMatch : location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
        match = {
            route : routes[routes.length -1],
            isMatch : true
        }
    };

    console.log(match)
    const view = new match.route.view()
    document.getElementById('intro').innerHTML = await view.getHTML()  

}

document.addEventListener("DOMContentLoaded", () =>{
    router();
})