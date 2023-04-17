import { ReactNode, createContext, useContext } from "react";
const ShoppingCartContext = createContext({})

type ShoppingCartProviderProps = {
    children : ReactNode
}

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    return (
        <ShoppingCartContext.Provider value={{}}>
        {children}
        </ShoppingCartContext.Provider>
    )
}