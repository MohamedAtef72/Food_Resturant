const header = document.querySelector("header");
// to add class to header when scrolly > 80 && to make navigate fixed with me
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 80)
});
const instagram_btn = document.querySelector('.instagram');
instagram_btn.onclick=function(){
window.open("https://www.instagram.com/accounts/login/?hl=en",'_blank');
};
const facebook_btn = document.querySelector('.clr');
facebook_btn.onclick=function(){
window.open("https://www.facebook.com/login/",'_blank');
};
const twitter_btn = document.querySelector('.twitter');
twitter_btn.onclick=function(){
window.open("https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D",'_blank');
};
const github_btn = document.querySelector('.github');
github_btn.onclick=function(){
window.open("https://github.com/",'_blank');
};
const google_btn = document.querySelector('.google');
google_btn.onclick=function(){
window.open("https://www.google.co.uk/",'_blank');
};
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});
sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:300});
sr.reveal('.middle-text',{});
sr.reveal('.row-btn,.shop-content',{delay:300});
sr.reveal('.review-content,.contact',{delay:300});


