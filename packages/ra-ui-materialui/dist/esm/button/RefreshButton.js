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
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import NavigationRefresh from '@mui/icons-material/Refresh';
import { useRefresh } from 'ra-core';
import { Button } from './Button';
export var RefreshButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.refresh' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, rest = __rest(props, ["label", "icon", "onClick"]);
    var refresh = useRefresh();
    var handleClick = useCallback(function (event) {
        event.preventDefault();
        refresh();
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [refresh, onClick]);
    return (React.createElement(Button, __assign({ label: label, onClick: handleClick }, rest), icon));
};
var defaultIcon = React.createElement(NavigationRefresh, null);
RefreshButton.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
};
//# sourceMappingURL=RefreshButton.js.map