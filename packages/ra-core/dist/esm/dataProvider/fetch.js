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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import HttpError from './HttpError';
import { stringify } from 'query-string';
export var createHeadersFromOptions = function (options) {
    var requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        }));
    if (!requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set('Authorization', options.user.token);
    }
    return requestHeaders;
};
export var fetchJson = function (url, options) {
    if (options === void 0) { options = {}; }
    var requestHeaders = createHeadersFromOptions(options);
    return fetch(url, __assign(__assign({}, options), { headers: requestHeaders }))
        .then(function (response) {
        return response.text().then(function (text) { return ({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            body: text,
        }); });
    })
        .then(function (_a) {
        var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;
        var json;
        try {
            json = JSON.parse(body);
        }
        catch (e) {
            // not json, no big deal
        }
        if (status < 200 || status >= 300) {
            return Promise.reject(new HttpError((json && json.message) || statusText, status, json));
        }
        return Promise.resolve({ status: status, headers: headers, body: body, json: json });
    });
};
export var queryParameters = stringify;
var isValidObject = function (value) {
    if (!value) {
        return false;
    }
    var isArray = Array.isArray(value);
    var isBuffer = typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
    var isObject = Object.prototype.toString.call(value) === '[object Object]';
    var hasKeys = !!Object.keys(value).length;
    return !isArray && !isBuffer && isObject && hasKeys;
};
export var flattenObject = function (value, path) {
    var _a;
    if (path === void 0) { path = []; }
    if (isValidObject(value)) {
        return Object.assign.apply(Object, __spreadArray([{}], Object.keys(value).map(function (key) {
            return flattenObject(value[key], path.concat([key]));
        }), false));
    }
    else {
        return path.length ? (_a = {}, _a[path.join('.')] = value, _a) : value;
    }
};
//# sourceMappingURL=fetch.js.map