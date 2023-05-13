function calculateLoan(){
    // console.log("clicked")
    const loanAmt=document.getElementById("amt").value;
    const intRate=document.getElementById("rate").value;
    const months=document.getElementById("month").value;

    const interest=(loanAmt * ( intRate * 100)/months);

    monthlypayment=(loanAmt/months+interest).toFixed(2);

    document.getElementById("pay").innerHTML=monthlypayment;
    
    
}