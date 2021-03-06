/*!
 * easyFloater
 * easy flash floaters with alternative content for iPad and iPhone 
 * on github:
 * created in 04/09/2010 
 * by: brunomarks (MKT VIRTUAL) 
 * brunomarks@gmail.com
 * uses:Flash Embed - http://flowplayer.org/tools/toolbox/flashembed.html
 * 
 * how to use:
 *   window.load = easyFloater.init({
          width : 600, //your div width in pixels
          height : 620, //your div heigth in pixels
          top : 20, distance of top in pixels
          id : 'floater', 'your flash identification (<embed id="floater">)'
          color : 'red', //your div background color 
          flashVars : {URL_BASE : URL_BASE}, //object with flashvars content
          src : URL_BASE + "swf/floater.swf",
          alternativeBg : URL_BASE + 'imagens/fake_foto.jpg' //bg if iPad or iPhone
        });

 */

var easyFloater = {
  init : function(args){    
      //verifica que se Ipad ou Iphone
      var isMobile = this.what_UA();
      var created = this.createElement(args);      
      if(!isMobile){        
        this.embedFlash(args);                
      }else{        
        this.alternativeContent(args);
      }
  },
  createElement : function(ob){    
    if (document.createElement){      
      document.body.prependChild = function(newChild) {
        this.insertBefore(newChild, this.firstChild);
      };    
      var floater = document.createElement('div');
      floater.setAttribute('id', 'easyFloater');      
      floater.style.backgroundColor = ob.color;      
      floater.style.position = 'absolute';
      floater.style.zIndex = '9999';
      floater.style.width = ob.width+'px';
      floater.style.height = ob.height+'px';
      floater.style.top = ob.top + 'px';
      floater.style.left = '50%';
      floater.style.marginLeft = (-(ob.width/2))+'px';            
      document.body.prependChild(floater);
      return true;
    }
  },  
  embedFlash : function(ob){    
      flashembed("easyFloater", {src: ob.src, w3c: true, wmode: 'transparent'}, ob.flashVars);
  },
  alternativeContent : function(ob){               
        var el = document.getElementById('easyFloater');
        el.style.backgroundColor = 'transparent';
        var closeFloater = document.createElement('div');        
        closeFloater.setAttribute('id', 'right_deprecated');
        closeFloater.style.textAlign = "right"
        closeFloater.innerHTML = '<a onClick="removeFloater()" id="closeFloater"><img style="float:right;" src="imagens/close.png" alt="Fechar" /></a><br/><a target="_blank" href="'+ ob.alternativeLink +'"><img border="0" src="'+ob.alternativeBg+'" /></a>';
        el.appendChild(closeFloater);
  },
  what_UA : function(){ //what user agent?   
		
	var ua = navigator.userAgent.toLowerCase();
	var uMobile = '';	
	uMobile = '';
	uMobile += 'iphone;ipod;ipad;android 1.6;android 1.5';

	// Sapara os itens individualmente em um array
	v_uMobile = uMobile.split(';');
	// percorre todos os itens verificando se eh mobile
	var boolMovel = false;
	for (i=0;i<=v_uMobile.length;i++){		
	    if (ua.indexOf(v_uMobile[i]) != -1){
            boolMovel = true;
        }
	}	
	if (boolMovel == true){
   		return true
    }else{
		return false;
	}

  }  
}

//called by flash - with external interface
function removeFloater(){
  var elem = document.getElementById("easyFloater");
  var father = elem.parentNode;
  var remov = father.removeChild(elem);
  }