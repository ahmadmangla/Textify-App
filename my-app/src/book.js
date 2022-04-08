import React from 'react'

const Book = (props) => {
    const { title, author, img, id } = props.book;
    return (
        <div>
            <article>
                <img src={img}></img>
                <h1> {title} </h1>
                <h4> {author}</h4>
                <button type='button'>Button</button>
                {/* {displayNames} */}
                {/* {console.log(props)} */}
            </article>
        </div>
    );
}

export default Book