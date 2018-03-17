window.firebase = function () {
    var config = {
        apiKey: "AIzaSyAFBPJ1838u-vcaFEmdfSM-jysIacwdzEg",
        authDomain: "firstproject-48dd3.firebaseapp.com",
        databaseURL: "https://firstproject-48dd3.firebaseio.com",
        projectId: "firstproject-48dd3",
        storageBucket: "firstproject-48dd3.appspot.com",
        messagingSenderId: "1081200461666"

    };
    firebase.initializeApp(config);

    return firebase;
}()