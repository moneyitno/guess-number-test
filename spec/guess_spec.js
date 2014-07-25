describe("random_number", function () {


    beforeEach(function () {

    });
    it("guess the number is less than 7", function () {
        var guessCount = guessCountBy();

        var guessCountStatus = false;
        if (guessCount < 7) {
            guessCountStatus = true
        }
        expect(guessCountStatus).toEqual(true);
    });
});
