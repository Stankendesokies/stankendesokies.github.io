function openNav() {
    document.getElementsByClassName("sidebar").style.width = "200px";
    document.getElementsByClassName("main_box").style.marginLeft = "200px";
    document.getElementsByClassName("top_bar").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementsByClassName("sidebar").style.width = "0";
    document.getElementsByClassName("main_box").style.marginLeft= "0";
    document.getElementsByClassName("top_bar").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }