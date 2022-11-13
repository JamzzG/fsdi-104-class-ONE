console.log("testing...");
let petSalon = {
    //properties
    name: "The Fashion Pet",
    address:{
        street: "232 Awesome Street",
        city: "Albuquerque",
        state: "New Mexico",
        zip: "10101"
    },
    pets:[
        {
            name: "Jesse",
            age: "6",
            gender: "Male",
            breed: "Great Dane",
            service: "Grooming Services",
            owner:  "Larry Jenkins",
            contactPhone: "345-689-2235"
        },
        {
            name: "Malcolm",
            age: "4",
            gender: "Male",
            breed: "Doberman",
            service: "Washing",
            owner:  "Lashonda Garrison",
            contactPhone: "505-510-9215"
        },
        {
            name: "Pasta Batman",
            age: "8",
            gender: "Female",
            breed: "Polish Ragdoll",
            service: "Grooming Services",
            owner:  "Shirley Orolovsky",
            contactPhone: "872-904-1117"
            },
    ]
} 

alert("We only have "+petSalon.pets.length+" pets registered here."+"\n\nWe are all going to be unemployed very soon unless we get more customers!")

let i;
for(i=0;i<petSalon.pets.length;i=i+1){
console.log (petSalon.pets[i].name);
}


//assignment create 3 pets DONE create alert function to display the length
//display the names
//use a for loop 




//object literal means {}
