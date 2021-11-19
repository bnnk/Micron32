export const DBConfig = {
    name: 'InTodo3',
    version: 1,
    objectStoresMeta: [
        {
            store: 'todo',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'what2do', keypath: 'what2do', options: { unique: false } },
                { name: 'checked', keypath: 'checked', options: { unique: false } }
            ]
        }
    ]
}