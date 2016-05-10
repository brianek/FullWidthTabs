(function ($) {
    
    $(document).ready(function(){
        var windowHeight=$(window).height();
        $('#emf-container-outer').css({'min-height':windowHeight+"px"});
    
        var windowHeight=window.innerHeight;
        $('#emf-container-outer').css({'min-height':windowHeight+"px"});
        $('#emf-container-outer').css({"width":'100%'});
        $("#emf-container-outer").css({"background-size":'cover'});
        $("#emf-container-outer").css({"background-repeat":'no-repeat'});

 
         $('#emf-container-outer').css({'min-height':windowHeight+"px"});
    
        
        
        $("#emf-li-56,#emf-li-57").wrapAll("<div class='name-and-date' />");
         
        $("#emf-container-outer").append('<div class="footer-built">Form built with EmailMeForm&trade;</div>');      
        
        
        });
        
    
    
    
        
    
    
 })(jQuery);
