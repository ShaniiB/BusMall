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
 }
}   
// add the variables & creating button functionality here
let clickdOne = null;
let clickdTwo = null;
let clickdThree = null;
let allClicks = 0;
const clickLimit = 8;

/*
let button.onclick = function(){  
}
*/

 // begin fandomObjects array list
let fandomObjects = [
    new fandomAlbum('name','sub',''),
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
console.log(fandomObjects);
// ref. to elements
const fanHandler = document.getElementById('fandomHandler');
const fanHeader = document.getElementById('fandomHeader');
const fanFooter = document.getElementById('fandomFooter')
const fanResult = document.getElementById('resultsArea');
const fanAlbum = document.getElementById('fandomAlb');

let fanPicOne = document.getElementById('pic-onefan');
let fanNameOne = document.getElementById('name-onefan');
let fanSubOne = document.getElementById('sub-onefan');
let fanPicTwo = document.getElementById('pic-twofan');
let fanNameTwo = document.getElementById('name-twofan');
let fanSubTwo = document.getElementById('sub-twofan');
let fanPicThree = document.getElementById('pic-threefan');
let fanNameThree = document.getElementById('name-threefan');
let fanSubThree = document.getElementById('sub-threefan');

let fanButton = document.getElementById('getResults');

// array loop functionality
//for (let otaku = 0; otaku < fandomObjects.length; otaku++ ); {
//    console.log(fandomObjects);


// this function will generate random pictures from the object list
// generate random images by utilizing the math.floor() function

let anoFandom = function() { // pick from the 4 images
    
let oneOtaku = Math.floor(Math.random()* fandomObjects.length);
let twoOtaku = Math.floor(Math.random()* fandomObjects.length);
let threeOtaku = Math.floor(Math.random()* fandomObjects.length);

// random pick number 1 from fandomObjects
    fanNameOne = fandomObjects[oneOtaku].name;
    fanSubOne = fandomObjects[oneOtaku].sub;  
    fanPicOne = fandomObjects[oneOtaku].imgSrc;
    clickdOne = fandomObjects[oneOtaku];

// random pick number 2 from fandomObjects
    fanNameTwo = fandomObjects[twoOtaku].name;
    fanSubTwo = fandomObjects[twoOtaku].sub;     
    fanPicTwo = fandomObjects[twoOtaku].imgSrc;
    clickdTwo = fandomObjects[twoOtaku];

// random pick number 3 from fandomObjects
    fanNameThree = fandomObjects[threeOtaku].name;
    fanSubThree = fandomObjects[threeOtaku].sub;     
    fanPicThree = fandomObjects[threeOtaku].imgSrc;
    clickdThree = fandomObjects[threeOtaku];
// random pick number 3 from fandomObjects

// 
};
// calculating the clicks for the final results
// event onClicks
function clickAgeddon(event) {
let allClicks = EventTarget;

} 

anoFandom();
