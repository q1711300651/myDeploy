pipeline {
  agent any
  stages {
    stage('git clone') {
      steps {
        echo 'start'
        sh '''
git clone git@github.com:q1711300651/myDeploy.git'''
        sh 'man clean'
      }
    }
    stage('print end') {
      steps {
        echo 'end'
      }
    }
  }
}