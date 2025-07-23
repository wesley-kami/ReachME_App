import navigateTo from "../../../index.js";
import AbstractView from "../AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("OTP")
    }

     getContent(){
        return `
           <div class="bg-gradient-to-br p-5 from-slate-900 to-purple-800 via-violet-900 h-screen">
                <h1 class="font-bold text-center mb-4  text-4xl text-purple-700">REACHME</h1>
                    <form id='Form' class=" min-w-[350px] max-w-[450px] mx-auto p-6 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="">
                        <a href="/" page-link class=" ml-[-10px] items-center font-semibold transition duraion-200 ease-in-out mb-2 text-slate-7 hover:text-white flex"><?xml version="1.0" encoding="UTF-8"?><svg class="" width="25px" height="18px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Back to login</a>
                        <h3 class="text-white text-2xl  font-semibold text-left">Try getting back your account</h3>
                        <p class="text-left text-[15px]  text-white mb-2">Enter your email address to continue start the process</p>
                        <div class="flex-col flex">
                            <input name='email' id='email' class="bg-white w-full rounded-md p-2 outline-0 my-4" placeholder="Enter your email address" type="text">
                            <p id='errMail' class="text-[13px] mt-[-10px] mb-2 text-red-800 my-0.5"></p>
                            <input type='hidden' name='csrf' id='csrf'>
                            <input type="submit" value="Send code" class="bg-purple-800 block w-9/12 mx-auto hover:shadow-md hover:bg-purple-900 shadow-black  transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 "></input>
                        
                    </form>
            </div>
        `
    }

    async scriptLink(){
        document.getElementById('intro').innerHTML = await this.getContent();
        const csrf = document.getElementById('csrf');
        const form = document.getElementById('Form');
        
        const token = await fetch('http://localhost:8080/api/session.php',{credentials: 'include'});
        
        const tokenValue = await token.json();
        // console.log(tokenValue);
        csrf.value = tokenValue
        // console.log(csrf)
        function isMailValid(mail){
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
        }
        
        form.addEventListener('submit',async (e) => {

            e.preventDefault();
            const email = document.getElementById('email')
            const errMail = document.getElementById('errMail');

            function isFormValid(){
                let valid = true;
                if(!isMailValid(email.value)){
                    valid = false;
                    errMail.innerText ='Email format incorrect';
                }
                if(email.value === ''){
                    valid = false;
                    errMail.innerText = 'Email is required';
                }

                return valid;
            }

            if(isFormValid()){
                const data = new FormData(form);
                const send = await fetch('http://localhost:8080/api/clients/sendMail.php',{
                    method : 'POST',
                    credentials : 'include',
                    body : data
                })

                const sentRes =await send.json();
                console.log(sentRes)
                if(sentRes.success){
                    navigateTo('/otpValidation')
                }
                else{
                    console.log("Dôhi")
                }
            }

        })

    }
}