pipeline {
  agent any
  
  stages {
    stage('login to ecr') {
      when {
        branch "devops"
      }
      steps {
        echo 'logging in ...'
        sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 954086103677.dkr.ecr.us-east-1.amazonaws.com'
        }
      }
    

    stage('building docker image') {
      when {
        branch "devops"
      }
      steps {
        echo 'building ...'
        sh 'docker build -t devops/frontend .'
      }
    }

    stage('tagging image') {
      when {
        branch "devops"
      }
      steps {
        echo 'tagging ...'
        sh 'docker tag devops/frontend:latest 954086103677.dkr.ecr.us-east-1.amazonaws.com/devops/frontend:latest'
      }
    }

    stage('pushing image') {
      when {
        branch "devops"
      }
      steps {
        echo 'pushing to registry ...'
        sh 'docker push 954086103677.dkr.ecr.us-east-1.amazonaws.com/devops/frontend:latest'
      }
    }
  }
  post {
    always {
      echo 'This will always run' 
      echo 'Deploying Recylovision...'
      // sh 'docker compose --project-name Recylovision up -d'
      echo 'Recylovision Deployed'
    }
  }
}