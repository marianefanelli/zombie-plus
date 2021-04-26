
module.exports = {
    '@tags': ['smoke','404'],

    before: function(browser){
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login 
            .with('mari@qaninja.io','qaninja')
        sidebar
            .expectLoggedUser('Mari')    
    },
    'Quando eu busco um título não cadastrado': (browser) =>{
        let movie = browser.page.movie()
        movie 
            .setValue('@searchInput','Barbie Butterfly')
            .click('@searchIcon')
    },
    'Então devo ver uma mensagem de alerta': (browser) =>{
        let movie = browser.page.movie()
        movie
            .waitForElementVisible('@alert',10000)
            .assert.containsText('@alert','Puxa! não encontramos nada aqui :(')
    }



}