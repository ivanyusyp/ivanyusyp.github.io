import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {mapToArr} from '../../utils'
import {selectCatAction} from '../../ac/index'

const Categories = ({categories, selectCatAction}) => (
    <ul className={'list-group'}>
        {categories.map(category => (
            <li
                key={category._id}
                className={'list-group-item'}
                onClick={() => selectCatAction(category._id)}
                >
                {category.title}
            </li>
        ))}
    </ul>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

Categories.defaultProps = {
    categories: [],
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks;


    return {
        categories: mapToArr(categories)
    }
}

export default connect(mapStateToProps, {selectCatAction})(Categories)
