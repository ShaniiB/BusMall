// do the sanity test.
console.log('sanity');
// a little styling through DOM targetted at the Body.
const body = document.querySelector('body');
body.style.backgroundColor = 'darkseagreen';
// the start of the class, holder of my objects that will be applied to my click-y image-y - beginning to get data worth logging.
class fandomAlbum {
    clicks = 0;  // keep track of user clicks for results
    optionShown = 0; // totalling how many times the image was shown
    constructor(name, sub, imgSrc) {
       this.name = name;
       this.sub = sub;
       this.imgSrc = imgSrc;
 }
}
// variables that'll help us in collecting data
let one = null;
let two = null;
let three = null;
let four = null;
let totalClicks = 0;
const limitedClicks =0 ; 

// this index will holw 20 pictures
let fandomObjects = [
   new fandomAlbum('Uzu','MHA','media/images/2.jpg'),
   new fandomAlbum('Maki','MHA','media/images/3.png'),
   new fandomAlbum('Maki','MHA','media/images/4.png'),
   new fandomAlbum('Uzu', 'MHA', 'media/images/5.jpg')
];

// using DOM by creating the 4 holders-of-the-apoc
// set one
   let nameOne = document.getElementsByClassName('name-one');
   let picOne = document.getElementById('pic-one');
   let subOne = document.getElementById('sub-one');
// set two
   let nameTwo = document.getElementsByClassName('name-two');
   let picTwo = document.getElementById('pic-two');
   let subTwo = document.getElementById('sub-two');
// set three
   let nameThree = document.getElementsByClassName('name-three');
   let picThree = document.getElementById('pic-three');
   let subThree = document.getElementById('sub-three');
// set four
   let nameFour = document.getElementsByClassName('name-four');
   let picFour = document.getElementById('pic-four');
   let subFour = document.getElementById('sub-four');

// give a value to my Objects using a function.  
for (let otaku = 0; otaku < fandomObjects.length; otaku++) {
    console.log(fandomObjects[0]);
}   
// set for picture one
picOne.src = fandomObjects[0].imgSrc;
subOne.innerText = fandomObjects[0].name;
// set for picture two
picTwo.src = fandomObjects[1].imgSrc;
subTwo.innerText = fandomObjects[1].name;
// set for picture three
picThree.src = fandomObjects[2].imgSrc;
subThree.innerText = fandomObjects[2].name;
// set for picture four
picFour.src = fandomObjects[3].imgSrc;
subFour.innerText = fandomObjects[3].name;

// adding the math.floor() to trigger the randomizer, make sure between the 4 images - no duplicates
function beginFandom() {// pick an object from the index, set up your loops
   oneFandom = math.floor(math.random() * fandomObjects.length);

 // add a loop for each picture potentially?
 // make click-a-thon til calculations are completed
 // results will be given on final click, log in console
 // implement an onclick display, giving access to the button
 // that button will upon click will trigger a (potential) onload event
 // when onload is triggered, load in a graph of their results.
 //
 //
 //
 //
 //
 //
 // START CHARTS. JS HERE
   

   
}
