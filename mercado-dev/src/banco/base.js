const config = {
    apiKey: "AIzaSyC03if79a2GfeHnz3yit7G_Ey3J89SOgpU",
    authDomain: "mercadodev-ef540.firebaseapp.com",
    databaseURL: "https://mercadodev-ef540.firebaseio.com",
    projectId: "mercadodev-ef540",
    storageBucket: "mercadodev-ef540.appspot.com",
    messagingSenderId: "592892579655"
  };

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base
