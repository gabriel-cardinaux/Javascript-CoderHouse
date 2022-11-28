//alert("Chequeando linkeado para live server")

function convertir () {
    let valor = parseInt (document.getElementById ("valor").value);
    let resultado = 0;
    let dolar = 320.00;
    let euro = 172.27;

    if (document.getElementById("uno").checked){
        resultado = valor / dolar;
        alert("El cambio es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valor / euro;
        alert("El cambio es: €" + resultado.toFixed(2));
    }
    else {
        alert("Introduzca el valor a cotizar")
    }
}