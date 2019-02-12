"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_measure_1 = __importDefault(require("react-measure"));
var MeasureWrap = /** @class */ (function (_super) {
    __extends(MeasureWrap, _super);
    function MeasureWrap(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { width: 0, height: 0 };
        return _this;
    }
    MeasureWrap.prototype.render = function () {
        var _this = this;
        var _a = this.state, width = _a.width, height = _a.height;
        return (React.createElement(react_measure_1.default, { bounds: true, onResize: function (contentRect) {
                if (!contentRect.bounds)
                    return;
                _this.setState(__assign({}, contentRect.bounds));
            } }, function (_a) {
            var measureRef = _a.measureRef;
            return (React.createElement("div", { ref: measureRef, style: { width: "100%", height: "100%" } }, _this.props.target({ width: width, height: height })));
        }));
    };
    return MeasureWrap;
}(React.Component));
exports.default = MeasureWrap;
//# sourceMappingURL=index.js.map