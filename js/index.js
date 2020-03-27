var submit;
var counter;
function init(){
    submit = document.querySelector(".submit");
    counter=0;
    createMessage();

    }

init();


function createMessage(){

    submit.addEventListener( 'click' , (event) =>{

        event.preventDefault();

        var name = document.querySelector('.item');
    
        console.log(name);
        let container = document.querySelector(".results ul");

        container.innerHTML+=`
        
            <li class="list" id="list-${counter}">
                <p class="list-text" id="name-${counter}">${name.value}</p>
                <div class="buttons">
                    <button onclick="checkList(${counter})" id="check-${counter}">check</button>
                    <button onclick="deleteList(${counter})">delete</button>
                </div>
            </li>
        
        
        
        `;
        counter++;
    
    
       });

}
function checkList(idNumber){
    let item = document.getElementById("check-"+idNumber);
    let text = document.getElementById("name-"+idNumber);

    if(text.classList.contains('check')){
        text.classList.remove('check');
    }
    else{
        text.classList.add('check');
    }


}
function deleteList(idNumber){
    let item = document.getElementById("list-"+idNumber);
    let list = document.getElementById("list-all");

    list.removeChild(item);

}

