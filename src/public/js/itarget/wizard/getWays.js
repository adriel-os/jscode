function getway(route, options)
{
    
        //rotas homologadas (prototype)
        const prototype_routes = Object.getOwnPropertyNames(this.prototype)
        this.route = {}
        this.options = {}
        
        //validação da rota que pretende ser usada e insersão no localStorageConf
        if(prototype_routes.indexOf(route) > 0)
        {
            console.log('Habilitando rota: ' + route)
            if(this.prototype[route](options))
            {
                return true
            }
            else 
            {
                console.log('Erro ao definir as options da rota ('+ route +')')
                return false
            }
            
        }
        console.log('Rota não registrada. Nenhum metodo será disparado.')
        return false


}


getway.prototype.auth = function()
{
    if(this.options != null && this.options.clienteSigla != false)
    {
        this.route.name = 'auth'
        this.route.url = `https://${this.options.clienteSigla}.ws.itarget.com.br/api/pt-br/authenticate`;
    }
    else
    console.log('getway.auth:' + 'Sem parâmetros para criar a rota (clienteSigla)')
}

getway.prototype.exec = function(){
    return new Promise()
}