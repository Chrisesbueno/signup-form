const inputs = document.querySelectorAll('.form .input');
const button = document.getElementById('button');
const verified = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const email = document.querySelector('.email');

console.log(inputs)
button.addEventListener('click', (e) => {
    e.preventDefault()
    let total = 4
    inputs.forEach(element => {
        if (element.children[0].value == '') {
            element.classList.add('active');
        } else  {
            element.classList.remove('active');
            total--;
        }
        console.log(total)
    });
    if (email.children[0].value.match(verified)) {
        email.classList.remove('active');
        total--;
        if (total == 0) {
            alert('Succesfuly!');
            inputs.forEach(element => {
                element.children[0].value = '';
            });
            email.children[0].value = '';
        }
    } else {
        email.classList.add('active');
    }
})

