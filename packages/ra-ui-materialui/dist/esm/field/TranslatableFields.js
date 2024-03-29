import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TranslatableContextProvider, useTranslatable, useRecordContext, } from 'ra-core';
import { TranslatableFieldsTabs } from './TranslatableFieldsTabs';
import { TranslatableFieldsTabContent } from './TranslatableFieldsTabContent';
/**
 * Provides a way to show multiple languages for any field passed as children.
 * It expects the translatable values to have the following structure:
 * {
 *     name: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     },
 *     description: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     }
 * }
 *
 * @example <caption>Basic usage</caption>
 * <TranslatableFields locales={['en', 'fr']}>
 *     <TextField source={getSource('title')} />
 *     <TextField source={getSource('description')} />
 * </TranslatableFields>
 *
 * @example <caption>With a custom language selector</caption>
 * <TranslatableFields
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextField source={getSource('title')} />
 * <TranslatableFields>
>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={selectLocale}>
 *             {locales.map((locale) => (
 *                 <option selected={locale.locale === selectedLocale}>
 *                     {locale.name}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 *
 * @param props The component props
 * @param {string} props.defaultLocale The locale selected by default. Default to 'en'.
 * @param {string[]} props.locales An array of the possible locales in the form. For example [{ 'en', 'fr' }].
 * @param {ReactElement} props.selector The element responsible for selecting a locale. Defaults to MUI tabs.
 */
export var TranslatableFields = function (props) {
    var defaultLocale = props.defaultLocale, locales = props.locales, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, _b = props.selector, selector = _b === void 0 ? React.createElement(TranslatableFieldsTabs, { groupKey: groupKey }) : _b, children = props.children, resource = props.resource, className = props.className;
    var record = useRecordContext(props);
    var context = useTranslatable({ defaultLocale: defaultLocale, locales: locales });
    return (React.createElement(Root, { className: className },
        React.createElement(TranslatableContextProvider, { value: context },
            selector,
            locales.map(function (locale) { return (React.createElement(TranslatableFieldsTabContent, { key: locale, locale: locale, record: record, resource: resource, groupKey: groupKey }, children)); }))));
};
var PREFIX = 'RaTranslatableFields';
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        flexGrow: 1,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
    });
});
//# sourceMappingURL=TranslatableFields.js.map