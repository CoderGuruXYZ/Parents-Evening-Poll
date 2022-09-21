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

    displayWindow();
});

$("#no").on("click", function() {
    no++;

    firebase.database().ref('no').set({no});

    displayWindow();
});

function displayWindow() {
    $(".popup").show();
    $(".overlay").show();

    $(".yes").html("Yes: " + yes);
    $(".no").html("No: " + no);

    window.setTimeout(function() {
        $(".popup").hide();
        $(".overlay").hide();
    }, 3000);
}