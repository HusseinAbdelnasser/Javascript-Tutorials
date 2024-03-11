
/*
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divs.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});
*/


$(function(){

    $(".tabs li").on("click", function(){

        $(this).addClass('active').siblings().removeClass('active');

        $(".content > div").hide();

        $($(this).data('cont')).fadeIn(1000);
    });
});
