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
import PropTypes from 'prop-types';
import { useRecordContext, useSaveContext, } from 'ra-core';
import { DeleteWithUndoButton } from './DeleteWithUndoButton';
import { DeleteWithConfirmButton } from './DeleteWithConfirmButton';
/**
 * Button used to delete a single record. Added by default by the <Toolbar> of edit and show views.
 *
 * @typedef {Object} Props The props you can use (other props are injected if you used it in the <Toolbar>)
 * @prop {boolean} mutationMode Either 'pessimistic', 'optimistic' or 'undoable'. Determine whether the deletion uses an undo button in a notification or a confirmation dialog. Defaults to 'undoable'.
 * @prop {Object} record The current resource record
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.delete, translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant MUI variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon Override the icon. Defaults to the Delete icon from MUI.
 *
 * @param {Props} props
 *
 * @example Usage in the <TopToolbar> of an <Edit> form
 *
 * import * as React from 'react';
 * import { Edit, DeleteButton, TopToolbar } from 'react-admin';
 *
 * const EditActions = props => {
 *     const { data, resource } = props;
 *     return (
 *         <TopToolbar>
 *             <DeleteButton
 *                 mutationMode="pessimistic" // Renders the <DeleteWithConfirmButton>
 *             />
 *         </TopToolbar>
 *     );
 * };
 *
 * const Edit = props => {
 *     return <Edit actions={<EditActions />} {...props} />;
 * };
 */
export var DeleteButton = function (props) {
    var mutationMode = props.mutationMode, rest = __rest(props, ["mutationMode"]);
    var record = useRecordContext(props);
    var saveContext = useSaveContext(props);
    if (!record || record.id == null) {
        return null;
    }
    var finalMutationMode = mutationMode
        ? mutationMode
        : (saveContext === null || saveContext === void 0 ? void 0 : saveContext.mutationMode)
            ? saveContext.mutationMode
            : 'undoable';
    return finalMutationMode === 'undoable' ? (
    // @ts-ignore I looked for the error for one hour without finding it
    React.createElement(DeleteWithUndoButton, __assign({ record: record }, rest))) : (React.createElement(DeleteWithConfirmButton, __assign({ 
        // @ts-ignore I looked for the error for one hour without finding it
        mutationMode: finalMutationMode, record: record }, rest)));
};
DeleteButton.propTypes = {
    label: PropTypes.string,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: PropTypes.any,
    // @ts-ignore
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    icon: PropTypes.element,
};
//# sourceMappingURL=DeleteButton.js.map