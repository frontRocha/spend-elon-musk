import { Cart, Items } from "../Interfaces/ItemListInterface";
import { ItemsListService } from "../Services/ItemsListService";

export class ItemListController {
    public async handleBuy(item: Items, cart: Cart[]) {
        return new ItemsListService().addItemToCart(item, cart)
    }

    public async handleRemove(item: Items, cart: Cart[]) {
        const result = new ItemsListService().removeItemToCart(item, cart)

        if (result) {
            return result
        }

        return []
    }
}