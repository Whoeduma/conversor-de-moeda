function ConverterReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmRealNumerico = valorEmDolarNumerico * 5;
    console.log(valorEmRealNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$:" + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterWon() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmWonNumerico = valorEmDolarNumerico * 1.17176;
    console.log(valorEmWonNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Won é ₩:" + valorEmWonNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterYen() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var varlorEmDolarNumerico = parseFloat(valor);
  
    var valorEmYenNumerico = valorEmDolarNumerico * 109.71;
    console.log(valorEmYenNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Yen é ¥" + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterYuan() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmYuanNumerico = valorEmDolarNumerico * 6.44;
    console.log(valorEmYuanNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Yuan é ¥:" + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmBitcoinNumerico = valorEmDolarNumerico * 0.000021;
    console.log(valorEmBitcoinNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Bitcoin é ₿:" + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }