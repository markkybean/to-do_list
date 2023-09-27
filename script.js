

document.querySelector("#addTask").addEventListener('click', () => {

 
    if(document.querySelector("#todoInput").value==''){
        alert("Please enter a task!");
    }else if(document.querySelector("#todoInput").value!==''){

        document.querySelector("#taskList").innerHTML+=

        `<div class="container-fluid">
                <li> 
                    <div class="row">
                        <div class="col-10 markk" >
                            
                            <span>${document.querySelector("#todoInput").value}</span>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-danger remove">X</button>
                        </div>
                    </div>
                </li>
            
            <hr>
        </div>`
        document.querySelector("#todoInput").value="";
    }
    const marks = document.querySelectorAll(".markk");
    marks.forEach((markk) => {
        markk.addEventListener("click", (event) => {
            event.target.parentElement.lastElementChild.style = "text-decoration: line-through; font-weight:900; color:gray" ;
            // alert("testing");
        });
    });

    const removes = document.querySelectorAll(".remove");
    removes.forEach((remove) => {
        remove.addEventListener("click", (event) => {
            event.target.closest(".container-fluid").remove();
        });
    });


});

