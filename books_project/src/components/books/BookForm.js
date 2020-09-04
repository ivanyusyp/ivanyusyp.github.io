import React, {useState} from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import {Redirect} from 'react-router-dom'
import { mapToArr } from '../../utils'
import {addBookAction} from '../../ac/index'
import { useForm, Controller } from 'react-hook-form'

const BookForm = ({categories, addBookAction}) => {
    const [redirect, setRedirect] = useState(false);
    const {register, handleSubmit, errors, control, setError, getValues} = useForm();
    const options = [{value: '-1', label: 'Choose category'}]
    categories.map(cat => options.push(({value: cat._id, label: cat.title })))

    function onSubmit(data, event) {
        event.preventDefault();
        if( errors.categoryId) {
            setError('categoryId')
            return
        }
        data = {...data, categoryId: data.categoryId.value}
        addBookAction(data);
        setRedirect(true)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
            {redirect && <Redirect to="/" />}
            <div className="form-group">
                <label html-for="title">Title</label>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                />
                {errors.title && "Title is required."}
            </div>
            <div className="form-group">
                <label html-for="desc">Description</label>
                <textarea
                    name="desc"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                />
                {errors.desc && "Description  is required."}
            </div>

            <div className="form-group">
                <Controller as={<Select options={options} />}
                    control={control}
                    ref={register({ required: true })}
                    onChange={([selected]) => selected }
                    name="categoryId"
                    defaultValue={options[0]}
                />
                {errors.categoryId && 'Categories is required'}
            </div>

            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        const {categoryId} = getValues();

                        if (categoryId.value === '-1') {
                            setError('categoryId', 'No choosen category')
                        }
                    }}
                >Submit</button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks;

    return {
        categories: mapToArr(categories)
    }
}

export default connect(mapStateToProps, {addBookAction})(BookForm);
