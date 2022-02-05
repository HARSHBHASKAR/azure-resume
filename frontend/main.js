//when does the function get called? here
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount;
})

const functionApiUrl = 'https://getresumecounterharsh.azurewebsites.net/api/GetResumeCounter?code=7cDR8EHOFXNm4giOZg336qmR0Fitc6Dm7j0k4sgBHc9RB4IMSa9Ekg==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json() //it was response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count; //it was count = response.count
        document.getElementbyId('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
        return count;
};

