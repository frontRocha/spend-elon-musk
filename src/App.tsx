import { ItemList } from './Components/ItemList/Item';
import elonMusk from './Assets/Elon_Musk_Royal_Society_(crop2).jpg.webp'
import BudgetProvider from './Context/BudgetProvider';

export default function App() {
  return (
    <BudgetProvider>
      <section className='bg-slate-100'>
        <div className='max-w-[950px] mx-auto py-20'>
          <div className='bg-white flex justify-center items-center flex-col p-10 my-2'>
            <img src={elonMusk} alt="foto o Elon Musk" className='rounded-full w-[100px]' />
            <h1 className='text-center fontPop text-xl'>Gaste o dinheiro do Elon Musk</h1>
            <h4>Patrimonio atual: <span>184,2 bilhões USD</span></h4>
          </div>
          <ItemList />
        </div>
      </section>
    </BudgetProvider>
  );
}