AOS.init();
function openNavBar(){
    if(document.getElementById("nav-bar").classList.contains('alive-nav')){
      document.getElementById("nav-bar").classList.remove('alive-nav');
    }else{
      document.getElementById("nav-bar").classList.add('alive-nav');
    }
  }
