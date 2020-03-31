

var hamburgermenu = $(".hamburger-menu");
var iconahamburger = $(".fa-bars");
var iconacroce = $(".close");
var visible;


iconahamburger.click(
  function(){
    hamburgermenu.show();
  }
)

iconacroce.click(
  function(){
    hamburgermenu.hide();
  }
)
