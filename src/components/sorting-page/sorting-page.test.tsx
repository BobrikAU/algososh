import { render, screen, fireEvent, act } from '@testing-library/react';
import { ChildrenOfSortingPage } from './sorting-page';

jest.useFakeTimers();

describe('Сортировка массива чисел.', () => {
  
  describe('Пузырьком.', () => {

    test('Массив из нескольких чисел. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(5);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) <= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) <= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) <= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) <= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из нескольких чисел. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(5);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) >= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) >= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) >= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) >= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(1);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(1);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });

    test('Пустой массив. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(0);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId('number-column');
      expect(newArray).toHaveLength(0);
    });

    test('Пустой массив. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId('number-column');
      const radioInputBubble: HTMLInputElement = screen.getByLabelText('Пузырёк');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputBubble);
      expect(array).toHaveLength(0);
      expect(radioInputBubble).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId('number-column');
      expect(newArray).toHaveLength(0);
    });
  });
  
  describe('Выбором', () => {

    test('Массив из нескольких чисел. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(5);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) <= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) <= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) <= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) <= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из нескольких чисел. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={5}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(5);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(5);
      expect(Number(newArray[0].textContent) >= Number(newArray[1].textContent)).toBeTruthy();
      expect(Number(newArray[1].textContent) >= Number(newArray[2].textContent)).toBeTruthy();
      expect(Number(newArray[2].textContent) >= Number(newArray[3].textContent)).toBeTruthy();
      expect(Number(newArray[3].textContent) >= Number(newArray[4].textContent)).toBeTruthy();
    });

    test('Массив из одного числа. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(1);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });
  
    test('Массив из одного числа. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={1}/>);
      const array = screen.getAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(1);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.getAllByTestId('number-column');
      expect(newArray).toHaveLength(1);
      expect(Number(array[0].textContent) === Number(newArray[0].textContent)).toBeTruthy();
    });
  
    test('Пустой массив. По возрастанию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonAscending = screen.getByText('По возрастанию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(0);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonAscending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId('number-column');
      expect(newArray).toHaveLength(0);
    });
  
    test('Пустой массив. По убыванию.', () => {
      render(<ChildrenOfSortingPage propsNumber={0}/>);
      const array = screen.queryAllByTestId('number-column');
      const radioInputChoice: HTMLInputElement = screen.getByLabelText('Выбор');
      const buttonDescending = screen.getByText('По убыванию');
      fireEvent.click(radioInputChoice);
      expect(array).toHaveLength(0);
      expect(radioInputChoice).toHaveProperty('checked');
      fireEvent.click(buttonDescending);
      act(() => {
        jest.runAllTimers();
      });
      const newArray = screen.queryAllByTestId('number-column');
      expect(newArray).toHaveLength(0);
    });
  });

});
