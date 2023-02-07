import { createContext } from 'react';

type ChildrenProps = {
  children: React.ReactNode
}

interface BudgetProps {
  budget: number
}

export const BudgetContext = createContext({} as BudgetProps);

export default function BudgetProvider({ children }: ChildrenProps) {
  const budget = 18420000000000

  return (
    <BudgetContext.Provider value={{ budget }}>
      {children}
    </BudgetContext.Provider>
  );
}