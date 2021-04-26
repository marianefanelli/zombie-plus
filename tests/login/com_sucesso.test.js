module.exports = { // todo arquivo tem que ter esse bloco por default
    'login com sucesso': (browser) => { // cenário de teste
        //let userInfo = '.user .info span' //ES6 - declarar variáveis usando o let
        //var userInfo = '.user .info span'

        let login = browser.page.login() // chamamos o objt page e carregamos toda a implementação de login nesse arquivo
        let sidebar = browser.page.sidebar() // instanciando a page objects

        login // acessa dentro da page login
            .with('mari@qaninja.io','qaninja')
            //.navigate() // vai navegar para a url definida na page Login
            //.waitForElementVisible('@form',3000) //acessa a página de login e aguarda um elemento chave ficar visivel
            // 3000 = 3 segundos, aguarda ate 3 segundos pra achar esse elemento
            // podemos chamar função sobre função, sem ter que chamar o objt browser 2x, e podemos separar por linha
            // dessa forma fica mais organizado e clean
            //.setValue('@emailInput', 'mari@qaninja.io') //passo o seletor (usamos o css) e o valor que quero colocar
            //.setValue('@passInput', 'qaninja')
            //.click('@loginButton')
        sidebar // porque é outra página não esta na page login    
            .expectLoggedUser('Mari')
            //.waitForElementVisible('@userInfo',3000) // aguarda a autenticação da pagina
           // .assert.containsText('@userInfo', 'Mari') //validação
    }


    


}