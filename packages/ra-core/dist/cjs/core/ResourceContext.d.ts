/// <reference types="react" />
/**
 * Context to store the current resource name.
 *
 * Use the useResource() hook to read the context. That's what most components do in react-admin.
 *
 * @example
 *
 * import { useResourceContext, useTranslate } from 'ra-core';
 *
 * const MyCustomEditTitle = props => {
 *     const name = useResourceContext(props);
 *
 *     return (
 *         <h1>{translate(`${name}.name`)}</h1>
 *     );
 * };
 */
export declare const ResourceContext: import("react").Context<string>;
export declare type ResourceContextValue = string;
//# sourceMappingURL=ResourceContext.d.ts.map