import lostPage from "./views/lostPage.js"
import login from "./views/clients/logs/login.js"
import register from "./views/clients/logs/register.js"
import otpValidate from "./views/clients/logs/otpValidate.js"
import otp from "./views/clients/logs/otp.js"
// import dashboard from "./views/clients/mainApp/dashboard.js"
import home from "./views/clients/mainApp/home/home.js"
import profile from "./views/clients/mainApp/profile/profile.js"

 export default function navigateTo(url){
     history.pushState(null,null,url);
     router()
}

export const router = async () =>{
    const routes = [
        { path:'/', view : login },
        { path:'/home', view : home},
        { path:'/profile', view : profile},
        { path:'/otp', view : otp},
        { path: '/otpValidation',view: otpValidate},
        { path:'/register', view : register},
        { path:'/404', view : lostPage },
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
    const view = new match.route.view()
    // document.getElementById('intro').innerHTML = await view.getContent()  
    await view.scriptLink();
}

window.addEventListener("popstate",router)

document.addEventListener("DOMContentLoaded", () =>{
    router();
    document.addEventListener('click',(e)=>{
        if(e.target.matches("[page-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    
})