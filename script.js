var form = document.getElementById("myForm")


form.addEventListener('submit', function(e){
e.preventDefault()


    var search = document.getElementById("search").value

    var orignalInput = search.split(' ').join('')
    var text ="List of their Repositories:"+"<br>"
    document.getElementById("result").innerHTML = ""
    
    alert(orignalInput)
    fetch("https://api.github.com/users/"+orignalInput+"/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        
        for (i = 0; i < data.length; i++){
          text += data[i].full_name + "<br>"

        
     }
     document.getElementById("result").innerHTML = text

    })

})
