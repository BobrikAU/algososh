import React, { useState, useRef, useEffect } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from "./stack-page.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { ElementStates } from "../../types/element-states";
import { nanoid } from "nanoid";
import { Circle } from "../ui/circle/circle";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";
import { Stack } from "./stack";

interface IStringElement{
  string: string;
  state: ElementStates;
  key: string;
}

interface IState{
  isAlgoritmWork: boolean;
  isAdding: boolean;
  isRemoval: boolean;
}

export const StackPage: React.FC = () => {

  // переключатель для принудительного рендеринга
  const [ newRender, setNewRender ] = useState<boolean>(false);
  // показатель наличия текста в поле input
  const [ isTextInInput, setIsTextInInput ] = useState<boolean>(false);
  // состояние работы алгоритма
  const [ state, setState ] = useState<IState>({
    isAlgoritmWork: false,
    isAdding: false,
    isRemoval: false,
  });

  // поле input
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  useEffect(() => {
    inputRef.current = document.querySelector('.input-in-container > .text_type_input');
  }, []);
  // экземпляр класса Stack
  const stack = useRef(new Stack<IStringElement>());
  
  // определение наличия текста в поле input
  const checkTextInInput = () => {
    if (inputRef.current?.value !== '') {
      setIsTextInInput(true);
    } else {
      setIsTextInInput(false);
    }
  }

  // добавление элемента в Stack
  const addElementInStack = () => {
    setState({
      isAlgoritmWork: true,
      isAdding: true,
      isRemoval: false,
    });
    if (inputRef.current) {
      stack.current.pushElement({
        string: inputRef.current.value,
        state: ElementStates.Changing,
        key: nanoid(),
      });
      inputRef.current.value = '';
      setIsTextInInput(false);
    }
    setNewRender(!newRender);
    setTimeout(() => {
      stack.current.getStack()[stack.current.getStackLength() - 1].state = 
        ElementStates.Default;
      setState({
        isAlgoritmWork: false,
        isAdding: false,
        isRemoval: false,
      });
    }, SHORT_DELAY_IN_MS);
  };

  // удаление элемента Stack
  const deleteElementInStack = () => {
    setState({
      isAlgoritmWork: true,
      isAdding: false,
      isRemoval: true,
    });
    stack.current.getStack()[stack.current.getStackLength() - 1].state = 
      ElementStates.Changing;
    setNewRender(!newRender);
    setTimeout(() => {
      stack.current.getStack().pop();
      setState({
        isAlgoritmWork: false,
        isAdding: false,
        isRemoval: false,
      });
    }, SHORT_DELAY_IN_MS);
  };

  // удаление всех элементов Stack
  const reset = () => {
    stack.current.clear();
    setNewRender(!newRender);
  };

  // формирование JSX-элементов для отображения содержания Stack
  const circleElements = stack.current.getStack().map((item, index) => {
    if (20 - stack.current.getStackLength() + index >= 0) {
      return <Circle
        state={item.state}
        letter={item.string}
        head={index === stack.current.getStackLength() -1 ? "top" : null}
        index={index}
        extraClass={styles.circle}
        key={item.key}
      />
    }
  });

  return (
    <SolutionLayout title="Стек">
      <div className={styles.controlContainer}>
        <Input
          extraClass={`${styles.input} input-in-container`}
          maxLength={4}
          isLimitText={true}
          onChange={checkTextInInput}
          disabled={state.isAlgoritmWork}
        />
        <Button
          text="Добавить"
          extraClass={styles.buttonAdd}
          disabled={!isTextInInput || state.isAlgoritmWork}
          onClick={addElementInStack}
          isLoader={state.isAdding}
        />
        <Button
          text="Удалить"
          extraClass={styles.buttonDelette}
          onClick={deleteElementInStack}
          disabled={stack.current.getStackLength() === 0 || state.isAlgoritmWork}
          isLoader={state.isRemoval}
        />
        <Button
          text="Очистить"
          extraClass={styles.buttonReset}
          onClick={reset}
          disabled={stack.current.getStackLength() === 0 || state.isAlgoritmWork}
        />
      </div>
      <div className={styles.circlesContainer}>
        {circleElements && circleElements}      
      </div>
    </SolutionLayout>
  );
};
