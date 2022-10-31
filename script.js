function CalcBMI (){
    let inputM =document.getElementById("mass");
    let inputH =document.getElementById("height")
    let inputOne =document.getElementById("mass").value;
    let inputTwo =document.getElementById("height").value;
    //console.log(inputOne)
    if(inputOne<= 0 || inputTwo<=0 ){
        alert("Enter valid input ");
        inputM.value ="";
        inputH.value ="";
    
        return CalcBMI;
    }

    let BMI = inputOne / (inputTwo ** 2);
    alert(`Your BMI is ${BMI.toFixed(2)}`);
    inputM.value ="";
    inputH.value ="";
    
    }