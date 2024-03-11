let inputDay = document.querySelector(".container .d");
let inputMonth = document.querySelector(".container .m");
let inputYear = document.querySelector(".container .y");
let input = document.querySelector(".container input");
let text = document.querySelector('.container .text')

document.querySelector(".container .submit").onclick = function(){

    if(input.value === ''){
        document.querySelector('.container .text').textContent = "This Field Is Required";
        document.querySelector('.container .text1').textContent = "This Field Is Required";
        document.querySelector('.container .text2').textContent = "This Field Is Required";
        document.querySelector('.d').style.border = '1px solid red';
        document.querySelector('.m').style.border = '1px solid red';
        document.querySelector('.y').style.border = '1px solid red';

    } else {
        document.querySelector('.container .text').textContent = "";
        document.querySelector('.container .text1').textContent = "";
        document.querySelector('.container .text2').textContent = "";
        document.querySelector('.d').style.border = '1px solid #ddd';
        document.querySelector('.m').style.border = '1px solid #ddd';
        document.querySelector('.y').style.border = '1px solid #ddd';
        myAge();
    }
   
}



function myAge () {

    let dayNow = new Date().getDate();
    let monthNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();

    let d = dayNow - inputDay.value;
    let m = monthNow - inputMonth.value + 1;
    let y = yearNow - inputYear.value;

    
    document.querySelector(".year span").innerHTML = y;
    document.querySelector(".month span").innerHTML = m;
    document.querySelector(".day span").innerHTML = d;
}

