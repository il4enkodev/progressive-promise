import ProgressivePromise from "./promise";

export type Exception = {};
export type Nullable<T> = T | undefined | null;
export type Consumer<T> = (arg?: T) => void;
export type Executor<T, P> = (resolve: Consumer<T>, reject: Consumer<Exception>, progress: Consumer<P>) => void;
export type SelectPromiseType<T, P = never> = P extends never ? PromiseLike<T> : ProgressivePromise<T, P>;

/* Promise Handlers */
export type HandlerResult<R, P = never> = R | SelectPromiseType<R, P>;
export type FinallyHandler = () => void;
export type ProgressHandler<P> = (progress: P) => void;
export type FulfilledHandler<T, R, P = never> = (v: T) => HandlerResult<R, P>;
export type RejectedHandler<R, P = never> = (e: Exception) => HandlerResult<R, P>;

