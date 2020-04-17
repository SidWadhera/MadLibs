let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
  var inputs = document.getElementsByTagName("input");
  for(i in inputs) {
    if(inputs[i].value == "") {
      return alert("Make sure you fill out every field");
    }
  }
  for(let i = 0; i < 19; i = i + 1) {
    document.getElementById("word" + i) = document.getElementById("word" + i + "Entry")
  }



  document.getElementById("results").style.display = "block";
}