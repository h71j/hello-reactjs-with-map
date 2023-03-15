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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { useEffect, useState } from 'react';
import inflection from 'inflection';
import { ShowBase, InferredElement, getElementsFromRecords, useResourceContext, useShowContext, } from 'ra-core';
import { ShowView } from './ShowView';
import { showFieldTypes } from './showFieldTypes';
export var ShowGuesser = function (_a) {
    var id = _a.id, queryOptions = _a.queryOptions, resource = _a.resource, rest = __rest(_a, ["id", "queryOptions", "resource"]);
    return (React.createElement(ShowBase, { id: id, resource: resource, queryOptions: queryOptions },
        React.createElement(ShowViewGuesser, __assign({}, rest))));
};
var ShowViewGuesser = function (props) {
    var resource = useResourceContext(props);
    var record = useShowContext().record;
    var _a = useState(null), child = _a[0], setChild = _a[1];
    useEffect(function () {
        setChild(null);
    }, [resource]);
    useEffect(function () {
        if (record && !child) {
            var inferredElements = getElementsFromRecords([record], showFieldTypes);
            var inferredChild = new InferredElement(showFieldTypes.show, null, inferredElements);
            setChild(inferredChild.getElement());
            if (process.env.NODE_ENV === 'production')
                return;
            var representation = inferredChild.getRepresentation();
            var components = ['Show']
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s>]+)/g))
                .map(function (match) { return match[1]; })
                .filter(function (component) { return component !== 'span'; }))))
                .sort();
            // eslint-disable-next-line no-console
            console.log("Guessed Show:\n\nimport { ".concat(components.join(', '), " } from 'react-admin';\n\nexport const ").concat(inflection.capitalize(inflection.singularize(resource)), "Show = () => (\n    <Show>\n").concat(inferredChild.getRepresentation(), "\n    </Show>\n);"));
        }
    }, [record, child, resource]);
    return React.createElement(ShowView, __assign({}, props), child);
};
ShowViewGuesser.propTypes = ShowView.propTypes;
//# sourceMappingURL=ShowGuesser.js.map