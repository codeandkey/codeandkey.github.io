// Change to a dark view if it's (probably) dark outside.
// We will define "darkness" as 8pm - 6am

function onLoad() {
    var hours = (new Date).getHours();

    if (hours < 6 || hours >= 20) {
        // Apply dark mode!
        var titles = document.getElementsByClassName('project-title');

        for (var i = 0; i < titles.length; ++i) {
            titles[i].style.color = '#cfcfcf';
        }

        document.body.style.background = '#111111';
        document.body.style.color = '#cfcfcf';
    }
}
