module.exports = {
 
    beforeEach: (browser,done) =>{
        browser.resizeWindow(1920,1080) // redimencionar janela, colocar definição da tela se não ele n vai achar os elementos
        done() //callback, se não chamar o callback ele vai ficar travado, preso nessa sessão
    },

    afterEach: (browser,done) =>{
        browser.end()
        done()
    }

    // não tem before e after no global, apenas beforeEach e afterEach
    // pq no global é antes de cada arquivo de teste então beforeEACH, afterEACH, para 
    // cada cenário ele vai fazer algo

}