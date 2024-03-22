import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

let btnsClicked = document.querySelectorAll('.btn-notyf')

btnsClicked.forEach(btn => {

    btn.addEventListener('click', function (e) {
        // e.preventDefault();

        let btnText = this.getAttribute('btn-data-text');
        notyfied(btnText);
        // loadUrl(window.location.href, btnText);
    })
});

// async function loadUrl(url, text){
//     let data = {'notyf': text}
//     const response = await fetch(url, data, {
//         headers: {
//             'x-Requested-With': 'XMLHttpRequest'
//         }
//     })

//     if (response.status >= 200 && response.status < 300){
//         notyfied(text);
//         history.pushState({}, '', url);
//     }
//     else{
//         console.error(response);
//     }
// }

function notyfied(btnText) {

    // Create an instance of Notyf
    var notyf = new Notyf({
        duration: 5000,
        position: {
            x: 'right',
            y: 'top'
        },
        types: [
            {
                type: 'success',
                background: 'green',
                icon: false,
                duration: 5000,
                dismissible: true
            },
            {
                type: 'info',
                background: 'blue',
                icon: false,
                duration: 5000,
                dismissible: true
            },
            {
                type: 'warning',
                background: 'orange',
                icon: false,
                duration: 5000,
                dismissible: true
            },
            {
                type: 'error',
                background: 'indianred',
                duration: 5000,
                dismissible: true
            }
        ]
    });

    let messages = document.querySelectorAll('.notyf-message')
   
    
    messages.forEach(message => {

        if (message.getAttribute('data-name') === btnText) {
            const capitalized_btnText = btnText.charAt(0).toUpperCase() + btnText.slice(1)
           
            notyf.open({
                type: btnText,
                message: '<b>'+capitalized_btnText+'</b> - ' + message.innerHTML,
            })
        }
    })
}

