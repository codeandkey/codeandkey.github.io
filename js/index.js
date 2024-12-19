// Change to a dark view if it's (probably) dark outside.
// We will define "darkness" as 8pm - 6am

function onLoad() {
    var hours = (new Date).getHours();
	var dark_mode = true; // (hours < 6 || hours >= 20);

    if (dark_mode) {
        // Apply dark mode!
        var titles = document.getElementsByClassName('project-title');

        for (var i = 0; i < titles.length; ++i) {
            titles[i].style.color = '#cfcfcf';
        }

        document.getElementById('name-box-opague')
            .style
            .background = '#111111';

        var shadow = document.getElementById('name-box-shadow');

        shadow.style.filter = 'brightness(0.07)';
        shadow.style.height = '3em'; // needed for some reason

        document.body.style.background = '#111111';
        document.body.style.color = '#cfcfcf';
    }
}
