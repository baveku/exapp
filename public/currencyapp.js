function prepareImportLib(callback) {
  let libs = [];
  libs.forEach((value) => {
    let script = document.createElement("script");
    script.onload = function () {
      //   callback();
    };
    script.src = value;
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

function replacePrice(rate, symbol) {
  let priceDiv = document.getElementById("price");
  let pppp = document.getElementById("__PRICE__");
  let currentPriceStr = pppp.innerHTML;
  let currentPrice = pppp.innerHTML
    .substring(0, currentPriceStr.length - 1)
    .trim();
  priceDiv.removeChild(pppp);
  let cu = document.createElement("p");
  cu.style =
    "border-style: solid; border-width: 1; border-radius:2px; border-color: #f2f2f2; width: 120px;";
  console.log(currentPriceStr);
  let newPrice = (Number(currentPrice) * rate).toFixed(2);
  cu.innerHTML = `${newPrice} ${symbol}`;
  priceDiv.appendChild(cu);

  let im = document.createElement("img");
  im.style = "width: 80px; height: 80px;";
  im.src = "images/vn.png";
  priceDiv.appendChild(im);
}

function fetchRate(base, callback) {
  $.ajax({
    url: `https://api.exchangeratesapi.io/latest?base=${base}&symbols=USD,GBP,EUR,AUD`,
    data: {},
    cache: false,
    type: "GET",
    success: function (response) {},
    error: function (xhr) {},
  });
}

function main() {
  prepareImportLib(function () {
    $.ajax({
      url: "http://ip-api.com/json?fields=currency",
      data: {},
      cache: false,
      type: "GET",
      success: function (response) {
        let countryCode = response.currency;
        fetchRate(countryCode, function (rates) {
          console.log(rates);
          if (rates.countryCode !== undefined) {
            replacePrice(rates.countryCode, countryCode);
          }
        });
      },
      error: function (xhr) {},
    });
  });
}
main();
