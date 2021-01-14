// display current time using moment JS
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm: A"));
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        localStorage.setItem(time, text);
    })

    // link each div id and add local storage to it
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    console.log("hour9") // works

    $("#hour10 .description").val(localStorage.getItem("hour8"));
    $("#hour11 .description").val(localStorage.getItem("hour9"));
    $("#hour12 .description").val(localStorage.getItem("hour10"));
    $("#hour1 .description").val(localStorage.getItem("hour11"));
    $("#hour2 .description").val(localStorage.getItem("hour12"));
    $("#hour3 .description").val(localStorage.getItem("hour13"));
    $("#hour4 .description").val(localStorage.getItem("hour14"));
    $("#hour5 .description").val(localStorage.getItem("hour15"));


})

