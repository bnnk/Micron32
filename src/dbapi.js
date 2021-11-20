export const db = new window.Dexie( "HyperToDO" )
db.version( 10 ).stores({ todo: "++id,what2do,checked" })
