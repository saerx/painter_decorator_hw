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

Decorator.prototype.emptyPaint = function() {
    for (let paint of this.paintStock) {
        paint.empty()
    };
}

Decorator.prototype.paint = function (room) {
    if (this.canPaint(room) === true){
        room.paint()
        this.emptyPaint()
    }
}

Decorator.prototype.removeEmpties = function () {
    for (let paint of this.paintStock) {
        if (paint.isEmpty()) {
            let pos = this.paintStock.indexOf(paint);
            this.paintStock.splice(pos,1)
        };
    };
}

module.exports = Decorator;