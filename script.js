const receivedData = localStorage.getItem('data') = getQueryParam('data'); 
document.getElementById('output').textContent = receivedData; 
// Optionally, clear the data after retrieving it 
localStorage.removeItem('data'); 

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById('output').textContent = receivedData 
? decodeURIComponent(receivedData) 
: "No data received.";