// Variables globales
let display = document.getElementById("display"); // Div casillas en la pantlla
let historial = document.getElementById("historial");
let posts = document.getElementById("posts");


//Números en la que get nos permite en este caso es selecciona el elemento y lo devuelve que tiene el ID atributo con el valor especificado que esta en el html.
let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");
// Operaciones
let btnSum = document.getElementById("btnSum");
let btnRes = document.getElementById("btnRes");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let btnIgual = document.getElementById("btnIgual");
let btnClear = document.getElementById("btnClear");
let btnPunto = document.getElementById("btnPunto");
let btnCe = document.getElementById("btnCe");
// Variables declaradas temporales en la que el usuario va ingresar
let num1Temp = "";
let num2Temp = "";
let op = "";
let historialTemp = "";

// Funciones de numeros en la que innerhtml ayuda inyectar elementos
const btnNum1F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "1";
    historial.innerHTML = historialTemp + "1"; // Historial
    num1Temp = num1Temp + "1";
    historialTemp = historialTemp + "1"; // Historial
  } else {
    display.innerHTML = num2Temp + "1";
    historial.innerHTML = historialTemp + "1"; // Historial
    num2Temp = num2Temp + "1";
    historialTemp = historialTemp + "1"; // Historial
  }
};
const btnNum2F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "2";
    historial.innerHTML = historialTemp + "2"; // Historial
    num1Temp = num1Temp + "2";
    historialTemp = historialTemp + "2"; // Historial
  } else {
    display.innerHTML = num2Temp + "2";
    historial.innerHTML = historialTemp + "2"; // Historial
    num2Temp = num2Temp + "2";
    historialTemp = historialTemp + "2"; // Historial
  }
};
const btnNum3F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "3";
    num1Temp = num1Temp + "3";
    historial.innerHTML = historialTemp + "3"; // Historial
    historialTemp = historialTemp + "3"; // Historial
  } else {
    display.innerHTML = num2Temp + "3";
    num2Temp = num2Temp + "3";
    historial.innerHTML = historialTemp + "3"; // Historial
    historialTemp = historialTemp + "3"; // Historial
  }
};
const btnNum4F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "4";
    num1Temp = num1Temp + "4";
    historial.innerHTML = historialTemp + "4"; // Historial
    historialTemp = historialTemp + "4"; // Historial
  } else {
    display.innerHTML = num2Temp + "4";
    num2Temp = num2Temp + "4";
    historial.innerHTML = historialTemp + "4"; // Historial
    historialTemp = historialTemp + "4"; // Historial
  }
};
const btnNum5F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "5";
    num1Temp = num1Temp + "5";
    historial.innerHTML = historialTemp + "5"; // Historial
    historialTemp = historialTemp + "5"; // Historial
  } else {
    display.innerHTML = num2Temp + "5";
    num2Temp = num2Temp + "5";
    historial.innerHTML = historialTemp + "5"; // Historial
    historialTemp = historialTemp + "5"; // Historial
  }
};
const btnNum6F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "6";
    num1Temp = num1Temp + "6";
    historial.innerHTML = historialTemp + "6"; // Historial
    historialTemp = historialTemp + "6"; // Historial
  } else {
    display.innerHTML = num2Temp + "6";
    num2Temp = num2Temp + "6";
    historial.innerHTML = historialTemp + "6"; // Historial
    historialTemp = historialTemp + "6"; // Historial
  }
};
const btnNum7F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "7";
    num1Temp = num1Temp + "7";
    historial.innerHTML = historialTemp + "7"; // Historial
    historialTemp = historialTemp + "7"; // Historial
  } else {
    display.innerHTML = num2Temp + "7";
    num2Temp = num2Temp + "7";
    historial.innerHTML = historialTemp + "7"; // Historial
    historialTemp = historialTemp + "7"; // Historial
  }
};
const btnNum8F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "8";
    num1Temp = num1Temp + "8";
    historial.innerHTML = historialTemp + "8"; // Historial
    historialTemp = historialTemp + "8"; // Historial
  } else {
    display.innerHTML = num2Temp + "8";
    num2Temp = num2Temp + "8";
    historial.innerHTML = historialTemp + "8"; // Historial
    historialTemp = historialTemp + "8"; // Historial
  }
};
const btnNum9F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "9";
    num1Temp = num1Temp + "9";
    historial.innerHTML = historialTemp + "9"; // Historial
    historialTemp = historialTemp + "9"; // Historial
  } else {
    display.innerHTML = num2Temp + "9";
    num2Temp = num2Temp + "9";
    historial.innerHTML = historialTemp + "9"; // Historial
    historialTemp = historialTemp + "9"; // Historial
  }
};
const btnNum0F = () => {
  if (op === "") {
    display.innerHTML = num1Temp + "0";
    num1Temp = num1Temp + "0";
    historial.innerHTML = historialTemp + "0"; // Historial
    historialTemp = historialTemp + "0"; // Historial
  } else {
    display.innerHTML = num2Temp + "0";
    num2Temp = num2Temp + "0";
    historial.innerHTML = historialTemp + "0"; // Historial
    historialTemp = historialTemp + "0"; // Historial
  }
};
//Funciones operaciones
const btnSumF = () => {
  if (num1Temp === "") {
    posts.innerHTML = "Ingresa un primer numero para sumar";
  } else {
    display.innerHTML = "";
    op = "+";
    historial.innerHTML = historialTemp + "+"; // Historial
    historialTemp = historialTemp + "+"; // Historial
  }
};
const btnResF = () => {
  if (num1Temp === "") {
    posts.innerHTML = "Ingresa un primer numero para restar";
  } else {
    display.innerHTML = "";
    op = "-";
    historial.innerHTML = historialTemp + "-"; // Historial
    historialTemp = historialTemp + "-"; // Historial
  }
};
const btnMulF = () => {
  if (num1Temp === "") {
    posts.innerHTML = "Ingresa un primer numero para multiplicar";
  } else {
    display.innerHTML = "";
    op = "X";
    historial.innerHTML = historialTemp + "*"; // Historial
    historialTemp = historialTemp + "*"; // Historial
  }
};
const btnDivF = () => {
  if (num1Temp === "") {
    posts.innerHTML = "Ingresa un primer numero para dividir";
  } else {
    display.innerHTML = "";
    op = "/";
    historial.innerHTML = historialTemp + "/"; // Historial
    historialTemp = historialTemp + "/"; // Historial
  }
};
// Funcion Igual
const btnIgualF = () => {
  if (num1Temp === "" || num2Temp === "") {
    posts.innerHTML = "Datos insuficientes para realizar la operacion";
  } else {
    historial.innerHTML = historialTemp + "="; // Historial
    historialTemp = historialTemp + "="; // Historial
    miniCalculadora();
  }
};
//Limpiar calculadora
const btnClearF = () => {
  num1Temp = "";
  num2Temp = "";
  op = "";
  historialTemp = "";
  display.innerHTML = "";
  historial.innerHTML = "";
  posts.innerHTML = "";
};

//Funcion punto
const btnPuntoF = () => {
  if (num1Temp.includes(".")&& op === "") {
    posts.innerHTML = "YA EXISTE UN PUNTO EN NUM 1";
  } else {
    if (op === "") {
      display.innerHTML = num1Temp + ".";
      num1Temp = num1Temp + ".";
      historial.innerHTML = historialTemp + "."; //Historial
      historialTemp = historialTemp + "."// Historial   
      } else {
        if (num2Temp.includes(".") && op !== "") {
          posts.innerHTML = "YA EXISTE UN PUNTO EN NUM 2";
        } else { 
          display.innerHTML = num2Temp + ".";
          num2Temp = num2Temp + ".";   
          historial.innerHTML = historialTemp + "."; //Historial
          historialTemp = historialTemp + "."// Historial
         }
        }
      }
  };
//Eliminar caracteres
const btnCeF = () => {
  if (num1Temp === "") {
    posts.innerHTML = "No hay nada para borrar";
  } else {
    if (op === "" && num1Temp !== "") {
      num1Temp = num1Temp.substring(0, num1Temp.length - 1);
      display.innerHTML = num1Temp;
      historialTemp = historialTemp.substring(0, historialTemp.length - 1); // Historial
      historial.innerHTML = historialTemp; // Historial
    } else {
      num2Temp = num2Temp.substring(0, num2Temp.length -1);
      display.innerHTML = num2Temp;
      historialTemp = historialTemp.substring(0, historialTemp.length - 1); // Historial
      historial.innerHTML = historialTemp; // Historial
    }
  }
};

//Funcion que ejecuta la Mini calculadora en la que nos convierte por medio de parse float decimales
const miniCalculadora = () => {
  num1Temp = parseFloat(num1Temp);
  num2Temp = parseFloat(num2Temp);
  typeof num1Temp;
  typeof num2Temp;
  console.log(num1Temp, num2Temp);
  let resultado = 0;
  //Validar datos correctos en varaibles num1 y num2 (expresiones regulares)
  //Validamos que la operacion sea suma "1"
  if (op === "+") {
    resultado = num1Temp + num2Temp;
  }
  // validamos la resta "2"
  if (op === "-") {
    resultado = num1Temp - num2Temp;
  }
  // validamos la multiplicacion "3"
  if (op === "X") {
    resultado = num1Temp * num2Temp;
  }
  // validamos la division "4"
  if (op === "/") {
    if (num2Temp === 0) {
      posts.innerHTML = "no es posible dividir por cero";
    } else {
      resultado = num1Temp / num2Temp;
    }
  }
  //resultado
  display.innerHTML = resultado;
};

// Onclick numbers
btnNum1.onclick = function () {
  btnNum1F();
};
btnNum2.onclick = function () {
  btnNum2F();
};
btnNum3.onclick = function () {
  btnNum3F();
};
btnNum4.onclick = function () {
  btnNum4F();
};
btnNum5.onclick = function () {
  btnNum5F();
};
btnNum6.onclick = function () {
  btnNum6F();
};
btnNum7.onclick = function () {
  btnNum7F();
};
btnNum8.onclick = function () {
  btnNum8F();
};
btnNum9.onclick = function () {
  btnNum9F();
};
btnNum0.onclick = function () {
  btnNum0F();
};
// Operadores onclick
btnSum.onclick = function () {
  btnSumF();
};
btnRes.onclick = function () {
  btnResF();
};
btnDiv.onclick = function () {
  btnDivF();
};
btnMul.onclick = function () {
  btnMulF();
};
btnIgual.onclick = function () {
  btnIgualF();
};
btnClear.onclick = function () {
  btnClearF();
};
btnPunto.onclick = function () {
    btnPuntoF();
  };
btnCe.onclick = function () {
    btnCeF();
  };
