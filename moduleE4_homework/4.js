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
 

function Heaters(name, capacityKw, type){
  this.name = name
  this.capacityKw = capacityKw
  this.type = type
}

Heaters.prototype = new Devices()
Heaters.prototype.deviceInfo = function(){
  console.log(`Параметры девайса обогреватель ${this.name}:`)
      console.log(`тип - ${this.type}, мощность - ${this.capacityKw} кВт`)
      console.log(`девайс включен - ${this.enabled}`)
}

function WashMashines(name, deviceClass, capacityKw, type){
  this.name = name
  this.deviceClass = deviceClass
  this.capacityKw = capacityKw
  this.type = type
}
WashMashines.prototype = new Devices()  
WashMashines.prototype.deviceInfo = function(){
  console.log(`Параметры девайса стиральная машина ${this.name}:`)
      console.log(`класс энергопотребления - ${this.deviceClass}, тип - ${this.type}, мощность - ${this.capacityKw} кВт`)
      console.log(`девайс включен - ${this.enabled}`)
}

const heater1 = new Heaters('indesit_zm900', 0.9, 'air')
const washMashine1 = new WashMashines('vitec_z12-31', 'A', 2.5, 'with dryer')

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
