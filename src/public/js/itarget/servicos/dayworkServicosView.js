//function component layout
function div(props)
{
	return	j('<div>', props)
}

function span(props)
{
	return j('<span>', props)
}

// Componentes
function viewCard(a){
	
    let cardMain = div({class:'card'})
	
	if(a.status == 'Pausado')
	{
		 
		cardMain.append(div({class:'tag pausado'}).html('<i style="" class="fa fa-pause"></i></i> Em Pausa</span>'))
	}
	
    let titulo =   div({class:'Titulo'}).html('<a href="' + a.url +'">'  + a.tituloTarefa.toLowerCase() + '</a')
    
	let cliente =  div({class:'topCliente'}).append(
		div({class:'clienteImg'}).css({'background-image':a.imagem}),
		div({class:'clienteProjeto'}).append(
			'<a class="itemCliente nomeCliente" href="'+ a.clienteUrl +'">'+ a.cliente.toUpperCase() + '</a>', 
			div({class:'itemCliente nomeProjeto'}).html(a.projeto.toUpperCase()),
			titulo
									))
	
    let data_fim =  div({text:a.dataEntrega})
    let datas =     div({class:'Datas'})
        
        let daysLeft =   div({class:'DatasGroup'}).append(
                              div({class:'DatasNum'}).text(a.difStart.dif),
                              div({class:'DatasLegenda'}).text(a.difStart.ref +' de execução')
                            )
		let daysToEnd =  div({class:'DatasGroup'}).append(
                              div({class:'DatasNum'}).text(a.difDeliv.dif),
                              div({class:'DatasLegenda'}).text(a.difDeliv.ref + ' para entrega')
                            )
                            
		if(a.difDeliv.atraso)
		{
	        daysToEnd = div({class:'DatasGroup atraso'}).append(
	                              div({class:'DatasNum'}).text(a.difDeliv.dif),
	                              div({class:'DatasLegenda'}).text(a.difDeliv.ref + ' de atraso para entrega')
			)
	
		}
    
	datas.append(daysLeft, daysToEnd)
	let setor_icon = 'fa fa-info-circle'
	
	if(a.setor.toLowerCase().indexOf('programa') != -1)
	{
		setor_icon = 'fa fa-bug'
	}
	if(a.setor.toLowerCase().indexOf('dept associaçõe') != -1)
	{
		setor_icon = 'fa fa-child'
	}
	
	if(a.setor.toLowerCase().indexOf('análise') != -1)
	{
		setor_icon = 'fa fa-user-secret'
	}
	
	let resp_tag = '<span class="tag Pessoa"> ' + a.responsavel + ' </span> '
	let setor_tag = '<span class="tag"><i style="font-size:12px;margin-right:4px" class="'+setor_icon+'"></i>'+ a.setor +'</span>'
	
    let responsavel =  j('<div>', {class: 'Responsavel'}).html(resp_tag + setor_tag)

    cardMain.append(cliente, datas, responsavel)
return cardMain
}


function viewMenu()
{
return 	div({class:'menuL'}).append(
			div({class:'logoDay'}).text('iDaywork'),
			div({class:'profile'}).text('prof'),
			div({class:'mainMenu'}).append(
				div({class:'itemMenu'}).html('<i style="margin-right:8px" class="fa fa-th-list"></i> Minhas Tarefas'),
				div({class:'itemMenu empresas'}).html('<i style="margin-right:8px" class="fa fa-bullseye"></i>Empresas')
				))
				
}



function viewDashTarefas(tarefas)
{
	
	let legendaNaoIniciado = div({class:'colLegend'}).text('Não Iniciados')
	let ColunaNaoIniciado = div({class:'collumn'}).append(legendaNaoIniciado)

	let legendaIniciado =	div({class:'colLegend'}).text('Iniciados')
	let ColunaIniciado =	div({class:'collumn'}).append(legendaIniciado)

	let legendaAprovar =	div({class:'colLegend'}).text('A aprovar')
	let ColunaAprovar = 	div({class:'collumn'}).append(legendaAprovar)


	let countTarefas = {aprovar:0, iniciado:0, naoIniciado:0}
tarefas.map(function(a){
	if(a.status == 'Não Iniciado')
	{
		ColunaNaoIniciado.append(viewCard(a))
		countTarefas.naoIniciado = countTarefas.naoIniciado+1
	}
	if(a.status == 'Iniciado' || a.status == 'Pausado')
	{
		ColunaIniciado.append(viewCard(a))
		countTarefas.iniciado = countTarefas.iniciado + 1
	}
	
	if(a.status == 'Aprovar')
	{
		ColunaAprovar.append(viewCard(a))
		countTarefas.aprovar = countTarefas.aprovar+1
	}
})
	legendaNaoIniciado.append(' (' + countTarefas.naoIniciado +')')
	legendaIniciado.append(' (' + countTarefas.iniciado +')')
	legendaAprovar.append(' (' + countTarefas.aprovar +')')
	
	let menu = viewMenu()
	let dashTarefas = div({class:'tarefas'}).append(ColunaNaoIniciado,ColunaIniciado, ColunaAprovar)
	
	return dashTarefas
}