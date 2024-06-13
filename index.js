const todo =[];

function Add(){
    const input_element = document.querySelector('.input-fld');
    const name= input_element.value;
    const date_element = document.querySelector('.date');
    const duedate= date_element.value;
     todo.push({
      name,
      duedate}
    );
     console.log(todo);
     input_element.value='';
     render_html();
     
}
function render_html(){
    let thtml='';

    
    for(let i=0; i<todo.length;i++)
        {
          const todobject =todo[i];
          const name=todobject.name;
          const date_element=todobject.duedate;

          const html =`<div>${name}</div>
          <div> ${date_element}</div>
          <div "><button class="red-btn" onclick="todo.splice(${i},1);
          render_html();">delete</button></div>`;
          thtml+=html;
        }
        document.querySelector('.to-do-list').innerHTML=thtml;

}