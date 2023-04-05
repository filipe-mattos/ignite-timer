import React from 'react';
import {Play} from 'phosphor-react';
import {
  CountDownContainer,
  FormContainer,
  HomeConteiner,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput
} from './styles';

export function Home() {
  return  (
    <HomeConteiner>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput list="task-suggestions" id="task" placeholder="Dê um nome para o seu projeto" />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minuteAmount">durante</label>
          <MinutesAmountInput type="number" id="minuteAmount" step={5} min={5} max={60} placeholder="00"/>

          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>

    </HomeConteiner>
  );
}