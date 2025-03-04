export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedData?: Date;
  finishDate?: Date;
}

export interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

export interface CycleContextType {
  cycles: Cycle[];
  activeCycle:Cycle | undefined;
  currentCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (secondsPassed:number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interuptedData: () => void;
}

export interface CycleState {
  cycles: Cycle[];
  currentCycleId: string | null;
}