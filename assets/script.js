// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    function save(event) {
        var key =$($(event.target).parents("div")).attr('id');
        console.log(key);
        localStorage.setItem(key, "");
    };
    var saveButton = $('.saveBtn');
    saveButton.on('click', save);
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    var timeBlock = $(document.querySelectorAll(".time-block"));
    console.log(timeBlock);

    function simpleTenses(x) {
        for(i=0; i<timeBlock.length; i++) {
            var currentTime = x;
            var hourString = timeBlock[i].id;
            var string = hourString.toString();
            var hour = string.slice(5);
            var hourNumber = JSON.parse(hour);
            if( hourNumber < currentTime) {
                $(timeBlock[i]).removeClass("present");
                $(timeBlock[i]).removeClass("future");
                $(timeBlock[i]).addClass("past");
            } else if ( hourNumber == currentTime) {
                $(timeBlock[i]).removeClass("past");
                $(timeBlock[i]).removeClass("future");
                $(timeBlock[i]).addClass("present");
            } else if ( hourNumber > currentTime) {
                $(timeBlock[i]).removeClass("past");
                $(timeBlock[i]).removeClass("present");
                $(timeBlock[i]).addClass("future");
            };
        };
    };



    function currentHour () {
        setInterval(function getTime() {
            var time = dayjs().format('HH');
            simpleTenses(time);
        }, 1000)
    }; 
    
    currentHour();


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    //Current Date
    function currentDate() {
        var date = $('#currentDay');
        var today = dayjs().format('dddd, MMM Do');
        setInterval(function getDate () {
            date.html(today);
        }, 1000);
    };
    
    currentDate();

//   });
  