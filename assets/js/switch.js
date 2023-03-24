const menuLogo = document.getElementById('mobmenu');
var rotated = false;

menuLogo.addEventListener('click',function (){
    if(rotated == false){
        menuLogo.style.transform = 'rotate(180deg)';
        rotated = true;
    }
    else {
        menuLogo.style.transform = 'rotate(0deg)';
        rotated = false;
    }

});