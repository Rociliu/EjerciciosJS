const button$$ = document.querySelector('button');

const consultaApi = async (inputValue) => {
    const answer = await fetch('https://api.nationalize.io?name=' + inputValue);
    const data = await answer.json();
    console.log(data);
} 

button$$.addEventListener('click',function() {
    consultaApi(document.querySelector('input').value);
});

