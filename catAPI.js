function getCat() {
  console.log("getting a kitty ready for you");
  let xhttp = new XMLHttpRequest(); // create new xmlhttp object
  xhttp.onreadystatechange = function() {
    if (this.readyState == 3 && this.status == 200) {
      // this is context this is refering to xhttp
      document.getElementById("catAPI").appendChild =
        "<p>Awaiting Response to Our Request</p>";
    }

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText)[0];
      console.log(this.responseBody);
      document.getElementById("kitty").src = response.url;
      // document.getElementById('kitty').alt=
    }

    if (this.readyState == 4 && this.status == 404) {
      document.getElementById("kitty").innerHTML = "<p>Sorry Not Found </p>";
    }
  }; // what function to run when a request is made
  xhttp.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?breed_id=beng",
    true
  ); // setting up the request; the type, the url and whether its asycronous
  xhttp.send();
}

// POST REQUEST
// xhttp.open('POST','POST_URL',async_or_nah?)
// xhttp.send(put_data_here) //unlike the get open, the post open has the data it wants to send as a parameter
