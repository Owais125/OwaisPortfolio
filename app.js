var firebaseConfig = {
    apiKey: "AIzaSyBHRrgEzos-xSVvMwS6PoiZi4WFZHAyP3w",
    authDomain: "personalportfolio-31b3b.firebaseapp.com",
    databaseURL: "https://personalportfolio-31b3b-default-rtdb.firebaseio.com",
    projectId: "personalportfolio-31b3b",
    storageBucket: "personalportfolio-31b3b.appspot.com",
    messagingSenderId: "433465264204",
    appId: "1:433465264204:web:322ee6ff8f10531486cce9"
  };
  
  // Initialize Firebase
  var frb = firebase.initializeApp(firebaseConfig);
//   console.log(frb)

function addd(){


var email=document.getElementById("email")

var name=document.getElementById("name")

var phone=document.getElementById("phone")

var message=document.getElementById("message")

var obj={
    useremail:email.value,
    username:name.value,
    userphone:phone.value,
    usermessage:message.value,

}

firebase.database().ref("Information").push(obj)


}



