const button$$ = document.querySelector('button');
//button$$.addEventListener('click',consultaApi);

const consultaApi = async (valorDelInput) => {
    const answer = await fetch('https://api.nationalize.io?name=' + valorDelInput);
    const data = await answer.json();
    console.log(data);
} 

button$$.addEventListener('click',function() {
    consultaApi(document.querySelector('input').value);
});

