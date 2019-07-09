export const StoreUtils = {
     computedActionToPropertyName: <T>(actions: T): {[key in keyof T]: string} => {
        return Object.keys(actions).reduce((symbols, key: Extract<keyof T, string>) => ({ ...symbols, [key]: (actions[key] as any).toString() }), {} as any);
    }
}