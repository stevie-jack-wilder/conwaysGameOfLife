//create rows and columns

const rows = 40
const cols = 40

//create 1D arrays
let currGen = [rows]
let nextGen = [rows]

//create 2D array
function createGenArrays () {
    for (let i = 0; i < rows; i++) {
        currGen[i] = newArray(cols)
        nextGen[i] = newArray(cols)
    }
}


//Initially, all cell values are 0 or dead. 1 will be alive. 
function initGenArrays() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
        }
    }
}

 //create a board using a 2D array of rows and cols.
function createWorld() {

    //querySelector returns the first element in the document, and matches the specified selector or group of selectors. If no match, null is returned.
    let world = document.querySelector('#world')

    //createElement(tagNameIsString[, options]) creates the HTML element specified by tagName or an HTMLUnknownElement if not recognised.
    let tbl = document.createElement('table')
    
    //.setAttribute(name, value) sets the value of an attribute. If it exists, value updated. New - added with name and value.
    tbl.setAttribute('id', 'worldgrid')
    
for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td')

            //This allows us to keep track of each cell, using 'i_j'. The upper left corner is 0_0
            cell.setAttribute('id', i + '_' + j)

            //This adds a class of 'dead' to each cell. It can be changed to 'alive'. 
            cell.setAttribute('class', 'dead')
            
            //This initiates the game via an eventListener
            cell.addEventListener('click', cellClick)

            //appendChild appends a node as the last child of a node
            tr.appendChild(cell)
        }
        tbl.appendChild(tr)
    }   
    world.appendChild(tbl)
}

function cellClick() {
    let loc = this.id.split("_")
    let row = Number(loc[0]) //Retrieves i
    let col = Number(loc[1]) //Retrieves j

    //Toggles cell alive or dead
    if (this.className ==='alive') {
        this.setAttribute('class', 'dead')
        currGen[row][col] = 0 //Value of 0 is dead
    } else {
        this.setAttribute('class', 'alive')
        currGen[row][col] = 1 //Value of 1 is alive
    }
}

window.onload=()=>{
    createWorld() //The visual table of a 2D array
    createGenArrays() //current and next gen
    initGenArrays() //Set all array cells to 0 or dead
}

//draw this out