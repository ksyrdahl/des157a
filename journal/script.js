// Open IIFE
(function(){
    'use strict';
    console.log('reading js');

    var pageTop;

   
    

            window.addEventListener('scroll', function(){

                pageTop = window.pageYOffset;
                
                if (pageTop < 800){
                    document.getElementById("entryNum5").style.opacity = "1";
                    document.getElementById("entryNum4").style.opacity = "0";
                    document.getElementById("entryNum3").style.opacity = "0";
                    document.getElementById("entryNum2").style.opacity = "0";
                    document.getElementById("entryNum1").style.opacity = "0";  
                }
                else if (pageTop > 800 && pageTop < 3500 ){
                    document.getElementById("entryNum5").style.opacity = "0";
                    document.getElementById("entryNum4").style.opacity = "1";
                    document.getElementById("entryNum3").style.opacity = "0";
                    document.getElementById("entryNum2").style.opacity = "0";
                    document.getElementById("entryNum1").style.opacity = "0";
                }
                else if (pageTop > 3500 && pageTop < 4500 ){
                    document.getElementById("entryNum5").style.opacity = "0";
                    document.getElementById("entryNum4").style.opacity = "0";
                    document.getElementById("entryNum3").style.opacity = "1";
                    document.getElementById("entryNum2").style.opacity = "0";
                    document.getElementById("entryNum1").style.opacity = "0";
                }  
                else if (pageTop > 4500 && pageTop < 5500 ){
                    document.getElementById("entryNum5").style.opacity = "0";
                    document.getElementById("entryNum4").style.opacity = "0";
                    document.getElementById("entryNum3").style.opacity = "0";
                    document.getElementById("entryNum2").style.opacity = "1";
                    document.getElementById("entryNum1").style.opacity = "0";
                }    
                else{
                    document.getElementById("entryNum5").style.opacity = "0";
                    document.getElementById("entryNum4").style.opacity = "0";
                    document.getElementById("entryNum3").style.opacity = "0";
                    document.getElementById("entryNum2").style.opacity = "0";
                    document.getElementById("entryNum1").style.opacity = "1";
                }

            });
// Invoke and close IIFE
}())