// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyDqso4LMd_RWyl0ToyOezR36qGccqm6r8o",
    authDomain: "nattapong-18305.firebaseapp.com",
    databaseURL: "https://nattapong-18305.firebaseio.com",
    projectId: "nattapong-18305",
    storageBucket: "nattapong-18305.appspot.com",
    messagingSenderId: "909634716989"
    
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});