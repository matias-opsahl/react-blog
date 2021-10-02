import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = ({blogs, title}) => {
    // Gjør om dataen som vi har i home til variabelen blogs slik at jeg ikke trenger å 
    // endre på noe av navnene i koden :)

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog_object) => (
                <div className="blog-preview" key={blog_object.id}> 
                    <Link to={`/blogs/${blog_object.id}`}>
                        <h2>{blog_object.title}</h2>
                    </Link>
                    <p> Written by: {blog_object.author}</p>
                </div>
            ))}
        </div>
    );
}    

export default Bloglist
