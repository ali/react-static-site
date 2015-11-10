import React from 'react'
import { render } from 'react-dom'
import { createHistory, createMemoryHistory } from 'history'
import { IndexRoute, Router, Route, Link } from 'react-router'

const Navigation = (props) => <nav>
  <Link to="/">Index</Link>
  <Link to="/about">About</Link>
  <Link to="/blog">Blog</Link>
</nav>

const Layout = (props) => <div>
  <h1>My Website</h1>
  <Navigation />

  <section id="content">
    {props.children}
  </section>
</div>

const Index = (props) => <div>
  <h2>Index</h2>
</div>

const About = (props) => <div>
  <h2>About</h2>
</div>


const Blog = (props) => <div>
  <h1>My Blog</h1>
  <Navigation />
  {props.children}
</div>


const BlogPostListItem = (props) => <li>
  <Link to={`/blog/${props.file}`}>{props.post.title}</Link>
</li>


const BlogPostList = (props) => <div>
  <h2>Posts</h2>
  <ul>
    {props.posts.map(file => {
      const post = require('./posts/' + file)
      return <BlogPostListItem key={file} file={file} post={post} />
    })}
  </ul>
</div>


const BlogIndex = (props) => <div>
  <h1>Blog.</h1>
  <p>This is a blog.</p>

  <BlogPostList posts={__POSTS__} />
</div>


const BlogPost = (props) => {
  const post = require(`./posts/${props.params.file}`)
  return <div dangerouslySetInnerHTML={post} />
}


const FourOhFour = () => <div><h1>404</h1></div>


class Site extends React.Component {
  render() {
    const { history } = this.props
    return <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="/about" component={About} />
      </Route>
      <Route path="/blog" component={Blog}>
        <IndexRoute component={BlogIndex} />
        <Route path=":file" component={BlogPost} />
      </Route>
      <Route path="*" component={FourOhFour}/>
    </Router>
  }
}

const history = createHistory()

render(<Site history={history} />, document.getElementById('root'))
