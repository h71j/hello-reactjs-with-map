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
import * as React from 'react';
import { useEffect, useState, memo } from 'react';
import get from 'lodash/get';
import { ListContextProvider, useRecordContext } from 'ra-core';
import { fieldPropTypes } from './types';
/**
 * Display a collection
 *
 * Ideal for embedded arrays of objects, e.g.
 * {
 *   id: 123
 *   tags: [
 *     { name: 'foo' },
 *     { name: 'bar' }
 *   ]
 * }
 *
 * The child must be an iterator component
 * (like <Datagrid> or <SingleFieldList>).
 *
 * @example Display all the backlinks of the current post as a <Datagrid>
 * // post = {
 * //   id: 123
 * //   backlinks: [
 * //       {
 * //           uuid: '34fdf393-f449-4b04-a423-38ad02ae159e',
 * //           date: '2012-08-10T00:00:00.000Z',
 * //           url: 'http://example.com/foo/bar.html',
 * //       },
 * //       {
 * //           uuid: 'd907743a-253d-4ec1-8329-404d4c5e6cf1',
 * //           date: '2012-08-14T00:00:00.000Z',
 * //           url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 * //       }
 * //    ]
 * // }
 *     <ArrayField source="backlinks">
 *         <Datagrid>
 *             <DateField source="date" />
 *             <UrlField source="url" />
 *         </Datagrid>
 *     </ArrayField>
 *
 * @example Display all the tags of the current post as <Chip> components
 * // post = {
 * //   id: 123
 * //   tags: [
 * //     { name: 'foo' },
 * //     { name: 'bar' }
 * //   ]
 * // }
 *     <ArrayField source="tags">
 *         <SingleFieldList>
 *             <ChipField source="name" />
 *         </SingleFieldList>
 *     </ArrayField>
 *
 * If you need to render a collection in a custom way, it's often simpler
 * to write your own component:
 *
 * @example
 *     const TagsField = ({ record }) => (
 *          <ul>
 *              {record.tags.map(item => (
 *                  <li key={item.name}>{item.name}</li>
 *              ))}
 *          </ul>
 *     );
 */
export var ArrayField = memo(function (props) {
    var children = props.children, resource = props.resource, source = props.source;
    var record = useRecordContext(props);
    var _a = useState(initialState), data = _a[0], setData = _a[1];
    useEffect(function () {
        var data = get(record, source) || initialState;
        setData(data);
    }, [record, source]);
    return (React.createElement(ListContextProvider, { value: {
            data: data,
            selectedIds: [],
            sort: { field: null, order: null },
            displayedFilters: null,
            filterValues: null,
            hasNextPage: null,
            hasPreviousPage: null,
            hideFilter: null,
            isFetching: false,
            isLoading: false,
            onSelect: null,
            onToggleItem: null,
            onUnselectItems: null,
            page: null,
            perPage: null,
            refetch: null,
            resource: resource,
            setFilters: null,
            setPage: null,
            setPerPage: null,
            setSort: null,
            showFilter: null,
            total: data.length,
        } }, children));
});
ArrayField.propTypes = __assign({}, fieldPropTypes);
ArrayField.displayName = 'ArrayField';
var initialState = [];
//# sourceMappingURL=ArrayField.js.map