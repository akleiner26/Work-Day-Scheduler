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
var textArr = [nineText, tenText, elevenText, twelveText, oneText, twoText, threeText, fourText, fiveText];


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
var allBtns = document.querySelector(".saveBtn");
var btnArray = [nineBtn, tenBtn, elevenBtn, twelveBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn]

//set variables for time sections
var nineTime = document.getElementById("nineTime");
var tenTime = document.getElementById("tenTime");
var elevenTime = document.getElementById("elevenTime");
var twelveTime = document.getElementById("twelveTime");
var oneTime = document.getElementById("oneTime");
var twoTime = document.getElementById("twoTime");
var threeTime = document.getElementById("threeTime");
var fourTime = document.getElementById("fourTime");
var fiveTime = document.getElementById("fiveTime");


//set object array for every times todos
var savedTasks = localStorage.getItem("tasks");
var tasks = (!savedTasks) ? {
		nine:"",
		ten:"",
		eleven:"",
		twelve:"",
		one:"",
		two:"",
		three:"",
		four:"",
		five:"",
} : JSON.parse(savedTasks);

var objArray = [tasks.nine, tasks.ten, tasks.eleven, tasks.twelve, tasks.one, tasks.two, tasks.three, tasks.four, tasks.five];

//set variables for text content
nineText.textContent = tasks.nine;
tenText.textContent = tasks.ten;
elevenText.textContent = tasks.eleven;
twelveText.textContent = tasks.twelve;
oneText.textContent = tasks.one;
twoText.textContent = tasks.two;
threeText.textContent = tasks.three;
fourText.textContent = tasks.four;
fiveText.textContent = tasks.five;

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
allBtns.addEventListener("click", function(){
	for (var i = 0; i <= btnArray.length; i++){
		objArray[i]=textArr[i].value;
		localStorage.setItem("tasks",JSON.stringify(tasks));
		return objArray[i];
	}
})
// oneBtn.addEventListener("click",function(){
// 	tasks.one = oneText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// 	return tasks;
// })

// twoBtn.addEventListener("click",function(){
// 	tasks.two = twoText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// threeBtn.addEventListener("click",function(){
// 	tasks.three = threeText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// fourBtn.addEventListener("click",function(){
// 	tasks.four = fourText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// fiveBtn.addEventListener("click",function(){
// 	tasks.five = fiveText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// nineBtn.addEventListener("click",function(){
// 	tasks.nine = nineText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// tenBtn.addEventListener("click",function(){
// 	tasks.ten = tenText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// elevenBtn.addEventListener("click",function(){
// 	tasks.eleven = elevenText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

// twelveBtn.addEventListener("click",function(){
// 	tasks.twelve = twelveText.value;
// 	localStorage.setItem("tasks",JSON.stringify(tasks));
// })

function setColor(){
	textArr.forEach((block, i) => { const hr = i+9; $(block).addClass("past");   })
	for(var i = 0; i < textArr.length; i++){
		const hr = i + 9;
		const now = moment().hour();
		const block = textArr[i];
		const className = (hr < now) ? "past" : (hr === now) ? "present" : "future";
		$(block).addClass(className);
	}

}

setColor();
//write function to save tasks in local storage
function saveTasks(){
	localStorage.setItem(tasks);
}
  

