import { ReactElement, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
export declare const RefreshButton: {
    (props: RefreshButtonProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface Props {
    label?: string;
    icon?: ReactElement;
    onClick?: (e: MouseEvent) => void;
}
export declare type RefreshButtonProps = Props & ButtonProps;
export {};
//# sourceMappingURL=RefreshButton.d.ts.map