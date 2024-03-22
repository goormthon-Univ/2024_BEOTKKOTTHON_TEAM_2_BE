pipeline {
    agent any
    environment {
        DATABASE_URL = "${env.DATABASE_URL}"
    }
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        //후에 자바 스프링 관련 추가
        //window는 sh -> bat 변경 필요
        stage('Install Dependencies') {
            steps {
                dir('./muckatlist_nest'){
                    script {
                        sh 'touch .env'
                        sh 'echo DATABASE_URL="${DATABASE_URL}" > .env'
                        sh 'cat .env'
                        sh 'npm install'
                        sh 'rm -rf prisma'
                        sh 'npx prisma init --datasource-provider mysql'
                        sh 'npx prisma db pull'
                        sh 'npx prisma generate'
                    }
                }
            }
        }

        stage('Build And Deploy') {
            steps {
                dir('./muckatlist_nest'){
                    script {
                        sh 'npm run start:dev'
                    }
                }
            }
        }
    }
}