guessCountBy = function () {
    var count = JSON.parse(localStorage.getItem('countNumber')) || 0;
    var printNumber = getNumber();
    if (count < 6) {
        if (printNumber) {
            contrast(printNumber, produceRandomNumber());
            count = count + 1;
            return count;
        }
    }

};

getNumber = function () {
    return [1, 2, 3, 4]
};

contrast = function () {

};