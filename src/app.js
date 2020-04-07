import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from './home'
import Page from './page'
import Error from './error'

export default function App() {
  return (
    <div class="container">
      <header>
        <h1>ZEIT Now React SSR</h1>
        <h2>
          Server-side React with <a href="https://zeit.co/">ZEIT Now</a>.
        </h2>
      </header>
      <nav>
        <NavLink
          className="button"
          activeClassName="active"
          to="/"
          exact={true}
        >
          Home
        </NavLink>
        <NavLink className="button" activeClassName="active" to="/page-1">
          Page 1
        </NavLink>
        <NavLink className="button" activeClassName="active" to="/page-2">
          Page 2
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={(_) => <Home />} />
          <Route exact path="/page-1" render={(_) => <Page number={1} />} />
          <Route exact path="/page-2" render={(_) => <Page number={2} />} />
          <Route
            render={({ staticContext }) => {
              if (staticContext) {
                staticContext.statusCode = 404
              }
              return <Error />
            }}
          />
        </Switch>
      </main>
      <footer>
        <p>
          <a
            className="github-button"
            href="https://github.com/rppld/now-react-ssr"
            data-size="large"
            aria-label="View rppld/now-react-ssr on GitHub"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
