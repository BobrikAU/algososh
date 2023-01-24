import { render, screen, fireEvent, act } from '@testing-library/react';
import { ChildrenOfSortingPage } from './sorting-page';
import { columnId } from '../../constants/element-ids';

const bubble = 'Пузырёк';
const ascending = 'По возрастанию';
const descending = 'По убыванию';
const choice = 'Выбор';

jest.useFakeTimers();

describe('Сортировка массива чисел.', () => {
  
  describe('Пузырьком.', () => {

    test('Массив из нескольких чисел. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(5);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) <= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) <= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) <= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) <= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из нескольких чисел. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(5);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) >= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) >= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) >= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) >= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(1);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(1);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });

    test('Пустой массив. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(0);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId(columnId);
      expect(newArray).toHaveLength(0);
    });

    test('Пустой массив. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId(columnId);
      const radioInputBubble: HTMLInputElement = screen.getByLabelText(bubble);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(0);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId(columnId);
      expect(newArray).toHaveLength(0);
    });
  });
  
  describe('Выбором', () => {

    test('Массив из нескольких чисел. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(5);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) <= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) <= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) <= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) <= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из нескольких чисел. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(5);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) >= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) >= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) >= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) >= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(1);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });
  
    test('Массив из одного числа. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(1);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId(columnId);
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });
  
    test('Пустой массив. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonAscending = screen.getByText(ascending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(0);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId(columnId);
      expect(newArray).toHaveLength(0);
    });
  
    test('Пустой массив. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId(columnId);
      const radioInputChoice: HTMLInputElement = screen.getByLabelText(choice);
      const buttonDescending = screen.getByText(descending);
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(0);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId(columnId);
      expect(newArray).toHaveLength(0);
    });
  });

});
