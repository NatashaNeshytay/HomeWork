for (let i = "#"; i.length <= 7; i+="#") {   
    console.log(i);
}

let str = "";
while (str.length<7) {
    console.log (str+="#");
}

let slash = "#";
let space = " ";
let result = "";
let row = true;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((j + row) % 2 == 0) {
            result += space;
        } else {
            result += slash;
        }
    }
   
    console.log(result);
    result = "";
    row = ! row;
}





// let num;

do {
    num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num != null);