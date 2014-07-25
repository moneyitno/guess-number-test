getNumber = function () {
    var number = 1234;
    var printNumber = [];
    for (var i = 0; i < JSON.stringify(number).length; i++) {
        printNumber[i] = JSON.parse(JSON.stringify(number)[i]);
    }
    if (printNumber.length == 4) {
        if (_.difference([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], printNumber).length == 6) {
            return printNumber;
        }
    }

};
