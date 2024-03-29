/// <reference types="react" />
import PropTypes from 'prop-types';
import { RadioGroupProps } from '@mui/material/RadioGroup';
import { FormControlProps } from '@mui/material/FormControl';
import { ChoicesProps } from 'ra-core';
import { CommonInputProps } from './CommonInputProps';
/**
 * An Input component for a radio button group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <RadioButtonGroupInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <RadioButtonGroupInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that can access
 * the related choice through the `useRecordContext` hook. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <RadioButtonGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <RadioButtonGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <RadioButtonGroup> component
 */
export declare const RadioButtonGroupInput: {
    (props: RadioButtonGroupInputProps): JSX.Element;
    propTypes: {
        choices: PropTypes.Requireable<any[]>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        optionText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>;
        optionValue: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        translateChoice: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        options: {};
        optionText: string;
        optionValue: string;
        row: boolean;
        translateChoice: boolean;
    };
};
export declare type RadioButtonGroupInputProps = Omit<CommonInputProps, 'source'> & ChoicesProps & FormControlProps & RadioGroupProps & {
    options?: RadioGroupProps;
    source?: string;
};
export declare const RadioButtonGroupInputClasses: {
    label: string;
};
//# sourceMappingURL=RadioButtonGroupInput.d.ts.map