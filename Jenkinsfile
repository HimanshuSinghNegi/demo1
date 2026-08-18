pipeline {
    agent any
    
    environment {
     DOCKER_IMAGE = 'himanshu12negi/himanshusinghnegi:latest'
    }

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
                sh 'docker build -t "$DOCKER_IMAGE" .'
            }
        }
	stage('Docker Push'){
	     steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" \
                            --password-stdin

                        docker push "$DOCKER_IMAGE"
                    '''
                }
            }
	}

    }
}
