pipeline {
    agent any
    
    environment {
     DOCKER_IMAGE = 'himanshu12negi/himanshusinghnegi'
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
	
	stage('Set Image Tag'){
           steps {
               script {   
                     env.IMAGE_TAG = sh(
		         script: 'git rev-parse --short HEAD',
		         returnStdout:  true
                     ).trim()
		    env.DOCKER_IMAGE = "${env.DOCKER_REPO}:${env.IMAGE_TAG}"
		    echo "Docker images: ${env.DOCKER_IMAGE}" 
              }
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
	stage('Deploy'){
	     steps{
	      sh ''' 
		 docker pull "$DOCKER_IMAGE"

     		 docker stop demo-app || true 
		 docker rm demo-app || true
		
		 docker run -d --name demo-app -p 3000:3000 "$DOCKER_IMAGE" 
		''' 
	     }
	}

    }
}
