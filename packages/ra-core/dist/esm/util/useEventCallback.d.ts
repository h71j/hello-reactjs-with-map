/**
 * Alternative to useCallback that doesn't update the callback when dependencies change
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export declare const useEventCallback: <Args extends unknown[], Return>(fn: (...args: Args) => Return, dependencies: any[]) => (...args: Args) => Return;
//# sourceMappingURL=useEventCallback.d.ts.map