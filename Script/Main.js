let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = " ";

let arr = Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML== 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else if (e.target.innerHTML == 'ln') {
            string = Math.log(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if(e.target.innerHTML == 'e'){
            string = Math.epx(string, string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            } 
        }

        else if(e.target.innerHTML == '^'){
            string = Math.pow(base, exposant);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            } 
        }

        else if (e.target.innerHTML == 'rac') {
            string = Math.sqrt(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if (e.target.innerHTML == 'dec') {
            const dec = nombreDecimal.toString(10);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if (e.target.innerHTML == 'bin') {
            const bin = nombreDecimal.toString(2);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if (e.target.innerHTML == 'oct') {
            const oct = nombreDecimal.toString(8);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if (e.target.innerHTML == 'hex') {
            const hex = nombreDecimal.toString(16).toUpperCase();
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }

        else if(e.target.innerHTML == 'cos'){
            string = Math.cos(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            } 
        } 

        else if(e.target.innerHTML == 'sin'){
            string = Math.sin(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            } 
        } 

        else if(e.target.innerHTML == 'tan '){
            string = Math.tan(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            } 
        }

        else if (e.target.innerHTML == '%') {
            //string = Math.log(string);
            if (string=="-Infinity" || string=="Infinity") {
                alert("Math ERROR");
                string= " ";
            } else {
                input.value = string;   
            }
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

var voir = document.getElementById("nd");
var cacher = document.getElementById("fonction");
var afficher = false;
voir.addEventListener('click', function () {
    if (!afficher) {
        cacher.style.display = 'block';
        afficher = true;
    }
    else {
        cacher.style.display = 'none';
        afficher = false;
    }
});