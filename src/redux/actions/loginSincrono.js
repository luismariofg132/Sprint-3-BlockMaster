import { types } from "../types/types"

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}