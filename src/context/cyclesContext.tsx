import { createContext, ReactNode, useState } from "react";
import { CreateCycleData, Cycle, CycleContextType } from "../interface/cycle";

export const CyclesContext = createContext({} as CycleContextType);

interface CyclesContextProvaiderProps {
    children:ReactNode
}

export function CyclesContextProvaider({children}:CyclesContextProvaiderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [currentCycleId, setCurrentCycleId] = useState<string | null>(null);
  const activeCycle = cycles.find((cycle) => cycle.id == currentCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function markCurrentCycleAsFinished() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === currentCycleId) {
          return { ...cycle, finishDate: new Date() };
        }
        return cycle;
      })
    );
  }

  function setSecondsPassed(secondsPassed: number) {
    setAmountSecondsPassed(secondsPassed);
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    const id = newCycle.id;
    setCurrentCycleId(id);
    setCycles((state) => [...state, newCycle]);
    setAmountSecondsPassed(0);
  }

  function interuptedData() {
    setCurrentCycleId(null);
    document.title = "Ignite Timer";
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === currentCycleId) {
          return { ...cycle, interruptedData: new Date() };
        }
        return cycle;
      })
    );
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        currentCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interuptedData
      }}
    >{children}</CyclesContext.Provider>
  );
}
