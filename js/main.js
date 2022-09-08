'use strict'
const btn__main = document.getElementById('link__main');
const inpt = document.querySelector('#user__name');

async function postReq(){
	
	let user = {
		userName: inpt.value
	}

	let req = await fetch('http://localhost:3000/requests', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(user)
	});
	location.href = 'second.html';	
	
}

btn__main.addEventListener('click', postReq);



