import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState('messi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // Lager en funksjon som kjøres når formen blir submitta
    // Den tar inn dataen fra input feltene som vi har klart å omgjøre til variabler,
    // og lager et object ut av dem i variabelen blog.
    const handleSubmit = (e) => {
        e.preventDefault();
        // trenger ikke å lage en for hver blogg siden json gjør det automatisk
        const blog = {title, body, author}
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        });

        
    }

    return (
        <div className='create'>
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = { (e) => setTitle(e.target.value)}
                />
            
                <label>Blog body:</label>    
                <textarea
                    required
                    value = { body }
                    onChange = { (e) => setBody(e.target.value)}
                >
                </textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="messi">Messi</option>
                    <option value="ronaldo">Ronaldo</option>
                </select>

                {!isPending && <button>Add blogg</button>}
                { isPending && <button disabled={true}>Adding blogg...</button>}
            </form>            
        </div>
    )
}

export default CreateBlog
