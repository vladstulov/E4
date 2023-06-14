function createObject() {
  // создаём объект где задаём прототайп = нулл
  
  const objNoPrt = Object.create(null)
  return objNoPrt
}

console.log(createObject());
console.log(Object.getPrototypeOf(createObject()))





const obj1 = {a: 1, b: 2, zz: 44};
console.log(obj1) 
function e4_3func() {
  // объект obj2 пустой
  const obj2 = {};
  console.log(obj2)
}

e4_3func()

