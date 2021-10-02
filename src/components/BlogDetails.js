import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    // Henter id-variabelen fra url-en som har blitt skrevet inn
    const { id } = useParams()
    const { data:blog, error, pending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE',
        }).then(()=> {
            history.push('/')

        })
    
    }

    return (
        <div className="blog-details">
            { pending && <div> Loading... </div>}
            { error && <div> {error} </div>}
            { blog && 
                <article>
                    <h2>{blog.title}</h2>
                    <hr/><br/>
                    <h4>Written by: {blog.author}</h4>
                    <br/>
                    <div>{blog.body}</div>
                    <br/>
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            } 
        </div>
    )
}

export default BlogDetails
