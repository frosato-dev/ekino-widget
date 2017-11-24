import { createSelector } from 'reselect'
import isLoginSelector from './isLoginSelector'
import currentUserSelector from './currentUserSelector'

export default createSelector(
    isLoginSelector,
    currentUserSelector,
    (isLogin, currentUserSelector ) => !isLogin && !!currentUserSelector
)
