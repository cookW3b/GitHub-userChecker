'use strict'
const img = document.querySelector('#user__av');
const btnRet = document.querySelector('#btn__ret');

setTimeout(getName, 0);
async function getName(){
	btnRet.addEventListener('click', () => {
		location.href = 'main.html';
	})
	let res = await fetch('http://localhost:3000/requests');
	let date = await res.json();
	let userName = await date.userName;

	let user = await fetch(`https://api.github.com/users/${userName}`);
	let dateUser = await user.json();

	img.src = dateUser.avatar_url;

	await createElem(userName, dateUser.public_repos, dateUser.followers, dateUser.created_at);
}

function createElem(name, amount__rep, followers, date){
	let namePage = document.createElement('span');
	namePage.setAttribute('id', 'name__page');
	
	let link = document.createElement('a');
	link.href = `https://github.com/${name}`;
	link.textContent = name;
	namePage.textContent = `User name: `;
	namePage.appendChild(link);

	let amRep = document.createElement('span');
	amRep.setAttribute('id', 'am__rep');
	amRep.textContent = `Amount repositories: ${amount__rep}`;

	let fllwrs = document.createElement('span');
	fllwrs.setAttribute('id', 'am_foll');
	fllwrs.textContent = `Followers: ${followers}`;

	let dateCrt = document.createElement('span');
	dateCrt.setAttribute('id', 'date_crt');
	dateCrt.textContent = `Date creating: ${date}`;


	let dateBlck = document.createElement('div');
	dateBlck.setAttribute('class', 'date__block');

	dateBlck.appendChild(namePage);
	dateBlck.appendChild(amRep);
	dateBlck.appendChild(fllwrs);
	dateBlck.appendChild(dateCrt);

	const cont = document.querySelector('.container');
	cont.appendChild(dateBlck);

}
