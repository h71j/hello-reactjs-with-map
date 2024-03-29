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
import { Children, createElement } from 'react';
import warning from '../util/warning';
import { useAuthenticated } from './useAuthenticated';
import usePermissionsOptimized from './usePermissionsOptimized';
var isEmptyChildren = function (children) { return Children.count(children) === 0; };
/**
 * After checking that the user is authenticated,
 * retrieves the user's permissions for a specific context.
 *
 * Useful for Route components ; used internally by Resource.
 * Use it to decorate your custom page components to require
 * a custom role. It will pass the permissions as a prop to your
 * component.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { Admin, CustomRoutes, WithPermissions } from 'react-admin';
 *
 *     const Foo = ({ permissions }) => (
 *         {permissions === 'admin' ? <p>Sensitive data</p> : null}
 *         <p>Not sensitive data</p>
 *     );
 *
 *     const customRoutes = [
 *         <Route path="/foo" element={
 *             <WithPermissions
 *                  authParams={{ foo: 'bar' }}
 *                  component={({ permissions, ...props }) => <Foo permissions={permissions} {...props} />}
 *              />
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin>
 *             <CustomRoutes>{customRoutes}</CustomRoutes>
 *         </Admin>
 *     );
 */
var WithPermissions = function (props) {
    var authParams = props.authParams, children = props.children, render = props.render, component = props.component, staticContext = props.staticContext, rest = __rest(props, ["authParams", "children", "render", "component", "staticContext"]);
    warning((render && children && !isEmptyChildren(children)) ||
        (render && component) ||
        (component && children && !isEmptyChildren(children)), 'You should only use one of the `component`, `render` and `children` props in <WithPermissions>');
    useAuthenticated(authParams);
    var permissions = usePermissionsOptimized(authParams).permissions;
    // render even though the usePermissions() call isn't finished (optimistic rendering)
    if (component) {
        return createElement(component, __assign({ permissions: permissions }, rest));
    }
    // @deprecated
    if (render) {
        return render(__assign({ permissions: permissions }, rest));
    }
    // @deprecated
    if (children) {
        return children(__assign({ permissions: permissions }, rest));
    }
};
export default WithPermissions;
//# sourceMappingURL=WithPermissions.js.map