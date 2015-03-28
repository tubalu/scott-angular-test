Angular service expample
====================

Prerequisites
---------------------

### Get the code
```
git clone https://github.com/tubalu/scott-angular-test
```
### Install Node js
```
https://nodejs.org/
```
### Install bower
```
npm install -g bower
```

### Install grunt
```
npm install -g grunt-cli
```


### Run the code

Goto the cloned folder, then run command
```
grunt
```
then open web blrowser, put
```
http://localhost:9999
```

Code explain
---------------------

The codes have an express app, it run on port 9999 as web server, which is under
folder server.

the main webpage is server/views/index.html
when you run grunt, the grunt task will copy everything into dist folder. the
express web app will use it as root folder


```
app.html
```
is page content
```
app.js
```
which include testapp.config  and test.app for you to initlize the testapp
module
```
app.less
```
will be compile into css file, and copy to dist folder
```
FinaceService.js
```
will use $http service to retrive currency exchange rate from yahoo api. and
provide a 'convert' function to the modules.js/testapp/controller
```
modules.js
```
main function part
