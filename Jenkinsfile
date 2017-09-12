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
mvn clean package;
java -jar target/*.jar'''
      }
    }
    stage('second test') {
      steps {
        echo 'second test'
      }
    }
  }
}