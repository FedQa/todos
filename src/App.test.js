import {fireEvent, render, screen} from '@testing-library/react';
import TodoApp from "./components/TodoApp";
import '@testing-library/jest-dom';

test('adds a new todo', () => {
  render(<TodoApp />);

  const inputElement = screen.getByPlaceholderText('new todo...');
  const addButton = screen.getByText(/add todo/i);

  // Добавляем новую задачу
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  // Проверяем, что задача добавлена и отображается
  const todoText = screen.getByText('New Task');
  expect(todoText).toBeInTheDocument();
});

test('toggles a todo as completed', () => {
  render(<TodoApp />);

  // Добавляем задачу для теста
  const inputElement = screen.getByPlaceholderText('new todo...');
  const addButton = screen.getByText(/add todo/i);
  fireEvent.change(inputElement, { target: { value: 'Task to complete' } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox); // Переключаем чекбокс

  // Проверяем, что задача стала завершённой
  const todoText = screen.getByText('Task to complete');
  expect(todoText).toHaveStyle('text-decoration: line-through'); // Проверяем зачёркивание
});


test('clears completed todos', () => {
  render(<TodoApp />);

  // Добавляем задачи
  const inputElement = screen.getByPlaceholderText('new todo...');
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(inputElement, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);

  fireEvent.change(inputElement, { target: { value: 'Task 2' } });
  fireEvent.click(addButton);

  fireEvent.change(inputElement, { target: { value: 'Task 3' } });
  fireEvent.click(addButton);

  // Завершаем вторую задачу
  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[1]);

  // Нажимаем кнопку "Clear completed"
  const clearButton = screen.getByText(/clear completed/i);
  fireEvent.click(clearButton);

  // Проверяем, что завершённая задача была удалена
  expect(screen.queryByText('Task 2')).toBeNull();
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 3')).toBeInTheDocument();
});
