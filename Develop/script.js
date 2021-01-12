let now = moment()
console.log(now.format("MMMM DD YYYY h:mmA"));

var currentTime = now.format("MMMM DD YYYY h:mmA");
$("currentDay").html(currentTime);

$(".list-group").on("click", "p", function() {
    console.log(this);
  });

