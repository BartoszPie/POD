const button = document.getElementById('btn');
const emailAddress = document.getElementById('email');
const message = document.getElementById('valid-text');
const emptyMessage = document.createTextNode("Oops! Please add your email");
const wrongMessage = document.createTextNode("Oops! Please check your email");
const mailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;




console.log(emailAddress.value.length);

function emailVerification(event) {
    if(emailAddress.value.length === 0) {
        wrongMessage.remove();
        emptyMessage.remove();
        event.preventDefault();
        console.log('hehehe');
        message.appendChild(emptyMessage);
    }

    if(!emailAddress.value.match(mailFormat) && emailAddress.value.length !== 0) {
        wrongMessage.remove();
        emptyMessage.remove();
        event.preventDefault();
        console.log("hahahhaha")
        message.appendChild(wrongMessage);
    }
    else {
        console.log("its working");
    }
}

button.addEventListener('click', emailVerification);

const button1 = document.getElementById('btn1');
const emailAddress1 = document.getElementById('email1');
const message1 = document.getElementById('valid-text1');


function emailVerification1(event) {
    if(emailAddress1.value.length === 0) {
        wrongMessage.remove();
        emptyMessage.remove();
        event.preventDefault();
        console.log('hehehe');
        message1.appendChild(emptyMessage);
    }

    if(!emailAddress1.value.match(mailFormat) && emailAddress1.value.length !== 0) {
        wrongMessage.remove();
        emptyMessage.remove();
        event.preventDefault();
        console.log("hahahhaha")
        message1.appendChild(wrongMessage);
    }
    else {
        console.log("its working");
    }
}

button1.addEventListener('click', emailVerification1);
