import pg from '../../lib/db'

let movieData = {}

module.exports = {
    before: function(browser){
        // massa de teste
        movieData = { 
            title: 'Meu Namorado é um Zumbi',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: ['Nicholas Hoult','Teresa Palmer', 'Ana','Robbin Core'],
            cover: 'meu-namorado-zumbi.jpg',
            plot: 'teste teste teste' 
        }

        pg.removeByTitle(movieData.title).then(function(){ //chamando a promessa, ou seja, quando ele cumprir a promessa de n ter o filme no banco ai insiro o filme
            pg.insertMovie(movieData) //inserindo o filme pelo banco de dados
        })

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login 
            .with('mari@qaninja.io','qaninja')
        sidebar
            .expectLoggedUser('Mari')    
    },

    'Quando faço a busca pelo título': (browser) => {
        let movie = browser.page.movie()
        movie 
            .setValue('@searchInput',movieData.title)
            .click('@searchIcon')
    },
    'Então o título buscado deve ser exibido na lista': (browser) => {
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@tr',10000)
            .expect.elements('@tr').count.to.equal(1) // espero que tenha apenas 1 tr para essa busca, finaliza o contexto do browser, o que vier dps n vai funcionar, tem que chamar o contexto dnv
            
        movie.assert.containsText('@tr',movieData.title) // tive que chamar movie de novo, pq o expect não retorna o browser, ele encerra, ai tem que chamar de novo
    }
}