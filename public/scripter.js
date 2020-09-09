function prepareImportLib() {
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function replacePrice() {
  setTimeout(() => {
    let priceDiv = document.getElementById("price");
    let pppp = document.getElementById("__PRICE__");
    priceDiv.removeChild(pppp);
    let cu = document.createElement("p");
    cu.style =
      "border-style: solid; border-width: 1; border-radius:2px; border-color: #f2f2f2; width: 120px;";
    cu.innerHTML = "2000$";
    priceDiv.appendChild(cu);

    let im = document.createElement("img");
    im.style = "width: 80px; height: 80px;";
    im.src = "images/vn.png";
    priceDiv.appendChild(im);
  }, 4000);
}

function main() {
  prepareImportLib();
  replacePrice();
}
main();
