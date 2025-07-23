import navigateTo from "../../../index.js";
import AbstractView from "../AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("OTP")
    }

     getContent(){
        return `
  <h1 class="font-bold text-center mb-2 text-4xl py-10 text-purple-700">REACHME</h1>
        <form id='valid' name='valid' class=" min-w-[350px] max-w-[450px] mx-auto p-6 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="POST">
          <a href="/" page-link class=" ml-[-10px] items-center font-semibold transition duraion-200 ease-in-out mb-2 text-slate-7 hover:text-white flex"><?xml version="1.0" encoding="UTF-8"?><svg class="" width="25px" height="18px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Back to login</a>
            <h3 class="text-white text-2xl  font-semibold text-left">Verify OTP</h3>
            <p class="text-left text-[15px]  text-white mb-2">An OTP was sent to <span class="font-bold">exemple@gmail.com</span> Enter it below to continue.</p> <p id='errOtp' class="text-[13px] mt-[-10px] mb-2 text-red-800 my-0.5"></p>
            <div class="flex-col flex">
                <div id="opt" class="mt-5 mb-5 flex justify-center gap-3 ">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field font-bold text-lg bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                </div>
                <input type="submit" value="Verify" class="bg-purple-800 block w-9/12 mx-auto hover:shadow-md hover:bg-purple-900 shadow-black  transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 ">
                <input id='sendOtp' type='submit' class="w-4/12 bg-white text-black cursor-pointer hover:shadow-black hover:shadow-md transition ease-in-out duration-200 disabled:shadow-none ml-auto transition duration-200 ease-in-out p-2 rounded-md outline-0 disabled:text-slate-500 disabled:hover:text-slate-500 disabled:cursor-default" value='Resend code'>
                </div>
                </form>         
         `
    }

    async scriptLink(){
        document.getElementById('intro').innerHTML = await this.getContent();
        const fields = document.querySelectorAll(".otp-field");
        const sendOtp = document.getElementById('sendOtp');
        const errOtp = document.getElementById('errOtp');
        // const minutes = document.getElementById('minutes');
        // const seconds = document.getElementById('seconds');  
        sendOtp.disabled = true;
    //    let totalTime = 5 * 60; // 5 minutes = 300 secondes

    //     const countDown = setInterval(() => {
    //         let mins = Math.floor(totalTime / 60);
    //         let secs = totalTime % 60;

    //         minutes.innerText = mins.toString().padStart(2, '0');
    //         seconds.innerText = secs.toString().padStart(2, '0');

    //         totalTime--;

    //         if (totalTime < 0) {
    //             clearInterval(countDown);
    //             sendOtp.disabled = false; // Réactiver le bouton "Resend code"
    //         }
    //     }, 1000);
         fields.forEach((el, ind) =>{
            el.addEventListener("input", ()=>{
                el.value = el.value.replace(/[^a-zA-Z0-9]/,"");
                /[a-z]/.test(el.value) ? el.value = el.value.toUpperCase() : el.value
                if(el.value.length === 1 && ind < fields.length - 1){
                     fields[ind+1].focus()
                }
                
            })

            el.addEventListener("keydown",(e)=>{
                 if(e.key ==="Backspace" && !el.value && ind > 0){
                      fields[ind-1].focus();
                 }
            });

         })
         fields[0].focus();

         const form = document.getElementById('valid');
         form.addEventListener('submit',async (e)=>{
             e.preventDefault();
             errOtp.innerText = '';
             fields.forEach(el =>{
                        el.classList.remove('border-red-500', 'border-solid', 'border-1');
                 });
            function isFilled(){
                for(let i=0; i < fields.length; i++){
                    if( fields[i].value === '' ){
                        return false;
                    }
                }
                return true;
            }
            if(isFilled()){
                sendOtp.disabled = false ;
                const otp = Array.from(fields).map(f => f.value.trim()).join('');
                // console.log("OTP Submitted:", otp);
                const data = new FormData();
                data.append('Otp',otp);
                const request = await fetch('http://localhost:8080/api/clients/register.php',{
                    method : 'POST',
                    body : data,
                    credentials : "include"
                })
                const response = await request.json();
                console.log(response)
                if(response.success === 1){
                    navigateTo('/dashboard')
                }
                else if(response.success === 2){
                    // navigateTo('/otp');
                    fields.forEach(el =>{
                        el.classList.add('border-red-500', 'border-solid', 'border-1');
                    });
                    errOtp.innerText = 'OTP typed is invalid !';

                }else{
                    console.log("Dôhi")
                    navigateTo('/');
                }
            }else{  
                fields.forEach(el =>{
                    if(el.value === ''){
                       el.classList.add('border-red-600', 'border-solid', 'border-2');
                    }
                });
            }
         });    

         sendOtp.addEventListener('click',async (e)=>{
            e.preventDefault();
            const mailer = await fetch('http://localhost:8080/api/clients/sendMail.php',{
                          method : 'POST',
                          body : Formdata,
                          credentials : 'include'
                          });
                          const answer = await mailer.json();
                          console.log(answer.success);
                        if(answer.success){
                            console.log("It's good bruh");
                            sendOtp.disabled = true;
                            setTimeout(()=> sendOtp.disabled = false,1800000);
                        }
                        else{
                            console.log('tellement tu es dans dôhi');
                        }
                        
         });

    }
}