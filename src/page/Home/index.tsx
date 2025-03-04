import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./style";
import { useContext } from "react";
import { CountDown } from "./components/CountDown";
import { NewCycleFormData } from "./components/NewCycleFormData";
import { Cycle } from "../../interface/cycle";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CyclesContext } from "../../context/cyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .int()
    .min(5, "O intervalo precisa ser de no mínimo 5 minutos.")
    .max(60, "O intervalo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {

  const {createNewCycle, interuptedData, activeCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data:NewCycleFormData){
    createNewCycle(data)
    reset();
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleFormData />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interuptedData}>
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
