function substituiPares(array){

    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
           console.log("Você já é zero!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo o valor ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    console.log(array);
}

let arr = [2, 3, 6, 7, 9, 8, 9, 30, 15, 22, 24, 12, 13]
console.log(substituiPares(arr));