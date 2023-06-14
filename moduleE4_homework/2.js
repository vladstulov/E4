const obj1 = {a: 1, b: 2, zz: 'er'};
let str1 = "abc";
function e4_2func(arg1, arg2) {
  
  // проверям наличие свойств a, b, c объекта переданного в качестве аргумента 
  
    console.log('a' in arg1)  
    console.log('b' in arg1) 
    console.log('c' in arg1) 
}
e4_2func(obj1, str1)
