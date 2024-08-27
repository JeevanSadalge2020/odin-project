const findTheOldest = function (people) {
    let max_age = 0;
    let res = 0;
    for (let i = 0; i < people.length; i++) {
        let age = (people[i].yearOfDeath ? people[i].yearOfDeath : new Date().getFullYear()) - people[i].yearOfBirth;
        if (age > max_age) {
            max_age = age;
            res = i
        };
    }
    return people[res]
};

// Do not edit below this line
module.exports = findTheOldest;
