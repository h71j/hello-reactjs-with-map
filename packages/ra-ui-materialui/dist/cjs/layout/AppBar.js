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
exports.AppBarClasses = exports.AppBar = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var SidebarToggleButton_1 = require("./SidebarToggleButton");
var LoadingIndicator_1 = require("./LoadingIndicator");
var UserMenu_1 = require("./UserMenu");
var HideOnScroll_1 = require("./HideOnScroll");
var button_1 = require("../button");
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be rendered as children of the AppBar
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {boolean} props.open State of the <Admin/> Sidebar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props}>
 *           <Typography
 *               variant="h6"
 *               color="inherit"
 *               className={classes.title}
 *               id="react-admin-title"
 *           />
 *       </AppBar>
 *   );
 *};
 *
 * @example Without a user menu
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props} userMenu={false} />
 *   );
 *};
 */
exports.AppBar = (0, react_1.memo)(function (props) {
    var children = props.children, className = props.className, _a = props.color, color = _a === void 0 ? 'secondary' : _a, open = props.open, title = props.title, _b = props.userMenu, userMenu = _b === void 0 ? DefaultUserMenu : _b, _c = props.container, Container = _c === void 0 ? HideOnScroll_1.HideOnScroll : _c, rest = __rest(props, ["children", "className", "color", "open", "title", "userMenu", "container"]);
    var locales = (0, ra_core_1.useLocales)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return (React.createElement(Container, { className: className },
        React.createElement(StyledAppBar, __assign({ className: exports.AppBarClasses.appBar, color: color }, rest),
            React.createElement(material_1.Toolbar, { disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: exports.AppBarClasses.toolbar },
                React.createElement(SidebarToggleButton_1.SidebarToggleButton, { className: exports.AppBarClasses.menuButton }),
                react_1.Children.count(children) === 0 ? (React.createElement(material_1.Typography, { variant: "h6", color: "inherit", className: exports.AppBarClasses.title, id: "react-admin-title" })) : (children),
                locales && locales.length > 1 ? (React.createElement(button_1.LocalesMenuButton, null)) : null,
                React.createElement(LoadingIndicator_1.LoadingIndicator, null),
                typeof userMenu === 'boolean' ? (userMenu === true ? (React.createElement(UserMenu_1.UserMenu, null)) : null) : (userMenu)))));
});
exports.AppBar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'transparent',
    ]),
    container: ra_core_1.ComponentPropType,
    // @deprecated
    open: prop_types_1.default.bool,
    userMenu: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
};
var DefaultUserMenu = React.createElement(UserMenu_1.UserMenu, null);
var PREFIX = 'RaAppBar';
exports.AppBarClasses = {
    appBar: "".concat(PREFIX, "-appBar"),
    toolbar: "".concat(PREFIX, "-toolbar"),
    menuButton: "".concat(PREFIX, "-menuButton"),
    menuButtonIconClosed: "".concat(PREFIX, "-menuButtonIconClosed"),
    menuButtonIconOpen: "".concat(PREFIX, "-menuButtonIconOpen"),
    title: "".concat(PREFIX, "-title"),
};
var StyledAppBar = (0, styles_1.styled)(material_1.AppBar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.AppBarClasses.toolbar)] = (_c = {
                padding: "0 ".concat(theme.spacing(1.5), " 0 0")
            },
            _c[theme.breakpoints.down('md')] = {
                minHeight: theme.spacing(6),
            },
            _c),
        _b["& .".concat(exports.AppBarClasses.menuButton)] = {
            marginLeft: '0.2em',
            marginRight: '0.2em',
        },
        _b["& .".concat(exports.AppBarClasses.title)] = {
            flex: 1,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        _b);
});
//# sourceMappingURL=AppBar.js.map