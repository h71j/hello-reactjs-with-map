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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageButtons = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Image_1 = __importDefault(require("@mui/icons-material/Image"));
var ra_core_1 = require("ra-core");
var useTiptapEditor_1 = require("../useTiptapEditor");
var ImageButtons = function (props) {
    var translate = (0, ra_core_1.useTranslate)();
    var editor = (0, useTiptapEditor_1.useTiptapEditor)();
    var label = translate('ra.tiptap.image', { _: 'Image' });
    var addImage = React.useCallback(function () {
        var url = window.prompt(translate('ra.tiptap.image_dialog', { _: 'Image URL' }));
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor, translate]);
    return editor ? (React.createElement(material_1.ToggleButton, __assign({ "aria-label": label, title: label }, props, { disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable), value: "image", onClick: addImage }),
        React.createElement(Image_1.default, { fontSize: "inherit" }))) : null;
};
exports.ImageButtons = ImageButtons;
//# sourceMappingURL=ImageButtons.js.map