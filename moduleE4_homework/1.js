const person = {
 city: "Moscow"
}
const student = Object.create(person)

student.ownCity = "Piter"
student.owlCity = "NewOwlGrad"

function getKeysValues(arg) {
   
    for(let key in arg)
      if(arg.hasOwnProperty(key)){
        console.log(`key - ${key}, value - ${arg[key]}`)
}    
}

getKeysValues(student)
