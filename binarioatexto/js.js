function convert(){
  var input = document.querySelector("input").value;
  var output = document.querySelector("#output");
  output.innerHTML = "";
  for (var i = 0; i < input.length; i++){
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
}