import navigateTo from "../../../index.js";
import AbstractView from "../AbstractView.js";

export default class extends AbstractView{

      constructor(){
         super();
         this.setTitle("register")
      }

       getContent(){
        // import navigateTo from "../../../index.js";
        // import { router } from "../../../index.js";
        
          const date = new Date();
          const currentDate = date.getDate();
          const currentMonth = date.getMonth()+1;
          const currentYear = date.getFullYear();
          const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
          };
          function daysInMonth(){
             return new Date(currentYear,currentMonth,0).getDate()
          }
          const  dayOpt = ()=>{
             let days="";
             for(let i = 1; i <=daysInMonth(); i++){
                i === currentDate ? days+=`<option name='opDay' value=${i} selected>${i}</option>` : days+=`<option value=${i}>${i}</option>`
             }
             return days
          }
          const monthOpt = ()=>{
                let monthOps="";
               for(let i=1; i<13; i++){
                  i === currentMonth ? monthOps+=`<option selected value = ${i}>${months[i]}</option>` : monthOps+=`<option value = ${i}>${months[i]}</option>`
               }
               return monthOps
          }
          const years = ()=>{
            let yearsOps ="";
            for(let i=currentYear; i > 1910;i--){
                 i === currentYear ? yearsOps+=`<option selected value =${i}>${i}</option>` : yearsOps+=`<option value =${i}>${i}</option> `
            }
            return yearsOps
          }
          return `
            <h1 class="font-bold font-semibold py-3 text-center text-4xl  text-purple-700">REACHME</h1>
        <form id='regis' class="min-w-[350px] max-w-[450px] mx-auto py-2 px-4 rounded-md from-purple-500 to-purple-600 via-fuchsia-600 bg-gradient-to-bl" action="" method="POST">
            <h3 class="text-white text-2xl mb-4 text-center">Create an account</h3>
            <hr>
            <div class="flex-col flex">
                <div class="mt-4 sm:flex gap-2">
                    <input name="firstname" id="firstname" placeholder="FirstName" class="bg-white mb-3 rounded-md w-full sm:mb-0 sm:w-6/12 py-2 px-2 outline-0" type="text">
                    <input name="lastname" id="lastname" placeholder="LastName" class="bg-white mb-3 rounded-md w-full sm:mb-0 sm:w-6/12 py-2 px-2 outline-0" type="text">
                </div>
                <p id="errName" class='text-red-800 text-[13px] mt-0.5'></p>
                <label class="mt-1 mb-0.5 text-white" for="">Birth Date</label>
                <div class="flex gap-2">
                    <select name="day" id='day' class="ops bg-white w-4/12 rounded-md py-1" name="day" id="day">
                       ${dayOpt()}
                    </select>
                    <select name="month" id='month' class="bg-white w-4/12 rounded-md py-1" name="month" id="month">
                        ${monthOpt()}
                    </select>
                    <select name="year" id='year' class="bg-white w-4/12 rounded-md py-1" name="year" id="year">
                        ${years()}
                    </select>
                </div>
                <label class="mt-2 mb-0.5 text-white" for="">Gender</label>
                <div class="flex gap-2">
                  <div class="bg-white flex gap-6 justify-center w-4/12 rounded-md py-2 ">
                    Male <input type="radio" name='choice' value='Male' checked> 
                  </div>
                  <div class="bg-white flex gap-6 justify-center w-4/12 rounded-md py-2 ">
                    Female <input type="radio" name='choice' value='Female'> 
                  </div>
                  <div class="bg-white flex gap-6 justify-center w-4/12 rounded-md py-2 ">
                    other <input type="radio" name='choice' value='Other'> 
                  </div>
                </div>
                <input type='hidden' name='csrf' id='csrf'>
                <input id="email" name='email' placeholder="email" class=" outline-0 bg-white w-full rounded-md py-2 px-2 my-2" type="text">
                <p id='mailErr' class="text-[13px] text-red-800 mt-[-4px]"></p>
                <input id="password" name='password' placeholder="password" class=" outline-0 bg-white w-full rounded-md py-2 px-2 my-2" type="password">
                <p id='passErr' class='text-[13px] text-red-800 mt-[-4px]'></p>
                <input id="conf_pass" name='conf_pass' placeholder="Confirm password" class=" outline-0 bg-white w-full rounded-md py-2 px-2 my-2" type="password">
                <p id='confErr' class='text-[13px] text-red-800 mt-[-4px] mb-2'></p>
                <input type="submit" value="SignUp" class=" cursor-pointer w-5/12 bg-purple-800 block mx-auto hover:bg-purple-900 transition ease-in-out duration-200 font-bold text-white text-center rounded-md py-2 mb-2 ">
                <a href="/" class="text-blue-950  transition duration-200 ease-in-out hover:text-white flex justify-center" page-link>Already have an account ?</a>
            </div>
        </form>
        `
      }

      async scriptLink(){
        document.getElementById('intro').innerHTML = await this.getContent();
          const regForm = document.getElementById('regis')

           const token = document.getElementById('csrf');
        // Génération du token csrf
          const response = await fetch("http://localhost:8080/api/session.php",{
            credentials : "include"
          });
          const data = await response.json();
          token.value=data;
          console.log(token.value);
          
          function validateName(word){
            return /^[A-Za-z]+$/.test(word)
          }
          function isMailValid(mail){
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
          }
          function isPassMatch(pass,conf){
              return pass === conf;
          }
          function isPassOk(pass){
              return pass.length >= 8 ;
          }

          
          regForm.addEventListener('submit', async (e)=>{
            e.preventDefault();
            const errname = document.getElementById('errName');
            const errMail = document.getElementById('mailErr');
            const passErr = document.getElementById('passErr');
            const confErr = document.getElementById('confErr');
            const firstname = document.getElementById("firstname");
            const lastname = document.getElementById('lastname');
            const daySelect = document.getElementById('day');
            const selectedOption = daySelect.options[daySelect.selectedIndex];
            const monthSelect = document.getElementById('month');
            const selectedMonth = monthSelect.options[monthSelect.selectedIndex];
            const yearSelect = document.getElementById('year');
            const selectedYear = yearSelect.options[yearSelect.selectedIndex]; 
            const email = document.getElementById('email');
            const pass = document.getElementById('password');
            const conf = document.getElementById('conf_pass');
            //  console.log(validateName(firstname.value))
            
            function IsRegistrationValid(){
              errname.innerText = "";
              errMail.innerText = "";
              passErr.innerText = "";
              confErr.innerText = "";
              
            let valid =true;
            if(!validateName(firstname.value)){
              valid = false;
              errname.innerText="Numbers and special characters are not allowed in the names";
            }
            if(!validateName(lastname.value)){
              valid = false;
              errname.innerText="Numbers and special characters are not allowed in the names";
            }
            if(firstname.value === "" || lastname.value === ""){
              valid = false;
              errname.innerText="Names fields are required";
            }
            if(!isMailValid(email.value)){
              valid = false;
              errMail.innerText = "Email format incorrect"
            }
            if(email.value === ""){
              valid = false;
              errMail.innerText="Email is required";
          }
          if(!isPassMatch(pass.value,conf.value)){
            valid= false;
            confErr.innerText="Passwords do not match";
          }
          if(conf.value === ""){
            valid = false;
            confErr.innerText="Password confirmation is required";
          }
          if(!isPassOk(pass.value)){
            valid = false;
            passErr.innerText="Password should have at least 08 characters";
          }
          if(pass.value === ""){
              valid = false;
              passErr.innerText="Password is required";
            }
            return valid;  
          }


            
            if(IsRegistrationValid()){
                const formdata = new FormData(regForm);
                const mailer = await fetch('http://localhost:8080/api/clients/sendMail.php',{
                method : 'POST',
                body : formdata,
                credentials : 'include'
                });
                const answer= await mailer.json();
                console.log(answer.success);
                if(answer.success){
                  navigateTo('/otpValidation');
                }
                else{
                  console.log(false);
                }
              }
            

          });
  }
}