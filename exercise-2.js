//input "hello world!"
//output !dlrow olleh"

var str = "hello world!"
var reversed = "";


for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);