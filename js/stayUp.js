var firebaseConfig = {
    apiKey: "AIzaSyCuI9p--uQFbg6mmm-skoH1eLKiGMTT764",
    authDomain: "e-cell-iith.firebaseapp.com",
    databaseURL: "https://e-cell-iith.firebaseio.com",
    projectId: "e-cell-iith",
    storageBucket: "e-cell-iith.appspot.com",
    messagingSenderId: "796712758296",
    appId: "1:796712758296:web:f8eccb20bb876292dce76d",
    measurementId: "G-Y2S58PKNF9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();


function add_data() {
    const addemail = document.getElementById('add');
    console.log(addemail.value);
    db = db.collection("esummit").doc(addemail.value);
    db.set({
        email: addemail.value,
    }).then(() => {
        addemail.value = "";
        window.alert("Email has been recorded");
    });
}