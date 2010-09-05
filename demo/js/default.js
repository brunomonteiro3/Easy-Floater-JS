var URL_BASE = 'http://localhost/easyFloater/demo/';

var yoursite = {
  init : function(){
        easyFloater.init({
          width : 600, //your div width in pixels
          height : 620, //your div heigth in pixels
          top : 20, //distance of top in pixels
          id : 'floater', //'your flash identification (<embed id="floater">)'
          color : 'transparent', //your div background color 
          flashVars : {URL_BASE : URL_BASE}, //object with flashvars content
          src : URL_BASE + "swf/floater.swf",
          alternativeBg : URL_BASE + 'imagens/alternative.jpg' //bg if iPad or iPhone
        });  
  }
}
window.load = yoursite.init();
