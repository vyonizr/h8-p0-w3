//input "hello world!"
//output !dlrow olleh"

function balikKata(input){
  var reversed = "";

  for (var i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  return reversed;
}


console.log(balikKata("hello world!"));