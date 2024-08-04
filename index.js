
// // function getText() {
// // const textarea = document.getElementById('text_area');
// // const color = document.getElementById('color');
            

// // let newDiv= document.createElement('div');
// // let p= document.createElement('p');
// // p.id='notes';

// // const right_container = document.getElementById('right_container');
// // right_container.appendChild(newDiv); 
// // newDiv.appendChild(p);
// //  newDiv.className='content-1';
// // newDiv.style.width = '400px';   
// // newDiv.style.height = '400px';  
// // newDiv.style.backgroundColor = color;
  

           
           
// // const text = textarea.value;
// // const output = document.getElementById('notes');
// // output.innerHTML=text;

// // }


// function getText() {
//     // Access the textarea and color input elements
//     const textarea = document.getElementById('text_area');
//     const color = document.getElementById('color');
    
//     // Create a new div element
//     let newDiv = document.createElement('div');
//     newDiv.className = 'content-1'; // Assign a class for styling
//     newDiv.style.width = '300px';   
//     newDiv.style.height = '300px';  
//     newDiv.style.backgroundColor = color.value; // Set background color

//     // Create a new p element
//     let p = document.createElement('p');
//     p.id = 'notes'; // Optional: Assign an id

//     // Append the p element to the new div
//     newDiv.appendChild(p);

//     // Append the new div to the container
//     const rightContainer = document.getElementById('right_container');
//     rightContainer.appendChild(newDiv);

//     // Set the text content of the p element
//     p.textContent = textarea.value;
//     // p.innerHTML=textarea.value;
// }


let isResizing = false;
let isDragging = false;


function getText() {

   
    const textarea = document.getElementById('text_area');
    if (textarea.value.trim().length === 0) {
        alert('Please Enter some text');
        return; 
    }
   
    const color = document.getElementById('color');
 let newDiv = document.createElement('div');
    newDiv.className = 'resizable'; // Add class for styling
    newDiv.style.width = '300px';   
    newDiv.style.height = '300px';  
    newDiv.style.backgroundColor = color.value; // Set background color

    
    let p = document.createElement('p');
    p.id = 'notes'; 

    let cross=document.createElement('button');
    cross.textContent='X';
    cross.backgroundColor='blue';
    cross.id='cross';
    newDiv.appendChild(cross);
    newDiv.appendChild(p);
const rightContainer = document.getElementById('right_container');
    rightContainer.appendChild(newDiv);
   
    p.textContent = textarea.value;

    makeResizable(newDiv);
    makeDraggable(newDiv);

    cross.addEventListener('click', () => {
        rightContainer.removeChild(newDiv);
    });
}


function makeResizable(element) {
    const resizer = document.createElement('div');
    resizer.style.width = '10px';
    resizer.style.height = '10px';
    resizer.style.background = '#000';
    resizer.style.position = 'absolute';
    resizer.style.bottom = '0';
    resizer.style.right = '0';
    resizer.style.cursor = 'nwse-resize';
    resizer.style.zIndex = '10'; 

  

    
}


function makeDraggable(element) {
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        if (!isResizing) { // Only drag if not resizing
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
            isDragging = true;

            // Start dragging
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        }
    });

    function drag(e) {
        if (isDragging) {
            element.style.left = e.clientX - offsetX + 'px';
            element.style.top = e.clientY - offsetY + 'px';
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }
}

