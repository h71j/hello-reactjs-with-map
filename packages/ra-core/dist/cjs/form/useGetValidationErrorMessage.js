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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetValidationErrorMessage = void 0;
var i18n_1 = require("../i18n");
/**
 * This internal hook returns a function that can translate an error message.
 * It handles simple string errors and those which have a message and args.
 * Only useful if you are implementing custom inputs without leveraging our useInput hook.
 *
 * @example
 * const MyInput = props => {
 *      const { field, fieldState } = useController(props);
 *      useEffect(() => {
 *          if (fieldState.error) {
 *              const errorMessage = useGetValidationErrorMessage(fieldState.error);
 *              alert(errorMessage);
 *          }
 *      }, [fieldState.error]);
 *
 *      return (
 *          <input {...field} />
 *      );
 * }
 *
 * @see ValidationErrorMessage
 * @see ValidationErrorMessageWithArgs
 */
var useGetValidationErrorMessage = function () {
    var translate = (0, i18n_1.useTranslate)();
    return function (error) {
        if (error.message != null) {
            var _a = error, message = _a.message, args = _a.args;
            return translate(message, __assign({ _: message }, args));
        }
        return translate(error, { _: error });
    };
};
exports.useGetValidationErrorMessage = useGetValidationErrorMessage;
//# sourceMappingURL=useGetValidationErrorMessage.js.map