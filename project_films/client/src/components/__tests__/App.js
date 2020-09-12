import React from "react"
import App from "../App"
import { MemoryRouter as Router } from "react-router-dom"
import { render, fireEvent, getByLabelText } from "@testing-library/react"

const submit = jest.fn(() => Promise.resolve())

const initialState = {
	token: null,
	role: "user",
}
test("should render correctly", () => {
	const { getByLabelText } = render(<Router><App /></Router>)

	const filmsListEl = getByLabelText(/ui container/gi)
	const homeLinkEl = getByLabelText(/ui info message/gi)
})
