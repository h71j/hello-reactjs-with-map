import { ReactElement } from 'react';
import { ResourceContextValue } from './ResourceContext';
/**
 * Create a Resource Context with the resource name
 *
 * Some react-admin components rely on the resource name to be available in the context.
 * This component provides it.
 *
 * If the value is empty, the context is not provided.
 *
 * @param {string} value the resource name
 * @example
 *
 * import { ResourceContextProvider } from 'react-admin';
 *
 * const MyComponent = () => (
 *    <ResourceContextProvider value="posts">
 *       <MyResourceSpecificComponent />
 *   </ResourceContextProvider>
 * );
 */
export declare const ResourceContextProvider: ({ children, value, }: {
    children: ReactElement;
    value?: ResourceContextValue;
}) => JSX.Element;
//# sourceMappingURL=ResourceContextProvider.d.ts.map