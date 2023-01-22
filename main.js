window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const content_el = document.createElement('div');
        content_el.classList.add('content');

        task_el.appendChild(content_el);


        const input_el = document.createElement('input');
        input_el.classList.add('text');
        input_el.type = 'text';
        input_el.value = task;

        input_el.setAttribute('readonly','readonly');
        content_el.appendChild(input_el);

        const actions_el = document.createElement('div');
        actions_el.classList.add('actions');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText = 'Edit';

        const delete_el = document.createElement('button');
        delete_el.classList.add('delete');
        delete_el.innerText = 'Delete';

        actions_el.appendChild(edit);
        actions_el.appendChild(delete_el);
        
        task_el.appendChild(actions_el);
        list.appendChild(task_el);

        input.value = '';

        edit.addEventListener('click', (e) => {
            if (edit.innerText.toLowerCase() == "edit") {
                edit.innerText = "Save";
                input_el.removeAttribute("readonly");
                input_el.focus();
                
            } else {
                edit.innerText = "Edit";
                input_el.setAttribute("readonly","readonly");
            }
        });

        delete_el.addEventListener('click', (e) => {
            list.removeChild(task_el);

        });


    });
});