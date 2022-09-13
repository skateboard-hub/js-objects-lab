const aCar=
{ owner : "Joe Bloggs",
  type  :{
    make  : 'Toyota', 
    Corolla   : 'Corolla', 
    CC  : '1.8'
 },
 registration  :{
    date  : '201', 
    county   : 'WD', 
    number  : '1058'
 },
 owner: "Joe Bloggs",
 previous_owners: [
    { name: "Cloter", address: "Chaoyang Street" },
    { name: "David", address: "Lacken Road" }
 ]
 };
 console.log(aCar.owner + ' drives a ' + aCar.type.make)
 console.log('Reg. = ' + aCar.registration.date+"-"+aCar.registration.county+"-"+aCar.registration.number)

 aCar.mileade = '10000';
 aCar.colour = {
    texture : 'leather',
    shade : 'red'
 };
console.log('It is a ' + aCar.colour.shade+' car, ' + aCar.mileade + ' mileage, with ' + aCar.colour.texture + ' interior.');
console.log("First owner: " +aCar.previous_owners[0].name +' - ' +aCar.previous_owners[0].address);
console.log("First owner: " +aCar.previous_owners[1].name +' - ' +aCar.previous_owners[1].address);
