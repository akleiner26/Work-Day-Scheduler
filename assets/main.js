//Set variables for all text blocks
var nineText = document.getElementById("nineText");
var tenText = document.getElementById("tenText");
var elevenText = document.getElementById("elevenText");
var twelveText = document.getElementById("twelveText");
var oneText = document.getElementById("oneText");
var twoText = document.getElementById("twoText");
var threeText = document.getElementById("threeText");
var fourText = document.getElementById("fourText");
var fiveText = document.getElementById("fiveText");

//set variables for buttons
var nineBtn = document.getElementById("nineBtn");
var tenBtn = document.getElementById("tenBtn");
var elevenBtn = document.getElementById("elevenBtn");
var twelveBtn = document.getElementById("twelveBtn");
var oneBtn = document.getElementById("oneBtn");
var twoBtn = document.getElementById("twoBtn");
var threeBtn = document.getElementById("threeBtn");
var fourBtn = document.getElementById("fourBtn");
var fiveBtn = document.getElementById("fiveBtn");

//set object array for every times todos
var tasks = (!tasks) ? {
		nine:"",
		ten:"",
		eleven:"",
		twelve:"",
		one:"",
		two:"",
		three:"",
		four:"",
		five:"",
} : JSON.parse(tasks);

//set variables for text content
nineBtn.textContent = tasks.nine;
tenBtn.textContent = tasks.ten;
elevenBtn.textContent = tasks.eleven;
twelveBtn.textContent = tasks.twelve;
oneBtn.textContent = tasks.one;
twoBtn.textContent = tasks.two;
threeBtn.textContent = tasks.three;
fourBtn.textContent = tasks.four;
fiveBtn.textContent = tasks.five;

//set a variable for the current day
var currentDay = $("#currentDay");
//set variable for current date and time
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

//link a timer to currentday
currentDay.text(now);

//update timer to live
//credit to *1 in README
function update() {
	$(currentDay).html(moment().format('D. MMMM YYYY H:mm:ss a'));
  }
  setInterval(update, 1000);
  update();

//add functions for what to do when buttons are pressed
oneBtn.addEventListener("click",function(){
	tasks.one = oneText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
	return tasks;
})

twoBtn.addEventListener("click",function(){
	tasks.two = twoText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

threeBtn.addEventListener("click",function(){
	tasks.three = threeText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

fourBtn.addEventListener("click",function(){
	tasks.four = fourText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

fiveBtn.addEventListener("click",function(){
	tasks.five = fiveText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

nineBtn.addEventListener("click",function(){
	tasks.nine = nineText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

tenBtn.addEventListener("click",function(){
	tasks.ten = tenText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

elevenBtn.addEventListener("click",function(){
	tasks.eleven = elevenText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})

twelveBtn.addEventListener("click",function(){
	tasks.twelve = twelveText.value;
	localStorage.setItem("tasks",JSON.stringify(tasks));
})


















//write function to save tasks in local storage
function saveTasks(){
	localStorage.setItem(tasks);
}
  

