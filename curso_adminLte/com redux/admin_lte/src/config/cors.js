module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') // permitindo as origens diferentes
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // os métodos que irão permitir acesso 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') //
    next()
}
