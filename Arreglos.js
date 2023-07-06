function insertarElemento(arr, elemento, posicion) {
    if (posicion < 0 || posicion > arr.lenght) {
        console.log("posicion valida");
        return;
    }
    arr.splice(posicion, 0, elemento);
}

let arreglo = [1, 2, 3, 4, 5];
console.log("arreglo inicial:", arreglo);

let nuevoElemento = 10;
let posicionDeseada = 2;

insertarElemento(arreglo, nuevoElemento, posicionDeseada);
console.log("areglo despues de insertar:", arreglo);