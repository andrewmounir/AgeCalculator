// to calculate years lived will subtract current year will subtract this year from the year he was born
// month

// if year === input year calculate day and month
// if year and day == input year and day calculate month

// if input month greater than current month
// (current month - input month - 12)
// if month less than 12 year -1

// System Date
let currentyearDate = new Date();
let nowYear = currentyearDate.getFullYear();
let nowMonth = currentyearDate.getMonth();
let nowDay = currentyearDate.getUTCDate();
let DateArray = [nowYear, nowMonth, nowDay];
//************** */

//Get HTML elements to change their value later

let resultDate = document.querySelector(".result");

//************** */

let UserBirthdayArray = [];

function getButtonsValue() {
  resultDate.innerHTML = "";
  let inputDay = document.querySelector(".day").value;
  let inputMonth = document.querySelector(".month").value;
  let inputYear = document.querySelector(".year").value;
  UserBirthdayArray.push(inputYear, inputMonth, inputDay);

  console.log(UserBirthdayArray);
  console.log(DateArray);

  if (UserBirthdayArray[1] > DateArray[1]) {
    let outputMonth = UserBirthdayArray[1] - DateArray[1] - 11;
    let outputYear = DateArray[0] - UserBirthdayArray[0] - 1;
    let outputDay = DateArray[2] - UserBirthdayArray[2];
    console.log(outputYear, outputMonth, outputDay);
    resultDate.innerHTML += `    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputYear,
      0
    )}</span> years</h1>
    
    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputMonth,
      0
    )}</span> months</h1>
    
    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputDay,
      0
    )}</span> days</h1>`;
  } else {
    let outputMonth = UserBirthdayArray[1] - DateArray[1];
    let outputYear = DateArray[0] - UserBirthdayArray[0];
    let outputDay = DateArray[2] - UserBirthdayArray[2];
    console.log(outputYear, outputMonth, outputDay);
    resultDate.innerHTML += `
    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputYear,
      0
    )}</span> years</h1>
    
    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputMonth,
      0
    )}</span> months</h1>
    
    <h1 class="fontSize"><span class="fontadjust">${Math.abs(
      outputDay,
      0
    )}</span> days</h1>
    
    
    `;
  }
}
