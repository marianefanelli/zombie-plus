var loginActions = { // criamos uma var para guardar uma função, usamos o function pq o es6 não da suporte para page objects no nightwatch então tem que ser de forma convencional
    with: function (email,pass) { // usamos with mas pode ser qualquer outro nome ex: fazerLogin: function () { implementação }
        return this //através do this ele acessa o contexto da função, temos acesso ao objeto browser
            .navigate()  
            .waitForElementVisible('@form',3000) 
            .setValue('@emailInput', email) 
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    expectAlertDanger: function(texto){  // recebe o texto que vai ser validado na msg de alerta
        return this
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function(texto){  
        return this
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', texto)

    }
}    

module.exports = {
    url: '/login',
    commands: [loginActions], //estou falando que loginActions é um comando customizado, pode ter vários  
    elements:{ // implementa todos os elementos da página
        form: '.card-login', // capturando os elementos, não precisa ser esse nome - form, pode ser o nome que achar melhor
        emailInput:'input[name=email]',
        passInput:'input[name=password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
        // nome que vc quer dar pro elemento : seletor onde esta o elemento
    }
}