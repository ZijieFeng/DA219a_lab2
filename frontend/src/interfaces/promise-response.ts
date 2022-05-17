
type ThenArg<T> = T extends Promise<infer U> ? U : T

type PromiseResponse<T extends (...args) => any> = ThenArg<ReturnType<T>>

export default PromiseResponse
