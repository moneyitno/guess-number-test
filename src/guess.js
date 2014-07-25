guessCountBy = function () {
    var count = JSON.parse(localStorage.getItem('countNumber')) || 0;
    var printNumber = getNumber();
    if (count == 6) {
        count = 0;
    }
    if (count < 6) {
        if (printNumber) {
//            contrast(printNumber, produceRandomNumber());
            count = count + 1;
            localStorage.setItem('countNumber',JSON.parse(count));
        }
    }
    return count;
};

