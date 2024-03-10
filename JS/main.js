
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

