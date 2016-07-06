
 /////////////Animation

function startAd() {
//    
    
    /*========================  CLICKTAG  =============================*/
    
    // var clickTag = "http://www.merrilledge.com/";
    // var adBtn = document.getElementById("ad");

    // function OPENW(){
    //     window.open(clickTag);
    // }

    // adBtn.addEventListener("click", OPENW, false);
    /*================================================================*/
    var screen = document.getElementById('screen');
    
    //Set positions and attributes
        TweenLite.set(txt1, {opacity:1, top:62, left:62});
        TweenLite.set(txt2, {opacity:0, left: 320, top:123});
        TweenLite.set(cta, {opacity:0});
        

      //END Set positions and attributes
    
    var adContainer = document.getElementById("container");
    var ctaHover = document.getElementById("ctaHover");
    
    TweenLite.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();
    
    function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }
    
    function ctaOver(){
        TweenLite.to(shine, .35, {left:129, ease:Sine.easeIn});

    }
    
    function ctaOut(){
        TweenLite.to(shine, 0, {left:-94, ease:Sine.easeIn});
        
        
    }
}



function init(){
 setTimeout (function(){animation1()}, 100);
};

function animation1(){
    
    TweenMax.staggerTo(".letterOrder", 0.1, {delay:1.1, opacity:1, ease:Sine.easeIn}, 0.1); 
    TweenMax.staggerTo(".letterOrder", 0.1, {delay:1.3, autoAlpha: 0, opacity:0, ease:Sine.easeIn},0.1); 
    TweenLite.to(txt2, 0.5, {delay:1.6, opacity:1, left:24, ease: Back.easeOut.config(1)});
    TweenLite.to(cta, 0.2, {delay:2.1, opacity:1, ease:Sine.easeIn});
    TweenLite.to(shine, 0.35, {delay:2.4,left:129, ease:Sine.easeIn});
   
};

