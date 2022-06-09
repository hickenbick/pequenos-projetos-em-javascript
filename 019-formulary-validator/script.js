let validator = {
  handleSubmit: (e) => {
    e.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = validator.checkInput(input);
      if (check !== true) {
        send = false;
        validator.showError(input, check)
      }
    }
    if (send) {
      form.submit();
    }
  },
  checkInput:(input) => {
    let rules = input.getAttribute('data-rules')
    if(rules !== null) {
      rules = rules.split('|')
      for(let k in rules) {
        let rDetails = rules[k].split('=');
        switch(rDetails[0]) {
          case 'required':
            if(input.value == '') {
              return 'Campo não pode ser vazio';
            }
          break;
          case 'min':

          break;
        }
      }
    }
    showError:(input, error) => {
      input.style.borderColor = 'tomato'
    } 
  } 
};

let form = document.querySelector(".validator");
form.addEventListener("submit", validator.handleSubmit);
