//set object array for every times todos
var tasks = {
		nine:"",
		ten:"",
		eleven:"",
		twelve:"",
		one:"",
		two:"",
		three:"",
		four:"",
		five:"",
}
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
  
//write ternary that checks if var tasks is populated in local storage
