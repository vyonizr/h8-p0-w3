var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung"); // Starts on input[1], deletes input[1] and input[2], adds 2 elements to input[1] and input[2]
  input.splice(4, 1, "Pria", "SMA Internasional Metro"); // Starts on input[4], deletes input[4], adds 2 elements to input[4] and input [5]
  console.log(input);

  var inputIndex3Split = input[3].split("/");
  var bulan = inputIndex3Split[1];
  switch(bulan) {
    case "01": { var bulan = "Januari";break; }
    case "02": { var bulan = "Februari"; break; }
    case "03": { var bulan = "Maret"; break; }
    case "04": { var bulan = "April"; break; }
    case "05": { var bulan = "Mei"; break; }
    case "06": { var bulan = "Juni"; break; }
    case "07": { var bulan = "Juli"; break; }
    case "08": { var bulan = "Agustus"; break; }
    case "09": { var bulan = "September"; break; }
    case "10": { var bulan = "Oktober"; break; }
    case "11": { var bulan = "November"; break; }
    case "12": { var bulan = "Desember"; break; }
    default: { var bulan = "Bulan tidak terdefinisi"; break; }
  }
  console.log(bulan); // prints "Mei"

  console.log(inputIndex3Split.sort(function(a, b){return b-a})); // 'sort' method contains a descending function

  inputIndex3Split = input[3].split("/"); // reassigns the value back into ["21", "05", "1989"]
  console.log(inputIndex3Split.join("-"));

  console.log(input[1].slice(0, 14)); // limits the name into first 15 characters
}

dataHandling2(input);