let countries = [
    {
        cntryName: "azerbaijan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png"
    },
    {
        cntryName: "turkey",
        flag: "https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg"
    },
    {
        cntryName: "usa",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
    },
    {
        cntryName: "canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
    },
    {
        cntryName: "ukraine",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
    },
    {
        cntryName: "russia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"
    },
    {
        cntryName: "china",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"
    },
    {
        cntryName: "india",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
    },
    {
        cntryName: "italy",
        flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
        cntryName: "sudan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/2560px-Flag_of_Sudan.svg.png"
    }
];

let random = Math.floor(Math.random() * countries.length);


let flag = document.querySelector("#flagImage");
let ansButton = document.querySelector("#buttonAnswer");
let count = document.querySelector('#count')
let passButton = document.querySelector('#pass');

function loadRandomFlag() {
    flag.src = countries[random].flag;
}

ansButton.addEventListener('click', function () {
    let guess = document.querySelector("#answerInput").value.toLowerCase();
    let country = countries[random].cntryName;
    if (guess === country) {
        toastr.success('GOOD JOB');
        count.textContent = parseInt(count.textContent) + 1;
        document.querySelector("#answerInput").value = ''
        random = Math.floor(Math.random() * countries.length);
        loadRandomFlag();
    } else {
        toastr.error('OOPPSSS Try Again');
    }

})

passButton.addEventListener('click', function () {
    random = Math.floor(Math.random() * countries.length);
    loadRandomFlag();
});

window.onload = loadRandomFlag;
