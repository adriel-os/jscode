const html  = require('html.js')
const html = require('./html')

function viewLogin()
{
 let body = `teste`;
 html.append('body', body)
 return html.render()
}