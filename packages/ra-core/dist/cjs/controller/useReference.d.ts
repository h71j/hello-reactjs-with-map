import { RaRecord, Identifier } from '../types';
import { UseGetManyHookValue } from '../dataProvider';
import { UseQueryOptions } from 'react-query';
interface UseReferenceProps<RecordType extends RaRecord = any> {
    id: Identifier;
    reference: string;
    options?: UseQueryOptions<RecordType[], Error>;
}
export interface UseReferenceResult<RecordType extends RaRecord = any> {
    isLoading: boolean;
    isFetching: boolean;
    referenceRecord?: RecordType;
    error?: any;
    refetch: UseGetManyHookValue<RecordType>['refetch'];
}
/**
 * @typedef UseReferenceResult
 * @type {Object}
 * @property {boolean} isFetching: boolean indicating if the reference is loading
 * @property {boolean} isLoading: boolean indicating if the reference has loaded at least once
 * @property {Object} referenceRecord: the referenced record.
 */
/**
 * Fetch reference record, and return it when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { isLoading, referenceRecord } = useReference({
 *     id: 7,
 *     reference: 'users',
 * });
 *
 * @param {Object} option
 * @param {string} option.reference The linked resource name
 * @param {string} option.id The id of the reference
 *
 * @returns {UseReferenceResult} The reference record
 */
export declare const useReference: <RecordType extends RaRecord = any>({ reference, id, options, }: UseReferenceProps<RecordType>) => UseReferenceResult<RecordType>;
export {};
//# sourceMappingURL=useReference.d.ts.map