function html()
{
    this.html = `<html>
    <head>
        <title>${this.title}</title>
        ${this.head}
    </head>
    <body>
      ${this.body}
    </body>
</html>`;
}

html.prototype.append = (item, valor)=>{this[item] = this.[item] + valor}
html.prototype.render = ()=>{return this.html}
module.exports = new html()