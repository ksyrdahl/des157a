(function () {

    'use strict';
    console.log('reading js');

    document.querySelector('.close').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
        document.getElementById('myform').reset();
    });

    document.addEventListener('keydown', function (event){
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    });


    const myForm = document.querySelector('#myform');

    const freshTips = document.querySelector('#freshTips');

    myForm.addEventListener('submit',function(event){
        event.preventDefault(); 
        document.getElementById('overlay').className = 'showing';
        const vehicle = document.querySelector('#vehicle').value;
        const adj1 = document.querySelector('#adj1').value;
        const verb1 = document.querySelector('#verb1').value;
        const verbing1 = document.querySelector('#verbing1').value;
        const verbing2 = document.querySelector('#verbing2').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb2 = document.querySelector('#verb2').value;

        const myText =`In UC Davis, you don't need a <strong>${vehicle}</strong> to get around campus you just need a <strong>${adj1}</strong> bike. After class you can go to the MU or the Silo to <strong>${verb1}</strong>. The arboretum is a good place to relax by watching the ducks <strong>${verbing1}</strong> & the squirrels <strong>${verbing2}</strong>. But beware of the <strong>${adj2}</strong> turkeys they might <strong>${verb2}</strong> you out of the arboretum.`;

        freshTips.innerHTML = myText;

        const splitText = freshTips.innerHtml.split("");

        console.log(splitText);

        // for(let i=0; i < splitText.length; i++){
        //     myText.innerHTML += "<span>"+ splitText[i] + "</span>";
        //     freshTips.innerHTML = myText;
        // }

        // let char = 0;
        // let timer = setInterval(onTick, 50);

        // function onTick(){
        //     const span = myText.querySelectorAll('span')[char];
        //     span.classList.add('fade');
        //     char++
        //     if(char === splitText.length){
        //         complete();
        //         return;
        //     }
        // }

        // function complete(){
        //     clearInterval(timer);
        //     timer = null;
        // }

        // freshTips.innerHTML = myText;
    }); 

        document.querySelector('#trigger').addEventListener('mouseover', function(){
            // from glenda: all the animation using the "animation" shortcut which takes: name, speed, duration and timing-function
            document.querySelector('#wheelL').style.animation ='rotate 2s linear infinite';
            document.querySelector('#wheelR').style.animation ='rotate 2s linear infinite';
        })

        document.querySelector('#trigger').addEventListener('mouseout', function(){
            // from glenda: pause the animation-play-state
            document.querySelector('#wheelL').style.animationPlayState ='paused';
            document.querySelector('#wheelR').style.animationPlayState ='paused';
        })

})();