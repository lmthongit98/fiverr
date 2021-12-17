function myFunction() {


    //header__top
    var navbar = document.querySelector('.navbar')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        var classList = navbar.className;
        if(!classList.includes("navbar--scroll")){
            navbar.className = navbar.className + " navbar--scroll";
        }
  
    }else{
        navbar.className = navbar.className.replace("navbar--scroll", "");
    }

    //header__bottom
    var navbar__bottom = document.querySelector('.navbar__bottom');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        var classList = navbar__bottom.className;
        if(!classList.includes("navbar--scroll")){
            navbar__bottom.className = navbar__bottom.className + " navbar--scroll";
        }
  
    }else{
        navbar__bottom.className = navbar__bottom.className.replace("navbar--scroll", "");
    }
   
}
window.onscroll = function() {myFunction()};

