const Decorator = function () {
    this.paintStock = [];
}

Decorator.prototype.addPaint = function (paintCan) {
    this.paintStock.push(paintCan);
}
Decorator.prototype.totalPaint = function() {
    let total = 0
    for (let paint of this.paintStock) {
        total += paint.litres
    };
    return total; 
}

Decorator.prototype.canPaint = function (room) {
    total = this.totalPaint();
    if (total === room.area){
        return true
    };
}

Decorator.prototype.paint = function (room) {
    if (this.canPaint(room) === true){
        room.paint()
    }
}

module.exports = Decorator;