import { useCallback } from 'react';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import useLogout from './useLogout';
import { useNotify } from '../notification';
import { useBasename } from '../routing';
import { removeDoubleSlashes } from '../routing/useCreatePath';
/**
 * Get a callback for calling the authProvider.checkAuth() method.
 * In case of rejection, redirects to the login page, displays a notification,
 * and throws an error.
 *
 * This is a low level hook. See those more specialized hooks
 * for common authentication tasks, based on useCheckAuth.
 *
 * @see useAuthenticated
 * @see useAuthState
 *
 * @returns {Function} checkAuth callback
 *
 * @example
 *
 * import { useCheckAuth } from 'react-admin';
 *
 * const MyProtectedPage = () => {
 *     const checkAuth = useCheckAuth();
 *     useEffect(() => {
 *         checkAuth().catch(() => {});
 *     }, []);
 *     return <p>Private content: EZAEZEZAET</p>
 * } // tip: use useAuthenticated() hook instead
 *
 * const MyPage = () => {
 *     const checkAuth = useCheckAuth();
 *     const [authenticated, setAuthenticated] = useState(true); // optimistic auth
 *     useEffect(() => {
 *         checkAuth({}, false)
 *              .then(() => setAuthenticated(true))
 *              .catch(() => setAuthenticated(false));
 *     }, []);
 *     return authenticated ? <Bar /> : <BarNotAuthenticated />;
 * } // tip: use useAuthState() hook instead
 */
export var useCheckAuth = function () {
    var authProvider = useAuthProvider();
    var notify = useNotify();
    var logout = useLogout();
    var basename = useBasename();
    var loginUrl = removeDoubleSlashes("".concat(basename, "/").concat(defaultAuthParams.loginUrl));
    var checkAuth = useCallback(function (params, logoutOnFailure, redirectTo, disableNotification) {
        if (params === void 0) { params = {}; }
        if (logoutOnFailure === void 0) { logoutOnFailure = true; }
        if (redirectTo === void 0) { redirectTo = loginUrl; }
        if (disableNotification === void 0) { disableNotification = false; }
        return authProvider.checkAuth(params).catch(function (error) {
            if (logoutOnFailure) {
                logout({}, error && error.redirectTo
                    ? error.redirectTo
                    : redirectTo);
                var shouldSkipNotify = disableNotification ||
                    (error && error.message === false);
                !shouldSkipNotify &&
                    notify(getErrorMessage(error, 'ra.auth.auth_check_error'), { type: 'warning' });
            }
            throw error;
        });
    }, [authProvider, logout, notify, loginUrl]);
    return authProvider ? checkAuth : checkAuthWithoutAuthProvider;
};
var checkAuthWithoutAuthProvider = function () { return Promise.resolve(); };
var getErrorMessage = function (error, defaultMessage) {
    return typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
            ? defaultMessage
            : error.message;
};
//# sourceMappingURL=useCheckAuth.js.map