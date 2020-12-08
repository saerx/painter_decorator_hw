const assert = require('assert');
const Decorator = require("../decorator.js");
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function () {

    let decorator;

    beforeEach( function() {
        decorator = new Decorator();
        redPaint = new Paint(10);
        bluePaint = new Paint(15);
        bigRoom = new Room(100);
        smallRoom = new Room(25);
    })

    it("should start with an empty paint stock", function() {
        // Arrange
        // Act
        const actual = decorator.paintStock;
        // Assert
        assert.deepStrictEqual(actual, [])
    });

    it("should be able to add a can of paint", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        const actual = decorator.paintStock;
        // Assert
        assert.deepStrictEqual(actual, [redPaint])
    });

    it("should be able to calculate total paint litres", function() {
        // Arrange
        expectedLitres = redPaint.litres + bluePaint.litres
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        const actual = decorator.totalPaint();
        // Assert
        assert.strictEqual(actual, expectedLitres)
    });

    it("should be able to calculate if can paint a room", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        const actual1 = decorator.canPaint(smallRoom);
        const actual2 = !(decorator.canPaint(bigRoom));
        // Assert
        assert.ok(actual1);
        assert.ok(actual2)
    });

    it("should be able to paint room if enough paint", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        decorator.paint(smallRoom);
        // Assert
        assert.ok(smallRoom.painted)
    });

    it("should be able to decrease amount of paint", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        decorator.emptyPaint();
        actual = decorator.paintStock[0].isEmpty && decorator.paintStock[1].isEmpty
        // Assert
        assert.ok(actual)
    });

    it("should be able to decrease amount of paint when painting", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        decorator.paint(smallRoom);
        actual = decorator.paintStock[0].isEmpty && decorator.paintStock[1].isEmpty
        // Assert
        assert.ok(actual)
    });

    it("should be able to remove empty paint cans", function() {
        // Arrange
        // Act
        decorator.addPaint(redPaint);
        decorator.addPaint(bluePaint);
        decorator.paint(smallRoom);
        decorator.removeEmpties();
        actual = decorator.paintStock;
        // Assert
        assert.deepStrictEqual(actual, [])
    });
})