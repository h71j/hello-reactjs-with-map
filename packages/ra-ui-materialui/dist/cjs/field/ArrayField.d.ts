import { FC, ReactElement } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Display a collection
 *
 * Ideal for embedded arrays of objects, e.g.
 * {
 *   id: 123
 *   tags: [
 *     { name: 'foo' },
 *     { name: 'bar' }
 *   ]
 * }
 *
 * The child must be an iterator component
 * (like <Datagrid> or <SingleFieldList>).
 *
 * @example Display all the backlinks of the current post as a <Datagrid>
 * // post = {
 * //   id: 123
 * //   backlinks: [
 * //       {
 * //           uuid: '34fdf393-f449-4b04-a423-38ad02ae159e',
 * //           date: '2012-08-10T00:00:00.000Z',
 * //           url: 'http://example.com/foo/bar.html',
 * //       },
 * //       {
 * //           uuid: 'd907743a-253d-4ec1-8329-404d4c5e6cf1',
 * //           date: '2012-08-14T00:00:00.000Z',
 * //           url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 * //       }
 * //    ]
 * // }
 *     <ArrayField source="backlinks">
 *         <Datagrid>
 *             <DateField source="date" />
 *             <UrlField source="url" />
 *         </Datagrid>
 *     </ArrayField>
 *
 * @example Display all the tags of the current post as <Chip> components
 * // post = {
 * //   id: 123
 * //   tags: [
 * //     { name: 'foo' },
 * //     { name: 'bar' }
 * //   ]
 * // }
 *     <ArrayField source="tags">
 *         <SingleFieldList>
 *             <ChipField source="name" />
 *         </SingleFieldList>
 *     </ArrayField>
 *
 * If you need to render a collection in a custom way, it's often simpler
 * to write your own component:
 *
 * @example
 *     const TagsField = ({ record }) => (
 *          <ul>
 *              {record.tags.map(item => (
 *                  <li key={item.name}>{item.name}</li>
 *              ))}
 *          </ul>
 *     );
 */
export declare const ArrayField: FC<ArrayFieldProps>;
export interface ArrayFieldProps extends PublicFieldProps, InjectedFieldProps {
    children: ReactElement;
}
//# sourceMappingURL=ArrayField.d.ts.map