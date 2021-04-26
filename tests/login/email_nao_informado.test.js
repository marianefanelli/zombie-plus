const login = require("../../pages/login");

module.exports = { 
    'email não informado':(browser) => {
        let login = browser.page.login()
        login
            .with('','qaninja')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}