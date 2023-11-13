# automation


## how to run 

```sh
$ npm i
$ npm run wdio / npm test
```
## Report info

```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 119.0.6045.124 windows #0-0] Running: chrome (v119.0.6045.124) on windows
[chrome 119.0.6045.124 windows #0-0] Session ID: 9470b9f571e20144b5a3ef3926268c86
[chrome 119.0.6045.124 windows #0-0]
[chrome 119.0.6045.124 windows #0-0] » \test\specs\test.e2e.js
[chrome 119.0.6045.124 windows #0-0] blaze demo application
[chrome 119.0.6045.124 windows #0-0]    ✓ should sign up user
[chrome 119.0.6045.124 windows #0-0]    ✓ should log in
[chrome 119.0.6045.124 windows #0-0]    ✓ should add laptop to cart
[chrome 119.0.6045.124 windows #0-0]    ✓ cart should contain items
[chrome 119.0.6045.124 windows #0-0]    ✓ should log out
[chrome 119.0.6045.124 windows #0-0]
[chrome 119.0.6045.124 windows #0-0] 5 passing (25.4s)
```
    
## Notas
 como parte de un Ci/Cd es desable ejecutar estos test remplazando el driver de chrome por un de headless pues no necesita de un escritorio o manejadro de ventanas.
`