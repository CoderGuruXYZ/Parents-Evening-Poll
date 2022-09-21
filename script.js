var yes = 0;
var no = 0;

var dataRef = firebase.database().ref('data');
dataRef.on('value', (snapshot) => {
    const data = snapshot.val();
    all = data;

    yes = parseInt(all.yes);
    no = parseInt(all.no);
});

$("#yes").on("click", function() {
    yes++;

    firebase.database().ref('yes').set({yes});
});

$("#no").on("click", function() {
    no++;

    firebase.database().ref('no').set({no});
});