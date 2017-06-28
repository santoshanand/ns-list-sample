"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this._items = new observable_array_1.ObservableArray();
        // Initialize default values.
        var item1 = { label: 'Item one' };
        var item2 = { label: 'Item two' };
        var item3 = { label: 'Item three' };
        var item4 = { label: 'Item four' };
        _this.dataItems.push(item1);
        _this.dataItems.push(item2);
        _this.dataItems.push(item3);
        _this.dataItems.push(item4);
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "dataItems", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            this.notifyPropertyChange('dataItems', value);
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDBEQUFzRDtBQUt0RDtJQUFxQyxtQ0FBVTtJQUszQztRQUFBLFlBQ0ksaUJBQU8sU0FZVjtRQWRPLFlBQU0sR0FBNkIsSUFBSSxrQ0FBZSxFQUFZLENBQUM7UUFJdkUsNkJBQTZCO1FBQzdCLElBQUksS0FBSyxHQUFZLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxHQUFZLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxHQUFZLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFZLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxDQUFDO1FBRXpDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUMvQixDQUFDO0lBQ0Qsc0JBQUksc0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFjLEtBQStCO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BSkE7SUFPTCxzQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBcUMsdUJBQVUsR0E0QjlDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90ZUl0ZW0ge1xuICAgIGxhYmVsOnN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXRlbXM6T2JzZXJ2YWJsZUFycmF5PE5vdGVJdGVtPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Tm90ZUl0ZW0+KCk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgbGV0IGl0ZW0xOk5vdGVJdGVtID0ge2xhYmVsOidJdGVtIG9uZSd9O1xuICAgICAgICBsZXQgaXRlbTI6Tm90ZUl0ZW0gPSB7bGFiZWw6J0l0ZW0gdHdvJ307XG4gICAgICAgIGxldCBpdGVtMzpOb3RlSXRlbSA9IHtsYWJlbDonSXRlbSB0aHJlZSd9O1xuICAgICAgICBsZXQgaXRlbTQ6Tm90ZUl0ZW0gPSB7bGFiZWw6J0l0ZW0gZm91cid9O1xuXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2goaXRlbTEpO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKGl0ZW0yKTtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMucHVzaChpdGVtMyk7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2goaXRlbTQpO1xuICAgIH1cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxOb3RlSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHNldCBkYXRhSXRlbXModmFsdWU6T2JzZXJ2YWJsZUFycmF5PE5vdGVJdGVtPikge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkYXRhSXRlbXMnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgXG59Il19