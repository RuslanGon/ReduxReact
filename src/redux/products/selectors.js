// const products = useSelector(state => state.products.products)

// const isLoading = useSelector(state => state.details.isLoading)
// const isError = useSelector(state => state.details.isError)
// const products = useSelector(state => state.details.products)
// const query = useSelector(state => state.details.query)

export const selectProducts = state => state.products.products
export const selectIsLoading = state => state.details.isLoading
export const selectIsError = state => state.details.isError
export const selectQuery =state => state.details.query