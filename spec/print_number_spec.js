describe("print_number", function () {


    beforeEach(function () {

    });
    it("the length of number printed is four", function () {
        var printNumber = getNumber();

        expect(printNumber.length).toEqual(4);
    });

    it("the number printed is different", function () {
        var printNumber = getNumber();

        var even = _.difference([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],printNumber);
        expect(even.length).toEqual(6);
    });
});

