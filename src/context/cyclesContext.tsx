import { createContext, ReactNode, useReducer, useState } from "react";
import {
  CreateCycleData,
  Cycle,
  CycleContextType,
  CycleState,
} from "../interface/cycle";

export const CyclesContext = createContext({} as CycleContextType);

interface CyclesContextProvaiderProps {
  children: ReactNode;
}

export function CyclesContextProvaider({
  children,
}: CyclesContextProvaiderProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: CycleState, action: any) => {
      if (action.type === "ADD_CREATE_CYCLE") {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          currentCycleId: action.payload.newCycle.id,
        };
      }

      if (action.type === "INTERRUPTE_CURRENT_CYCLE") {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.currentCycleId) {
              return { ...cycle, interruptedData: new Date() };
            }
            return cycle;
          }),
          currentCycleId: null,
        };
      }
      return state;
    },
    { cycles: [], currentCycleId: null }
  );

  const { cycles, currentCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id == currentCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function markCurrentCycleAsFinished() {
    // setCycles(
    //   cycles.map((cycle) => {
    //     if (cycle.id === currentCycleId) {
    //       return { ...cycle, finishDate: new Date() };
    //     }
    //     return cycle;
    //   })
    // );

    dispatch({
      type: "MARK_CYCLE_AS_FINISHED",
      payload: {
        currentCycleId,
      },
    });
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

    dispatch({
      type: "ADD_CREATE_CYCLE",
      payload: {
        newCycle,
      },
    });
    setAmountSecondsPassed(0);
  }

  function interuptedData() {
    document.title = "Ignite Timer";

    dispatch({
      type: "INTERRUPTE_CURRENT_CYCLE",
      payload: {
        currentCycleId,
      },
    });
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
        interuptedData,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
