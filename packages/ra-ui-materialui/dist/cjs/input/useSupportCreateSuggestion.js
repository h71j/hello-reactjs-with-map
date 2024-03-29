"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateSuggestionContext = exports.useSupportCreateSuggestion = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ra_core_1 = require("ra-core");
var set_1 = __importDefault(require("lodash/set"));
/**
 * This hook provides support for suggestion creation in inputs which have choices.
 *
 * @param options The hook option
 * @param {ReactElement} options.create A react element which will be rendered when users choose to create a new choice. This component must call the `useCreateSuggestionContext` hook which provides `onCancel`, `onCreate` and `filter`. See the examples.
 * @param {String} options.createLabel Optional. The label for the choice item allowing users to create a new choice. Can be a translation key. Defaults to `ra.action.create`.
 * @param {String} options.createItemLabel Optional. The label for the choice item allowing users to create a new choice when they already entered a filter. Can be a translation key. The translation will receive an `item` parameter. Defaults to `ra.action.create_item`.
 * @param {any} options.createValue Optional. The value for the choice item allowing users to create a new choice. Defaults to `@@ra-create`.
 * @param {String} options.filter Optional. The filter users may have already entered. Useful for autocomplete inputs for example.
 * @param {OnCreateHandler} options.onCreate Optional. A function which will be called when users choose to create a new choice, if the `create` option wasn't provided.
 * @param {Function} options.handleChange A function to pass to the input. Receives the same parameter as the original event handler and an additional newItem parameter if a new item was create.
 * @returns {UseSupportCreateValue} An object with the following properties:
 * - getCreateItem: a function which will return the label of the choice for create a new choice.
 * - createElement: a React element to render after the input. It will be rendered when users choose to create a new choice. It renders null otherwise.
 */
var useSupportCreateSuggestion = function (options) {
    var create = options.create, _a = options.createLabel, createLabel = _a === void 0 ? 'ra.action.create' : _a, _b = options.createItemLabel, createItemLabel = _b === void 0 ? 'ra.action.create_item' : _b, _c = options.createValue, createValue = _c === void 0 ? '@@ra-create' : _c, _d = options.optionText, optionText = _d === void 0 ? 'name' : _d, filter = options.filter, handleChange = options.handleChange, onCreate = options.onCreate;
    var translate = (0, ra_core_1.useTranslate)();
    var _e = (0, react_1.useState)(false), renderOnCreate = _e[0], setRenderOnCreate = _e[1];
    var filterRef = (0, react_1.useRef)(filter);
    (0, react_1.useEffect)(function () {
        if (filterRef.current !== filter && filter !== '') {
            filterRef.current = filter;
        }
    }, [filter]);
    var context = (0, react_1.useMemo)(function () { return ({
        filter: filterRef.current,
        onCancel: function () { return setRenderOnCreate(false); },
        onCreate: function (item) {
            setRenderOnCreate(false);
            handleChange(item);
        },
    }); }, [handleChange]);
    return {
        createId: createValue,
        getCreateItem: function () {
            if (typeof optionText !== 'string') {
                return {
                    id: createValue,
                    name: filter && createItemLabel
                        ? translate(createItemLabel, {
                            item: filter,
                            _: createItemLabel,
                        })
                        : translate(createLabel, { _: createLabel }),
                };
            }
            return (0, set_1.default)({
                id: createValue,
            }, optionText, filter && createItemLabel
                ? translate(createItemLabel, {
                    item: filter,
                    _: createItemLabel,
                })
                : translate(createLabel, { _: createLabel }));
        },
        handleChange: function (eventOrValue) { return __awaiter(void 0, void 0, void 0, function () {
            var value, finalValue, newSuggestion;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = ((_a = eventOrValue === null || eventOrValue === void 0 ? void 0 : eventOrValue.target) === null || _a === void 0 ? void 0 : _a.value) || eventOrValue;
                        finalValue = Array.isArray(value) ? __spreadArray([], value, true).pop() : value;
                        if (!((finalValue === null || finalValue === void 0 ? void 0 : finalValue.id) === createValue || finalValue === createValue)) return [3 /*break*/, 3];
                        if (!!(0, react_1.isValidElement)(create)) return [3 /*break*/, 2];
                        return [4 /*yield*/, onCreate(filter)];
                    case 1:
                        newSuggestion = _b.sent();
                        if (newSuggestion) {
                            handleChange(newSuggestion);
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        setRenderOnCreate(true);
                        return [2 /*return*/];
                    case 3:
                        handleChange(eventOrValue);
                        return [2 /*return*/];
                }
            });
        }); },
        createElement: renderOnCreate && (0, react_1.isValidElement)(create) ? (React.createElement(CreateSuggestionContext.Provider, { value: context }, create)) : null,
    };
};
exports.useSupportCreateSuggestion = useSupportCreateSuggestion;
var CreateSuggestionContext = (0, react_1.createContext)(undefined);
var useCreateSuggestionContext = function () {
    return (0, react_1.useContext)(CreateSuggestionContext);
};
exports.useCreateSuggestionContext = useCreateSuggestionContext;
//# sourceMappingURL=useSupportCreateSuggestion.js.map