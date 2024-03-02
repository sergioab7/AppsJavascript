const quizData = [
    {
        question:"¿Quién mandó construir el parque de El Capricho de Madrid?",
        image:"https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        a: 'Leonardo Da Vinci',
        b: 'La Duquesa de Osuna',
        c: 'Napoleón Bonaparte',
        d: 'Gianluiggi Buffalo',
        correct: 'b'
    },
    {
        question:"¿Cuál es la moneda de México?",
        image:"https://i.etsystatic.com/10624150/r/il/a6c108/3596242389/il_fullxfull.3596242389_4kzc.jpg",
        a: 'Javascript',
        b: 'Html',
        c: 'Java',
        d: 'Peso mexicano',
        correct: 'd'
    },
    {
        question:"De qué colores es la bandera de Japón?",
        image:"https://www.dzoom.org.es/wp-content/uploads/2011/07/fkr-734x488.jpg",
        a: 'Blanca y roja',
        b: 'Html',
        c: 'Java',
        d: 'Peso mexicano',
        correct: 'a'
    },
    {
        question:"¿Cómo se llaman las crías de los conejos?",
        image:"https://demos.maugelves.com/jpg-formats/kitty-baseline.jpg",
        a: 'Javascript',
        b: 'Html',
        c: 'Gazapos',
        d: 'Peso mexicano',
        correct: 'c'
    },
    {
        question:"¿Qué día es la fiesta de la hispanidad?",
        image:"https://okdiario.com/img/2023/10/11/dia-de-la-hispanidad-que-se-celebra-y-por-que-el-12-de-octubre-es-fiesta-en-espana.jpg",
        a: '19 de noviembre',
        b: '12 de octubre',
        c: '9 de julio',
        d: '28 de abril',
        correct: 'b'
    }
];

const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

const submitBtn = document.querySelector("#submit");


let currentQuizz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuizz];
    questionEl.innerHTML=currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers(){
    const answersEls = document.querySelectorAll(".answer");
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuizz].correct){
            console.log("Has acertado!");
            score++;
        }else {
            console.log("Has fallado :(");
        }
        currentQuizz++;
        if(currentQuizz < quizData.length){
            loadQuiz();

        }else{
            console.log("finished");
        }

    }


})