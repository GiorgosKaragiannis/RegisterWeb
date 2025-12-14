let countdownInterval;

function solve() {
    const startInput = document.getElementById('start');
    const targetInput = document.getElementById('target');
    const methodInput = document.getElementById('method');
    const solveBtn = document.getElementById('solveBtn'); 
    const resultDiv = document.getElementById('results');
    

    const timerContainer = document.getElementById('timer-container');
    const timerSpan = document.getElementById('timer');


    startInput.disabled = true;
    targetInput.disabled = true;
    methodInput.disabled = true;
    solveBtn.disabled = true;
    solveBtn.innerText = "⏳ Thinking...";

  
    resultDiv.innerHTML = "🔄 Communicating with Server...";
    resultDiv.style.color = "#555"; 
    

    let timeLeft = 60;
    timerSpan.innerText = timeLeft;
    timerContainer.classList.remove("hidden");
    
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerSpan.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerSpan.innerText = "0 (Timeout)";
        }
    }, 1000);

   
    fetch(`http://localhost:8000/solve?method=${methodInput.value}&start=${startInput.value}&target=${targetInput.value}`)
        .then(response => response.text())
        .then(data => {
       
            finishExecution(); 
            
            resultDiv.innerHTML = data;
            if (data.includes("Solution Found")) {
                resultDiv.style.color = "#0f0";
            } else {
                resultDiv.style.color = "#ff9800";
            }
        })
        .catch(error => {
   
            finishExecution();

            resultDiv.innerHTML = "❌ Connection Error!\n\nPlease check if 'java RegisterWeb' is running.";
            resultDiv.style.color = "#ff4444";
            console.error('Error:', error);
        });

 
    function finishExecution() {
        stopTimer();
        
 
        startInput.disabled = false;
        targetInput.disabled = false;
        methodInput.disabled = false;
        solveBtn.disabled = false;
        solveBtn.innerText = "🚀 Find Solution"; 
    }
}

function stopTimer() {
    clearInterval(countdownInterval);
    const timerContainer = document.getElementById('timer-container');
    timerContainer.classList.add("hidden");
}