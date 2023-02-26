(function () {
    'use strict';
    console.log('reading js');



    // makes header title disapear when user scrolls out of the header
    window.addEventListener('scroll', function(){

        const pageTop = window.pageYOffset;
        
        if (pageTop < 550){
            document.querySelector("header").style.opacity = "1"; 
        }  
        else{
            document.querySelector("header").style.opacity = "0";
        }

    });

    // this makes the three lines grow under the sac bridge introduction

    document.querySelector('.trigger').addEventListener('mouseover', function(){
        // from glenda: all the animation using the "animation" shortcut which takes: name, speed, duration and timing-function
        document.querySelector('#thin').style.height ='233px';
        document.querySelector('#thin2').style.height ='294px';
        document.querySelector('#thin3').style.height ='333px';
    })

    document.querySelector('.trigger').addEventListener('mouseout', function(){
        document.querySelector('#thin').style.height ='133px';
        document.querySelector('#thin2').style.height ='194px';
        document.querySelector('#thin3').style.height ='233px';
    })

    // loads the image
    window.addEventListener('load', function () {

        const posts = document.querySelectorAll('section');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;

         // Preloader Script
        const preloader = document.getElementById('preloader');
        preloader.className = 'fadeout';

        // waits until the animation is completed
        preloader.addEventListener('animationend', function () {

        //removes preloader once loaded
        preloader.style.display = 'none';
    });

        resetPagePosition();

        //Runs everytime page is scrolled
        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 750;

            // if user scrolls down page
            if (pageTop >postTops[counter]) {
                counter++;
            }

            // if user scrolls up page
            else if (counter > 1 && pageTop < postTops[counter -1])  {
                counter--;
            }

            // when section changes
            if (counter !=  prevCounter){
                // changes class name of image which activates the animation in the css
                document.querySelector('figure img').className = 'sect' + counter;             

                prevCounter = counter;
            }
        }); 
        // end scroll function


        // runs when window is resized
        window.addEventListener('resize', function () {
            
            clearTimeout(doneResizing);
            // runs after window is resized
            doneResizing  = setTimeout(function  () {

                resetPagePosition();

            }, 500);
        });

        // resests variables and their position which may have changed after resizing
        function resetPagePosition() {
            postTops = [];
            posts.forEach(function (post) {
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
            });

            const pagePosition = window.pageYOffset + 300;
            counter = 0;

            postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

        }
    });
    // end window load function

})();