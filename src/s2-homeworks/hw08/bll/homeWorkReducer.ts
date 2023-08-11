import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {


    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            if (action.payload === 'down') {
                copyState.sort((a, b) => a.name > b.name ? -1 : 1)
            }

            if (action.payload === 'up') {
                copyState.sort((a, b) => a.name < b.name ? -1 : 1)
            }
            console.log(state)
            return copyState
        }

        case 'check': {
            return state.filter((el) => el.age > action.payload)
        }
        default:
            return state
    }
}
