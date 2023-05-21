const coyotelogistics = {
    crew : {
        opsTeam: {
            directops : {
                name : 'Jess Billedo',
                age : 34,
                country: 'Mexico'
            },
            seniorManager : {
                name : 'Dulce Rivas',
                age : 45,
                country: 'United States'
            },
            manager : {
                name: 'Juan de Aquino',
                age: 29,
                country: 'Mexico'
            },
            lead : {
                name : 'Jonathan Cardenas',
                age: 34,
                country: 'Mexico'
            },
            representative : {
                name: 'Alonso Pena',
                age: 28,
                country: 'Mexico'
            }
            
        },
        carrierTeam: null,
        SupportTeam:null,
    }
};



let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }

  for (let member in coyotelogistics.crew.opsTeam) {
    console.log(`${member}: : ${coyotelogistics.crew.opsTeam[member].name}`)
  }