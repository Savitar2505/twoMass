let array1 = [1, "Jack", true, 0]
let array2 =["John", 57, 45, 12, "Jack"]
function twoMass(array1, array2){
    if(array1.length>array2.length){
        console.log('Массив 1 больше')
    }
    else if(array2.length>array1.length){
        console.log('Массив 2 больше')
    }
    else {
        console.log('Массивы равны')
    }
}

twoMass(array1, array2)