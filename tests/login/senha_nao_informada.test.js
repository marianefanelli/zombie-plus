const login = require("../../pages/login");

module.exports = { 
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('mari@qaninja.io','')
            .expectAlertInfo('Opps. Cadê a senha?')
    }

}