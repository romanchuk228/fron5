const imageGrid = document.querySelector('.image-grid');

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    const images = data.slice(0, 12).map(item => {
      const img = document.createElement('img');
      img.src = item.url;
      const div = document.createElement('div');
      div.appendChild(img);
      return div;
    });
    imageGrid.append(...images);
  })