console.log("Deone");

// Requirements
// Add a click event listener to the replaceAllButton.
// On click but outside of a loop, assign the values of the two input textboxes ( findInput and replaceInput), so that you are only retrieving these values once per click.
// Write a loop which loops over the rowElements array (which is already provided in the starter code).
// Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.
// Write a nested loop which loops over the array of cell elements.
// For each cell element, check if a cell contains the user-provided search string. Use the string method includes().
// If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.
// In all your loops, use distinct counters like "i" and "j".


let findInput = document.querySelector(".find-input")
let replaceInput = document.querySelector(".replace-input")
let replaceAllButton = document.querySelector(".replace-all-button")
let findValue = findInput.Value;





// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.

let rowElements = document.querySelectorAll(".row")


    
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
    

}


// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function() {
    let findValue = findInput.value;
    let replaceValue = replaceInput.value;

    

    for(let i = 0; i < rowElements.length; i++) {
        // console.log(rowElements[i])

        let cellElements = getCellElements(rowElements[i]);

        // Write a nested loop which loops over the array of cell elements.

        for(let j = 0; j < cellElements.length; j++) {


        
            if(cellElements[j].innerHTML.includes(findValue)) {
                cellElements[j].innerHTML = cellElements[j].innerHTML.replace(findValue, replaceValue)
            }
            
 

        }
        
        

    }
        


})



// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
