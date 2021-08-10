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
let clickOne = null;
let clickTwo = null;
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
    new fandomAlbum('name','sub','./images/5.jpg'),
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

// array loop functionality
for (let otaku = 0; otaku < fandomObjects.length; otaku++ ) {
    console.log(fandomObjects);
}

// this function will generate random pictures from the object list
// generate random images by utilizing the math.floor() function

let anoFanDom = function() { // pick from the 4 images
    
    oneFandomOtaku = math.floor(math.random()*fandomObjects.length);
    twoFandomOtaku = math.floor(math.random()*fandomObjects.length);
}
// 
    fanPicOne.src = fandomObjects[oneFandomOtaku];
    fanPicTwo.src = fandomObjects[oneFandomOtaku];


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