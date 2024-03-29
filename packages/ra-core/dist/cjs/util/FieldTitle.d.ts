import * as React from 'react';
import { ReactElement } from 'react';
export interface FieldTitleProps {
    isRequired?: boolean;
    resource?: string;
    source?: string;
    label?: string | ReactElement | boolean;
}
export declare const FieldTitle: {
    (props: FieldTitleProps): JSX.Element;
    displayName: string;
};
declare const _default: React.MemoExoticComponent<{
    (props: FieldTitleProps): JSX.Element;
    displayName: string;
}>;
export default _default;
//# sourceMappingURL=FieldTitle.d.ts.map