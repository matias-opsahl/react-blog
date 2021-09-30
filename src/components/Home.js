import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import React from 'react'; 
import Subtext from './Subtext';


const Home = () => {

    const [blogs, setBlogs] = useState(null);

 const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
 }

useEffect(() => {
    fetch('http://localhost:8000/blogs/')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
            console.log(data);
        });


}, []);

    return (
        <div className="home">           
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'messi')} title="Messi's blogs!" handleDelete={handleDelete}/>}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'ronaldo')} title="Ronaldo's blogs!" handleDelete={handleDelete}/>}
            <Subtext />
        </div>
    )
}

export default Home
