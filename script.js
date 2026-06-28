const questions = [
  {
    question: "Kalau Fahri ngajak main, kamu ikut?",
    answers: ["Langsung ikut", "Kalau sempat", "Lihat dulu", "Nggak"]
  },
  {
    question: "Menurutmu Fahri orang yang...",
    answers: ["Baik", "Lucu", "Pintar", "Random"]
  },
  {
    question: "Kalau Fahri ulang tahun kamu akan...",
    answers: ["Kasih hadiah", "Ucapan aja", "Lupa", "Nggak tahu"]
  }
];

let currentQuestion = 0;

function startQuiz() {
    const name = document.getElementById("name").value.trim();

    if(name === ""){
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    showQuestion();
}

function showQuestion(){

    document.querySelector(".container").innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>

        ${questions[currentQuestion].answers.map(answer =>
            `<button onclick="nextQuestion()">${answer}</button>`
        ).join("")}
    `;

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }else{

        const percent = Math.floor(Math.random()*41)+60;

        document.querySelector(".container").innerHTML=`
            <h1>🎉 Hasil</h1>
            <h2>${percent}%</h2>
            <p>Kamu lumayan mengenal Fahri 😆</p>

            <button onclick="location.reload()">
                Coba Lagi
            </button>
        `;
    }

}
