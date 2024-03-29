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
import * as React from 'react';
import { useState } from 'react';
import { useTranslate } from 'ra-core';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextInput } from './TextInput';
export var PasswordInput = function (props) {
    var _a = props.initiallyVisible, initiallyVisible = _a === void 0 ? false : _a, rest = __rest(props, ["initiallyVisible"]);
    var _b = useState(initiallyVisible), visible = _b[0], setVisible = _b[1];
    var translate = useTranslate();
    var handleClick = function () {
        setVisible(!visible);
    };
    return (React.createElement(TextInput, __assign({ type: visible ? 'text' : 'password', size: "small", InputProps: {
            endAdornment: (React.createElement(InputAdornment, { position: "end" },
                React.createElement(IconButton, { "aria-label": translate(visible
                        ? 'ra.input.password.toggle_visible'
                        : 'ra.input.password.toggle_hidden'), onClick: handleClick, size: "large" }, visible ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
        } }, rest)));
};
//# sourceMappingURL=PasswordInput.js.map