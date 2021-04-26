import pg from '../../lib/db' //importando o db que faz conexão c banco de dados

let movieData = {} //estou definindo a var aqui fora para que ela seja visivel em todo o código e no bloco eu seto os valores

module.exports = {

    before: function(browser){
        // massa de teste
        movieData = { //objeto movieData que contém o filme q vamos cadastrar, instanciando massa de teste
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla','Ali', 'Ian Glen','Shawn'],
            cover: 'resident-evil-2002.jpg',
            plot: 'teste teste teste' //sinopse
        }

        pg.removeByTitle(movieData.title) // garante que essa massa não deve existir no banco de dados, pq removemos
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('mari@qaninja.io','qaninja') // fazer login, é um pré requisito     
        sidebar.expectLoggedUser('Mari') // boa pratica p garantir q estou realmente logada e garantir a assertividade do nosso teste
    },
    'Quando eu faço o cadastro do filme':(browser) => {
        let movie = browser.page.movie()
        
        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput',movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .click('@createButton')
    },
    'Então devo ver um novo filme na lista': (browser) =>{
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@movieList',5000)
            .assert.containsText('@movieList',movieData.title)
    }



}