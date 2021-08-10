'use strict'
// begin sanity testing
console.log('Sanity');
//brief styling to body
const body = document.querySelector('body');
body.style.backgroundColor = 'salmon';
// added title to page
const text = document.querySelector('title'); // Header One

// begin class & constructor / objects for fandom BusMall
class fandomAlbum  {
    clicks = 0;
    timesShown =0;
// added the constructor & targetted strings
constructor(name, sub, imgSrc) {
    this.name = name; // name of subject
    this.sub = sub; // brief sub subject
    this.imgSrc = imgSrc; // imagery of subject
 };
}   
// add the variables & creating button functionality here
let clickdOne = null;
let clickdTwo = null;
let allClicks = 0;
const clickLimit = 8;

/*
let button.onclick = function(){  
}
*/

 // begin fandomObjects array list
let fandomObjects = [
    new fandomAlbum('name','sub','./images/2.jpg'),
    new fandomAlbum('name','sub','./images/3.png'), 
    new fandomAlbum('name','sub','./images/4.png'),
    new fandomAlbum('name','sub','./images/5.jpg')
/*    
      new ('','','')
      new ('','','') 
      new ('','','')
      new ('','','') 
      new ('','','')
      new ('','','') 
//    new ('','','')
//    new ('','','') 
//    new ('','','')
      new ('','','') 
*/ 
];

// ref. to elements
const fanHandler = document.getElementById('fandomHandler');
const fanHeader = document.getElementById('fandomHeader');
const fanFooter = document.getElementById('fandomFooter')
const fanResult = document.getElementById('resultsArea');
const fanAlbum = document.getElementById('fandomAlb');
const fanPicOne = document.getElementById('pic-onefan');
const fanNameOne = document.getElementById('name-onefan');
const fanSubOne = document.getElementById('sub-onefan');
const fanPicTwo = document.getElementById('pic-twofan');
const fanNameTwo = document.getElementById('name-twofan');
const fanSubTwo = document.getElementById('sub-twofan');
const fanPicThree = document.getElementById('pic-threefan');
const fanNameThree = document.getElementById('name-threefan');
const fanSubTwoThree = document.getElementById('sub-threefan');

let fanButton = document.getElementById('getResults');

// array loop functionality
for (let otaku = 0; otaku < fandomObjects.length; otaku++ ) {
    console.log(fandomObjects);
}

// this function will generate random pictures from the object list
// generate random images by utilizing the math.floor() function

let anoFandom = function() { // pick from the 4 images
    
let oneOtaku = Math.floor(Math.random()* fandomObjects.length);
let twoOtaku = Math.floor(Math.random()* fandomObjects.length);

// random pick number 1 from fandomObjects
    fanNameOne.innerText = fandomObjects[oneOtaku].name;
    fanSubOne = fandomObjects[oneOtaku].sub;  
    fanPicOne.src = fandomObjects[oneOtaku].imgSrc;
    clickdOne = fandomObjects[oneOtaku];

// random pick number 2 from fandomObjects
    fanNameTwo.innerText = fandomObjects[twoOtaku].name;
    fanSubTwo.innerText = fandomObjects[twoOtaku].sub;     
    fanPicTwo.src = fandomObjects[twoOtaku].imgSrc;

// random pick number 3 from fandomObjects

// random pick number 3 from fandomObjects

// 
};
// calculating the clicks for the final results
// event onClicks
function clickAgeddon() {

} 

anoFandom();
