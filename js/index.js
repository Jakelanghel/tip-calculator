
addEvents()




function getTip(e) {
    const bill = document.getElementById("bill-input-id").value
    const numOfPeople = document.getElementById("group-input-id").value

    let validInputs = checkInputs(bill, numOfPeople)

    if(validInputs) {
        getTipPercent(e, bill)
    }else {
        console.log(validInputs)
    }
}


function addEvents() {
    const percentBtns = document.querySelectorAll("#tip-btn")
    const customBtn = document.getElementById("tip-btn-custom")
    customBtn.addEventListener("keyup", getCustomPercent)
    for(let btn of percentBtns) {
        btn.addEventListener("click", getTip)
    }
}

function checkInputs(bill, numOfPeople) {
    const groupDiv = document.getElementById("group-input-id")
    const errorText = document.querySelector(".error-text")
    if(bill && numOfPeople) {
        groupDiv.classList.remove("error")
        errorText.style.display = "none"
        return true
    }else if(bill && !numOfPeople) {
        groupDiv.classList.add("error")
        errorText.style.display = "inline"
        return false
    }
}

function getTipPercent(e, bill) {
    const tipDisplay = document.getElementById("output-data-tip")
    let percent = e.target.value // Get percent of button that was clicked
        percent = percent.substring(0, percent.length - 1) // Remove % sign form string
        percent = percent / 100; //Change percent to dec
        percent = Math.round(percent * bill) //Get tip amount
        tipDisplay.textContent = `${percent}.00`
}

function getCustomPercent() {
    const bill = document.getElementById("bill-input-id").value
    const numOfPeople = document.getElementById("group-input-id").value
    const validInput = checkInputs(bill, numOfPeople)
    console.log(validInput)

    if(validInput) {
        let customTipAmount = 0
        let customTipPercent = document.getElementById("tip-btn-custom").value
        const tipDisplay = document.getElementById("output-data-tip")
        customTipPercent = customTipPercent / 100
        customTipAmount = customTipPercent * bill
        console.log(customTipAmount)
    }
    
    
}