let numberOfPeople = 0
let tipPercent = 0
let bill = 0

addEvents()

function addEvents() {
    const percentBtns = document.querySelectorAll("#tip-btn")
    const customBtn = document.getElementById("tip-btn-custom")
    const groupInput = document.getElementById("group-input-id")
    const resetBtn = document.getElementById("reset-btn-id")

    groupInput.addEventListener("keyup", getGroupInput) // listen for group input
    resetBtn.addEventListener("click", resetInputs)

    customBtn.addEventListener("keyup", getCustomInput) // listen for custom tip input

    for(let btn of percentBtns) {
        btn.addEventListener("click", getTipPercent) // listen for perecent btn press
    }
}

function getGroupInput() {
    numberOfPeople = document.getElementById("group-input-id").value // get number of people
    const groupDiv = document.getElementById("group-input-id")
    const errorText = document.querySelector(".error-text")

    groupDiv.classList.remove("error") // remove error msg if present
    errorText.style.display = "none"
    
}

function getCustomInput() {
    const validInputs = checkInputs() // check to make sure bill and number of people have been entered
    tipPercent = document.getElementById("tip-btn-custom").value // get tip perecent entered into custom btn
    tipPercent = tipPercent / 100; // change percent to dec
    if(validInputs) {
        getTip() // calculate tip percent
    }else {
        document.getElementById("tip-btn-custom").value = "" // if inputs are not valid set custom btn back to its original state
    }
}

function getTipPercent(e) {
    const validInputs = checkInputs()
    tipPercent = e.target.value // get percent of button clicked
    tipPercent = tipPercent.substring(0, tipPercent.length - 1) // Remove % sign
    tipPercent = tipPercent / 100; // change percent to dec
    if(validInputs) {
        getTip()
    }
}


function checkInputs() {
    bill = document.getElementById("bill-input-id").value
    numberOfPeople = document.getElementById("group-input-id").value
    const groupDiv = document.getElementById("group-input-id")
    const errorText = document.querySelector(".error-text")

    if(bill && numberOfPeople > 0) { // check if bill and number of people have been filled out
        groupDiv.classList.remove("error")// remove error msg if present
        errorText.style.display = "none"
        return true
    }else if(!numberOfPeople || numberOfPeople === "0") { // if number of people has not been filled out display error msg
        groupDiv.classList.add("error")
        errorText.style.display = "inline"
        return false
    }
}

function getTip() {
    const tipDisplay = document.getElementById("output-data-tip")
    const totalDisplay = document.getElementById("output-data-total")

    let tip = tipPercent * bill / numberOfPeople // calculate tip amount per person
    let billSplit = bill / numberOfPeople // calculate bill amount per person
    tip = getExactTip(tip) // remove excess dec amount if present
    bill = getExactBill(billSplit) // remove excess dec amount if present

    totalDisplay.textContent = bill // display bill amount per person
    tipDisplay.textContent = tip // display tip about per person
    
}

function getExactTip(tip) {
    tip = tip.toString() // convert tip to string
    if(tip.indexOf(".") > -1) { // check for dec
        let tipArr = tip.split(".") // split bill into dollar and cents
        const tipDollerAmount = tipArr[0]// get dollar abount
        let tipCents = tipArr[1] // get cents amount
        if(tipCents.length >= 2) { // check if tipcents has excess dec amount
            tipCents = tipCents.substring(0, 2) // get rid of excess dec amount
            tip = `$${tipDollerAmount}.${tipCents}`
            return tip
        }else {
            tip = `$${tipDollerAmount}.${tipCents}0`
            return tip
        }
        
    }else { // if tip is a whole number
        tip = `$${tip}.00`
        return tip
    }
}

function getExactBill(billSplit) {
    billSplit = billSplit.toString() // convert bill to string
    if(billSplit.indexOf(".") > -1) { // check for dec
        let billArr = billSplit.split(".") // split bill into dollar and cents
        const billDollarAmount = billArr[0]// get dollar abount
        let billCents = billArr[1] // get cents amount
        if(billCents.length >= 2) {
            billCents = billCents.substring(0, 2) // get rid of excess dec amount
            billSplit = `$${billDollarAmount}.${billCents}`
            return billSplit
        }else {
            billSplit = `$${billDollarAmount}.${billCents}0`
            return billSplit
        }
        
    }else {
        billSplit = `$${billSplit}.00`
        return billSplit
    }
}

function resetInputs() {
    const billInput = document.getElementById("bill-input-id")
    const groupInput = document.getElementById("group-input-id")
    const tipOutput = document.getElementById("output-data-tip")
    const totalOutput = document.getElementById("output-data-total")
    
    billInput.value = ""
    groupInput.value = ""
    tipOutput.textContent = "0.00"
    totalOutput.textContent = "0.00"

}































// const numberOfPeople = 0
// const tipPercent = 0


// addEvents()

// function addEvents() {
//     const percentBtns = document.querySelectorAll("#tip-btn")
//     const customBtn = document.getElementById("tip-btn-custom")
//     const groupDiv = document.getElementById("group-input-id")

//     numOfPeople.addEventListener("keyup", getGroupInput)

//     customBtn.addEventListener("keyup", getCustomInput) // Listen for custom tip input

//     for(let btn of percentBtns) {
//         btn.addEventListener("click", getTipPercent)
//     }
// }

// function getGroupInput() {
//     const groupDiv = document.getElementById("group-input-id")
//     const people = document.getElementById("group-input-id").value
//     console.log(people)
//     const errorText = document.querySelector(".error-text")
//      if(people > 0) {
//          numberOfPeople = people
//          console.log(numberOfPeople)
//      }else {
//         groupDiv.classList.remove("error")
//         errorText.style.display = "none"
//      }
    
    
    
// }

// function getTipPercent(e) {
//     checkInputs()
//     let percent = e.target.value // Get percent of button that was clicked
//         percent = percent.substring(0, percent.length - 1) // Remove % sign form string
//         percent = percent / 100; //Change percent to dec
// }

// function getGroupInput() {
//     const groupDiv = document.getElementById("group-input-id")
//     const errorText = document.querySelector(".error-text")

//     groupDiv.classList.remove("error")
//     errorText.style.display = "none"
// }








// function getCustomInput() {
//     const validInput = checkInputs()
//     if(validInput) {
//         console.log("getTip")
//         console.log(validInput)
//         let customTipPercent = document.getElementById("tip-btn-custom").value
//         customTipPercent = customTipPercent / 100
//     }else {

//     }
    
// }

// function checkInputs() {
//     const bill = document.getElementById("bill-input-id").value
//     const numOfPeople = document.getElementById("group-input-id").value
//     const groupDiv = document.getElementById("group-input-id")
//     const errorText = document.querySelector(".error-text")

//     if(bill && numOfPeople) {
//         groupDiv.classList.remove("error")
//         errorText.style.display = "none"
//         return true
//     }else if(bill && !numOfPeople) {
//         groupDiv.classList.add("error")
//         errorText.style.display = "inline"
//         return false
//     }
// }



// function getTip(e) {
//     const bill = document.getElementById("bill-input-id").value
//     const numOfPeople = document.getElementById("group-input-id").value

//     let validInputs = checkInputs(bill, numOfPeople)

//     if(validInputs) {
//         getTipPercent(e, bill)
//     }else {
//         console.log(validInputs)
//     }
// }