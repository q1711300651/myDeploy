pipeline {
  agent any
  stages {
    stage('first test') {
      steps {
        echo 'first test'
      }
    }
    stage('first test shell') {
      steps {
        sh '''echo "first test shell";
ls;
pwd;
cd {WORKSPACE};'''
      }
    }
    stage('second test') {
      steps {
        echo 'second test'
      }
    }
  }
}