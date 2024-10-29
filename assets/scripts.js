const popUpKofi = () => {
	const div = (() => {
		const el = document.createElement('div');
		el.className = 'modal';
		el.id = 'kofi';
		return el;
	})();

	const iframe = (() => {
		const el = document.createElement('iframe');
		el.src = 'https://ko-fi.com/lemontron/?hidefeed=true&widget=true&embed=true&preview=true';
		el.title = 'lemontron';
		el.onload = () => document.getElementById('kofi').classList.add('visible');
		return el;
	})();

	div.appendChild(iframe);
	document.body.appendChild(div);
};

document.addEventListener('DOMContentLoaded', function() {
	for (let button of document.getElementsByClassName('btn-kofi')) {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			popUpKofi();
		});
	}
});