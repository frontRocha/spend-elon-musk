import { Cart, Items } from "../Interfaces/ItemListInterface";


export class ItemsListService {
    public addItemToCart = (item: Items, cart: Cart[]) => {
        const index = cart.findIndex((i: Cart) => i.id === item.id);

        if (index === -1) {
            return [...cart, { ...item, quantity: 1 }];
        }

        const updatedCart = [...cart];
        updatedCart[index].quantity++;

        return updatedCart;
    }

    public removeItemToCart = (item: Items, cart: Cart[]) => {
        const index = cart.findIndex((i: Cart) => i.id === item.id);

        if (index !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[index].quantity === 1) {
                updatedCart.splice(index, 1);
            } else {
                updatedCart[index].quantity--;
            }

            return updatedCart
        }
    }
}