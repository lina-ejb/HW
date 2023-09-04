const initState: ThemePropsType = {
    themeId: 1,
}
export type ThemePropsType = {
    themeId: number
}

export const themeReducer = (state: ThemePropsType = initState, action: ChangeThemeIdType): ThemePropsType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}
export type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => {
    return {type: 'SET_THEME_ID', id}
}
