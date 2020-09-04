import React from "react"
import {Route} from 'react-router-dom'
import Menu from './Menu'
import { AsyncLoad, lazyLoad } from './AsyncLoad'

const BookPage = AsyncLoad(lazyLoad('./books/BooksPage'));
const BookForm = AsyncLoad(lazyLoad('./books/BookForm'));

const App = props => (
    <div className={'container'}>
        <Menu />
        <div className={'row'}>
            <Route exact path="/" component={BookPage}/>
            <Route path="/add-book" component={BookForm}/>
        </div>
    </div>
)

export default App
