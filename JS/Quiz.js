document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quizForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let score = 0;
        const answers = {
            q1: "a", q2: "c", q3: "b", q4: "a", q5: "c",
            q6: "b", q7: "a", q8: "c", q9: "b", q10: "a",
            q11: "b", q12: "c"
        };

        for (let i = 1; i <= 38; i++) { 
            let selected = document.querySelector(`input[name=q${i}]:checked`);
            if (selected && selected.value === answers[`q${i}`]) {
                score++;
            }
        }
        alert("Your score: " + score + "/12"); 
    });
});