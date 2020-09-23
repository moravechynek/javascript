//alert('Toto pochází z externího souboru');
// var nadpis - starší deklarace proměnné v JS
let nadpis = document.getElementById('nadpis');
let button = document.getElementById('btn');
let main = document.getElementById('main');
let zasady = document.getElementById('zasady');
let pozor = document.getElementById('pozor');
let img = document.querySelector('img');

img.addEventListener('mouseover', function(){
    this.src = 'manka.jpg';
})

img.addEventListener('mouseout', function(){
    this.src = 'rumcajs.jpg';
})

nadpis.addEventListener('click', function(){
    nadpis.innerHTML = 'Ahoj <i>Karle</i>';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-info');
    nadpis.classList.remove('text-uppercase');
});

button.addEventListener('mouseover', function(){
    button.innerHTML = '<p>☺☺☺</p><p>☺☺☺</p>';
    button.style.color = 'black';
    button.style.backgroundColor = 'black';
});

main.addEventListener('mouseover', function(){
    main.style.backgroundColor = 'lightblue';
});

main.addEventListener('mouseout', function(){
    main.style.backgroundColor = 'white';
})

/*
    main.addEventListener('mouseout', function(){
/// this.style.backgroundColor = 'white';
    })
*/

zasady.addEventListener('mouseover', function(){
    zasady.innerHTML = '<p>☺☺☺</p><p>☺☺☺</p>';
    zasady.style.color = 'black';
    zasady.style.backgroundColor = 'black';
});

pozor.addEventListener('mouseover', function(){
    pozor.innerHTML = '<p>☺☺☺</p><p>☺☺☺</p>';
    pozor.style.color = 'black';
    pozor.style.backgroundColor = 'black';
});



