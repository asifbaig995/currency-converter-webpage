const button = document.getElementById("convert");

button.addEventListener("click", () => {

  convertCurrency()
    .then((message) => {
      document.getElementById("result").innerHTML = message;
    })

    .catch((error) => {
      document.getElementById("result").innerHTML = error;
    });

});



function convertCurrency() {

  return new Promise(async (resolve, reject) => {

    const amount = document.getElementById("amount").value;

    const currency = document.getElementById("currency").value;



    if (amount === "" || amount <= 0) {

      reject("Please enter valid amount");

      return;
    }



    try {

      // PUT YOUR API URL HERE
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      )    

      const data = await response.json();



      const rate = data.rates[currency];



      const result = amount * rate;



      resolve(

        amount + " USD = " +

        result.toFixed(2) + " " + currency

      );

    }

    catch (error) {

      reject("Error fetching currency data");

    }

  });

}