// Open IIFE
(function(){
    'use strict';
    console.log('reading js');

    var pageTop;

   
    

            window.addEventListener('scroll', function(){

                pageTop = window.pageYOffset;
                
                if (pageTop < 700){
                    document.getElementById("entryNum3").style.opacity = "1";
                    document.getElementById("entryNum2").style.opacity = "0";  
                }
                else if (pageTop > 800 && pageTop < 1700 ){
                    document.getElementById("entryNum3").style.opacity = "0";
                    document.getElementById("entryNum2").style.opacity = "1";
                    document.getElementById("entryNum1").style.opacity = "0";
                }    
                else{
                    document.getElementById("entryNum1").style.opacity = "1";
                    document.getElementById("entryNum2").style.opacity = "0";
                }

            });
// Invoke and close IIFE
}())