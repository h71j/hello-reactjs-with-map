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
exports.BulkUpdateWithConfirmButton = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Update_1 = __importDefault(require("@mui/icons-material/Update"));
var inflection_1 = __importDefault(require("inflection"));
var styles_1 = require("@mui/material/styles");
var ra_core_1 = require("ra-core");
var layout_1 = require("../layout");
var Button_1 = require("./Button");
var BulkUpdateWithConfirmButton = function (props) {
    var notify = (0, ra_core_1.useNotify)();
    var refresh = (0, ra_core_1.useRefresh)();
    var translate = (0, ra_core_1.useTranslate)();
    var resource = (0, ra_core_1.useResourceContext)(props);
    var unselectAll = (0, ra_core_1.useUnselectAll)(resource);
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setOpen = _a[1];
    var selectedIds = (0, ra_core_1.useListContext)(props).selectedIds;
    var _b = props.confirmTitle, confirmTitle = _b === void 0 ? 'ra.message.bulk_update_title' : _b, _c = props.confirmContent, confirmContent = _c === void 0 ? 'ra.message.bulk_update_content' : _c, data = props.data, _d = props.icon, icon = _d === void 0 ? defaultIcon : _d, _e = props.label, label = _e === void 0 ? 'ra.action.update' : _e, _f = props.mutationMode, mutationMode = _f === void 0 ? 'pessimistic' : _f, onClick = props.onClick, _g = props.onSuccess, onSuccess = _g === void 0 ? function () {
        refresh();
        notify('ra.notification.updated', {
            type: 'info',
            messageArgs: { smart_count: selectedIds.length },
            undoable: mutationMode === 'undoable',
        });
        unselectAll();
        setOpen(false);
    } : _g, _h = props.onError, onError = _h === void 0 ? function (error) {
        notify(typeof error === 'string'
            ? error
            : error.message || 'ra.notification.http_error', {
            type: 'warning',
            messageArgs: {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            },
        });
        setOpen(false);
    } : _h, rest = __rest(props, ["confirmTitle", "confirmContent", "data", "icon", "label", "mutationMode", "onClick", "onSuccess", "onError"]);
    var _j = (0, ra_core_1.useUpdateMany)(resource, { ids: selectedIds, data: data }, {
        onSuccess: onSuccess,
        onError: onError,
        mutationMode: mutationMode,
    }), updateMany = _j[0], isLoading = _j[1].isLoading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleUpdate = function (e) {
        updateMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(react_1.Fragment, null,
        React.createElement(StyledButton, __assign({ onClick: handleClick, label: label }, sanitizeRestProps(rest)), icon),
        React.createElement(layout_1.Confirm, { isOpen: isOpen, loading: isLoading, title: confirmTitle, content: confirmContent, translateOptions: {
                smart_count: selectedIds.length,
                name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: selectedIds.length,
                    _: inflection_1.default.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: selectedIds.length,
                        _: inflection_1.default.inflect(resource, selectedIds.length),
                    }), true),
                }),
            }, onConfirm: handleUpdate, onClose: handleDialogClose })));
};
exports.BulkUpdateWithConfirmButton = BulkUpdateWithConfirmButton;
var sanitizeRestProps = function (_a) {
    var filterValues = _a.filterValues, label = _a.label, onSuccess = _a.onSuccess, onError = _a.onError, rest = __rest(_a, ["filterValues", "label", "onSuccess", "onError"]);
    return rest;
};
exports.BulkUpdateWithConfirmButton.propTypes = {
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
    data: prop_types_1.default.any.isRequired,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
};
var PREFIX = 'RaBulkUpdateWithConfirmButton';
var StyledButton = (0, styles_1.styled)(Button_1.Button, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: (0, styles_1.alpha)(theme.palette.primary.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    });
});
var defaultIcon = React.createElement(Update_1.default, null);
//# sourceMappingURL=BulkUpdateWithConfirmButton.js.map