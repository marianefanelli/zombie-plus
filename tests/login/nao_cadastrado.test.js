const login = require("../../pages/login");

module.exports = { 
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@qaninja.io', 'qaninja123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}