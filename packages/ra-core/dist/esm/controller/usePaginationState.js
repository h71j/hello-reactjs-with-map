var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useReducer, useCallback, useRef } from 'react';
var paginationReducer = function (prevState, nextState) {
    return __assign(__assign({}, prevState), nextState);
};
var defaultPagination = {
    page: 1,
    perPage: 25,
};
/**
 * Hooks to provide pagination state (page and perPage)
 *
 * @example
 *
 * const { page, setPage, perPage, setPerPage } = usePagination(initialPerPage);
 *
 * @param {number} initialPagination the initial value per page
 * @returns {PaginationHookResult} The pagination props
 */
export default (function (initialPagination) {
    if (initialPagination === void 0) { initialPagination = {}; }
    var _a = useReducer(paginationReducer, __assign(__assign({}, defaultPagination), initialPagination)), pagination = _a[0], setPagination = _a[1];
    var isFirstRender = useRef(true);
    var setPerPage = useCallback(function (perPage) { return setPagination({ perPage: perPage, page: 1 }); }, []);
    var setPage = useCallback(function (page) { return setPagination({ page: page }); }, []);
    useEffect(function () {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPerPage(initialPagination.perPage || 25);
    }, [initialPagination.perPage, setPerPage]);
    return {
        page: pagination.page,
        perPage: pagination.perPage,
        pagination: pagination,
        setPage: setPage,
        setPerPage: setPerPage,
        setPagination: setPagination,
    };
});
//# sourceMappingURL=usePaginationState.js.map