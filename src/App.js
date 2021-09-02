import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import './styles.css'
import Home from './components/Home'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import About from './components/About'
import NewsPage from './components/News'
import Footer from './components/Footer'

export default function App () {
  // console.log(newsData.articles);

  return (
    <div className='App'>
      <MainContainer>
        <Header></Header>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/news/:newsId'>
                <NewsPage />
              </Route>

              <Route path='/About'>
                <About />
              </Route>

              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer> </Footer>
      </MainContainer>
    </div>
  )
}
