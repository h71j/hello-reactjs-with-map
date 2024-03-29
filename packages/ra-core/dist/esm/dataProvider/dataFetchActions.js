var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var GET_LIST = 'GET_LIST';
export var GET_ONE = 'GET_ONE';
export var GET_MANY = 'GET_MANY';
export var GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
export var CREATE = 'CREATE';
export var UPDATE = 'UPDATE';
export var UPDATE_MANY = 'UPDATE_MANY';
export var DELETE = 'DELETE';
export var DELETE_MANY = 'DELETE_MANY';
export var fetchActionsWithRecordResponse = ['getOne', 'create', 'update'];
export var fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    'getList',
    'getMany',
    'getManyReference',
];
export var fetchActionsWithArrayOfRecordsResponse = __spreadArray(__spreadArray([], fetchActionsWithArrayOfIdentifiedRecordsResponse, true), [
    'updateMany',
    'deleteMany',
], false);
export var fetchActionsWithTotalResponse = ['getList', 'getManyReference'];
export var reactAdminFetchActions = __spreadArray(__spreadArray([], fetchActionsWithRecordResponse, true), fetchActionsWithArrayOfRecordsResponse, true);
export var sanitizeFetchType = function (fetchType) {
    switch (fetchType) {
        case GET_LIST:
            return 'getList';
        case GET_ONE:
            return 'getOne';
        case GET_MANY:
            return 'getMany';
        case GET_MANY_REFERENCE:
            return 'getManyReference';
        case CREATE:
            return 'create';
        case UPDATE:
            return 'update';
        case UPDATE_MANY:
            return 'updateMany';
        case DELETE:
            return 'delete';
        case DELETE_MANY:
            return 'deleteMany';
        default:
            return fetchType;
    }
};
//# sourceMappingURL=dataFetchActions.js.map