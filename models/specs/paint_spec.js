const assert = require('assert');
const Paint = require("../paint.js")

describe('Paint', function () {

    let paintFull;
    let paintEmpty;

    beforeEach( function() {
        paintFull = new Paint(10);
        paintEmpty = new Paint(0);
    });

    it("should have a num of litres", function (){
        // Arrange
        // Act
        const actual = paintFull.litres;
        // Assert
        assert.strictEqual(actual, 10)
    });

    it("should be able to check if empty", function () {
        // Arrange
        // Act
        const actual = paintEmpty.isEmpty();
        // Assert
        assert.ok(actual)
    });

    it("should be able to empty itself", function () {
        // Arrange
        // Act
        paintFull.empty();
        const actual = paintFull.isEmpty();
        // Assert
        assert.ok(actual)
    })


})