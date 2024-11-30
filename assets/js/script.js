let fuhadShiblu_ErrMsg        = document.querySelector('.fuhadShiblu_ErrMsg')
let fuhadShiblu_inputBoxMain  = document.querySelector('.fuhadShiblu_inputBoxMain')
let fuhadShiblu_input         = document.querySelector('.fuhadShiblu_input')
let fuhadShiblu_button        = document.querySelector('.fuhadShiblu_button')
let fuhadShiblu_resultBoxMain = document.querySelector('.fuhadShiblu_resultBoxMain')

fuhadShiblu_button.addEventListener('click' , (e)=>{
     e.preventDefault()
     if(fuhadShiblu_input.value == ''){
          fuhadShiblu_ErrMsg.innerHTML = 'Please enter a Todo'
     }else{
          const fuhadShiblu_task = fuhadShiblu_input.value
          let isDuplicate = false;
    const tasks = fuhadShiblu_resultBoxMain.querySelectorAll('.fuhadShiblu_inpResult');
    tasks.forEach(task => {
        if (task.value.trim() === fuhadShiblu_task) {
            isDuplicate = true;
          }
    });
     if (isDuplicate) {
        fuhadShiblu_ErrMsg.innerHTML = 'This task already exists!';
        return;
    }else if(!/^[a-zA-Z\s]+$/.test(fuhadShiblu_task)) {
     fuhadShiblu_ErrMsg.innerHTML = 'Numbers and Symbols are not allowed';
     return;
     }else {
        fuhadShiblu_ErrMsg.innerHTML = ''; // Clear error message if no duplicates
    }
          fuhadShiblu_input.value = ''
          //========== Tags
          let fuhadShiblu_inputBoxResult = document.createElement('div')
          let fuhadShiblu_inpResult = document.createElement('input')
          let fuhadShiblu_btns = document.createElement('div')
          let fuhadShiblu_btns1 = document.createElement('button')
          let fuhadShiblu_btns2 = document.createElement('button')
          let plus = document.createElement('i')
          let del = document.createElement('i')
          //========== Childs
          fuhadShiblu_resultBoxMain.appendChild(fuhadShiblu_inputBoxResult)
          fuhadShiblu_inputBoxResult.appendChild(fuhadShiblu_inpResult)
          fuhadShiblu_inputBoxResult.appendChild(fuhadShiblu_btns)
          fuhadShiblu_btns.appendChild(fuhadShiblu_btns1)
          fuhadShiblu_btns.appendChild(fuhadShiblu_btns2)
          fuhadShiblu_btns1.appendChild(plus)
          fuhadShiblu_btns2.appendChild(del)
          //========== Classes
          fuhadShiblu_inputBoxResult.classList.add('fuhadShiblu_inputBoxResult')
          fuhadShiblu_inpResult.classList.add('fuhadShiblu_inpResult')
          fuhadShiblu_btns.classList.add('fuhadShiblu_btns')
          fuhadShiblu_btns1.classList.add('fuhadShiblu_btns1')
          fuhadShiblu_btns2.classList.add('fuhadShiblu_btns2')
          plus.classList.add('fa-solid')
          plus.classList.add('fa-pen-to-square')
          del.classList.add('fa-solid')
          del.classList.add('fa-trash')
          //========== Contents
          fuhadShiblu_inpResult.placeholder = 'Enter your task here...'
          fuhadShiblu_inpResult.value = fuhadShiblu_task
          //========== Attribute
          fuhadShiblu_inpResult.setAttribute('readonly' , 'readonly')

          del.addEventListener('click' , (e)=>{
               e.preventDefault()
               fuhadShiblu_inputBoxResult.remove()
          })
          plus.addEventListener('click' , (e)=>{
               if (fuhadShiblu_inpResult.hasAttribute('readonly')) {
                    fuhadShiblu_inpResult.removeAttribute('readonly'); // Make editable
                    fuhadShiblu_inpResult.focus(); // Set focus on the input field
                    plus.classList.remove('fa-pen-to-square'); // Change icon to indicate edit mode
                    plus.classList.add('fa-floppy-disk'); // Replace with a check icon
                } else {
                    fuhadShiblu_inpResult.setAttribute('readonly', 'readonly'); // Make readonly
                    plus.classList.remove('fa-floppy-disk'); // Revert back to pen icon
                    plus.classList.add('fa-pen-to-square');
                }
          })
     }
})