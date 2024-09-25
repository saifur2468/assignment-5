let totalAmount = '5500';
function donate(part){
    let donationInput = document.getElementById('donationAmount'+ part).value;
    let donationAmount = parseFloat(donationInput);

    if (isNaN(donationAmount)|| donationAmount <=0){
        alert('Please enter the amount in numbers');
        return;
    }
    document.getElementById('donationAmountDisplay' + part).innerText = donationAmount + 'BDT';
    totalAmount -= donationAmount;
  document.getElementById('totalamount').innerText = totalAmount + 'BDT';
  
}


// history section Performa

function updatedHistory(donationAmount,newBalance){
    const p = document.createElement('p');
p.innerText = `Added: ${donationAmount} Tk. New Balance : ${newBalance} Tk.`;
console.log(p);
document.getElementById('AddmoneyHistory').appendChild(p);

}


