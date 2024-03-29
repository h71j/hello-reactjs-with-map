import * as React from 'react';
import { RecordContextProvider } from '../record/RecordContext';
import { ShowContext } from './ShowContext';
/**
 * Create a Show Context.
 *
 * @example
 *
 * const MyShow = (props) => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             <MyShowView>
 *         </ShowContextProvider>
 *     );
 * };
 *
 * const MyShowView = () => {
 *     const record = useRecordContext();
 * }
 *
 * @see ShowContext
 * @see RecordContext
 */
export var ShowContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(ShowContext.Provider, { value: value },
        React.createElement(RecordContextProvider, { value: value && value.record }, children)));
};
//# sourceMappingURL=ShowContextProvider.js.map