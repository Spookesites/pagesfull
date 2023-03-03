const CHANNEL_ID = 'UCdzzVNtTZ4XmToa_IUsInUw';
const API_KEY = 'AIzaSyC-1PqA3sJGBsjyEcfa0p3lRURVkeXXoVU';

const videosContainer = document.getElementById('videos-container');

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const videoTitle = item.snippet.title;
      const videoDescription = item.snippet.description;
      const videoThumbnail = item.snippet.thumbnails.medium.url;

      const videoElement = `
        <div class="video">
          <a href="https://www.youtube.com/watch?v=${videoId}">
            <img src="${videoThumbnail}" alt="${videoTitle}">
            <h3>${videoTitle}</h3>
            <p>${videoDescription}</p>
          </a>
        </div>
      `;

      videosContainer.insertAdjacentHTML('beforeend', videoElement);
    });
  })
  .catch(error => console.error(error));
