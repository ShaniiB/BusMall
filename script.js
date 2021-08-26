'use strict'

let imageSelectionOne = document.getElementById('imageSelectionOne');
let imageSelectionTwo = document.getElementById('imageSelectionTwo');
let imageSelectionThree = document.getElementById('imageSelectionThree');
let listOfData = document.getElementById('listOfData');

let imageArray=[];
let maxClicks = 25;
let totalClicks = 0;
let imageUsed = [1, 2, 3, 4, 5, 6];
let showingList = false;
let nameArray = [];
let voteArray =[];
let finalChart;

// begin constructor
function ItemImage(name){
 this.name = name;
 this.filepath = `img/${name}.jpg`;
 this.timesShown = 0;
 this.timesSelected = 0;
 imageArray.push(this);
}

// new images
new ItemImage('1');
new ItemImage('2');
new ItemImage('3');
new ItemImage('4');
new ItemImage('5');
new ItemImage('6');
new ItemImage('7');
new ItemImage('8');
new ItemImage('9');
new ItemImage('10');
new ItemImage('11');
new ItemImage('12');
new ItemImage('13');
new ItemImage('14');
new ItemImage('15');
new ItemImage('16');
new ItemImage('17');
new ItemImage('18');
new ItemImage('19');
new ItemImage('20');
new ItemImage('21');

// data and fucntion
var data = {
 labels: nameArray,
 datasets: [{
    label: 'Results',
    data: voteArray,
    backgroundColor: [
      '#B18ABD',
      '#F6E8DE',
      '#FEC8D8',
      '#D4E2ED',
      '#C9DECE',

      '#B18ABD',
      '#F6E8DE',
      '#FEC8D8',
      '#D4E2ED',
      '#C9DECE',

      '#B18ABD',
      '#F6E8DE',
      '#FEC8D8',
      '#D4E2ED',
      '#C9DECE',

      '#B18ABD',
      '#F6E8DE',
      '#FEC8D8',
      '#D4E2ED',
      '#C9DECE',

      '#B18ABD',
      '#F6E8DE',
      '#FEC8D8',
    ],
    hoverBackgroundColor: [
      '#FCE7BA', '#FCE7BA', '#FCE7BA', '#FCE7BA',
      '#FCE7BA', '#FCE7BA', '#FCE7BA', '#FCE7BA',
      '#FCE7BA', '#FCE7BA', '#FCE7BA', '#FCE7BA', 
      '#FCE7BA', '#FCE7BA', '#FCE7BA', '#FCE7BA',
      '#FCE7BA', '#FCE7BA', '#FCE7BA', '#FCE7BA',
      '#FCE7BA', '#FCE7BA' 
    ]
 }]
};
function drawChart() {
 let ctx = document.getElementById('voting-chart').getContext('2d');
 finalChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutElastic'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 20,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
 });
 imageSelectionOne.removeEventListener('click', handleImageSelection);
 imageSelectionTwo.removeEventListener('click', handleImageSelection);
 imageSelectionThree.removeEventListener('click', handleImageSelection);
}
// the local storage functionality
function checkLocalStorage(){
 if (localStorage.imageArrayStorage) {
    let retrievedImageArrayStorage = localStorage.getItem('imageArrayStorage');
    let parsedImageArrayStorage = JSON.parse(retrievedImageArrayStorage);
    imageArray = parsedImageArrayStorage;
    showRandomImage(imageSelectionOne);
    showRandomImage(imageSelectionTwo);
    showRandomImage(imageSelectionThree);
 } else {
    showRandomImage(imageSelectionOne);
    showRandomImage(imageSelectionTwo);
    showRandomImage(imageSelectionThree);
 }
}
// creating the storage
function createLocalStorage(){
 let stringifiedImageArray = JSON.stringify(imageArray);
 localStorage.setItem('imageArrayStorage', stringifiedImageArray);
}
// show images
function showRandomImage(socketEl){
 // generate a random number
 let randomIndex = Math.floor(Math.random() * imageArray.length);
 while (imageUsed.includes(randomIndex)){
    randomIndex = Math.floor(Math.random() * imageArray.length);
 }
 // get a src
 socketEl.src = imageArray[randomIndex].filepath;
 // assign the alt
 socketEl.alt = imageArray[randomIndex].name;
 // increment times shown
 imageArray[randomIndex].timesShown++;
 // Replaces items in used image array
 imageUsed.shift();
 imageUsed.push(randomIndex);
}
function chartData(){
 for (let i=0; i<imageArray.length; i++){
    nameArray.push(imageArray[i].name);

    voteArray.push(imageArray[i].timesSelected);
 }
}
// handler
function handleImageSelection(event){
 console.log(event.target.alt);
 totalClicks++;

 for (let i=0; i < imageArray.length; i++) {
    if(event.target.alt === imageArray[i].name) {
      imageArray[i].timesSelected++;
    }
 }
 if (totalClicks < maxClicks) {
    showRandomImage(imageSelectionOne);
    showRandomImage(imageSelectionTwo);
    showRandomImage(imageSelectionThree);
 } else {
    chartData();
    drawChart();
    createLocalStorage();
 }
}
// Event listener
imageSelectionOne.addEventListener('click', handleImageSelection);
imageSelectionTwo.addEventListener('click', handleImageSelection);
imageSelectionThree.addEventListener('click', handleImageSelection);
checkLocalStorage();