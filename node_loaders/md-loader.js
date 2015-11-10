var fm = require('yaml-front-matter')
var loaderUtils = require('loader-utils')
var marked = require('marked')

// A loader for markdown files and YAML front matter.

module.exports = function(source) {
  this.cacheable && this.cacheable()
  var options = loaderUtils.parseQuery(this.query)
  var data = fm.loadFront(source, 'content')
  data.__html = marked(data.content, options.marked || {})
  return 'module.exports = ' + JSON.stringify(data)
}
