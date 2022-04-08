import react from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './bookdata';
import Book from './book';

function Booklist() {
    return (
        <div className='main'>
            <section className='book-list'>
                {books.map((book) => {
                    return (
                        <Book book={book}> </Book>
                    )
                })}

            </section>
        </div>
    );
}




ReactDOM.render(<Booklist />, document.getElementById("root"));