// Lightning Ex 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
function doctorFactory (name, spec, address){
    const doctor = {
        name: name,
        specialty: spec,
        address: address
    }
    return console.log(doctor)
}

doctorFactory("Fred Chan", "Feet", "1414");

const bowWowKennels = []

function petFactory (name, breed){
    const pet = {
        name: name,
        breed: breed
    }
    return pet
}

bowWowKennels.push(petFactory("Todd", "Black Kitty"))
bowWowKennels.push(petFactory("Chester", "English Bully"))
bowWowKennels.push(petFactory("Theo", "Mutt"))
console.log("BowWow",bowWowKennels)


