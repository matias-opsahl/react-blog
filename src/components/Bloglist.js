import React from 'react'
const Bloglist = ({blogs, title, handleDelete}) => {
    // Gjør om dataen som vi har i home til variabelen blogs slik at jeg ikke trenger å 
    // endre på noe av navnene i koden :)

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog_object) => (
                <div className="blog-preview" key={blog_object.id}> 
                    <h2>{blog_object.title}</h2>
                    <p> Written by: {blog_object.author}</p>
                        
                    <button style={{color:"black"}} onClick={() => (handleDelete(blog_object.id))}> Delete</button>
                </div>
            ))}
        </div>
    );
}    

export default Bloglist
