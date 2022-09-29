window.onload = function () {
    const album = document.getElementById('album'),
        fragment = document.createDocumentFragment(),
        items = 12;

    for (let i = 0; i < items; i++) {
        const card = document.createElement('smart-card');

        card.itemTemplate = 'cardTemplate';
        fragment.appendChild(card);
    }

    album.appendChild(fragment);
}