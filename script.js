


let el = document.getElementById('response-text');
let i = 0;
let s = [
    'Хочу',
    'Серегу ♡'
];

el.addEventListener('animationiteration', ()=>{
   if (!s[++i]) i = 0;
   el.innerText = s[i];
})
