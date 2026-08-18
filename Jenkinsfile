pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker') {
            steps {
                sh 'sudo docker build -t node-demo .'
            }
        }

    }
}
