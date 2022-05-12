function jsonTarefas(a) {
    let dom = a
    let itens = []
    
    dom.each(function(a, b){
     let c = j(b).find('td')
     //extraindo nome do destinatário da tarefa
     let responsavel_index_ini = j(c[7]).text().indexOf("Responsável:") + 12
     let responsavel_index_fim = j(c[7]).text().indexOf("\n", responsavel_index_ini) - 2
     let responsavel_nome = j(c[7]).text().substr(responsavel_index_ini,responsavel_index_fim).trim()
     
     
     let status = $(j(c).find('.flags'))
     if(status.find('.flag_servicoPausa').length == 1)
     {
         status = 'Pausado'
     }
     else
     {
     if(status.find('.flag_servicoIniciado').length == 1)
     {
         status = 'Iniciado'
         
         if(responsavel_nome != 'ADRIEL')
         {
                 status = 'Aprovar'
         }
     }
     else{
     if(status.find('.flag_servicoNaoIniciado').length == 1)
     {
         status = 'Não Iniciado'
     }
     }}
     
     
     //extraindo nome do tester
     let tester_index_ini = j(c[7]).text().indexOf("Teste:") + 6
     let tester_nome = j(c[7]).text().substr(tester_index_ini).trim()
     //extraindo titulo, data entrega e hora
     var titulo = j(c[5]).text()

     let codigo_index_fim =  titulo.indexOf(" - ")
     let codigoTarefa = titulo.substr(0,codigo_index_fim).trim()
     
     
     let titulo_index_ini =  codigo_index_fim + 3
     let titulo_index_fim =  titulo.indexOf("\n", titulo_index_ini)
     let tituloTarefa = titulo.substr(titulo_index_ini, titulo_index_fim).trim()
     
     let traco = tituloTarefa.indexOf('–')
     
     if(traco >= 0)
     {
         tituloTarefa = tituloTarefa.substr(traco+1)
         
     }
 
     let dataEntrega_index_ini =  titulo.indexOf("Data de entrega:") + 16
     let dataEntrega_index_fim =  titulo.indexOf("às", dataEntrega_index_ini) - dataEntrega_index_ini
     let dataEntrega =            titulo.substr(dataEntrega_index_ini, dataEntrega_index_fim).trim()
     
     
     let flagTitle = $(j(c).find('.flags')).find('.flag_servicoIniciado').attr('title')
 
     let dataInicio = ''
     if(typeof flagTitle !== 'undefined')
     {
         let dataInicio_index_ini =  flagTitle.indexOf("Iniciado em:") + 12
         let dataInicio_index_fim =  flagTitle.indexOf("as", dataInicio_index_ini) - dataInicio_index_ini
         dataInicio =            flagTitle.substr(dataInicio_index_ini, dataInicio_index_fim).trim()
         console.log(tituloTarefa)
         console.log(dataInicio)
         //console.log( DateDiff.inDays(new Date(dataInicio.split('/')[2]+'-'+dataInicio.split('/')[1]+'-'+dataInicio.split('/')[0]), new Date()))
     }
     
     let cliente = j(c[3]).text().trim().toLowerCase()
     
     let imagem = 'url(https://icase.apbm.itarget.com.br/images/clientes/'+ cliente +'/logo_administrador.png)'
     
     if(cliente.indexOf('cbc rj') != -1 )
         imagem = 'url(https://icase.apbm.itarget.com.br/images/clientes/cbc/logo_administrador.png)'
            
     if(cliente.indexOf('cma') != -1 )
         imagem = 'url(https://icase.apbm.itarget.com.br/images/clientes/cmba/logo_administrador.png)'

     
     itens.push({
                 tipo:j(c[0]).text().trim(),
                 hr_iniciar:j(c[1]).text().trim(),
                 hr_finalizar:j(c[2]).text().trim(),
                 cliente,
                 clienteUrl: j(c[3]).find('a').attr('href'),
                 codigoTarefa,
                 dataEntrega,
                 projeto:j(c[4]).text().trim().toLowerCase(),
                 tituloTarefa,
                 fase:j(c[6]).text().trim(),
                 responsavel:responsavel_nome.trim().toLowerCase(),
                 tester:tester_nome,
                 setor:j(c[8]).text().trim(),
                 flags:j(c[9]).text().trim(),
                 url_resumo:j(c[5]).find('a').attr('href'),
                 url:j(j(c[5]).find('a')[1]).attr('href'),
                 difStart: difDate(new Date(dataInicio.split('/')[2]+'-'+dataInicio.split('/')[1]+'-'+dataInicio.split('/')[0]), new Date()),
                 difDeliv: difDate(new Date(dataEntrega.split('/')[2]+'-'+dataEntrega.split('/')[1]+'-'+dataEntrega.split('/')[0]), new Date()),
                 status,
                 dataInicio,
                 imagem
                 })

     })
     
     return(itens)
}