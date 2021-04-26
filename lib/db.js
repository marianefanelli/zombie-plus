import {Pool} from 'pg' // Pool objeto que importa e faz a conexão com o banco postgres e 'pg' é a biblioteca

//conexão com banco de dados
const connectionString = 'postgresql://postgres:qaninja@localhost:5432/zombieplus'
const pool = new Pool({connectionString: connectionString}) // tenho um objeto connectionString e passo a constante connectionString

//exportar uma função que vai remover o filme pelo titulo - exportar daqui pro banco de dados
export default { // não usamos o module.exports, usamos o export default pq é a forma de fazer export usando ES6 puro
    // como aqui não vamos usar nd de nightwatch, só estamos criando uma biblioteca p estender o projeto, podemos usar ES6 puro, nos testes usamos module.export para garantir
    removeByTitle: (title) => {
        return new Promise((resolve,reject) => { //criando uma promessa
            pool
                .query(`DELETE FROM public.movies where title = '${title}';`)
                .then(res => {
                    resolve(res) // se promessa for cumprida devolve o resultado da promessa
                }) //callback, pega a resposta por uma função
                .catch(e => reject(e.stack)) //captura o erro e mostra o trajeto do erro
        })
    },
    insertMovie:(movie) => {
        let query = `INSERT INTO public.movies(
            title,status,year,release_date,"cast",overview,cover,created_at,updated_at)
            VALUES('${movie.title}','${movie.status}','${movie.year}','${movie.releaseDate}','{${movie.cast}}',
            '${movie.plot}','${movie.cover}', current_timestamp, current_timestamp)` //currente_timestamp = pega a data do sistema
        
        return new Promise((resolve,reject) => { 
            pool
                .query(query)
                .then(res => {
                    resolve(res) 
                }) 
                .catch(e => reject(e.stack)) 
        })
    }    
}