function listitem(pageNum){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        return response.json()
    })
    .then((response)=>{   
        console.log(pageNum,"ppppp");  
        res=response.slice((pageNum-1)*10,pageNum*10)
        var tb=document.querySelector(".retro")
        listOfData=""
        for (i of res){
            console.log(i)
            listOfData=listOfData+
            `<tr>
            <td>${i.id}</td>
            <td>${i.userId}</td> 
            <td>${i.title}</td>
            </tr>`
        }
        tb.innerHTML=listOfData
        var rock=document.querySelector(".red")
        btn=""
        i=1
        for (j=0;j<response.length;j+=10){
           btn+=
            `<button>${i}</button>`
            i++
        }
        rock.innerHTML=btn
    })
}