// Habilitar o CORS permite realizar requisições de outras origens.
// ao fazer middleware lembrar de colocar resposta ou colocar o next para continuar o processo
module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Origin",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
