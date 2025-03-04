import { useContext, useEffect, useState } from "react";
import { CountDownContainer, Separator } from "./style";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../context/cyclesContext";

export function CountDown() {
  const { activeCycle, currentCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext);
  const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const currentSecond = activeCycle ? totalSecond - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSecond / 60);
  const secondsAmount = currentSecond % 60;
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secodDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (secodDifference >= totalSecond) {
          document.title = "Finaizado";
          setSecondsPassed(totalSecond);
          markCurrentCycleAsFinished()
        } else {
          setSecondsPassed(secodDifference);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeCycle, totalSecond]);

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
}
