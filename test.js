// data types
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var count;
var usename;
var agree;
var users;
var userName;
count = 123;
userName = ["123", 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
function Vehicle() {
    Color.Black;
}
function create(firstName) {
}
var createData = (function () {
    function createData(mes) {
        this.message = mes;
    }
    return createData;
}());
var createTuple = (function (_super) {
    __extends(createTuple, _super);
    function createTuple(mess) {
        return _super.call(this, '123') || this;
    }
    return createTuple;
}(createData));
var data = new createTuple('praveen');
