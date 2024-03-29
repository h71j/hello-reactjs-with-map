import { FilterPayload } from '../types';
interface UseFilterStateOptions {
    filterToQuery?: (v: string) => FilterPayload;
    permanentFilter?: FilterPayload;
    debounceTime?: number;
}
/**
 * @typedef UseFilterStateProps
 * @property {Object} filter: The filter object.
 * @property {setFilter} setFilter: Update the filter with the given string
 */
interface UseFilterStateProps {
    filter: FilterPayload;
    setFilter: (v: string) => void;
}
/**
 * Hooks to provide filter state and setFilter which update the query part of the filter
 *
 * @example
 *
 * const { filter, setFilter } = useFilter({
 *      filterToQuery: v => ({ query: v }),
 *      permanentFilter: { foo: 'bar' },
 *      debounceTime: 500,
 * });
 * // filter initial value:
 * {
 *      query: '',
 *      foo: 'bar'
 * }
 *  // after updating filter
 *  setFilter('needle');
 *  {
 *      query: 'needle',
 *      foo: 'bar'
 *  }
 *
 * @param {Object} option
 * @param {Function} option.filterToQuery Function to convert the filter string to a filter object. Defaults to v => ({ q: v }).
 * @param {Object} option.permanentFilter Permanent filter to be merged with the filter string. Defaults to {}.
 * @param {number} option.debounceTime Time in ms between filter updates - used to debounce the search. Defaults to 500ms.
 *
 * @returns {UseFilterStateOptions} The filter props
 */
declare const _default: ({ filterToQuery, permanentFilter, debounceTime, }: UseFilterStateOptions) => UseFilterStateProps;
export default _default;
//# sourceMappingURL=useFilterState.d.ts.map