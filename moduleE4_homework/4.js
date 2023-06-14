
function Devices(name){
  this.enabled = false
}

Devices.prototype.deviceSwitch = function(deviceEnable) { 
  if (deviceEnable === 'on') {
    this.enabled = true;
  } else {
    this.enabled = false;
  }
}


Devices.prototype.consumption = function(timeWork) {
  let sumConsumption = this.capacityKw * timeWork;
  console.log(`Девайс ${this.name} за время ${timeWork} (часов) потратил ${sumConsumption} кВт*ч энергии `);
}  
 

function Heater(name, capacityKw, type){
  this.name = name
  this.capacityKw = capacityKw
  this.type = type
}

Heater.prototype = new Devices()
Heater.prototype.deviceInfo = function(){
  console.log(`Параметры девайса обогреватель ${this.name}:`)
      console.log(`тип - ${this.type}, мощность - ${this.capacityKw} кВт`)
      console.log(`девайс включен - ${this.enabled}`)
}

function washMashine(name, deviceClass, capacityKw, type){
  this.name = name
  this.deviceClass = deviceClass
  this.capacityKw = capacityKw
  this.type = type
}
washMashine.prototype = new Devices()  
washMashine.prototype.deviceInfo = function(){
  console.log(`Параметры девайса стиральная машина ${this.name}:`)
      console.log(`класс энергопотребления - ${this.deviceClass}, тип - ${this.type}, мощность - ${this.capacityKw} кВт`)
      console.log(`девайс включен - ${this.enabled}`)
}

const heater1 = new Heater('indesit_zm900', 0.9, 'air')
const washMashine1 = new washMashine('vitec_z12-31', 'A', 2.5, 'with dryer')

heater1.deviceInfo()
console.log(` `)
washMashine1.deviceInfo()

heater1.deviceSwitch('on')

console.log(` `)
console.log(` `)

heater1.deviceInfo()
console.log(` `)
washMashine1.deviceInfo()

console.log(` `)
console.log(` `)

heater1.consumption(2)
washMashine1.consumption(24)
