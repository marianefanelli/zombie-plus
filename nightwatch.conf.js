require('babel-core/register') // falando que vai trabalhar com ES6 agora
require('geckodriver')
const chromeDriver = require('chromedriver'); // importando o chromedriver que esta no nosso projeto

const testUrl = 'http://localhost:5000'
const defaultTimeOut = 15000

module.exports = {
  src_folders: ['tests'],  //pastas onde contém os testes automatizados, ele aceita um array de string
    // toda propriedade é separada por virgula , É MUITO IMPORTANTE, se não da erro de sintaxe
    
  page_objects_path: './pages',
  globals_path: './hooks/globals.js',  //executa para todos os arquivos de teste
    
    // Definindo o motor de execução, o Nightwatch permite trabalhar tanto com o selenium quanto com o 
    // Webdriver puro
    // Inicialmente vamos usar o webdriver puro:
  webdriver: {
    start_process: true, // startar o processo
  },


  test_settings: {
    default: { // onde vamos definir o padrão do teste, exemplo navegador padrão p execução do teste, etc
      launch_url:testUrl, //url guardada na constante testUrl
      globals: {
        waitForConditionTimeout: defaultTimeOut // valor guardado na constante dafaultTimeOut
      },
      webdriver:{
        server_path: chromeDriver.path, //caminho que o driver está instalado
        port: 9515 // porta padrão
      },
      desiredCapabilities: { // onde vamos defenir os atributos que serão padrao, como browser etc
        browserName: "chrome" //navegador padrão
      }
    },

    headless: {
      launch_url:testUrl, 
      globals: {
        waitForConditionTimeout: defaultTimeOut 
      },
      webdriver:{
        server_path: chromeDriver.path, 
        port: 9515 
      },
      desiredCapabilities: { 
        browserName: "chrome",
        chromeOptions: {
          w3c:false,
          args: ['--headless','--no-sandbox']
        } 

      }
    },

    firefox: {
      launch_url:testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeOut
      },
      webdriver:{
        server_path: '.\\node_modules\\.bin\\geckodriver.cmd', //geckodriver n consegue acessar o atributo path, tem q passar o endereço
        port: 4444
      },
      desiredCapabilities: { 
        browserName: "firefox",
        acceptInsecureCerts:true
      }
    },

    stage: {
      launch_url: "http://stage.zombie.plus.com.br" //exemplo
      // configurações
    }

  }


}