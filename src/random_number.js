produceRandomNumber = function () {
    var number = [];
    while (number.length < 4) {
        var i = parseInt(10*Math.random());
        if(!_.contains(number,i)){
            number.push(i);
        }
    }
    return number;
};

