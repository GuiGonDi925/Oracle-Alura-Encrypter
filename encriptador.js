
let cadenaPalabras = document.getElementById("code");
let btnEncrypt = document.getElementById("encryp");
let btnDencrypt = document.getElementById("dencryp");
let lbEncriptado =document.getElementById("codeTransformed");
let btnCopy = document.getElementById("copy");
let tooltipSpan = document.getElementById("tooltipSpan");

function Encrypt(data){
    let fraseCodificada = data.split('');
    let cadenaEncriptada = [];    
    for (i = 0; i < fraseCodificada.length;i++){
        if (fraseCodificada[i] === 'a' || fraseCodificada[i] === 'á'){
            cadenaEncriptada.push('ai');
        }else if (fraseCodificada[i] === 'e' || fraseCodificada[i] === 'é'){
            cadenaEncriptada.push('enter');
        }else if (fraseCodificada[i] === 'i' || fraseCodificada[i] === 'í'){
            cadenaEncriptada.push('imes');
        }else if (fraseCodificada[i] === 'o' || fraseCodificada[i] === 'ó'){
            cadenaEncriptada.push('ober');
        }else if (fraseCodificada[i] === 'u' || fraseCodificada[i] === 'ú' || fraseCodificada[i] === 'ü'){
            cadenaEncriptada.push('ufat');
        }else {
            cadenaEncriptada.push(fraseCodificada[i]);
        }
    }

    return cadenaEncriptada.join('');
}

function Dencrypt(data){
    let fraseCodificada = data.split('');
    let cadenaEncriptada = [];
    for (i = 0; i < fraseCodificada.length;i++){
        
        if (fraseCodificada[i] === 'a' && fraseCodificada[i+1] === 'i'){
            cadenaEncriptada.push('a');
            i = i + 1;
        }else if (fraseCodificada[i] === 'e' && fraseCodificada[i+1] === 'n' && fraseCodificada[i+2] === 't' && fraseCodificada[i+3] === 'e' && fraseCodificada[i+4] === 'r'){
            cadenaEncriptada.push('e');
            i = i + 4;
        }else if (fraseCodificada[i] === 'i' && fraseCodificada[i+1] === 'm' && fraseCodificada[i+2] === 'e' && fraseCodificada[i+3] === 's'){
            cadenaEncriptada.push('i');
            i = i + 3;
        }else if (fraseCodificada[i] === 'o' && fraseCodificada[i+1] === 'b' && fraseCodificada[i+2] === 'e' && fraseCodificada[i+3] === 'r'){
            cadenaEncriptada.push('o');
            i = i + 3;
        }else if (fraseCodificada[i] === 'u' && fraseCodificada[i+1] === 'f' && fraseCodificada[i+2] === 'a' && fraseCodificada[i+3] === 't'){
            cadenaEncriptada.push('u');
            i = i + 3;
        }else {
            cadenaEncriptada.push(fraseCodificada[i]);
        }
    }
    return cadenaEncriptada.join('');
}

function CopyClipboard(){
    var content = lbEncriptado.innerHTML;

    navigator.clipboard.writeText(content)
        .then(()=> {
            console.log("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.log("Algo salió mal...");
        })
    
    tooltipSpan.style.visibility = 'visible';
    tooltipSpan.style.opacity = '1';
    tooltipSpan.style.transition= 'opacity 1.2s';
    
    setTimeout(() => {
        tooltipSpan.style.visibility = 'hidden'; 
        tooltipSpan.style.opacity = '0';
        tooltipSpan.style.transition= 'opacity 1.2s';
    }, 2200);
    
}

btnEncrypt.addEventListener("click",function(e) {
    lbEncriptado.innerHTML = Encrypt(cadenaPalabras.value.toLowerCase());
});

btnDencrypt.addEventListener("click",function(e) {
    lbEncriptado.innerHTML = Dencrypt(cadenaPalabras.value.toLowerCase());
});

btnCopy.addEventListener("click", CopyClipboard);