
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=EsFcRfGoF3NjIzpRq2fRyFCJCYkfki5tPShmL4VL&date=${choice}`

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        document.querySelector('.yo').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//button
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>
{
    btn.style.backgroundColor = '#ff4500';
    btn.style.boxShadow = '0 0 40px #ff4500';
    btn.style.transition = '.5s ease';
});

//change active nav
const activelink = window.location.pathname;
const navLinks = document.querySelectorAll('ul a').forEach(link =>{
    if(link.href.includes(`${activelink}`)){
      link.classList.add('nav-links')
    }
})