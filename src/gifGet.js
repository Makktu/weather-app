const img = document.querySelector('img');

export default async function getGif(searchTerm) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${searchTerm.toLowerCase()}`,
            { mode: 'cors' }
        );
        const gifData = await response.json();
        let thisImage = gifData.data.images.original.url;
        img.src = thisImage;
    } catch (error) {
        // msgArea.innerHTML = `<p>${error}</p>`;
        img.src =
            'https://media4.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif?cid=f6fa26a6azn49z0iy7d5pd2wf84hgi348pn9wck0zwbcg6n9&rid=giphy.gif&ct=g';
        console.log(error);
    }
}
