import AbstractView from "../AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("OTP")
    }

    async getContent(){
         return `
  <h1 class="font-bold text-center mb-2 text-4xl text-purple-700">REACHME</h1>
        <form class=" min-w-[350px] max-w-[450px] mx-auto p-6 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="">
          <a href="/" page-link class=" ml-[-10px] items-center font-semibold transition duraion-200 ease-in-out mb-2 text-slate-7 hover:text-white flex"><?xml version="1.0" encoding="UTF-8"?><svg class="" width="25px" height="18px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Back to login</a>
            <h3 class="text-white text-2xl  font-semibold text-left">Verify OTP</h3>
            <p class="text-left text-[15px]  text-white mb-2">An OTP was sent to <span class="font-bold">exemple@gmail.com</span> Enter it below to continue</p>
            <div class="flex-col flex">
                <div id="opt" class="mt-5 mb-5 flex justify-center gap-3 ">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                   <input maxlength="1" class="otp-field bg-white shadow-md  focus:shadow-slate-600 w-10 h-10 text-center outline-0 rounded-md"  type="text">
                </div>
                <input type="submit" value="Verify" class="bg-purple-800 block w-9/12 mx-auto hover:shadow-md hover:bg-purple-900 shadow-black  transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 ">
            </div>
            
        </form>         
         `
    }

    async scriptLink(){
        // function isSpecialCharacter(word){
        //        return /[^a-zA-Z0-9]/.test(word)
        // }
        
        const fields = document.querySelectorAll(".otp-field")
         fields.forEach((el, ind) =>{
            el.addEventListener("input", ()=>{
                el.value = el.value.replace(/[^a-zA-Z0-9]/,"");
                /[a-z]/.test(el.value) ? el.value = el.value.toUpperCase() : el.value
                if(el.value.length === 1 && ind < fields.length - 1){
                     fields[ind+1].focus()
                }
                // else{
                //     el.value = "";
                // }
            })

            el.addEventListener("keydown",(e)=>{
                 if(e.key ==="Backspace" && !el.value && ind > 0){
                      fields[ind-1].focus();
                 }
            });

         })
         fields[0].focus()
    }
}