let calculation = ""
function updateCalculation(value){
    try{
        calculation += value
        document.getElementById("calculator-display").textContent = calculation
    } 
    catch
    {
        document.getElementById("calculator-display").innerText = "Error" 
        calculation = ""
    }
}

function calualatResult() {
    try{
        document.getElementById("result-display").innerText = calculation
        calculation = math.evaluate(calculation)
        document.getElementById("calculator-display").innerText = calculation
    } catch 
    {
        document.getElementById("calculator-display").innerText = "Error"
    }
}

function clearDisplay() {
    calculation = ""
    document.getElementById("result-display").textContent = 0   
    document.getElementById("calculator-display").innerText = 0
}

function deleteLastCharacter() {
    calculation = calculation.slice(0,-1)
    let displatcalc = calculation || "0"
    document.getElementById("calculator-display").innerText = displatcalc
    // document.getElementById("result-display").innerText = "0"
}

  