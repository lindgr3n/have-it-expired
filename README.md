# Have It Expired
Helping you to keep track on things that have an expire date!

## What is this solving
Im so bad to remember when something is about to expire.
E.g my commute card that is valid for 30 days, its always a suprise when the conductor says sry this card have expired. :bummer:

## Background
This is my first Vue application so if im doing something wrong or something I could improve please send a PR or create a issue :)

## What is the stack?
Created with Vue, Vuex, Vuetify and Firebase
Setup with with @vue/cli

## To run local
```
$ git clone git@github.com:lindgr3n/have-it-expired.git
$ cd have-it-expired
$ git yarn
```
Create .env file. Get your specific firebase values from firebase and add it in the env file
```
VUE_APP_FIREBASE_PROJECTID=<YOUR_PROJECTID>
VUE_APP_FIREBASE_KEY=<YOUR_FIREBASEKEY>
VUE_APP_FIREBASE_MESSAGESENDERID=<YOUR_MESSAGESENDERID>
```

## Dependencies
* firebase
* moment
* vue
* vue-router
* vuetify
* vuex