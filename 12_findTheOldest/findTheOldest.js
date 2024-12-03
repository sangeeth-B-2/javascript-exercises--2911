const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();
        let deathYear = person.yearOfDeath || currentYear;

        let age = deathYear - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
