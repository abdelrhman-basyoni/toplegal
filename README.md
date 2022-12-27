# Toplegal

## Introduction
this project is about runnning serverless function offline and creating simple endpoints with dynamodb

## Technologies
- expressjs
- serverless 
- nodejs
- javascript
- dynamodb
- winston (for logging)

## Setup
 1- install serverless globally:
 ```
 $ npm install -g serverless
 ```
 2- install dynamodb
  
- you nedd to install java Runtime Engine JRE version 6 or higher according to your os.
      
- run in the project folder 

 ```
 sls dynamodb install
 ```
- or 
        ```
        serverless dynamodb install
        ```
      
3- install dependecies:
  
- run
      ```
      npm install
      ```
      in the project folder
      
4- start the project
```
run serverless offline start
```


