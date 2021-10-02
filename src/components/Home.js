import Bloglist from './Bloglist';
import React from 'react'; 
import Subtext from './Subtext';
import useFetch from './useFetch';


const Home = () => {
const {data:blogs, pending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">

{/* Denne { && }, er en condition. Den sier at hvis variabelene våres            
pending eller blogs er TRUE, så skal høyre del av && opreatoren kjøres.
Med andre ord så vises Loading.. hvis pending er true, som vi satt 
default valuen til.
Defalt valuen til blogs == null == false. Denne blir ikke true før den 
får dataen med fetch funksjonen ovenfor. Når den blir true blir høyre del
av koden kjørt og dataen blir vist gjennom å rendre <Bloglist/> komponenten */}
    
            
            {error && <div>  {error}  </div>}
            {pending && <div>  Loading...  </div>}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'messi')} title="Messi's blogs!"/>}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'ronaldo')} title="Ronaldo's blogs!"/>}
            <Subtext />
        </div>
    )
}

export default Home
