function generateDate(minRange=1000, maxRange = 2050)
{
    //dia
    let dia = Math.floor(Math.random() * 28)
    dia = dia == 0 ? '01' : ('00'+dia).slice(-2)
    //mês
    let mes = Math.floor(Math.random() * 10)
    mes = mes > 12 ? 12 : mes
    mes = mes == 0 ? '01' : ('00'+mes).slice(-2)
    
    //ano
    const anoLength = 10000
    var ano = 0
    var anoRet = true
    while(anoRet)
    {
        ano = Math.floor(Math.random() * anoLength)
        if(ano >= minRange && ano <= maxRange)
        anoRet = false        
    }
     return dia+'/'+mes+'/'+ ano
}

function getEstadoCivil()
{
let estadoCivil = Math.floor(Math.random() * 8)
    return estadoCivil==0 ?1:estadoCivil  
}
console.log('fillForm Ready')
function fillFormEstacao()
{

//aba 01
if($('#pessoa-cpf').val().trim() == '')
{
    $('#pessoa-cpf').val(gerarCPF())
}

let refIdTeste = Math.floor(Math.random() * 100)
$("#pessoa-nome").val().trim() == ''? $("#pessoa-nome").val('Usuário teste itarget'+ refIdTeste):''
let nome = $("#pessoa-nome").val()
$('#pessoa-nome_cracha').val(nome.split(" ")[0])
$("#pessoa-data_nascimento").val(generateDate(1960, 2000))

$('#pessoa-estado_civil_id').val(getEstadoCivil())
$('#pessoa-conselho_orgao_emissor_id').val('7')
$('#pessoa-email').val('testeitarget'+refIdTeste+'@itarget.com.br')
$('#pessoa-rg, #Passaport').val(Math.floor(Math.random() * 10000000000))
$('#pessoa-sexo').val('N')
$('#pessoa-pais_id').val('12')
$('#pessoa-website').val('https://website'+refIdTeste+'.itarget.com.br')
$('#pessoa-linkedin').val('https://linkedn.'+refIdTeste+'.itarget.com.br')
$('#pessoa-instagram').val('https://instagram.'+refIdTeste+'.itarget.com.br')

//Endereços
$('#endereco-tipo_0').val('R')
$('#endereco-corresp_0').attr('checked','checked')
$('#endereco-pais_id_0').val('12')
$('#endereco-cep_0').val('60150160').change()
$('#endereco-uf_id_0').val('6').change()
setTimeout(function(){$('#endereco-municipio_id_0').val('947')}, 2000)
$('#endereco-complemento_0').val(array('casa', 'comercio', 'sala', 'consultorio')[Math.floor(Math.random() * 4)])
$('#endereco-numero_0').val(Math.floor(Math.random() * 1000))


//Telefones 
$('#telefone-tipo_0').val('C')
$('#telefone-class_fone_endereco_id_0').val('3')
$('#telefone-ddi_0').val('55')
$('#telefone-fone_0').val('859'+Math.floor(Math.random() * 100000000))

// Formação academica
$('#escolaridade_pessoa-tipo_graduacao_id').val('1')

let posInstituicaoEnsino = Math.floor(Math.random() * 3)
posInstituicaoEnsino = posInstituicaoEnsino == 0 ? 1:posInstituicaoEnsino
$('#escolaridade_pessoa-faculdade_id').val($('#escolaridade_pessoa-faculdade_id option:eq(' +posInstituicaoEnsino + ')').val())

$('#escolaridade_pessoa-curso').val('Curso teste')

$('#escolaridade_pessoa-data_inicio').val(generateDate(2000, 2005))
$('#escolaridade_pessoa-data_fim').val(generateDate(2006, 2015))

//Complementares
$('#pessoa-num_conselho').val(Math.floor(Math.random() * 1000))
$('#pessoa-uf_conselho').val('CE')
}

(function fillBar()
{
    $('head').append($('<style>').html(".fillbar{height:40px;padding:5px;margin-top:15px;border:2px solid silver;display:flex;flex-direction:row; align-items: center;justify-content: center;} .fillLegend{margin-right:35px}"))
    $('body').append(
    $('<div>', {'class':'fillbar'}).append(
        $('<span>', {class:'fillLegend'}).text('Clique para preencher o formulário de cadastro'),
        $('<input>', {type:'button', value:'Preencher!', class:'fillButton'}).click(function(){
            fillFormEstacao()
        })
    )
        
    )
})()