// Exemplo Download de MDFe

const statusProcessamentoMDFe = require('./src/mdfe_module/emissao/download')

let corpo = new statusProcessamentoMDFe.body("43210707364617000135580010000116761661801943", "J", "2")

statusProcessamentoMDFe.sendPostRequest(corpo).then(getResponse => { console.log(getResponse) })