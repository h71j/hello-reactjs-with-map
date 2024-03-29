import * as React from 'react';
import { TranslatableContext, } from './TranslatableContext';
export var TranslatableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(TranslatableContext.Provider, { value: value }, children));
};
//# sourceMappingURL=TranslatableContextProvider.js.map