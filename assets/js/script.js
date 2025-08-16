document.addEventListener('contextmenu' , (e)=>{
    e.preventDefault()
    alert('Right Click has been blocked')
})

const fuhadShiblu_inp           = document.querySelector('.fuhadShiblu_inp');
const fuhadShiblu_btn           = document.querySelector('.fuhadShiblu_btn');
const fuhadShiblu_err           = document.querySelector('.fuhadShiblu_err');
const fuhadShiblu_toDoRsltMain  = document.querySelector('.fuhadShiblu_toDoRsltMain');
const fuhadShiblu_rsltInp       = document.querySelector('.fuhadShiblu_rsltInp');

fuhadShiblu_btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(fuhadShiblu_inp.value == ''){
        fuhadShiblu_err.innerHTML   = 'Please enter a To Do'
    }else{
        fuhadShiblu_err.innerHTML   = ''
        //===== Creating Tags =====//
        let fuhadShiblu_toDoRsltInp = document.createElement('div')
        let fuhadShiblu_rsltInp     = document.createElement('input')
        let fuhadShiblu_circle      = document.createElement('button')
        let fuhadShiblu_edit        = document.createElement('button')
        let fuhadShiblu_del         = document.createElement('button')
        //===== Creating AppendChild =====//
        fuhadShiblu_toDoRsltMain.appendChild(fuhadShiblu_toDoRsltInp)
        fuhadShiblu_toDoRsltInp.appendChild(fuhadShiblu_rsltInp)
        fuhadShiblu_toDoRsltInp.appendChild(fuhadShiblu_circle)
        fuhadShiblu_toDoRsltInp.appendChild(fuhadShiblu_edit)
        fuhadShiblu_toDoRsltInp.appendChild(fuhadShiblu_del)
        //===== Add ClassList =====//
        fuhadShiblu_toDoRsltInp.classList.add('fuhadShiblu_toDoRsltInp')
        fuhadShiblu_rsltInp.classList.add('fuhadShiblu_rsltInp')
        fuhadShiblu_circle.classList.add('fuhadShiblu_circle')
        fuhadShiblu_edit.classList.add('fuhadShiblu_edit')
        fuhadShiblu_del.classList.add('fuhadShiblu_del')
        //===== Add Content =====//
        fuhadShiblu_edit.innerHTML  = '<i class="fa-solid fa-pen-to-square"></i>'
        fuhadShiblu_del.innerHTML   = '<i class="fa-solid fa-trash"></i>'
        fuhadShiblu_rsltInp.value   = fuhadShiblu_inp.value
        //===== Set Attribute =====//
        fuhadShiblu_rsltInp.setAttribute('readonly' , 'readonly')
        fuhadShiblu_inp.value   = ''
        //===== Delete To-Do =====//
        fuhadShiblu_del.addEventListener('click' , (e)=>{
            e.preventDefault()
            fuhadShiblu_toDoRsltInp.remove()
        })
        //===== Edit To-Do =====//
        fuhadShiblu_edit.addEventListener('click' , (e)=>{
            e.preventDefault()
            if(fuhadShiblu_edit.innerHTML == '<i class="fa-solid fa-pen-to-square"></i>'){
                fuhadShiblu_edit.innerHTML  = '<i class="fa-solid fa-floppy-disk"></i>'
                fuhadShiblu_edit.style      = 'color:yellow'
                fuhadShiblu_rsltInp.removeAttribute('readonly' , 'readonly')
            }else{
                fuhadShiblu_edit.innerHTML  = '<i class="fa-solid fa-pen-to-square"></i>'
                fuhadShiblu_edit.style      = 'color:#78C841'
                fuhadShiblu_rsltInp.setAttribute('readonly' , 'readonly')
            }
        })
        fuhadShiblu_circle.addEventListener('click' , (e)=>{
            e.preventDefault()
            if(fuhadShiblu_circle.innerHTML == ''){
                fuhadShiblu_circle.innerHTML    = '<i class="fa-solid fa-check"></i>'
                fuhadShiblu_circle.style        = 'color:#fff;font-size:15px;border:1px solid #78C841;background:#78C841'
                fuhadShiblu_rsltInp.style       = 'text-decoration:line-through;color:red'
            }else{
                fuhadShiblu_circle.innerHTML    = ''
                fuhadShiblu_circle.style        = 'border:1px solid #fff'
                fuhadShiblu_rsltInp.style       = 'text-decoration:none;color:#fff'
            }
        })
    }
})