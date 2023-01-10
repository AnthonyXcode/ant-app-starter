import { userSlice, UserState } from './slice/user'

export const reducers = {
    [userSlice.name]: userSlice.reducer,
}

export interface RootState {
    [userSlice.name]: UserState
}