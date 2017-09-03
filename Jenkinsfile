pipeline {
  agent any
  stages {
    stage('git clone') {
      steps {
        sh 'git \'https://github.com/q1711300651/myDeploy.git/\''
      }
    }
    stage('man clean') {
      steps {
        sh '''sh "mvn clean"
sh "infer -- mvn compile"'''
      }
    }
  }
}