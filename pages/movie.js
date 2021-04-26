var createActions = {
    createForm: function() {
        return this
        .click('@addButton')
        .waitForElementVisible('@movieForm',3000)
    },
    selectStatus: function(status){
       return this
            .click('@statusSelect')
            .useXpath() //fala pro nightwatch que valor usar o xPath
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`,2000) //passo o xpath do elemento que eu quero selecionar
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss()
    },
    insertCast: function(cast) {
        const browser = this // não posso dar um return this no forEach pq não esta no contexto do webdriver

        cast.forEach(function(actor){
            browser
                .setValue('@castInput',actor)
                .api.keys(browser.api.Keys.TAB) // simular clique na tecla tab
        })
       return this // toda função no page objects tem que ter o return this (OBRIGATÓRIO), pra devolver o webdriver pro arquivo de teste, se não vai dar erro 
    },
    uploadCover: function(fileName){
        let fullPath = require('path').resolve(__dirname, '../images/' + fileName) //require modulo do node que chama path
        // função resolve passando __dirname vai retornar o diretório de trabalho onde essa função ta sendo executada - vai retornar pages
        // em seguida concatenamos c a pasta onde esta a imagem e com o nome da file(imagem) obs: ../ volta uma pasta- um nivel
        return this
            .setValue('@uploadInput',fullPath)
            .assert.attributeContains('.picture-src','src' ,'blob') // validando se o atributo x contém no texto a palavra 'blob'
    }
}

module.exports = {
    commands: [createActions],
    elements: {
        addButton: '.movie-add',
        searchInput: 'input[placeholder^=Pesquisar]', //expressão regular
        searchIcon:'#search-movie',
        alert:'.alert-danger',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        uploadInput: '#upcover',
        createButton: '#create-movie',
        movieList: 'table tbody',
        tr: 'table tbody tr'
    }
}