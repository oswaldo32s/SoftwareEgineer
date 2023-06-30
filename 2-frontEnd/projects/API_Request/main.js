// Information to reach API
const url = 'https://api.datamuse.com/words?ml=';

// Selects page elements
const inputField = document.getElementById('input-means');
const submit = document.getElementById('submit-means');
const responseField = document.getElementById('response-means');

const renderResponse = res => {
    const wordList = [];

    if(!res.length){
        responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
        return;
      }
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  console.log(trimmedResponse)

  for(let i = 0; i < trimmedResponse.length ; i++)
      wordList.push(`<li>${trimmedResponse[i].word}</li>`)
      console.log(wordList)
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<p>you might be interested in:</p>
                            <ol>${wordList.join("")}</ol>`;

}


const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = url + wordQuery;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse)
        }

    } catch(error) {
        console.log(error);
    }

}

const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions()
}


submit.addEventListener('click', displaySuggestions)