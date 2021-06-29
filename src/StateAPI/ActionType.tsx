/*
    Define the ACTION that can be done in a REDUCER FUNCTION. The value defined here is
    used in RootReducer's and in Actions.tsx
*/

export enum actionType {
    setscreen,
    updateinfo,

    setmultiview,
    setcameraindex,

    setguideinfo,

    setmarkerdescription,
    setvisiblepoint,
    setintroguidetext,
    setstreetviewlink,
}