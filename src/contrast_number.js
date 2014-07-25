contrast = function (random, print) {
    var a = 0;
    for (var i = 0; i < 4; i++) {
        if (random[i] == print[i]) {
            a++;
        }
    }
    var c = _.difference(random, print).length;
    var b = 4 - c - a;
    return a+"A"+b+"B";
};
