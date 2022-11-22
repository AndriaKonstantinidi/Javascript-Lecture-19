// let array = [20,4,7,50,17];
// let filterByNumber = array.filter(num => num > 10);
// console.log(filterByNumber);

function getAnimalInfo(name,age,breed,gender){
    return{
        name:name,
        age:age,
        breed:breed,
        gender:gender
    }
}

let animal = [
    getAnimalInfo("bob",4,"labrador","male"),
    getAnimalInfo("richy",3,"pit","female"),
    getAnimalInfo("dob",6,"doberman","female"),
    getAnimalInfo("tom",5,"labrador","female")
]

function getFilterByGender(animalArray,gender){
    let getFilterByGender = animalArray.filter(item => item.gender == gender);
    console.log(getFilterByGender);
    let filteredByAge = animalArray.filter(item => item.age % 2 == 0);
    console.log(filteredByAge)
}
getFilterByGender(animal,"male")