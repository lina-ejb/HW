import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'down') {
                state.sort((a, b) => a.name > b.name ? -1 : 1)
                return [...state]
            }

            if (action.payload === 'up') {
                state.sort((a, b) => a.name < b.name ? -1 : 1)
            }
            return [...state]
        }

        case 'check': {
            const check = state.filter((el) => el.age > action.payload)
            return check.sort((a, b) => a.age < b.age ? -1 : 1)
        }
        default:
            return state
    }
}
