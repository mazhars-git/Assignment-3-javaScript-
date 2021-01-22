//https://github.com/mazhars-git/Assignment-3-javaScript-

//Problem solving: (1) kilometerToMeter.

function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
/*var result = kilometerToMeter(6);
console.log(result);*/ 

//Problem solving: (2) budgetCalculator.

function budgetCalculator(clock, mobile, laptop) {
    var clockPrice = clock * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalbudget = clockPrice + mobilePrice + laptopPrice;
    return totalbudget;
}
/*var result = budgetCalculator(2, 3, 5);
console.log(result);*/

//Problem solving: (3) hotelCost.

function hotelCost(DaysOfResidence) {
    var hotelCost = 0;
    if (DaysOfResidence <= 10) {
        hotelCost = DaysOfResidence * 100;

    } else if (DaysOfResidence <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = DaysOfResidence - 10;
        var secondTenDays = remaining * 80;
        hotelCost = firstTenDays + secondTenDays;

    } else {
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        var remaining = DaysOfResidence - 20;
        var lastDays = remaining * 50;
        hotelCost = firstTenDays + secondTenDays + lastDays;
    }
    return hotelCost;

}
/*var totalCost = hotelCost(25);
console.log(totalCost);*/

//Problem solving: (4) megaFriend.
function megaFriend(friends) {
    var largestName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}

/*var result = megaFriend(['Milu', 'Nil', 'Jamil Mia', 'Atikul Islam Atik', 'Faqrul Islam']);
console.log(result);*/