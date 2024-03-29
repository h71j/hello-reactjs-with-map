/**
 * Gets a list of values indexed by field based on a list of records
 *
 * @example
 * const records = [
 *     {
 *         id: 1,
 *         title: "Lorem Ipsum",
 *         views: 254,
 *         user_id: 123,
 *     },
 *     {
 *         id: 2,
 *         title: "Sic Dolor amet",
 *         views: 65,
 *         user_id: 456,
 *     },
 * ];
 * getValuesFromRecords(records);
 * // {
 * //    id: [1, 2],
 * //    title: ['Lorem Ipsum', 'Sic Dolor amet'],
 * //    views: [254, 65],
 * //    user_id: [123, 456],
 * // }
 */
declare const _default: (records: any[]) => any;
export default _default;
//# sourceMappingURL=getValuesFromRecords.d.ts.map