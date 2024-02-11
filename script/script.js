
const mainSection = document.getElementById('main-section');
const section4 = document.createElement('section');
section4.innerHTML = `
<h1> fourth section added</h1>
<ul class ="dresh-ul">
<li> new dreesh</li>
<li> new wathc</li>
<li> leptop</li>
</ul>
`;

const sectionUL = document.getElementById('section-3');
// console.log(sectionUL.parentNode.parentNode)
// console.log(sectionUL.childNodes[3].childNodes)


const title4 = document.querySelector('.section-title');
const h2 = document.createElement('h2');
h2.innerText = 'New build up my landing page in js';
title4.appendChild(h2);


mainSection.appendChild(section4);
const section5 = document.createElement('section');
section5.innerHTML = `
<h1> fourth section added</h1>
<ul class ="dresh-ul">
<li> new dreesh</li>
<li> new wathc</li>
<li> leptop</li>
</ul>
`;
mainSection.appendChild(section5);

const sectionOne = document.getElementById('section-1');
const h1 = document.createElement('h1');
h1.innerText = 'this is our fev'
sectionOne.appendChild(h1);
h1.style.fontSize = '20px'


const ul1  =document.getElementById('ul1');
const li = document.createElement('li');
li.innerText = 'hi';
ul1.appendChild(li);

const sections = document.getElementsByTagName('section');
for( const section of sections ){
    section.style.backgroundColor = 'orange';
    section.style.borderRadius = '15px';
    section.style.padding = '20px';
    section.style.margin = ' 20px auto';
    section.style.width = '80%'
};

const secondSection = document.getElementById('section-2');
secondSection.style.textAlign = 'center';
secondSection.style.backgroundColor = 'blue';

const sectionTitles = document.getElementsByClassName('section-title');
for(let sectionTitle of sectionTitles){
    sectionTitle.style.fontSize = 'bold';
    // sectionTitle.style.color = 'red'
};
const queryTitles = document.querySelectorAll('h1');
for(let queryTitle of queryTitles){
    queryTitle.style.border = '1px solid white'

}


// -Event handler click other way-----------------------


// second way----
function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}

// third way --
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleBtn(){
    document.body.style.backgroundColor = 'purple'
}

const makeWhite = document.getElementById('make-white');
 makeWhite.onclick = white;

 function white(){
    document.body.style.backgroundColor = 'white';
 }


//  option 4---------

const goldenRodBtn = document.getElementById('make-goldenrod');
goldenRodBtn.addEventListener('click', goldenrod)

function goldenrod(){
    document.body.style.backgroundColor = 'goldenrod'
}

// option 4 another---------

const tomato = document.getElementById('make-steelblue');
tomato.addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato'
})

// option 4 Final ----------------------------====================

document.getElementById('make-sky').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})