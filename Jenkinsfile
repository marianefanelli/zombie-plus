pipeline{
    agent{
        docker{image "node"} // o agente que vai executar é um agente docker que tenha a imagem node
    }
    stages{
        stage('Build'){
            steps{
                sh "npm install"
            }      
        }
        stage('Tests'){
            steps{
                sh "npm test"
            }
        }
    }
}