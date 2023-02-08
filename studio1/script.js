(function () {

    'use strict';
    console.log('reading js');

    document.querySelector('.open').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function (event){
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    });


    const myForm = document.querySelector('#myform');

    const freshTips = document.querySelector('#freshTips');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const vehicle = document.querySelector('#vehicle').value;
        const adj1 = document.querySelector('#adj1').value;
        const verb1 = document.querySelector('#verb1').value;
        const verbing1 = document.querySelector('#verbing1').value;
        const verbing2 = document.querySelector('#verbing2').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb2 = document.querySelector('#verb2').value;
        let myText;


        if(vehicle == ''){
            myText ="Please provide a vehicle"
            document.querySelector('#vehicle').focus();
        }
        else if(adj1 ==''){
            myText ="Please provide an adjective"
            document.querySelector('#adj1').focus(); 
        }
        else if(verb1 ==''){
            myText ="Please provide a verb"
            document.querySelector('#verb1').focus(); 
        }
        else if(verbing1 ==''){
            myText ="Please provide a verb ending in ing"
            document.querySelector('#verbing1').focus(); 
        }
        else if(verbing2 ==''){
            myText ="Please provide a verb ending in ing"
            document.querySelector('#verbing2').focus(); 
        }
        else if(adj2 ==''){
            myText ="Please provide an adjective"
            document.querySelector('#adj2').focus(); 
        }
        else if(verb2 ==''){
            myText ="Please provide a verb"
            document.querySelector('#verb2').focus(); 
        }
        else{
            myText =`In UC Davis, you don't need a ${vehicle} to get around campus you just need a ${adj1} bike. After class you can go to the MU or the Silo to ${verb1}. The arboretum is a good place to relax by watching the ducks ${verbing1} & the squirrels ${verbing2}. But beware of the ${adj2} turkeys they might ${verb2} you out of the arboretum.`; 
            document.querySelector('#vehicle').value = ''; 
            document.querySelector('#adj1').value = ''; 
            document.querySelector('#verb1').value = ''; 
            document.querySelector('#verbing1').value = '';
            document.querySelector('#verbing2').value = ''; 
            document.querySelector('#adj2').value = ''; 
            document.querySelector('#verb2').value = '';  
        }

        freshTips.innerHTML = myText; 
    })  

})();