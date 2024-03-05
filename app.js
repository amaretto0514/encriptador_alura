const campo_texto= document.getElementById("texto-encriptar")
const campo_mensaje = document.getElementById("campo-mensaje")

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],    // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];

const btnCopiar = document.getElementsByClassName("btnCopiar")[0];


function btnEncriptar() {
    const textoEncriptado = encriptar(campo_texto.value)
    console.log(textoEncriptado)
    campo_mensaje.value= textoEncriptado

    const elementoSinTexto = document.querySelector('.sin-texto');
    if (elementoSinTexto) {
        elementoSinTexto.style.display = 'none';
        btnCopiar.style.display = "block"
    }
   
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(campo_texto.value)
    console.log(textoEncriptado)
    campo_mensaje.value= textoEncriptado
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matriz_code.length; i++){
         if (stringEncriptado.includes(matriz_code[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matriz_code[i][0], matriz_code[i][1])
         }
    }
    return stringEncriptado;
}



function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i = 0; i < matriz_code.length; i++){
        if (stringDesencriptado.includes(matriz_code[i][1])) {
           stringDesencriptado = stringDesencriptado.replace(matriz_code[i][1], matriz_code[i][0])
          
        }
   }
   return stringDesencriptado
}



// Agrega el evento al botón
btnCopiar.addEventListener("click", function() {
    let campo_mensaje = document.getElementById("campo-mensaje");
    console.log("clic");
    // Selecciona el contenido del textarea
    campo_mensaje.select();

    // Utiliza el API de Portapapeles
    navigator.clipboard.writeText(campo_mensaje.value)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("No se pudo copiar el texto: ", err);
        });

    // Deselecciona el textarea
    campo_mensaje.setSelectionRange(0, 0);
});


