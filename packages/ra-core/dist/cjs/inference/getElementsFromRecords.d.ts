import { InferredTypeMap } from './types';
import InferredElement from './InferredElement';
/**
 * Get a list of React-admin field components from a list of records
 *
 * @example
 * const records = [
 *     {
 *         "id": 1,
 *         "title": "Lorem Ipsum",
 *         "views": 254,
 *         "user_id": 123,
 *     },
 *     {
 *         "id": 2,
 *         "title": "Sic Dolor amet",
 *         "user_id": 456,
 *     },
 * ];
 * const types = {
 *     id: NumberField,
 *     string: TextField,
 *     number: NumberField,
 *     reference: ReferenceField
 * };
 * const components = getElementsFromRecords(records, types);
 * // [
 * //    <NumberField source="id" />,
 * //    <TextField source="title" />,
 * //    <NumberField source="views" />,
 * //    <ReferenceField source="user_id" reference="users"><NumberField source="id" /></ReferenceField>,
 * // ];
 */
declare const _default: (records: any[], types: InferredTypeMap) => InferredElement[];
export default _default;
//# sourceMappingURL=getElementsFromRecords.d.ts.map