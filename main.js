
  var config = {
    apiKey: "AIzaSyAsqUczUBn1o6PM3nRbw1MHjvh3IA0D520",
    authDomain: "fir-test-6e774.firebaseapp.com",
    databaseURL: "https://fir-test-6e774.firebaseio.com",
    storageBucket: "fir-test-6e774.appspot.com",
    messagingSenderId: "232044031474"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  
    var points = document.getElementById('points');
    firebase.database().ref('reviews/' + 1).once('value').then(function(snapshot) {
      var username = snapshot.val().rating;
      points.innerHTML = username;
    });
$("#upvote").click(function()
{
   var id = 1;
   temp = points.innerHTML;
   temp++;
   points.innerHTML = temp;
   db.ref('reviews/' + id).set({
       rating: temp,
   });
});

$("#downvotet").click(function()
{
   var id = 1;
   temp = points.innerHTML;
   temp--;
   points.innerHTML = temp;
   db.ref('reviews/' + id).set({
       rating: temp,
   });
});
