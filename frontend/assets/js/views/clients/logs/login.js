import AbstractView from "../AbstractView.js"
import navigateTo from "../../../index.js";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("login");
    }

     getContent(){
        return `
             <h1 class="font-bold text-center py-10 text-4xl text-purple-700">REACHME</h1>
        <form id='logForm' name='logForm' class="min-w-[350px] max-w-[450px] mx-auto p-4 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="POST">
            <h3 class="text-white text-2xl mb-4 font-semibold text-center">Log in account</h3>
            <hr>
            <div class="flex-col flex relative">
                <p id='errLog' class="text-[13px] text-red-800 my-0.5"></p>
                <input name="email" id="email" placeholder="Email address" class="bg-white outline-0 w-full rounded-md py-2 px-2 my-3" type="text">
                <p id='errMail' class="text-[13px] text-red-800 mt-[-8px]"></p>
                <input type='hidden' name='csrf' id='csrf'>
                <input name="password" id="password" placeholder="Password" class="bg-white text-lg outline-0 w-full rounded-md py-2 px-2 my-3" type="password">
                <p id='errPass' class="text-[13px] text-red-800 mt-[-8px] mb-2"></p>
                <input type="submit" value="Sign In" class=" w-full bg-purple-800 cursor-pointer block mx-auto shadow-black hover:shadow-md hover:bg-purple-900 transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 ">
                <p><a href="/register" page-link class="text-blue-950  transition duraion-200 ease-in-out hover:text-white">Do not have an account ?</a> Or maybe <a href='/otp' page-link class="text-blue-950  transition duraion-200 ease-in-out hover:text-white">Forgotten password ?</a></p>
            </div>
            
        </form> 
        `
    }

    async scriptLink(){
        document.getElementById('intro').innerHTML = await this.getContent();
        const logForm = document.getElementById('logForm');
        const token = document.getElementById('csrf');
        /* Destruction de la session à revoir dans le bouton deconnexion */
        const killSession = await fetch('http://localhost:8080/api/killSession.php',{
            credentials : 'include'
        });
            const killResponse = await killSession.json();
            console.log(killResponse)
            const csrf = await fetch('http://localhost:8080/api/session.php',{
                credentials : 'include'
            });

            const csrfRes = await csrf.json();
            console.log(csrfRes);
            token.value = csrfRes;
        
            function isMailValid(mail){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
            }
            
            function isPassOk(pass){
                return pass.length >= 8 ;
            }
            
            logForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const errLog = document.getElementById('errLog') ;
                const password = document.getElementById('password');
                const errMail = document.getElementById('errMail');
                const errPass = document.getElementById('errPass');
                const email = document.getElementById('email');

                 errLog.innerText = '';
                errMail.innerText = '';
                errPass.innerText = '';
                
                function isFormValid(){
                    let valid = true;
                    if(!isMailValid(email.value)){
                        valid = false;
                        errMail.innerText = 'Email format incorrect'
                    }

                    if(email.value === ""){
                        valid = false;
                        errMail.innerText="Email is required";
                    }
                    
                    // if(isPassOk(password.value)){
                    //     valid = false
                    // }

                    if(password.value === ""){
                        valid = false;
                        errPass.innerText="Password is required";
                    }

                    return valid;
                }
                const data = new FormData(logForm);
                if(isFormValid()){
                    const req = await fetch('http://localhost:8080/api/clients/log.php',{
                        method : "POST",
                        body : data,
                        credentials : 'include'
                    });

                    const reqRes = await req.json();
                    console.log(reqRes)
                    if(reqRes.success){
                        navigateTo('/home')
                    }else{
                        errLog.innerText = 'Email or password invalid';
                    }

                }
                else{
                    console.log('Dôhi');
                }
            });
            // if(killResponse.success){
                
            // }
            // fetch('http://localhost:8080/api/killSession.php')
            // .then(response => response.json())
            // .then(response => console.log(response.success))
    }
}