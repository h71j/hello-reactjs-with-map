import { FC, ReactElement, ReactNode } from 'react';
import { ListControllerProps, SortPayload, FilterPayload } from 'ra-core';
import { SxProps } from '@mui/system';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categoriesx of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categoriesx" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 * By default, restricts the displayed values to 1000. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayField perPage={10} reference="categoriesx" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * By default, the field displays the results in the order in which they are referenced
 * (i.e. in the order of the list of ids). You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayField sort={{ field: 'name', order: 'ASC' }} reference="categoriesx" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * Also, you can filter the results to display only a subset of values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayField filter={{ is_published: true }} reference="categoriesx" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 */
export declare const ReferenceArrayField: FC<ReferenceArrayFieldProps>;
export interface ReferenceArrayFieldProps extends PublicFieldProps, InjectedFieldProps {
    children?: ReactNode;
    filter?: FilterPayload;
    page?: number;
    pagination?: ReactElement;
    perPage?: number;
    reference: string;
    resource?: string;
    sort?: SortPayload;
    sx?: SxProps;
}
export interface ReferenceArrayFieldViewProps extends Omit<ReferenceArrayFieldProps, 'resource' | 'page' | 'perPage'>, ListControllerProps {
}
export declare const ReferenceArrayFieldView: FC<ReferenceArrayFieldViewProps>;
export declare const ReferenceArrayFieldClasses: {
    progress: string;
};
//# sourceMappingURL=ReferenceArrayField.d.ts.map