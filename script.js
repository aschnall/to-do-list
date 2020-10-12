//Variables
const button = document.getElementById('add');


//Functions

//Creates task and resets input value
function createTask() {
	let task = document.getElementById('input').value;
	if(task.length > 0){
		let item = document.createElement('li');
		item.textContent = `${task}`;
		document.getElementById('list').appendChild(item);
		let check = document.createElement('INPUT');
		check.setAttribute('type','checkbox');
		item.prepend(check);
		check.addEventListener('click',crossTask);
		let span = document.createElement('SPAN');
		span.textContent = 'X';
		span.classList.add('delete');
		item.appendChild(span);
		span.addEventListener('click', deleteTask)
	} else {
		alert('Please Enter a Task')
	}
	document.getElementById('input').value = '';

}

// Crosses off task when user hits the checkbox or uncrosses when they uncheck
function crossTask(event) {
	event.target.parentElement.classList.toggle('strike')
}

//Deletes task when user clicks the delete button
function deleteTask(event) {
	event.target.parentElement.remove();
}



//Event Listeners

button.addEventListener('click', createTask);

document.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		createTask();
	}
});



