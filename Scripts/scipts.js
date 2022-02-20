let articles = document.querySelectorAll('.article');
let hiddens = document.querySelectorAll('.hidden');

articles = Array.from(articles);
hiddens = Array.from(hiddens);

for(let article in articles){
    articles[article].addEventListener('mouseenter', () => {
        hiddens[article].classList.remove('hidden');
    })
    if(hiddens[article].classList.contains('hidden')){
        articles[article].addEventListener('mouseleave', () => {
            hiddens[article].classList.add('hidden');
        })
    }
}