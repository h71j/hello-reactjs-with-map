import * as React from 'react';
import { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import { FieldTitle, useResourceContext } from 'ra-core';
export var FilterButtonMenuItem = forwardRef(function (props, ref) {
    var filter = props.filter, onShow = props.onShow, autoFocus = props.autoFocus;
    var resource = useResourceContext(props);
    var handleShow = useCallback(function () {
        onShow({
            source: filter.props.source,
            defaultValue: filter.props.defaultValue,
        });
    }, [filter.props.defaultValue, filter.props.source, onShow]);
    return (React.createElement(MenuItem, { className: "new-filter-item", "data-key": filter.props.source, "data-default-value": filter.props.defaultValue, key: filter.props.source, onClick: handleShow, autoFocus: autoFocus, ref: ref, disabled: filter.props.disabled },
        React.createElement(FieldTitle, { label: filter.props.label, source: filter.props.source, resource: resource })));
});
FilterButtonMenuItem.propTypes = {
    filter: PropTypes.element.isRequired,
    onShow: PropTypes.func.isRequired,
    resource: PropTypes.string,
    autoFocus: PropTypes.bool,
};
//# sourceMappingURL=FilterButtonMenuItem.js.map