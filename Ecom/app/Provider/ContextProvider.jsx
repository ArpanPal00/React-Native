import { createContext, useContext, useState } from "react";

const context = createContext({items:[] ,addItem:()=>{},updateQuantity:()=>{},removeItem:()=>{}});

const ContextProvider = ({ children }) => {

    const [items , setItems] = useState([]);

    const addItem = (product) => {
        const cartItem = {
            product,
            quantity:1,
            product_id:product.id,
        }
        const existingItem = items.find((item)=>item.product_id === product.id);
        if(existingItem){
            updateQuantity(product.id,1);
        }else{
            setItems([...items,cartItem]);
        }
    }

    const updateQuantity = (itemId,amount) => {
        
            const updatedItems = items.map((item)=>{
                if(item.product_id === itemId){
                    return {...item,quantity:item.quantity+amount}
                }
                return item;
            }).filter((item)=>item.quantity>0);
            setItems(updatedItems);
    }

    const removeItem = (itemId) => {
        const updatedItems = items.filter((item)=>item.product_id !== itemId);
        setItems(updatedItems);
    }

    return(
        <context.Provider value={{items,addItem,updateQuantity,removeItem}}>
            {children}
        </context.Provider>
    )

}

export default ContextProvider;
export const useCart = () => useContext(context);