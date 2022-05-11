function req()
{
    var url = false;
    var method = false;
    var headers = {'Content-Type': 'application/json'};
    var body = false;
return {
        url:function url(url)
        {
            this.url = url;
            return this;
        },

        headers:function(header){
            let keysHeader = Object.keys(header)
            var newHeader = this.headers;
            if(keysHeader.length > 1)
            {
                keysHeader.map(a=>{
                    newHeader.a = header.a
                })
            }
            else{
                header(0)
            }
            this.headers = 
            return this
        },

        body: function body(data)
        {
            this.body = JSON.stringify(data);
            return this;
        },
        
        method: function method(method)
        {
            this.method = method;
            return this;
        },

        fetch: function fetch()
        {
            if(this.url && this.method && this.body)
            {
                this.result = fetch(this.url, { method: this.method, 
                    headers: this.headers, 
                    body: JSON.stringify(data)})
            }
            else
            {
                console.log('Informe os parâmetros da Request.')
            }
            return this
        }
}


}