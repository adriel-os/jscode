//var j = $


// Ready function
   //Head inject
j(document).ready(async  function()
{

    j('head').append(j('<script>', {src:'https://kit.fontawesome.com/a076d05399.js',crossorigin :'anonymous'}))
    
    j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosFunctions.js'}))
    j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosView.js'}))
    j('head').append(j('<script>', {src:'http://jscode.com.br/static/js/itarget/servicos/dayworkServicosModel.js'}))
    
    j('head').append(j('<link>', {href:'http://jscode.com.br/static/css/itarget/dayWorkServicos.css', rel :'stylesheet'}))

})

myInterval = setInterval(boot, 200);
function boot(){
    if(typeof j('.newMain') == 'object')
    {
        clearInterval(myInterval)
        return true
    }
    //Dashboard
    let main = div({class:'newMain'})  
    let tarefas = jsonTarefas(j('.tipoServico').parent().parent())

    main.append(viewMenu(), viewDashTarefas(tarefas))
    
    
    j('#box-dialog').before(main)
    j('.roundcontAll').css({'background-color':'initial'})
    j('#sobreMenu').hide()
    //j('#VGL').hide().after().hide()
})