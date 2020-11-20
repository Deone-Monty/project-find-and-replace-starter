console.log("Deone");


let findInput = document.querySelector(".find-input")
let replaceInput = document.querySelector(".replace-input")
let replaceAllButton = document.querySelector(".replace-all-button")
let findValue = findInput.nodeValue;





// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
let rowElements = document.querySelectorAll(".row")


    
// When you call the function belwo, it will get and return an INNER ARRAY
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
    let replaceValue = replaceInput.nodeValue;

    for(let i = 0; i < rowElements.length; i++) {

        let cells = getCellElements(rowElements[i])

        // Write a nested loop which loops over the array of cell elements.

        for(let j = 0; j < cells.length; j++) {

       


console.log(cells[j].innerHTML);

            if(cells[j].innerHTML.includes(findInput.value)){
                // console.log("j");
            }
            if(cells[j].innerHTML.replace(replaceInput.value)) {
                // console.log("j");
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
