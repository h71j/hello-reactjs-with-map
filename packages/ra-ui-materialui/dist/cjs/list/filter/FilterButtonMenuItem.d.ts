import * as React from 'react';
export declare const FilterButtonMenuItem: React.ForwardRefExoticComponent<FilterButtonMenuItemProps & React.RefAttributes<any>>;
export interface FilterButtonMenuItemProps {
    filter: JSX.Element;
    onShow: (params: {
        source: string;
        defaultValue: any;
    }) => void;
    resource: string;
    autoFocus?: boolean;
}
//# sourceMappingURL=FilterButtonMenuItem.d.ts.map