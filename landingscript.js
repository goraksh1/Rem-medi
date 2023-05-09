let getStartedBtn=document.querySelector("#getStartedBtn");
let formBox=document.querySelector("#form-box");
let motto=document.querySelector("#motto");
getStartedBtn.addEventListener('click',function(){
    formBox.style="display:block;";
    motto.style="display:none";
})

jQuery(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


let signupBtn=document.querySelector("#signupBtn");
let signinBtn=document.querySelector("#signinBtn");
let nameField=document.querySelector("#nameField");
let title=document.querySelector("#title");


signinBtn.addEventListener('click',function(){
    nameField.style="max-height:0;border-bottom:0;"
    title.innerHTML=`<span class="part1">Sign </span><span class="part2">In</span>`
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

})  


signupBtn.addEventListener('click',function(){
    nameField.style="max-height:60px;border-bottom: 2px solid #0e2449;"
    title.innerHTML=`<span class="part1">Sign </span><span class="part2">Up</span>`
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
})  

