describe("random_number", function () {


    beforeEach(function () {

    });
    it("the length of number is four", function () {
        var randomNumber = produceRandomNumber();

        expect(randomNumber.length).toEqual(4);
    });

    it("the random number is different", function () {
        var randomNumber = produceRandomNumber();

        var even = _.difference([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],randomNumber);
        expect(even.length).toEqual(6);
    });
});

