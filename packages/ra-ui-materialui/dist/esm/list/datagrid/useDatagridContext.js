import { useContext, useMemo } from 'react';
import DatagridContext from './DatagridContext';
import defaults from 'lodash/defaults';
export var useDatagridContext = function (props) {
    var context = useContext(DatagridContext);
    return useMemo(function () {
        return defaults({}, props != null ? { isRowExpandable: props.isRowExpandable } : {}, context);
    }, [context, props]);
};
//# sourceMappingURL=useDatagridContext.js.map