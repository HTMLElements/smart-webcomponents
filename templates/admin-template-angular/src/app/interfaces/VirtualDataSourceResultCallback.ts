export default interface ResultCallbackFunction {
    (obj: { dataSource: Array<any> }): void
}