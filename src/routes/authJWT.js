const jwt = require('jsonwebtoken')
const config = require('../config/itarget/auth.json')

function auth(req, res, next) {
    //Aplicado aqui a verificação de autenticação JWT
    
    //Lendo se a requisição possui token
    const authHeader = req.headers.authorization 
      //validando
      if(!authHeader)
      {//return res.status(401).send({error: 'Token: não informado.'})
        req.jwt = false;
        return next()//vai prosseguir sem as credenciais, ou seja, necessita logar
        }
    //Separar o token em duas partes para verificar quantidade de argumentos
    const authParts = authHeader.split( ' ' )
      
      //validando
      if(!authParts.length === 2)
      return res.status(401).send({error: 'Token: quantidade de argumentos inválido.'})
    
    //Separando os argumentos para validação
    const [ scheme, token] = authParts
  
      //validando
      if(!/^Bearer$/i.test(scheme))
      return res.status(401).send({error: 'Token: Bearer ausente ou malformatado.'})
  
    jwt.verify(token, config.secret, (err, decoded)=>{

        if(err) return res.status(401).send({error: 'Token Inválido'})
        
        //se tudo estiver ok com o JWT, então gravar as variáveis decodificadas no parâmetro REQ
        req.jwt = decoded;
    })

    return next();
  }

module.exports = auth