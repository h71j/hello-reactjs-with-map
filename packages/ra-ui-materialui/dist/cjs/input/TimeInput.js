"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInput = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
var InputHelperText_1 = require("./InputHelperText");
/**
 * Converts a time string without timezone to a date object
 * with timezone, using the browser timezone.
 *
 * @param {string} value Date string, formatted as hh:mm
 * @return {Date}
 */
var parseTime = function (value) {
    var _a, _b;
    if (!value)
        return null;
    var timeTokens = value.split(':').map(function (v) { return parseInt(v); });
    var today = new Date();
    today.setHours((_a = timeTokens[0]) !== null && _a !== void 0 ? _a : 0);
    today.setMinutes((_b = timeTokens[1]) !== null && _b !== void 0 ? _b : 0);
    return today;
};
/**
 * Form input to edit a time string value in the "HH:mm" format (e.g. '17:45'),
 * using the browser locale for the timezone.
 *
 * Renders a time picker or a text input depending on the browser.
 *
 * This component works with Date objects to handle the timezone using the browser locale.
 * You can still pass string values as long as those can be converted to a JavaScript Date object.
 *
 * @example
 * import { Edit, SimpleForm, TimeInput } from 'react-admin';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TimeInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 */
var TimeInput = function (_a) {
    var className = _a.className, defaultValue = _a.defaultValue, _b = _a.format, format = _b === void 0 ? formatTime : _b, label = _a.label, helperText = _a.helperText, margin = _a.margin, onBlur = _a.onBlur, onChange = _a.onChange, source = _a.source, resource = _a.resource, _c = _a.parse, parse = _c === void 0 ? parseTime : _c, validate = _a.validate, variant = _a.variant, rest = __rest(_a, ["className", "defaultValue", "format", "label", "helperText", "margin", "onBlur", "onChange", "source", "resource", "parse", "validate", "variant"]);
    var _d = (0, ra_core_1.useInput)(__assign({ defaultValue: defaultValue, format: format, parse: parse, onBlur: onBlur, onChange: onChange, resource: resource, source: source, validate: validate }, rest)), field = _d.field, fieldState = _d.fieldState, formState = _d.formState, id = _d.id, isRequired = _d.isRequired;
    var error = fieldState.error, invalid = fieldState.invalid, isTouched = fieldState.isTouched;
    var isSubmitted = formState.isSubmitted;
    return (React.createElement(TextField_1.default, __assign({ id: id }, field, { className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), type: "time", size: "small", variant: variant, margin: margin, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }), label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: defaultInputLabelProps }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest))));
};
exports.TimeInput = TimeInput;
exports.TimeInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
var leftPad = function (nb) {
    if (nb === void 0) { nb = 2; }
    return function (value) { return ('0'.repeat(nb) + value).slice(-nb); };
};
var leftPad2 = leftPad(2);
/**
 * @param {Date} value value to convert
 * @returns {String} A standardized time (hh:mm), to be passed to an <input type="time" />
 */
var convertDateToString = function (value) {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    var hh = leftPad2(value.getHours());
    var mm = leftPad2(value.getMinutes());
    return "".concat(hh, ":").concat(mm);
};
// hh:mm
var timeRegex = /^\d{2}:\d{2}$/;
var defaultInputLabelProps = { shrink: true };
/**
 * Converts a date from the dataProvider, with timezone, to a time string
 * without timezone for use in an <input type="time" />.
 *
 * @param {Date | String} value date string or object
 */
var formatTime = function (value) {
    // null, undefined and empty string values should not go through convertDateToString
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (timeRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
//# sourceMappingURL=TimeInput.js.map