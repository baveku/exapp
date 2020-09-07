function foo() {
  document.getElementById("txt").innerHTML =
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>" +
    Math.round(count) +
    "</strong> ogląda teraz ten produkt";
  var t = setTimeout(startTime, 2000);
}
function checkTime(i) {
  if (i < 10) {
    i = i;
  }
  return i;
}
