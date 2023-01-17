
let cadenaPalabras = document.getElementById("code");
let btnEncrypt = document.getElementById("encryp");
let btnDencrypt = document.getElementById("dencryp");
let lbEncriptado =document.getElementById("codeTransformed");
let btnCopy = document.getElementById("copy");
let tooltipSpan = document.getElementById("tooltipSpan");
let imgEncrypted = document.getElementById("img-encrypted");
let tootltip = document.getElementById("tooltip");
let textoEncryp

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
    
    navigator.clipboard.writeText(textoEncryp)
        .then(()=> {
            console.log("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.log("Algo salió mal...");
        })
    
    tooltipSpan.style.display = 'block';
    tooltipSpan.style.opacity = '1';
    tooltipSpan.style.transition = 'opacity 1.2s';
    btnCopy.style.display = 'none';
    tootltip.style.display = 'block';
    
    setTimeout(() => {
        tooltipSpan.style.display = 'none'; 
        tooltipSpan.style.opacity = '0';
        tooltipSpan.style.transition = 'opacity 1.2s';
        btnCopy.style.display = 'block';
        tootltip.style.display = 'none';
    }, 2200);
    
}

btnEncrypt.addEventListener("click",function(e) {
    textoEncryp = Encrypt(cadenaPalabras.value.toLowerCase());

    lbEncriptado.innerHTML = textoEncryp;
    lbEncriptado.style.display = 'block';
    imgEncrypted.style.display = 'none';

});

btnDencrypt.addEventListener("click",function(e) {
    textoEncryp = Dencrypt(cadenaPalabras.value.toLowerCase());

    lbEncriptado.innerHTML = textoEncryp;
    lbEncriptado.style.display = 'inline';
    imgEncrypted.style.display = 'none';
});

btnCopy.addEventListener("click", CopyClipboard);