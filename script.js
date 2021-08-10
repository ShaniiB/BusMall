// do the sanity test.
console.log('sanity');

// the start of the class, holder of my objects that will be applied to my click-y image-y - beginning to get data worth logging.
class fandomAlbum {
    clicks = 0;
    optionShown = 0;
    constructor(name, sub, imgSrc) {
       this.name = name;
       this.sub = sub;
       this.imgSrc = imgSrc;
 }
}
// there should be 20 pictures inside of this object.
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
// set one
picOne.src = fandomObjects[0].imgSrc;
subOne.innerText = fandomObjects[0].name;
// set two
picTwo.src = fandomObjects[1].imgSrc;
subTwo.innerText = fandomObjects[1].name;
// set three
picThree.src = fandomObjects[2].imgSrc;
subThree.innerText = fandomObjects[2].name;
// set four
picFour.src = fandomObjects[3].imgSrc;
subFour.innerText = fandomObjects[3].name;