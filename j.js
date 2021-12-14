function request(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        return response.json()
    })
    .then((response)=>{
        
        console.log(response,pppp)
        var tb=document.querySelector(".retro")
        listOfData=""
        
        for (i of response){
            console.log(i);
            listOfData=listOfData+
            `<tbody>
            <td>${i.id}</td>
            <td>${i.userId}</td> 
            <td>${i.title}</td> 
            </tbody>`
        }
        console.log(listOfData,"listOfData");
        tb.innerHTML=listOfData
    });


}