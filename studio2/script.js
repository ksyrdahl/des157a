(function () {
    'use strict';
    console.log('reading js');

    window.addEventListener('scroll', function(){

        const pageTop = window.pageYOffset;
        
        if (pageTop < 550){
            document.querySelector("header").style.opacity = "1"; 
        }  
        else{
            document.querySelector("header").style.opacity = "0";
        }

    });

    window.addEventListener('load', function () {

        const posts = document.querySelectorAll('section');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;

        resetPagePosition();

        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 750;

            if (pageTop >postTops[counter]) {
                counter++;
            }

            else if (counter > 1 && pageTop < postTops[counter -1])  {
                counter--;
            }

            if (counter !=  prevCounter){
                document.querySelector('figure img').className = 'sect' + counter;
                prevCounter = counter;
            }
        }); 

        window.addEventListener('resize', function () {
            
            clearTimeout(doneResizing);
            doneResizing  = setTimeout(function  () {

                resetPagePosition();

            }, 500);
        });

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

})();