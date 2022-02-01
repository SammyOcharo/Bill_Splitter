// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";


}

// This function display values
function display(values) {
    document.getElementById("result").value += values;



}
function copyContent() {
    var src = document.getElementById("result"),
        dst = document.getElementById("shared_bill");
    src.addEventListener('input', function () {
        src.value = dst.value;
        console.log(src.value);
    });
};

function TipValue() {
    All_radio = document.getElementsByClassName('input__radio')
    for (const radio of All_radio) {
        if (radio.checked) {
            console.log(radio.value);

        }
    }

}


function TipCalculation() {
    var newBill = display() / TipValue()
    console.log(newBill);

}
