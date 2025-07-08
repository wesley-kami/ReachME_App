import AbstractView from "../AbstractView.js"

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("login");
    }

    async getContent(){
        return `
             <h1 class="font-bold text-center my-5 text-4xl text-purple-700">REACHME</h1>
        <form class="min-w-[350px] max-w-[450px] mx-auto p-4 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="">
            <h3 class="text-white text-2xl mb-4 font-semibold text-center">Log in account</h3>
            <hr>
            <div class="flex-col flex">
                <input name="email" id="email" placeholder="email address" class="bg-white outline-0 w-full rounded-md py-2 px-2 my-3" type="text">
                <input name="password" id="password" placeholder="password" class="bg-white outline-0 w-full rounded-md py-2 px-2 my-3" type="text">
                <input type="submit" value="SignIn" class=" w-full bg-purple-800 cursor-pointer block mx-auto shadow-black hover:shadow-md hover:bg-purple-900 transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 ">
                <p><a href="/register" page-link class="text-blue-950  transition duraion-200 ease-in-out hover:text-white">Do not have an account ?</a> or maybe <a href='/otp' page-link class="text-blue-950  transition duraion-200 ease-in-out hover:text-white">Forgotten password</a></p>
            </div>
            
        </form> 
        `
    }

    async scriptLink(){
        
            history.pushState("/")
         
    }
}