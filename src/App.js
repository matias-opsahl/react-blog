import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {


  return (
    // Putter router componenten vi importerte rundt hele app.js slik at vi får tilgang
    // på Routeren i alle componentene. Dette er fordi dette er root componenten.
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"> 
{/*Setter opp alle routene inni i switch componenten. Alle de sidene vi har i prosjektet  */}
{/* lager altså en Route-component for hver side*/}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/create">
            <CreateBlog />
          </Route>

          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
