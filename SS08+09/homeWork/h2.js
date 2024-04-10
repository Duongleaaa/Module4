"use strict";
function validatePerson(person) {
    if (typeof person.name !== 'string') {
        return false;
    }
    if (typeof person.age !== 'number') {
        return false;
    }
    if (typeof person.address !== 'object') {
        return false;
    }
    return true;
}
let person = {
    name: 'huy',
    age: 10,
    address: {
        national: 'VietNam',
        street: '19/5 Van Quan'
    }
};
console.log(validatePerson(person));
