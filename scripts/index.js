 
//   let arr= JSON.parse(localStorage.getItem('myarr')) || []

//   let wallet=document.getElementById('wallet')

//  wallet.textContent=JSON.parse(localStorage.getItem('amount'))

//   let totalAmount;
// addMoney= () => {

//   let amount=document.getElementById('amount').value
//   arr.push(amount)
//   // console.log(arr)
//   localStorage.setItem('myarr',JSON.stringify(arr))

//      totalAmount=arr.reduce(function(acc,element,item,arr){
//      return acc+Number(element)
//   },0)

//   localStorage.setItem('amount',JSON.stringify(totalAmount))
//   window.location.reload()
// }

let wallet_amount=JSON.parse(localStorage.getItem('amount'))


addMoney= () => {

  let amount=document.getElementById('amount').value
  

     let totalAmount=  Number(Number(amount)+Number(wallet_amount))
     
    //  let wallet=document.getElementById('wallet')

    //   wallet.textContent=wallet_amount

  localStorage.setItem('amount',JSON.stringify(totalAmount))
  window.location.reload()
}

let wallet=document.getElementById('wallet')

      wallet.textContent=wallet_amount