import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of employees/i)
  expect(h1Element).not.toBeNull()
})

test('renders an task list with select buttons', () => {
	render(<App />)
	const tasks = screen.getAllByText(/select/)
	expect(tasks.length).toBe(2)
})

test('can select a task', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(1)
})

test('the details component is rendered on selection, not the list',  () => {
	render(<App />)
	let selectButtons = screen.getAllByText('select')
	let selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	let heading = screen.getAllByText('Details')
	expect(heading.length).toBe(1)
	selectButtons = screen.queryAllByText('select')
	expect(selectButtons.length).toBe(0)
})

test('can return from a selection', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	let selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(1)
	act(() => {
		cancelButtons[0].click()
	})
})
