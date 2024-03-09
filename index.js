"use stric"


//---------------------ETML Elamentlari----

let toggleMenuBtn = document.querySelector('#navbar--menu');
let toggleMenuWrap = document.querySelector('#toggl-menu-wrap');

//--popup menu1--
let poppupWrap = document.querySelector('.popup-menu--wrapper');

let popupOpenBtn1 = document.querySelector('#popup-open-btn1');
let popupOpenBtn2 = document.querySelector('#popup-open-btn2');
let popupCloseBtn = document.querySelector('#popup-close-btn');

let popupForm = document.querySelector('#popup-form');
let userName = document.querySelector('#user-name');
let userTel = document.querySelector('#user-tel');

//--popup menu2--

let poppupWrap2 = document.querySelector('.popup-menu2--wrapper');

let popupMenu2CloseBtn1 = document.querySelector('#popup-menu2--wrapper--close--btn');
let popupMenu2CloseBtn2 = document.querySelector('#popup-menu2--wrapper--close--btn2');

//---Form user tel nomer 

let formUserTel = document.querySelector('#form-tel2');
let inputUserTel = document.querySelector('#user-tel2');


let formUserTel2 = document.querySelector('#form-tel3');
let inputUserTel2 = document.querySelector('#user-tel3');

// -------------------------FUNCSIYALAR---------



//--Toggle menu1 -----------------------------------------------------------------
toggleMenuBtn.addEventListener('click', ()=>{
    toggleMenuWrap.classList.toggle('toggl-open')
})
//--Popup menu1 open -----
////////////////--btn 1-----
popupOpenBtn1.addEventListener('click', ()=>{
    poppupWrap.classList.toggle('popup-menu--wrapper--close')

});
////////////////--btn 2-----
popupOpenBtn2.addEventListener('click', ()=>{
    poppupWrap.classList.toggle('popup-menu--wrapper--close')

});
//---Popup menu1 close -----
popupCloseBtn.addEventListener('click', ()=>{
    poppupWrap.classList.toggle('popup-menu--wrapper--close')

});
//---------------------------------------------------------------------------









//Popup menu 2 open -----------------------------------------------------------------------------
popupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(userName.value.trim().length==0 || userTel.value.trim().length==0){
        alert("janob formani toliq toldirin yoli menuni yopihlik uchun (X) ni bosing");
    }else{
        poppupWrap.classList.toggle('popup-menu--wrapper--close')
        poppupWrap2.classList.toggle('popup-menu--wrapper--close')
    }

})
//Popup menu 2 close -------
popupMenu2CloseBtn1.addEventListener('click', ()=>{
    poppupWrap2.classList.toggle('popup-menu--wrapper--close')
});
popupMenu2CloseBtn2.addEventListener('click', ()=>{
    poppupWrap2.classList.toggle('popup-menu--wrapper--close')
});
//----------------------------------------------------------------






//-----Form user tel ------------------------------
formUserTel.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    if(inputUserTel.value.trim().length==0){
        alert("janob formani toliq toldirin yoli menuni yopihlik uchun (X) ni bosing");
    }else{
        poppupWrap2.classList.toggle('popup-menu--wrapper--close')
    }
});
//-------------------------------------------------


//-----Form user tel 2 ------------------------------
formUserTel2.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    if(inputUserTel2.value.trim().length==0){
        alert("janob formani toliq toldirin yoli menuni yopihlik uchun (X) ni bosing");
    }else{
        poppupWrap2.classList.toggle('popup-menu--wrapper--close')
    }
});
//-------------------------------------------------





