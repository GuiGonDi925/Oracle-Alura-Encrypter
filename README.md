# Oracle-Alura-Encrypter

Este es el primer desafio del proyecto ONE de Oracle. Este proyecto consta de realizar una página con un encriptador, el cual nos permitirá capturar un mensaje y después convertirlo en texto encriptado siguiendo las reglas: 

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

El encriptador debe de funcionar en ambos sentidos, es decir, tanto encriptar el texto como revertir la encriptación. 



Para ver el proyecto funcionando pueden entrar al Github Pages del proyecto dando clic [aquí](https://guigondi925.github.io/Oracle-Alura-Encrypter/)

Para realizar la encriptación del texto decidi convertir todo el texto en un array y recorrerlo validando si cada letra corresponde a alguna de las vocales, en caso de que sea así se agrega a un nuevo array el cual se muestra al final en el textarea del resultado. La parte del código que hace todo este proceso es la siguiente: 

```JavaScript
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

```

Adicionalmente a las letras agregué la validación y conversión de acentos y en el caso de la "u", las diéresis. Todo el texto se convierte en minúsculas al momento de que se lee, por lo que si se ingresan solo mayúsculas el resultado será todo en minúsculas.