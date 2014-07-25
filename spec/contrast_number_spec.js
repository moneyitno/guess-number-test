describe("contrast_number", function () {


    beforeEach(function () {

    });
    it("contrast number 0A0B", function () {
        var status = contrast([1,2,3,4],[5,6,7,8]);

        expect(status).toEqual("0A0B");
    });

    it("contrast number 4A0B", function () {
        var status = contrast([1,2,3,4],[1,2,3,4]);

        expect(status).toEqual("4A0B");
    });

    it("contrast number 0A4B", function () {
        var status = contrast([1,2,3,4],[2,1,4,3]);

        expect(status).toEqual("0A4B");
    });

    it("contrast number 2A2B", function () {
        var status = contrast([1,2,3,4],[1,3,2,4]);

        expect(status).toEqual("2A2B");
    });
});
