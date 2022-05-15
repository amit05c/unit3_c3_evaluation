let wallet= JSON.parse(localStorage.getItem('amount'))
  document.getElementById('wallet').textContent=wallet
  

  search= async () => {

    let query= document.getElementById("search").value
        // console.log(query)
    try{
        

       
      let res= await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)

let data= await res.json()
// console.log(data.Search)

return data.Search

    }

  catch(err){
    console.log(err)
  }

}




appendData= (data)=>{
  let outer = document.getElementById('movies')
   
  outer.innerHTML=""
  data.forEach(function(elem){
    // console.log(elem)

    let div= document.createElement('div')

    let name=document.createElement('p')
    name.textContent= elem.Title

    let poster= document.createElement('img')
    poster.src= elem.Poster

   
    let bookNow= document.createElement('button')
    bookNow.textContent="Book now"

    bookNow.setAttribute('class',"book_now")


    bookNow.onclick= function(){
      cart(elem)
      // let obj={
      //   name:elem.Title,
      //   poster:elem.Poster
      // }
      // console.log(obj)
    }



    div.append(poster,name,bookNow)
    // console.log(div)

    // document.getElementById('movies').append(div)
    outer.append(div)

  })
}


main= async ()=> {
   let data= await search()
  //  console.log(data)
   appendData(data)

}


let id;
debounce = (func,delay)=>{
 
   if(id){
     clearInterval(id)
   }

  id=setTimeout( ()=>{
      func()
  },delay)
}



let arr=  []

cart= (data)=>{
// console.log(data)
let obj={
  'poster':data.Poster,
  'name': data.Title,

}
// console.log(obj)
arr.push(obj)
console.log(arr)
localStorage.setItem('movie',JSON.stringify(arr))
window.location.href='checkout.html'
}

