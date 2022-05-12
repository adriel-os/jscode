
j('#empAtvResListaAtividadesResumo p').css({'text-indent':'0ox', 'margin-bottom':'30px', 'font-size':'16px', 'font-family':'Poppins'})

j('#empAtvResListaAtividadesResumo').css({'background':'#f4f4f4', padding:'40px', 'padding-top':'15px', 'border':'none', 'text-indent':'0px'})

j('#empAtvDetalhesTarefaBarra').css({'background':'none', 'border':'none', 'height':'auto','box-sizing':'border-box',display:'flex', 'flex-direction':'row', 'text-transform':'capitalize', 'flex-wrap':'wrap'})
j('#empAtvDetalhesTarefaBarra a').css({'background':'#f4f4f4', 'border':'#c4c4c4', 'padding':'10px', 'width':'auto','box-sizing':'border-box', 'display':'block', 'font-size':'14px', 'margin':'5px'})
// dados do projeto
j('#empAtvDetalhesTarefa a:eq(1), #empAtvDetalhesTarefa span').remove()
var ProjetoNome = j('#empAtvDetalhesTarefa').text().trim()
var Projeto_index_fim = ProjetoNome.indexOf("[  ]", 0) - 2
ProjetoNome = ProjetoNome.substr(0, Projeto_index_fim).trim()

//Url Projeto
ProjetoUrl = j('#empAtvDetalhesTarefa a').attr('href')

//Código da tarefa
var TarefaCodigo_index_fim = ProjetoNome.indexOf(" -")
TarefaCodigo = ProjetoNome.substr(0, TarefaCodigo_index_fim).trim()
ProjetoNome = ProjetoNome.substr(TarefaCodigo_index_fim+2, ProjetoNome.length).trim()

//Titulo da tarefa
var TarefaTitulo = j('#empAtvResListaAtividadesTitulo').text()
var Tarefa_index_fim = TarefaTitulo.indexOf("[ Título ]", 1) - 2
TarefaTitulo = TarefaTitulo.substr(1, Tarefa_index_fim).trim()


j('#empAtvResListaAtividadesTitulo').css({border: 'none', 'font-size':'26px', 'font-weight': '600','font-family':'Poppins','background':'#f4f4f4', 'text-size':'18px', 'padding':'20px', 'padding-left':'40px'})
j('#empAtvResListaAtividadesTitulo').html(`<a href="${ProjetoUrl}" target="_blank">${ProjetoNome}</a><br/>${TarefaCodigo} - ${TarefaTitulo}`)

//Removendo barra antiga Descricao projeto
j('#empAtvDetalhesTarefa').remove()

// Html do resumo da tarefa
j('#empAtvResListaAtividadesResumo img').css({'width':'80%', 'height':'auto', 'margin-bottom':'30px', 'border':'1px solid #c4c4c4'})
j('#empAtvResListaAtividadesResumo br').remove()
// apagando paragrafos em branco
j('#empAtvResListaAtividadesResumo p').each(function(a,b){
    
    if(j(b).text().trim().length == 0 && j(b).find('img').length == 0)
    {
        j(b).remove()
      
    }
})
var DetalheTarefa = j('#empAtvResListaAtividadesResumo')


//preparando dados de datas
j('#datas strong').remove()
var TempoTarefa = {	'iniciar': j('#datas li:eq(0)').text().trim(),
					'terminar':j('#datas li:eq(1)').text().trim(),
					'iniciado':j('#datas li:eq(2)').text().trim(),
					'terminado':j('#datas li:eq(3)').text().trim(),
					'visualizado':j('#datas li:eq(4)').text().trim(),
					'entrega' :j('#datas li:eq(5)').text().trim()
}
j('#empAtvResListaAtividadesDatas').css({background:'#f4f4f4', 'font-size':'18px', 'font-family':'Poppins', border:'1px solid #c4c4c4', 'padding':'10px'})
j('#empAtvResListaAtividadesDatas #datas ul li').css({'font-size':'18px'})
j('.panel, .panel-primary').first().remove()
j("a:contains('Acessar'), a:contains('Priorizar'), a:contains('Anexos')").remove()

j('.empAtvResListaAtividadesConteudo span').removeAttr('style').css({'font-style': 'italic'})
j('.empAtvResListaAtividadesConteudo table').css({'margin-bottom': '30px'})
j('.empAtvResListaAtividadesConteudo ul li').css({'margin-top': '15px', 'line-height':'30px'})

j('.acompanhamento p').removeAttr('style').css({margin:'15px', 'font-size':'18px', 'font-weight':100, 'font-family':'verdana'})
j('.acompanhamento').removeAttr('style').css({'font-size':'18px', 'font-weight':100, 'font-family':'verdana'})

j('head').append('<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Titillium+Web&display=swap" rel="stylesheet">')