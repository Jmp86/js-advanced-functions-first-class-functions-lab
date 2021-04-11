const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(firstHalf) {
    let firstTwo = [];
    firstTwo.push(firstHalf[0], firstHalf[1]);
    return firstTwo;
    }

    const returnLastTwoDrivers = function(secondHalf) {
        let lastTwo = [];
        lastTwo.push(secondHalf[2], secondHalf[3]);
        return lastTwo;
        }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    function ride(fare){
        return num * fare;
    }
    return ride;
}

const fareDoubler = function(double){
    return createFareMultiplier(double)(2);
}

const fareTripler = function(triple){
    return createFareMultiplier(triple)(3);
}

const selectDifferentDrivers = function(drivers, firstOrLast){
    return firstOrLast(drivers);
    
}