//create rows and columns

const rows = 40;
const cols = 40;

//implement 2D array in function
function createWorld() {

    //querySelector returns the first element in the document, and matches the specified selector or group of selectors. If no match, null is returned.
    let world = document.querySelector('#world');

    //createElement(tagNameIsString[, options]) creates the HTML element specified by tagName or an HTMLUnknownElement if not recognised.
    let tbl = document.createElement('table');
    
    //.setAttribute(name, value) sets the value of an attribute. If it exists, value updated. New - added with name and value.
    tbl.setAttribute('id', 'worldgrid');
    
for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement('td')
        //appendChild appends a node as the last child of a node
        tr.appendChild(cell)
        }
        tbl.appendChild(tr)
    }   
    world.appendChild(tbl)
    }
window.onload=()=>{
    createWorld()
}