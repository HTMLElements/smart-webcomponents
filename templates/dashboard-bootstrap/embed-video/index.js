window.initEmbedVideo = function () {
    const iframe21 = document.getElementById('iframe21'),
        iframe16 = document.getElementById('iframe16'),
        iframe4 = document.getElementById('iframe4'),
        iframe1 = document.getElementById('iframe1');

    function setWidth() {
        iframe21.style.height = iframe21.offsetWidth * 0.42857 + 'px';
        iframe16.style.height = iframe21.offsetWidth * 0.5625 + 'px';
        iframe4.style.height = iframe4.offsetWidth * 0.75 + 'px';
        iframe1.style.height = iframe1.offsetWidth + 'px';
    }

    window.onresize = function () {
        setWidth();
    };

    setWidth();
}