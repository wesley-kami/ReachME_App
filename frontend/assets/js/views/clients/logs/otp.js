import AbstractView from "../AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("OTP")
    }

    async getContent(){
        return `
           <div class="bg-gradient-to-br p-5 from-slate-900 to-violet-900 via-slate-800 h-screen">
                <h1 class="font-bold text-center mb-4  text-4xl text-purple-700">REACHME</h1>
                    <form class=" min-w-[350px] max-w-[450px] mx-auto p-6 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="">
                        <h3 class="text-white text-2xl  font-semibold text-left">Try getting back your account</h3>
                        <p class="text-left text-[15px]  text-white mb-2">Enter your email address to continue start the process</p>
                        <div class="flex-col flex">
                            <input class="bg-white w-full rounded-md p-2 outline-0 my-4" placeholder="Enter your email address" type="text">
                            <input type="submit" value="send code" class="text-white bg-purple-800 p-2 shadow-slate-900 hover:shadow-sm transition ease-in-out duration-200 rounded-md">
                    </form>
            </div>
        `
    }

    async scriptLink(){

    }
}