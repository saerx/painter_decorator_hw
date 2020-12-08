const assert = require('assert');
const Room = require("../room.js")

describe('Room', function () {

    let room;

    beforeEach( function(){
        room = new Room(100)
    });

    it("should have an area", function(){
        // Arrange
        // Act
        const actual = room.area;
        // Assert
        assert.strictEqual(actual, 100)
    });

    it("should start not painted", function() {
        // Arrange
        // Act
        const actual = room.painted;
        // Assert
        assert.strictEqual(actual, false)
    });

    it("should be able to be painted", function() {
        // Arrange
        // Act
        room.paint();
        const actual = room.painted;
        // Assert
        assert.strictEqual(actual, true)
    });

});