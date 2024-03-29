import { useContext } from 'react';
import { FormGroupContext } from './FormGroupContext';
/**
 * Retrieve the name of the form group the consumer belongs to. May be undefined if the consumer is not inside a form group.
 */
export var useFormGroupContext = function () {
    var context = useContext(FormGroupContext);
    return context;
};
//# sourceMappingURL=useFormGroupContext.js.map