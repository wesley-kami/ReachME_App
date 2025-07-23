import AbstractView from "../../AbstractView.js";
import dashboard from "../dashboard.js";

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle("Profile");
  }

  getContent() {
    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth() + 1;
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
    function daysInMonth() {
      return new Date(currentYear, currentMonth, 0).getDate()
    }
    const dayOpt = () => {
      let days = "";
      for (let i = 1; i <= daysInMonth(); i++) {
        i === currentDate ? days += `<option class='text-sm' name='opDay' value=${i} selected>${i}</option>` : days += `<option class='text-sm' value=${i}>${i}</option>`
      }
      return days
    }
    const monthOpt = () => {
      let monthOps = "";
      for (let i = 1; i < 13; i++) {
        i === currentMonth ? monthOps += `<option class='text-sm' selected value = ${i}> ${months[i]} </option>` : monthOps += `<option class='text-sm' value = ${i}>${months[i]}</option>`
      }
      return monthOps
    }
    const years = () => {
      let yearsOps = "";
      for (let i = currentYear; i > 1910; i--) {
        i === currentYear ? yearsOps += `<option class='text-sm' selected value =${i}> ${i} </option>` : yearsOps += `<option class='text-sm' value =${i}>${i}</option> `
      }
      return yearsOps
    };
    return `
            <div class="bg-black/50 mb-20 rounded-md p-8 mx-auto max-w-4xl">
        
        <div class=" flex justify-between items-center mb-6">
            <div>
                <h1 class="text-white text-2xl font-bold">PROFILE</h1>
                <p class="text-gray-300 text-sm">view all profiles detail here</p>
            </div>
            <button id='activeProfile' class="bg-white text-purple-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Update profile
            </button>
        </div>

        <!-- Divider -->
        <div class="border-t border-purple-400 mb-8"></div>

        <!-- Main Content -->
        <div class=" backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-purple-400/30">
            <div id='ajust' class="grid justify-center grid-cols-1 lg:grid-cols-2 gap-5">
                <!-- Left Side - Profile Info -->
                <div class="p-2 space-y-6">
                    <h2 class="userName text-white text-center text-xl font-semibold"></h2>
                    
                    <!-- Profile Image -->
                    <div class="relative">
                        <div class="mx-auto bg-gray-600 p-3 rounded-full flex items-center justify-center relative overflow-hidden">
                            <img class='pdp mx-auto' src='' />
                        </div>
                    </div>
                </div>

                <!-- Right Side - Bio & Details -->
                <div class=" bg-gradient-to-br to-violet-500 from-fuchsia-500/50 rounded-md p-6">
                    <h3 class="text-white text-lg font-semibold mb-6">Bio & other details</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Left Column -->
                        <div class="space-y-4">
                            <div id='occupation' class="detail">
                                <p class="text-gray-300 text-sm">Occupation</p>
                                <p class="text-white"></p>
                            </div>
                            
                            <div>
                                <p class="text-gray-300 text-[sm]">Gender</p>
                                <p id='gender' class="text-white text-sm"></p>
                            </div>
                            
                            <div>
                                <p class="text-gray-300 text-sm">Firstname</p>
                                <p id='firstname' class="text-white"></p>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="overflow-hidden space-y-4">
                            <div id='hobby' class="detail">
                                <p class="text-gray-300 text-sm">Main hobby</p>
                                <p class="text-white"></p>
                            </div>
                            
                            <div>
                                <p class="text-gray-300 text-sm">Birthday</p>
                                <p id='birthday' class="text-white"></p>
                            </div>
                            
                            <div>
                                <p class="text-gray-300 text-sm">Lastname</p>
                                <p id='lastname' class="text-white"></p>
                            </div>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t border-purple-400 my-4"></div>
                    <!-- Bio Description -->
                    <div class="mt-6 ">
                        <p class="text-gray-300 text-sm mb-2">Bio description</p>
                        <p id='bio' class="detail text-white text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus illum iste, fugiat fugit tenetur omnis nihil est labore dolore expedita, ad, mollitia officia cumque. Sint cupiditate aliquid commodi ut.
                        </p>
                        <div id='addInfo' class=' hidden flex hover:bg-gray-200 cursor-pointer transition ease-in-out duration-200 bg-white py-1 justify-between gap-2 rounded-full w-fit px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" class="size-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                            </svg>
                            <p class='text-black font-semibold'>Add bio & details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <form id='profilUpdate' class='hidden z-50 h-100 flex flex-col gap-4 justify-evenly p-5 mx-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12 my-5 bg-black/80 backdrop-blur-lg rounded-sm'>
          <div id='closeUpdate' class='p-0.5 hover:bg-white/50 transition duration-200 ease-in-out cursor-pointer absolute top-1 right-2 bg-white w-fit  rounded-full'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
  <div class='flex justify-between'>
    <div class='w-4/12 w-5/12'>

    <p class='text-white/50 my-0.5'>Firstname</p>
    <input id='first_name' placeholder="Enter your firstname" class='outline-0 bg-gray-700 py-2 px-2 rounded-sm text-white w-full text-sm focus:ring-2 focus:ring-purple-700' type="text">
  </div>
  <div class='w-4/12 w-5/12'>
    <p class='text-white/50 my-0.5'>Lastname</p>
    <input id='up_lastname' placeholder="Enter your lastname" class='outline-0 bg-gray-700 py-2 px-2 rounded-sm text-white w-full text-sm focus:ring-2 focus:ring-purple-700' type="text">
  </div>
  </div>
<div class='flex justify-between'>
  <div class='w-5/12'>
    <p class='text-white'>Gender</p>
    <div class='gap-2 flex'>
      <div class='w-4/12 gap-2 flex py-1 px-2 bg-gray-700 rounded-sm'>
        <input name='gender' class='radio ' value='Male' type="radio"> <p class='text-sm text-white'>Male</p>
      </div>
      <div class='w-4/12 gap-2 flex py-1 px-2 bg-gray-700 rounded-sm'>
        <input name='gender' class='radio ' value='Female' type="radio"> <p class='text-sm text-white'>Female</p>
      </div>
      <div class='w-4/12 gap-2 flex py-1 px-2 bg-gray-700 rounded-sm'>
        <input name='gender' class='radio ' value='Other' type="radio"> <p class='text-sm text-white'>Other</p>
      </div>
    </div>
  </div>

  <div class='w-5/12'>
    <label class="mt-1 my-1 text-white" for="">Birth Date</label>
                <div class="flex gap-2">
                    <select name="day" id='day' class="bg-gray-700 ops text-white outline-0 focus:ring-2 focus:ring-purple-500 w-4/12 rounded-md py-1" name="day" id="day">
                       ${dayOpt()}
                    </select>
                    <select name="month" id='month' class="bg-gray-700 text-white outline-0 focus:ring-2 focus:ring-purple-500 w-4/12 rounded-md py-1" name="month" id="month">
                        ${monthOpt()}
                    </select>
                    <select name="year" id='year' class="bg-gray-700 text-white outline-0 focus:ring-2 focus:ring-purple-500 w-4/12 rounded-md py-1" name="year" id="year">
                        ${years()}
                    </select>
                </div>
  </div>
</div>
    <div class='flex w-full justify-between '>
    <div class='flex flex-col w-5/12 gap-3'>
      <label class='text-white'>Hobby <span class='text-sm font-semibold'>(optionnal)</span></label>
      <select id='Uphobby' class='p-1 w-full rounded-sm bg-gray-700 outline-0 focus:ring-2 focus:ring-purple-500 text-white'>
        <option class='text-sm rounded-sm' value='Musique'>Musique</option>
        <option class='text-sm rounded-sm' value='Sport'>Sport</option>
        <option class='text-sm rounded-sm' value='Books'>Books</option>
        <option class='text-sm rounded-sm' value='Art'>Art</option>
        <option class='text-sm rounded-sm' value='Sleep'>Sleep</option>
        <option class='text-sm rounded-sm' value='Outing'>Outing</option>
        <option class='text-sm rounded-sm' value='Drip'>Drip</option>
        <option class='text-sm rounded-sm' selected disabled value=''>Select your main hobby</option>
      </select>
    </div>
    <div class='flex flex-col w-5/12 gap-3'>
      <label class='text-white'>Occupation <span class='text-sm font-semibold'>(optionnal)</span></label>
      <select id='Upoccupation' class='p-1 w-full rounded-sm bg-gray-700 outline-0 focus:ring-2 focus:ring-purple-500 text-white'>
        <option class='text-sm rounded-sm' value='Student'>Student</option>
        <option class='text-sm rounded-sm' value='Worker'>Worker</option>
        <option class='text-sm rounded-sm' value='Other'>Other</option>
        <option class='text-sm rounded-sm' selected disabled value=''>Select your occupation</option>
      </select>
    </div>
    </div>
    <div class='flex flex-col'>
      <label class='text-white'>Bio <span class='text-sm font-semibold'>(optionnal)</span></label>
      <textarea id='Upbio' placeholder="Enter your bio" maxlength="280" class='resize-none rounded-sm h-[120px] outline-0 bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 p-2'></textarea>
    </div>

  <input type="submit" id='updatebutton' value='update' class='text-purple-700 rounded-md hover:bg-gray-200 cursor-pointer py-1 bg-white w-4/12 mx-auto'>

</form>   
        `;
  }

  async scriptLink() {


    const dash = new dashboard();

    await dash.scriptLink();

    const nav = document.querySelectorAll('.nav');

    /* sideBar element */

    const sideBar = document.getElementById('sideBar');

    const overlay = document.getElementById('overlay');

    // nav[0].classList.add('border-b-white/50','border-b-2');

    const main = document.getElementById('main');

    main.innerHTML = this.getContent();

    const closeUpdate = document.getElementById('closeUpdate');

    const updateProfile = document.getElementById('profilUpdate');

    const activeProfile = document.getElementById('activeProfile');

    const userName = document.querySelectorAll('.userName');

    /* The spots where the user's profile are dusplayed */
    const profiles = document.querySelectorAll('.pdp');

    const user = await fetch('http://localhost:8080/api/clients/userInfo.php', {
      credentials: 'include'
    });
    const userInfo = await user.json();
    userName.forEach(user => {
      user.innerText = `${userInfo.data.first_name} ${userInfo.data.last_name}`;
    });

    console.log(userInfo.data.birthDate);

    const [upyear, upmonth, upday] = userInfo.data.birthDate.split('-');

    console.log(upmonth);

    const days = document.getElementById('day');

    const daysOption = days.options;

    const months = document.getElementById('month');

    const monthsOption = months.options;

    const years = document.getElementById('year');

    const yearsOption = years.options;

    Array.from(daysOption).map(option => {
      option.value === upday ? option.selected = true : option.selected = false;
    });

    Array.from(monthsOption).map(option => {
      option.value === `${parseInt(upmonth)}`? option.selected = true : option.selected = false;
    });

    Array.from(yearsOption).map(option => {
      option.value === upyear ? option.selected = true : option.selected = false;
    });

    // console.log(daysOption,monthsOption,yearsOption);

    // console.log(day);


    const first_name = document.getElementById('first_name');

    first_name.value = userInfo.data.first_name;

    const last_name = document.getElementById('up_lastname');

    last_name.value = userInfo.data.last_name;

    const radios = document.querySelectorAll('.radio');

    Array.from(radios).map(radio => {
      if (radio.value === userInfo.data.gender) {
        radio.checked = true;
      }
    });


    const addInfo = document.getElementById('addInfo');

    const adjust = document.getElementById('adjust');

    const bio = document.getElementById('bio');

    const hobby = document.getElementById('hobby');

    const occupation = document.getElementById('occupation');

    const birthday = document.getElementById('birthday');

    const firstname = document.getElementById('firstname');

    const lastname = document.getElementById('lastname');

    const gender = document.getElementById('gender');

    const details = document.querySelectorAll('.detail');

    const Uphobby = document.getElementById('Uphobby');

    const Upoccupation = document.getElementById('Upoccupation');

    const Upbio = document.getElementById('Upbio');

    const updatebutton = document.getElementById('updatebutton');

    sideBar.classList.add('hidden');

    userInfo.data.profile_image ? profiles.forEach(profile => profile.setAttribute('src', userInfo.data.profile_image)) : profiles.forEach(profile => profile.setAttribute('src', "./assets/images/public/avatar.png"));

    main.classList.add('mx-auto', 'h-screen', "w-full");

    firstname.innerText = userInfo.data.first_name;

    lastname.innerText = userInfo.data.last_name;

    gender.innerText = userInfo.data.gender;

    birthday.innerText = userInfo.data.birthDate;

    
    /*  */
    activeProfile.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      updateProfile.classList.remove('hidden');
      overlay.appendChild(updateProfile);
    });
    
    /* button to close the update pop-up */
    closeUpdate.addEventListener('click', () => {
      overlay.classList.add('hidden');
      updateProfile.classList.add('hidden');
    });

    
    const bioCheck = await fetch('http://localhost:8080/api/clients/showBio.php',{
      credentials: 'include'
    });
    const bioRes = await bioCheck.json();
    
    if (bioRes.success) {
      
    } else {
      details.forEach(detail => {
        detail.classList.add('hidden');
      });
      // details[details.lenght].cl
      addInfo.classList.remove('hidden')

    }


  }

}