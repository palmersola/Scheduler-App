const currentDay = moment();
$("#currentDay").text(currentDay.format("lll"));
const hour = moment().hour();
let localData = JSON.parse(localStorage.getItem("time-blocks"));
for (let i = 9; i <= 17; i++) {
  if (localData !== null) {
    $("#data" + i).text(localData[i]);
  }
  if (i < hour) {
    $("#" + i).addClass("past");
  } else if (i == hour) {
    $("#" + i).addClass("present");
  } else {
    $("#" + i).addClass("future");
  }
}
$("button").click(function(event) {
  event.preventDefault();
  let data = {
    9: $("#data9").val(),
    10: $("#data10").val(),
    11: $("#data11").val(),
    12: $("#data12").val(),
    13: $("#data13").val(),
    14: $("#data14").val(),
    15: $("#data15").val(),
    16: $("#data16").val(),
    17: $("#data17").val()
  };
  localStorage.setItem("time-blocks", JSON.stringify(data));
});
