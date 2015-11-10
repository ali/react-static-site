import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, Link } from 'react-router'

class Layout extends React.Component {
  render() {
    return <div>
      <h1>My Website</h1>
      <nav>
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
      </nav>

      {this.props.children}
    </div>
  }
}

class Index extends React.Component {
  render() {
    return <div><h2>Index</h2></div>
  }
}

class About extends React.Component {
  render() {
    return <div><h2>About</h2></div>
  }
}

class Site extends React.Component {
  render() {
    return <Router>
      <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
      </Route>
      </Router>
  }
}

render(<Site />, document.getElementById('root'))
