let data = JSON.parse(localStorage.getItem('amount'))
  let wallet = document.getElementById('wallet')

  wallet.textContent = data



  let movie_data = JSON.parse(localStorage.getItem('movie'))
  console.log(data)

  let movieDiv;

  movie_data.forEach(function (elem) {
    movieDiv = document.getElementById('movie')
    let cartDiv = document.createElement('div')

    let image = document.createElement('img')
    image.src = elem.poster

    let name = document.createElement('p')
    name.textContent = elem.name
    cartDiv.append(image, name)
    movieDiv.append(cartDiv)

  })

  confirm_book = () => {
    let seat = document.getElementById('number_of_seats').value
    let total = Number(100 * seat)
    // console.log(total)
    if (seat >= 1 && data >= total) {
      alert('booking succesful')
      Update_wallet= Number(data-total)

      localStorage.setItem('amount', JSON.stringify(Update_wallet))

      // console.log(wallet)
      // movieDiv.textContent = ""
      movie_data=[]
      localStorage.setItem('movie',JSON.stringify(movie_data))
      window.location.reload()

    } else {
      if (data < total) {
        alert('insuficient fund')
      }else{
        alert('Select at leat one seat')
      }

    }


  }
