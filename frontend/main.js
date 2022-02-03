//when does the function get called? here
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount;
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
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

