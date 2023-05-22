const inputBox=document.querySelector('.input');
const listContainer=document.querySelector('.list-container');

let submit=document.querySelector('.submitter');
submit.addEventListener('click',taskAdder);

function taskAdder(){
    if(inputBox.value==''){
        alert('add a task name first')
    }
    else{
        let li=document.createElement('li');
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerText='\u00d7'
        li.appendChild(span);
    }
    inputBox.value='';
    dataSaver();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        dataSaver();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        dataSaver();
    }

},false);


 function dataSaver()
 {
    localStorage.setItem('data',listContainer.innerHTML)
 }

 function showwer()
 {
    listContainer.innerHTML=localStorage.getItem("data");
 }

 showwer();