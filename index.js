const para = document.querySelector('.para');
const start = document.querySelector('.b-1');
const done = document.querySelector('.b-2');
const input = document.querySelector('.myTextArea');
const word = document.querySelector('.li-1')
const countf = document.querySelector('.li-2')
const time = document.querySelector('.li-3')
const words = [
    'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog',
    'pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs',
    'jinxed', 'wizards', 'pluck', 'ivy', 'from', 'the', 'big', 'quilt',
    'mr', 'jock', 'tv', 'quiz', 'phd', 'bags', 'few', 'lynx',
    'sphinx', 'judge', 'vow', 'cwm', 'fjord', 'bank', 'glyphs', 'vext',
    'the', 'five', 'boxing', 'jump', 'quickly', 'how', 'razorback',
    'jumping', 'frogs', 'can', 'level', 'six', 'piqued', 'gymnasts',
    'jump', 'by', 'vow', 'quiz', 'girl', 'pack', 'my', 'red', 'box',
    'with', 'five', 'dozen', 'quality', 'jugs'
];

let count = 0;
let wpm = 0;
let totallength = 0;
let uncorrect = 0;
let etime = 0;
let stime = 0;
let numWords =0;
start.addEventListener('click', function (e) {
    let paragraph = '';
    numWords = Math.floor(Math.random() * 50) + 20;

    for (let i = 0; i < numWords; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
    }

    count = 0;
    paragraph.trim();
    para.textContent = '';
    const a = document.createTextNode(paragraph);
    para.style.color = 'white';
    para.append(a);

    let s = new Date();
    stime = s.getTime();

    input.addEventListener('input', function () {
        const inputWords = input.value.trim().split(' ');
        const paragraphWords = paragraph.trim().split(' ');

        for (let i = 0; i < inputWords.length; i++) {
            if (paragraphWords[i] === inputWords[i]) {
                count++;
            }
        }
    });
});

done.addEventListener('click', function () {
    e = new Date();
    etime = e.getTime();
    word.innerText=`Total words :${numWords}`
    countf.innerText=`Correct words :${count}`
    time.innerText= `Total Time Taken :${etime-stime} ms`
    para.textContent = 'Generate Your Para . . .';
    para.style.color = 'gray';
    input.value = '';
});
