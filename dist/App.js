"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Description_1 = __importDefault(require("./Description"));
const CardForm_1 = __importDefault(require("./CardForm"));
function App() {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Description_1.default, null),
        react_1.default.createElement(CardForm_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map