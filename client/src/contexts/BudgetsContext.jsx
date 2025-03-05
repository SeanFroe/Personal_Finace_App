import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BudgetsContext = React.createContext();

const useBugets = () => {
  return useContext(BudgetsContext);
};

const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // expected to return
  // budget  {
  //     id:
  //     name:
  //     max
  //   }

  //  expenses {
  //     id:
  //     budgetId:
  //     amount:
  //     description:
  //   }

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };
  const addExpense = ({ description, amount, budgetId }) => {
    setExpenses(
      ...(prevExpenses) => {
        return [
          ...prevBudgets,
          { id: uuidv4(), description, amount, budgetId },
        ];
      }
    );
  };
  const addBudget = (name, max) => {
    setBudgets(
      ...(prevBudgets) => {
        if (prevBudgets.find((budget) => budget.name === name)) {
          return prevBudgets;
        }
        return [...prevBudgets, { id: uuidv4(), name, max }];
      }
    );
  };
  const deleteBudget = ({ id }) => {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  };
  const deleteExpense = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};

export { useBugets, BudgetProvider };
