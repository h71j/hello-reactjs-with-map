import { Identifier } from '../types';
/**
 * Get a callback to create a link to a given page in the admin app.
 *
 * The callback expects an object as parameter, containing the following properties:
 *   - type: 'list', 'edit', 'show' or 'create'
 *   - resource
 *   - id (optional), for 'edit' or 'show' pages
 *
 * This is used internally by react-admin to allow default components to work
 * in applications that are mounted on a sub path, e.g. '/admin'. If your app
 * is mounted in the root path, you don't need it, and you can create links by
 * hand, e.g. '/articles/1/show'.
 *
 * @example
 * import { useCreatePath, useRecordContext } from 'react-admin';
 * import { useNavigate } from 'react-router-dom';
 *
 * const PostEditButton = () => {
 *     const createPath = useCreatePath();
 *     const record = useRecordContext();
 *     const navigate = useNavigate();
 *
 *     const handleClick = () => {
 *         const link = createPath({
 *            type: 'edit',
 *            resource: 'posts',
 *            id: record.id
 *         });
 *         navigate(link);
 *     };
 *
 *    return <button onClick={handleClick}>Edit Post</button>;
 * };
 */
export declare const useCreatePath: () => ({ resource, id, type }: CreatePathParams) => string;
export interface CreatePathParams {
    type: string;
    resource: string;
    id?: Identifier;
}
export declare const removeDoubleSlashes: (path: string) => string;
//# sourceMappingURL=useCreatePath.d.ts.map