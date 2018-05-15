
var buttons = ["aboutme", "education", "experience", "skills", "contact"];
var id = null;
function showTabs(tabs) {
	if (tabs === id) {
	}
	else {
		id = tabs;
		for (var i = 0; i < buttons.length; i++) {
			var but = $('#' + buttons[i])[0];
			if (id === buttons[i]) {
				but.style.display = 'block';
			}
			else
				but.style.display = 'none';
		}
	}		
}

