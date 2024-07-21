
document.getElementById('p').style.backgroundColor= 'green'
document.getElementById('p').style.color= 'white'


function multiple (a,b,c){
    let result = a*b*c;
    console.log('Result= ' ,result);
}


multiple(80,97,64);


function sum (a,b,c){
    let result = a+b+c;
    console.log('Result= ' , result);
}


sum(80,97,64);




let btn = document.getElementById('btn');

btn.addEventListener('click' , changeColor);

function changeColor () {
    document.getElementById('p').style.backgroundColor= 'blue';
    document.getElementById('p').style.color= 'yellow';
}





//names

let names = ['Ali', 'Reza' , 'Naser', 'Hasan' , 'Ahmad'];

let namePerson = document.getElementById('namePerson');
let lastNm = document.getElementById('lastNm');
let nextNm = document.getElementById('nextNm');

let index= -1;


nextNm.addEventListener('click' , nextName);

function nextName(){
    index = (index + 1) % names.length;
    namePerson.innerHTML = names[index];
}


lastNm.addEventListener('click' , lastName);

function lastName(){
    index = (index - 1 + names.length) % names.length;
    namePerson.innerHTML = names[index];
}



//2 images

let image = document.getElementById('image');
let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');


nextBtn.addEventListener('click' , nextPhoto);

function nextPhoto() {
    image.src = 'image/beach.avif';
    image.alt = 'beach';
}


backBtn.addEventListener('click' , lastPhoto);

function lastPhoto() {
    image.src = 'image/lake.jpg';
    image.alt = 'lake';
}



//image group

let pictures = ['image/beach.avif', 'image/bridge.jpg' , 'image/lake.jpg', 'image/lavender.avif' , 'image/mountain.jpg' , 'image/river.jpg' , 'image/road.jpg' , 'image/city.jpg']; 

let picture = document.getElementById('picture');
let lastPic = document.getElementById('lastPic');
let nextPic = document.getElementById('nextPic');

let counter = 0;


lastPic.addEventListener('click' , lastPicture);

function lastPicture() {
    counter = (counter - 1 + pictures.length) % pictures.length;
    picture.src = pictures[counter];
}


nextPic.addEventListener('click' , nextPicture);

function nextPicture() {
    counter = (counter + 1) % pictures.length;
    picture.src = pictures[counter];
}










