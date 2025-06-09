async function italianB(){
    const response= await fetch("https://api.janmotlik.dev/random-brainrot")
    const data = await response.json()
    const div =document.getElementById("div")
    const fotka=document.createElement("img")
    fotka.src=data.imageUrl
    console.log(data.imageUrl)
    div.append(fotka)
}
async function posliB(){
    const dataToSend = {
        imageUrl: document.getElementById("odkaz").value,
        name: document.getElementById("jmeno").value,
        description: document.getElementById("popis").value,
        author: document.getElementById("autor").value
    }
    console.log("Odesílám: " + JSON.stringify(dataToSend))
    const response = await fetch("https://api.janmotlik.dev/add-brainrot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: 
        JSON.stringify(dataToSend)
    })
    if (!response.ok){
        const errorText = await response.text();
        alert("Chyba kódu " +response.status +" - " + errorText);
        return;
    }
    const data = response.text;
    console.log("server odpověděl: " +data);
}

