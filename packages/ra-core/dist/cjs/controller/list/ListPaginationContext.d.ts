/// <reference types="react" />
import { ListControllerResult } from './useListController';
/**
 * Context to store the pagination part of the useListController() result.
 *
 * Use the useListPaginationContext() hook to read the pagination information.
 * That's what List components do in react-admin (e.g. <Pagination>).
 *
 * @typedef {Object} ListPaginationContextValue
 * @prop {boolean}  isLoading boolean that is false until the data is available
 * @prop {integer}  total the total number of results for the current filters, excluding pagination. Useful to build the pagination controls. e.g. 23
 * @prop {integer}  page the current page. Starts at 1
 * @prop {Function} setPage a callback to change the page, e.g. setPage(3)
 * @prop {integer}  perPage the number of results per page. Defaults to 25
 * @prop {Function} setPerPage a callback to change the number of results per page, e.g. setPerPage(25)
 * @prop {Boolean}  hasPreviousPage true if the current page is not the first one
 * @prop {Boolean}  hasNextPage true if the current page is not the last one

 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @typedef Props
 * @prop {ListPaginationContextValue} value
 *
 * @param {Props}
 *
 * @see useListController
 * @see useListContext
 *
 * @example
 *
 * import { useListController, ListPaginationContext } from 'ra-core';
 *
 * const List = props => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListPaginationContext.Provider value={controllerProps}>
 *             ...
 *         </ListPaginationContext.Provider>
 *     );
 * };
 */
export declare const ListPaginationContext: import("react").Context<ListPaginationContextValue>;
export declare type ListPaginationContextValue = Pick<ListControllerResult, 'isLoading' | 'hasPreviousPage' | 'hasNextPage' | 'page' | 'perPage' | 'setPage' | 'setPerPage' | 'total' | 'resource'>;
export declare const usePickPaginationContext: (context: ListControllerResult) => ListPaginationContextValue;
//# sourceMappingURL=ListPaginationContext.d.ts.map