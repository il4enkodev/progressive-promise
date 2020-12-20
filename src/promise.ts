import {Executor, FinallyHandler, FulfilledHandler, Nullable, ProgressHandler, RejectedHandler} from "./types";

function notImplemented(): never {
    throw new Error("Not implemented");
}

export default class ProgressivePromise<T, P> implements PromiseLike<T> {


    constructor (executor: Executor<T, P>) {

    }

    catch<RT = never, PT = P>(onRejected?: RejectedHandler<RT, PT>): ProgressivePromise<RT, PT> {
        notImplemented();
    }

    then<TR1 = T, TR2 = never, PT1 = P, PT2 = P>(
        onFulfilled?: Nullable<FulfilledHandler<T, TR1, PT1>>,
        onRejected?: Nullable<RejectedHandler<TR2, PT2>>
    ): ProgressivePromise<TR1 | TR2, PT1 | PT2> {
        notImplemented();
    }

    finally(onFinally?: FinallyHandler) : ProgressivePromise<T, P> {
        notImplemented();
    }

    progressed(onProgress?: ProgressHandler<P>) : ProgressivePromise<T, P> {
        notImplemented();
    }

}