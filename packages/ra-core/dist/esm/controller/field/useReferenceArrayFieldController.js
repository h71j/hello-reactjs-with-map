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
import get from 'lodash/get';
import { useMemo } from 'react';
import { useGetManyAggregate } from '../../dataProvider';
import { useList } from '../list';
import { useNotify } from '../../notification';
var emptyArray = [];
var defaultFilter = {};
var defaultSort = { field: null, order: null };
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { data, error, isFetching, isLoading } = useReferenceArrayFieldController({
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @returns {ListControllerResult} The reference props
 */
export var useReferenceArrayFieldController = function (props) {
    var _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.perPage, perPage = _c === void 0 ? 1000 : _c, record = props.record, reference = props.reference, _d = props.sort, sort = _d === void 0 ? defaultSort : _d, source = props.source;
    var notify = useNotify();
    var value = get(record, source);
    var ids = useMemo(function () {
        if (Array.isArray(value))
            return value;
        console.warn("Value of field '".concat(source, "' is not an array."));
        return emptyArray;
    }, [value, source]);
    var _e = useGetManyAggregate(reference, { ids: ids }, {
        onError: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', {
                type: 'warning',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                },
            });
        },
    }), data = _e.data, error = _e.error, isLoading = _e.isLoading, isFetching = _e.isFetching, refetch = _e.refetch;
    var listProps = useList({
        data: data,
        error: error,
        filter: filter,
        isFetching: isFetching,
        isLoading: isLoading,
        page: page,
        perPage: perPage,
        sort: sort,
    });
    return __assign(__assign({}, listProps), { defaultTitle: null, refetch: refetch, resource: reference });
};
//# sourceMappingURL=useReferenceArrayFieldController.js.map