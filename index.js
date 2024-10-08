function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main_box").style.marginLeft = "200px";
    document.getElementById("top_bar").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main_box").style.marginLeft= "0";
    document.getElementById("top_bar").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }