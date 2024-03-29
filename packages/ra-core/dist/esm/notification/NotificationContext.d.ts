/// <reference types="react" />
import { NotificationPayload } from './types';
export declare type NotificationContextType = {
    notifications: NotificationPayload[];
    addNotification: (notification: NotificationPayload) => void;
    takeNotification: () => NotificationPayload | void;
    resetNotifications: () => void;
};
/**
 * Context for the notification state and modifiers
 *
 * @example // display notifications
 * import { useNotificationContext } from 'react-admin';
 *
 * const App = () => {
 *    const { notifications } = useNotificationContext();
 *    return (
 *        <ul>
 *            {notifications.map(({ message }) => (
 *                <li key={index}>{ message }</li>
 *            ))}
 *        </ul>
 *    );
 * };
 *
 * @example // reset notifications
 * import { useNotificationContext } from 'react-admin';
 *
 * const ResetNotificationsButton = () => {
 *    const { resetNotifications } = useNotificationContext();
 *    return (
 *        <button onClick={() => resetNotifications()}>Reset notifications</button>
 *    );
 * };
 */
export declare const NotificationContext: import("react").Context<NotificationContextType>;
//# sourceMappingURL=NotificationContext.d.ts.map