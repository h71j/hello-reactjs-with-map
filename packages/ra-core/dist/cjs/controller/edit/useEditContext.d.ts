import { RaRecord } from '../../types';
import { EditControllerResult } from './useEditController';
/**
 * Hook to read the edit controller props from the CreateContext.
 *
 * Mostly used within a <EditContext.Provider> (e.g. as a descendent of <Edit>).
 *
 * But you can also use it without a <EditContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} EditControllerProps
 *
 * @returns {EditControllerResult} edit controller props
 *
 * @see useEditController for how it is filled
 *
 */
export declare const useEditContext: <RecordType extends RaRecord = any>(props?: Partial<EditControllerResult<RecordType>>) => Partial<EditControllerResult<RecordType>>;
//# sourceMappingURL=useEditContext.d.ts.map