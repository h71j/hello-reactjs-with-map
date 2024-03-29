import { NotificationType, NotificationOptions } from './types';
/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * // simple message (info level)
 * notify('Level complete');
 * // specify level
 * notify('A problem occurred', { type: 'warning' })
 * // pass arguments to the translation function
 * notify('Deleted %{count} elements', { type: 'info', messageArgs: { smart_count: 23 } })
 * // show the action as undoable in the notification
 * notify('Post renamed', { type: 'info', undoable: true })
 */
export declare const useNotify: () => (message: string, options?: NotificationOptions & {
    type?: NotificationType;
}) => void;
//# sourceMappingURL=useNotify.d.ts.map