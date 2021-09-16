// Exemplo consulta de status de processamento de MDFe

const downloadMDFe = require('./src/mdfe_module/emissao/statusProcessamento')

let corpo = new downloadMDFe.body("07364617000135","342438","2")

downloadMDFe.sendPostRequest(corpo, "MDFe/Documentos").then(getResponse => { console.log(getResponse) })