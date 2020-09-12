import React, { useState, useEffect, useMemo } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCourseAction, loadCoursesAction } from '../../ac/coursesActions'
import { loadAuthorsActions } from '../../ac/authorActions'
import CoursesList from './CourseList'
import { counterAction } from '../../ac/counterActions'

const initForm = {
	title: '',
	author: '',
	category: '',
}

const CoursesPage = ({ courses, authors, counter, counterAction, createCourseAction, loadCoursesAction, loadAuthorsActions }) => {
	const [form, setForm] = useState(initForm)

	const handleChange = event => {
		const { name, value } = event.target;

		setForm(prev => ({ ...prev, [name]: value }))
	}
	const memoCourses = useMemo(
		() =>
			courses.map(course => ({
				...course,
				authorName: authors.find(author =>
					author.id === course.authorId
				).name
			})),
		[courses, authors],
	)


	useEffect(() => {
		if (courses.length === 0) {
			loadCoursesAction().catch(err => { alert('Loading courses failed') })
		}
	}, [courses.length, loadCoursesAction])

	useEffect(() => {
		if (authors.length === 0) {
			loadAuthorsActions().catch(err => { alert('Loading courses failed') })
		}
	}, [authors.length, loadAuthorsActions])

	const handleSubmit = event => {
		event.preventDefault()
		createCourseAction(form)
		setForm(initForm)
	}

	return (
		<div className="container mt-5">
			<h1>Courses Page</h1>

			<button onClick={counterAction}>{counter}</button>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						onChange={handleChange}
						value={form.title}
						name="title"
						id="title"
						type="text"
						className="form-control"
					/>
					<label htmlFor="author">Author</label>
					<input
						onChange={handleChange}
						value={form.authorName}
						name="author"
						id="author"
						type="text"
						className="form-control"
					/>
					<label htmlFor="category">Category</label>
					<input
						onChange={handleChange}
						value={form.category}
						name="category"
						id="category"
						type="text"
						className="form-control"
					/>
				</div>

				<button className="btn btn-primary" onSubmit={handleSubmit}>Send</button>
			</form>
			{memoCourses.length ? (
				<CoursesList courses={memoCourses} />
			) : (
					<h1>Loading</h1>
				)}
		</div>
	)
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	createCourseAction: PropTypes.func.isRequired,
}

CoursesPage.defaultProps = {
	courses: [],
}

function mapStateToProps({ courses, authors, counter }) {
	return {
		authors,
		counter,
		courses: authors.length === 0 ? [] : courses,
	}
}

export default connect(mapStateToProps,
	{
		createCourseAction,
		loadCoursesAction,
		loadAuthorsActions,
		counterAction,
	}
)(CoursesPage)
