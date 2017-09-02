#!/usr/bin/env bash

#备份
#声明备份目录
descPath=${JENKINS_HOME}/bak
mkdir ${descPath}

echo '开始备份'
cd ${WORKSPACE}/target
cp *.jar descPath


#部署
echo '开始部署'
java -jar myDeploy*.jar
