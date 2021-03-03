const modal = document.querySelector('.contact-modal');
const modalOpen = document.querySelector('.modal-button');
const ex = document.querySelector('.ex-button');
const body = document.querySelector('body');
const apiLink = 'https://api.github.com/users/JPaulSalazar/repos?per_page=10';
const proyectsList = document.querySelector('.proyects-list-ul');
const exercisesList = document.querySelector('.exercises-list-ul');
const video = document.querySelector('video');
const buttonVideo = document.querySelector('.hero-title-button');
const videoText = document.querySelector('.hero-video-text');

modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});
ex.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  body.style.overflow = 'visible';
});
buttonVideo.addEventListener('click', (event) => {
  event.preventDefault();
	if (video.paused) {
		video.play();
    videoText.innerHTML = 'Pause video';
	} else {
		video.pause();
    videoText.innerHTML = 'Play video';
	}
});
const addProyects = (repository) => {
  repository.forEach (element => {
    const newRepo = `
    <li>
      <a href="${element.html_url}" target = "_blank">
        <img src="img/example.jpg" alt="code example">
        <h3>${element.name}</h3>
      </a>
    </li>
    `
    proyectsList.innerHTML += newRepo;
    exercisesList.innerHTML += newRepo;
  });
}

fetch(apiLink, {
  method: "GET"
}).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    addProyects(data);
  });

  function playPause() {
    if (video.paused)
      video.play();
    else
      video.pause();
   }
