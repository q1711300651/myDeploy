pipeline {
  agent any
  stages {
    stage('') {
      steps {
        parallel(
          "stage1": {
            sh 'echo \'1\''
            sh 'echo \'3\''
            
          },
          "stage5": {
            sh 'echo \'5\''
            
          }
        )
      }
    }
    stage('stage2') {
      steps {
        sh 'echo \'2\''
      }
    }
  }
}