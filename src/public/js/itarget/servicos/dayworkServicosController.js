//var j = $


// Ready function
// Ready function
j(document).ready(async  function(){

    //Head inject
    j(document).ready(async  function(){

        await j('head').append(j('<script>', {src:'https://kit.fontawesome.com/a076d05399.js',crossorigin :'anonymous'}))
        
        await j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosFunctions.js'}))
        await j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosView.js'}))
        await j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosModel.js'}))
        
        await j('head').append(j('<link>', {href:'http://jscode.com.br/static/css/itarget/dayWorkServicos.css', rel :'stylesheet'}))
        
    
    
    //Dashboard
    let main = div({class:'newMain'})
    
    
    let tarefas = jsonTarefas(j('.tipoServico').parent().parent())
    
            
        main.append(viewMenu(), viewDashTarefas(tarefas))
    
    
    j('#box-dialog').before(main)
    j('.roundcontAll').css({'background-color':'initial'})
    j('#sobreMenu').hide()
    //j('#VGL').hide().after().hide()
    })