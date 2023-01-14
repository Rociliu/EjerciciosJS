let getData = async () => {
    try {
        let answer = await fetch("https://api.agify.io?name=michael")
        let data = await answer.json()
        console.log(data)
    }
    catch (error){
        alert ("An error has occurred")
    }
}

getData()

//OTRA FORMA, COMO LO HACE JOSE:
const apiMain$$ = document.querySelector('.principal');
const getDatos = async () => { 
    const result = await fetch(`https://api.agify.io?name=michael`);
    const resultJson = await result.json();

    const dataHTML=`
    <p> nombre: ${resultJson.name}</p>
    <p> edad: ${resultJson.age}</p>
    <p> CP: ${resultJson.count}</p> `;
apiMain$$.innerHTML = dataHTML;
};
getDatos();

