import inflection from 'inflection';
import getValuesFromRecords from './getValuesFromRecords';
import { isObject, valuesAreArray, valuesAreBoolean, valuesAreDate, valuesAreDateString, valuesAreHtml, valuesAreInteger, valuesAreNumeric, valuesAreObject, valuesAreString, valuesAreUrl, valuesAreImageUrl, valuesAreEmail, } from './assertions';
export var InferenceTypes = [
    'array',
    'boolean',
    'date',
    'email',
    'id',
    'image',
    'number',
    'reference',
    'referenceChild',
    'referenceArray',
    'referenceArrayChild',
    'richText',
    'string',
    'url',
    'object',
];
/**
 * Guesses an element type based on an array of values
 *
 * @example
 *     inferElementFromValues(
 *         'address',
 *         ['2 Baker Street', '1 Downing street'],
 *     );
 *     // { type: 'string', props: { source: 'address' } }
 *
 * @param {string} name Property name, e.g. 'date_of_birth'
 * @param {any[]} values an array of values from which to determine the type, e.g. [12, 34.4, 43]
 */
export var inferTypeFromValues = function (name, values) {
    if (values === void 0) { values = []; }
    if (name === 'id') {
        return { type: 'id', props: { source: name } };
    }
    if (name.substr(name.length - 3) === '_id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 2) === 'Id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection.pluralize(name.substr(0, name.length - 2)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 4) === '_ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection.pluralize(name.substr(0, name.length - 4)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (name.substr(name.length - 3) === 'Ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (values.length === 0) {
        if (name === 'email') {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url') {
            return { type: 'url', props: { source: name } };
        }
        // FIXME introspect further using name
        return { type: 'string', props: { source: name } };
    }
    if (valuesAreArray(values)) {
        if (isObject(values[0][0])) {
            var leafValues_1 = getValuesFromRecords(values.reduce(function (acc, vals) { return acc.concat(vals); }, []));
            // FIXME bad visual representation
            return {
                type: 'array',
                props: { source: name },
                children: Object.keys(leafValues_1).map(function (leafName) {
                    return inferTypeFromValues(leafName, leafValues_1[leafName]);
                }),
            };
        }
        // FIXME introspect further
        return { type: 'string', props: { source: name } };
    }
    if (valuesAreBoolean(values)) {
        return { type: 'boolean', props: { source: name } };
    }
    if (valuesAreDate(values)) {
        return { type: 'date', props: { source: name } };
    }
    if (valuesAreString(values)) {
        if (name === 'email' || valuesAreEmail(values)) {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url' || valuesAreUrl(values)) {
            if (valuesAreImageUrl(values)) {
                return { type: 'image', props: { source: name } };
            }
            return { type: 'url', props: { source: name } };
        }
        if (valuesAreDateString(values)) {
            return { type: 'date', props: { source: name } };
        }
        if (valuesAreHtml(values)) {
            return { type: 'richText', props: { source: name } };
        }
        if (valuesAreInteger(values) || valuesAreNumeric(values)) {
            return { type: 'number', props: { source: name } };
        }
        return { type: 'string', props: { source: name } };
    }
    if (valuesAreInteger(values) || valuesAreNumeric(values)) {
        return { type: 'number', props: { source: name } };
    }
    if (valuesAreObject(values)) {
        /// Arbitrarily, choose the first prop of the first object
        var propName_1 = Object.keys(values[0]).shift();
        if (!propName_1) {
            return { type: 'object', props: { source: name } };
        }
        var leafValues = values.map(function (v) { return v[propName_1]; });
        return inferTypeFromValues("".concat(name, ".").concat(propName_1), leafValues);
    }
    return { type: 'string', props: { source: name } };
};
//# sourceMappingURL=inferTypeFromValues.js.map