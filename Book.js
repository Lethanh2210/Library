"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name) {
        this._id = id;
        this._name = name;
    }
    Book.prototype.getName = function () {
        return this._name;
    };
    Book.prototype.setName = function (name) {
        this._name = name;
    };
    Book.prototype.getID = function () {
        return this._id;
    };
    return Book;
}());
exports.Book = Book;
