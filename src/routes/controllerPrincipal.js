// Controller da página principal
module.exports = function (req, res)
{
    if(req.jwt == false)
    res.sendFile('/view/home.html', {root:__dirname + './../'})
    else 
    res.send('View do Painel')
}