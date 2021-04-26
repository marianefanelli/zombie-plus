const login = require("../../pages/login");

module.exports = {  
    'senha incorreta': (browser) => { 
        let login = browser.page.login()
        login
            .with('mari@qaninja.io',12345) // with agora é uma função do nightwatch ja que definimos ela na page Login
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}