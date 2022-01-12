export const Reducer = (state, action) => {
    const { input, value } = action
    return { ...state, [input]: value }


}
export const initialState = {
    email: '',
    password: '',
    isSign: false,
    reading: [],
    complete: [],
    details: [],
    info: [],
}