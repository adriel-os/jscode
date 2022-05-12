//var j = $


// Ready function
// Ready function
j(document).ready(async  function(){

    //Head inject
    j('head').append('<script>', {src:'https://kit.fontawesome.com/a076d05399.js',crossorigin :'anonymous'})
    
    
    
    //Dashboard
    let main = div({class:'newMain'})
    
    
    let tarefas = jsonTarefas(j('.tipoServico').parent().parent())
    
            
        main.append(viewMenu(), viewDashTarefas(tarefas))
    
    
    j('#box-dialog').before(main)
    j('.roundcontAll').css({'background-color':'initial'})
    j('#sobreMenu').hide()
    //j('#VGL').hide().after().hide()
    })