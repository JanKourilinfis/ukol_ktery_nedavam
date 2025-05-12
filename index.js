async function italianB(){
    const response= await fetch("https://api.janmotlik.dev/random-brainrot")
    const data = await response.json()
    const div =document.getElementById("div")
    const fotka=document.createElement("img")
    fotka.src=data.imageURL
    div.append(fotka)
}

