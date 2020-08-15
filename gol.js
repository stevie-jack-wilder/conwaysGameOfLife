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

    //Return first el and match the specified selector(s). No match = null
    let world = document.querySelector('#world')

    //(tagNameIsString[, options]) create el by tagName, which is a string.
    let tbl = document.createElement('table')
    
    //(name, value) set val of an attr. If it exists, value updated. New - added.
    tbl.setAttribute('id', 'worldgrid')
    
for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td')

            //Keep track of each cell, using 'i_j'. The upper left corner is 0_0
            cell.setAttribute('id', i + '_' + j)

            //Add a class of 'dead' to each cell. It can be changed to 'alive'. 
            cell.setAttribute('class', 'dead')
            
            //Initiate the game via an eventListener
            cell.addEventListener('click', cellClick)

            //Append a node as the last child of a node
            tr.appendChild(cell)
        }
        tbl.appendChild(tr)
    }   
    world.appendChild(tbl)
}

function cellClick() {
    let loc = this.id.split("_")
    let row = Number(loc[0]) //Retrieve i
    let col = Number(loc[1]) //Retrieve j

    //Toggles cell alive or dead
    if (this.className ==='alive') {
        this.setAttribute('class', 'dead')
        currGen[row][col] = 0 //Value of 0 is dead
    } else {
        this.setAttribute('class', 'alive')
        currGen[row][col] = 1 //Value of 1 is alive
    }
}


//Ensure we are never looking out of bounds, aka, a negative number as a cell position.
//Current row and column will never be less than 0.
function getNeighbourCount(row, col) {
    let count = 0
    let nrow =Number(row)
    let ncol = Number(col)

    //Ensure we are not on the first row
    if (nrow - 1 >= 0) {
    // Check top neighbour
    if (currGen[nrow - 1][ncol] == 1)
        count++    
    }

    //Ensure not in the first cell
    if (nrow - 1 >= 0 && ncol - 1 >= 0) {
    // Check upper left neighbour
    if (currGen[nrow - 1][ncol - 1] == 1)
        count++
    }

    //Ensure not on first col
    if (ncol - 1 >= 0) {
    //Check left neighbour
    if (currGen[nrow][ncol + 1] == 1)
        count++
    }

    //Ensure not on bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
    //Check bottom left neighbour
    if (currGen[nrow + 1][ncol - 1] == 1)
        count++
    }

    //Ensure not on last row
    if (nrow + 1 < rows) {
    //Check bottom neighbour
    if (currGen[nrow + 1[ncol] == 1])
    count++
    }
    return count
}

//Loop through each cell and get neighbour count.
//Determine if cell stays alive, comes alive, stays dead, or dies. 

function createNextGen() {
    for (row in currGen) {
        for (col in currGen[row]) {
            let neighbours = getNeighbourCount(row, col)

            //Check the rules!!!!
            //If cell is ALIVE, aka 1 and...: 
            if (currGen[row][col] == 1) {
                if (neighbours < 2) {
                    nextGen[row][col] = 0 //... cell has less than 2 neighbours, it dies.
                } else if (neighbours == 2 || neighbours == 3) {
                    nextGen[row][col] = 1 //... cell has 2 or 3 neighbours, it lives.
                } else if (neighbour > 3) {
                    nextGen[row][col] = 0 //... cell has more than 3 neighbours, it dies.
                }
            //If cell is DEAD, aka 0, birth a new cell
            } else if (currGen[row][col] == 0) {
                if (neighbours == 3) {
                    nextGen[row][col] = 1 
                }

            }
        }
    }
}

window.onload=()=>{
    createWorld() //The visual table of a 2D array
    createGenArrays() //current and next gen
    initGenArrays() //Set all array cells to 0 or dead
}

//draw this out

