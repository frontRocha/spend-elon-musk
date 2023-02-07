import { useContext, useState } from "react";
import { BudgetContext } from "../../Context/BudgetProvider";
import { items } from "../../Mocks/Items";
import { ItemListController } from "../../Controllers/ItemListController";
import { Cart, Items } from "../../Interfaces/ItemListInterface";


export function ItemList() {
    const { budget } = useContext(BudgetContext);
    const [cart, setCart] = useState<Cart[]>([]);

    const handleBuy = async (item: Items) => {
        if (resultBudget < item.price) {
            return
        }

        const result = await new ItemListController().handleBuy(item, cart)

        return setCart(result as Cart[])
    }

    const handleRemove = async (item: Items) => {
        const result = await new ItemListController().handleRemove(item, cart)

        return setCart(result as Cart[])
    }

    const total = cart.reduce((acc: number, item: Cart) => acc + item.price * item.quantity, 0);
    const resultBudget = budget - total

    return (
        <div className="w-full px-10">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto place-items-center">
                {items.map((item: Items) => (
                    <div key={item.id} className="w-full flex flex-col items-center justify-center bg-white fontRal">
                        <div className="text-center w-full flex flex-col justify-center items-center gap-4">
                            <h3 className="text-sm font-bold text-black py-2 px-4">{item.name}</h3>
                            <img src={item.img} alt={item.name} className="h-[120px] object-container" />
                            <span className="fontPop text-green-500">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD</span>
                        </div>

                        <span className="fontPop">
                            {cart.find((cartItem: Cart) => cartItem.id === item.id)?.quantity || 0}
                        </span>

                        <div className="w-full flex justify-between items-center pt-4">
                            <button onClick={() => handleRemove(item)} className="bg-red-500 text-white py-2 px-7">Remover</button>

                            {item.price < resultBudget ? <button onClick={() => handleBuy(item)} className="bg-green-500 text-white py-2 px-7">Comprar</button> : <button className="bg-green-100 text-grey py-2 px-7">Comprar</button>}

                        </div>
                    </div>
                ))}
            </div>
            <h2 className="fixed top-10 left-0 mb-6 text-sm sm:text-lg font-medium text-green-600 bg-green-200 py-2 px-3 rounded-lg">
                Orçamento restante: {resultBudget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD
            </h2>
        </div>
    );
}