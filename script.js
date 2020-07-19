function progress(){
	var percent = document.getElementById('percentCount');
	var prg = document.getElementById('progress');
	var counter = 0;
	var progress = 0;
	var id = setInterval(frame, 50);

	function frame(){
		if (progress >= 500 && counter >= 100) {
			clearInterval(id);
		}else{
			progress += 5;
			console.log(progress);
			counter += 1;
			prg.style.width = progress + 'px';
			percent.innerHTML = counter + '%'
		}
	}
}

progress();