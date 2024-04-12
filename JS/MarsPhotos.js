document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value.trim();
  
  if (!choice) {
    console.error('No date selected');
    return;
  }

  const apiKey = 'EsFcRfGoF3NjIzpRq2fRyFCJCYkfki5tPShmL4VL&date='; 
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${choice}&api_key=${apiKey}`;

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('ERROR');
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[0]; 
        document.querySelector('.yo').src = photo.img_src; 
        document.querySelector('h3').innerText = photo.camera.full_name; 
        document.querySelector('h2').innerText = photo.earth_date; 
      } else {
        document.querySelector('h4').innerText="There weren't any photos taken at this date with a mars rover"
      }
    })
    .catch(err => {
      console.error('Prob with fetch', err);
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