var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello I am here MIXIN file");
export function DisposableMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isDisposed = false;
            return _this;
        }
        class_1.prototype.dispose = function () {
            this.isDisposed = true;
        };
        return class_1;
    }(base));
}
export function ActivatableMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isActive = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActive = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActive = false;
        };
        return class_2;
    }(base));
}
var Example = /** @class */ (function (_super) {
    __extends(Example, _super);
    function Example() {
        var _this = _super.call(this) || this;
        _this.member = 123;
        return _this;
    }
    return Example;
}(DisposableMixin(ActivatableMixin(/** @class */ (function () {
    function class_3() {
    }
    return class_3;
}())))));
var example = new Example();
console.log(example);
