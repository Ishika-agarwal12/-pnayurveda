function myFunction(){
	document.getElementById('loading').style.display = "none";
}

function validation(){
	console.log("hello");
	let user = document.getElementById('userName').value
	let email = document.getElementById('userAddress').value
	let phone = document.getElementById('userPhone').value
	let message = document.getElementById('userFeedback').value

	if((user.length <= 2) || (user.length > 20)){
		document.getElementById('name').innerHTML = " **Username must be between 2 and 20";
		return false;
	}
	if(!isNaN(user)){
		document.getElementById('name').innerHTML = " ** only characters are allowed";
		return false;
	}
	if(email.length <= 0 ){
		document.getElementById('address').innerHTML = " ** email is required";
		return false;
	}
	if(isNaN(phone)){
		document.getElementById('MobNo').innerHTML =" ** Mobile Number must be 10 digits only";
		return false;
	}
	if(phone.length!=10){
		document.getElementById('MobNo').innerHTML =" ** Mobile Number must be 10 digits only";
		return false;

	}
	if(message.length > 30){
		document.getElementById('message').innerHTML = " ** message length should not exceed more than 30 words."
		return false;
	}
}

