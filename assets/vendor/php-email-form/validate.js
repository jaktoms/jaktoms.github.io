/**
* PHP Email Form Validation - v3.1
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      
      let loadingEl = thisForm.querySelector('.loading');
      let errorEl = thisForm.querySelector('.error-message');
      let sentEl = thisForm.querySelector('.sent-message');

      if (loadingEl) loadingEl.classList.add('d-block');
      if (errorEl) errorEl.classList.remove('d-block');
      if (sentEl) sentEl.classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error)
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    let loadingEl = thisForm.querySelector('.loading');
    let sentEl = thisForm.querySelector('.sent-message');

    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    // Disable external captchas for smooth AJAX submission
    object['_captcha'] = 'false';
    let json = JSON.stringify(object);

    fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(response => {
      if( response.ok ) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      if (loadingEl) loadingEl.classList.remove('d-block');
      if (data.success === 'true' || data.success === true) {
        if (sentEl) sentEl.classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data.message ? data.message : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    let loadingEl = thisForm.querySelector('.loading');
    let errorEl = thisForm.querySelector('.error-message');
    if (loadingEl) loadingEl.classList.remove('d-block');
    if (errorEl) {
      errorEl.innerHTML = error;
      errorEl.classList.add('d-block');
    }
  }

})();
