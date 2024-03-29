"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResourceExcluded = exports.isResourceIncluded = exports.introspectSchema = void 0;
var graphql_1 = require("graphql");
var client_1 = require("@apollo/client");
var constants_1 = require("./constants");
var introspectionPromise;
/**
 * @param {ApolloClient} client The Apollo client
 * @param {Object} options The introspection options
 */
var introspectSchema = function (client, options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (introspectionPromise) {
            return [2 /*return*/, introspectionPromise];
        }
        introspectionPromise = runSchemaIntrospection(client, options);
        return [2 /*return*/, introspectionPromise];
    });
}); };
exports.introspectSchema = introspectSchema;
var runSchemaIntrospection = function (client, options) { return __awaiter(void 0, void 0, void 0, function () {
    var schema, _a, queries, types, resources;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!options.schema) return [3 /*break*/, 1];
                _a = options.schema;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, fetchSchema(client)];
            case 2:
                _a = _b.sent();
                _b.label = 3;
            case 3:
                schema = _a;
                queries = getQueriesFromSchema(schema);
                types = getTypesFromSchema(schema);
                resources = getResources(types, queries, options);
                return [2 /*return*/, {
                        types: types,
                        queries: queries,
                        resources: resources,
                        schema: schema,
                    }];
        }
    });
}); };
var fetchSchema = function (client) {
    return client
        .query({
        fetchPolicy: 'network-only',
        query: (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                ", "\n            "], ["\n                ", "\n            "])), (0, graphql_1.getIntrospectionQuery)()),
    })
        .then(function (_a) {
        var __schema = _a.data.__schema;
        return __schema;
    });
};
var getQueriesFromSchema = function (schema) {
    return schema.types.reduce(function (acc, type) {
        var _a, _b;
        if (type.name !== ((_a = schema.queryType) === null || _a === void 0 ? void 0 : _a.name) &&
            type.name !== ((_b = schema.mutationType) === null || _b === void 0 ? void 0 : _b.name) &&
            type.fields) {
            return acc;
        }
        return __spreadArray(__spreadArray([], acc, true), (type.fields || []), true);
    }, []);
};
var getTypesFromSchema = function (schema) {
    return schema.types.filter(function (type) {
        return type.name !== (schema.queryType && schema.queryType.name) &&
            type.name !== (schema.mutationType && schema.mutationType.name);
    });
};
var getResources = function (types, queries, options) {
    var filteredResources = types.filter(function (type) {
        return isResource(type, queries, options);
    });
    return filteredResources.map(function (type) {
        return buildResource(type, queries, options);
    });
};
var isResource = function (type, queries, options) {
    if ((0, exports.isResourceIncluded)(type, options))
        return true;
    if ((0, exports.isResourceExcluded)(type, options))
        return false;
    var operations = Object.keys(options.operationNames).map(function (operation) {
        return options.operationNames[operation](type);
    });
    var hasAtLeastOneOperation = operations.some(function (operation) {
        return queries.find(function (_a) {
            var name = _a.name;
            return name === operation;
        });
    });
    return hasAtLeastOneOperation;
};
var isResourceIncluded = function (type, _a) {
    var _b = _a === void 0 ? {} : _a, include = _b.include;
    if (Array.isArray(include)) {
        return include.includes(type.name);
    }
    if (typeof include === 'function') {
        return include(type);
    }
    return false;
};
exports.isResourceIncluded = isResourceIncluded;
var isResourceExcluded = function (type, _a) {
    var _b = _a === void 0 ? {} : _a, exclude = _b.exclude;
    if (Array.isArray(exclude)) {
        return exclude.includes(type.name);
    }
    if (typeof exclude === 'function') {
        return exclude(type);
    }
    return false;
};
exports.isResourceExcluded = isResourceExcluded;
var buildResource = function (type, queries, options) {
    return constants_1.ALL_TYPES.reduce(function (acc, raFetchMethod) {
        var _a;
        var query = queries.find(function (_a) {
            var name = _a.name;
            return options.operationNames[raFetchMethod] &&
                name === options.operationNames[raFetchMethod](type);
        });
        if (!query)
            return acc;
        return __assign(__assign({}, acc), (_a = {}, _a[raFetchMethod] = query, _a));
    }, { type: type });
};
var templateObject_1;
//# sourceMappingURL=introspection.js.map