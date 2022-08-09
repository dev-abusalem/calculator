let result = document.getElementById('result');
let buttons =Array.from(document.getElementsByClassName('button'));

buttons.map((button)=>{
	button.addEventListener('click', (e)=>{


		switch (e.target.innerText) {
			
			case 'C':
				result.innerText =''
				break;
			case '=':
				try {
					result.innerText = eval(result.innerText)
				} catch(e) {
					result.innerText = "! Error"
				}
				
				break;
			default:
				result.innerText += e.target.innerText
				break;
		}
	})
})
