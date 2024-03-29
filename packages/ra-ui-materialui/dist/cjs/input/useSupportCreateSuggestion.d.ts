import { ChangeEvent, ReactElement } from 'react';
import { Identifier, OptionText } from 'ra-core';
/**
 * This hook provides support for suggestion creation in inputs which have choices.
 *
 * @param options The hook option
 * @param {ReactElement} options.create A react element which will be rendered when users choose to create a new choice. This component must call the `useCreateSuggestionContext` hook which provides `onCancel`, `onCreate` and `filter`. See the examples.
 * @param {String} options.createLabel Optional. The label for the choice item allowing users to create a new choice. Can be a translation key. Defaults to `ra.action.create`.
 * @param {String} options.createItemLabel Optional. The label for the choice item allowing users to create a new choice when they already entered a filter. Can be a translation key. The translation will receive an `item` parameter. Defaults to `ra.action.create_item`.
 * @param {any} options.createValue Optional. The value for the choice item allowing users to create a new choice. Defaults to `@@ra-create`.
 * @param {String} options.filter Optional. The filter users may have already entered. Useful for autocomplete inputs for example.
 * @param {OnCreateHandler} options.onCreate Optional. A function which will be called when users choose to create a new choice, if the `create` option wasn't provided.
 * @param {Function} options.handleChange A function to pass to the input. Receives the same parameter as the original event handler and an additional newItem parameter if a new item was create.
 * @returns {UseSupportCreateValue} An object with the following properties:
 * - getCreateItem: a function which will return the label of the choice for create a new choice.
 * - createElement: a React element to render after the input. It will be rendered when users choose to create a new choice. It renders null otherwise.
 */
export declare const useSupportCreateSuggestion: (options: SupportCreateSuggestionOptions) => UseSupportCreateValue;
export interface SupportCreateSuggestionOptions {
    create?: ReactElement;
    createValue?: string;
    createLabel?: string;
    createItemLabel?: string;
    filter?: string;
    handleChange: (value: any) => void;
    onCreate?: OnCreateHandler;
    optionText?: OptionText;
}
export interface UseSupportCreateValue {
    createId: string;
    getCreateItem: (filterValue?: string) => {
        id: Identifier;
        [key: string]: any;
    };
    handleChange: (eventOrValue: ChangeEvent | any) => Promise<void>;
    createElement: ReactElement | null;
}
interface CreateSuggestionContextValue {
    filter?: string;
    onCreate: (choice: any) => void;
    onCancel: () => void;
}
export declare const useCreateSuggestionContext: () => CreateSuggestionContextValue;
export declare type OnCreateHandler = (filter?: string) => any | Promise<any>;
export {};
//# sourceMappingURL=useSupportCreateSuggestion.d.ts.map