window.onload = function () {

    scrollFunction();

    const carousel = document.getElementById('carousel'),
    carouselBrands = document.getElementById('carouselBrands');


    carousel.dataSource = setDataSource();
    function setDataSource() {
        let dataSource = [];

        let item = {
            image: '../../../images/man-4252192_960_720.jpg',
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Fajar Siddiq',
            position: 'CEOCEO, MakerFlix'
        };
        dataSource.push(item);

        item = {
            image: '../../../images/girl-2366438_960_720.jpg',
            description: item.description,
            name: 'Isabela Moreira',
            position: 'CEO, GrayGrids'
        };
        dataSource.push(item);

        item = {
            image: '../../../images/entrepreneur-593358_960_720.jpg',
            description: item.description,
            name: 'Elon Musk',
            position: 'CEO, SpaceX'
        };
        dataSource.push(item);

        item = {
            image: '../../../images/woman-3096664_960_720.jpg',
            description: item.description,
            name: 'Fiona',
            position: 'Lead Designer, UIdeck'
        };
        dataSource.push(item);

        item = {
            image: '../../../images/girl-2771001_960_720.jpg',
            description: item.description,
            name: 'Natalie Portman',
            position: 'Lead Designer, UIdeck'
        };
        dataSource.push(item);

        return dataSource;
    }


    carouselBrands.dataSource = setBrandsDataSource();
    function setBrandsDataSource() {
        let dataSource = [];

        let item = {
            image: '../../../images/instagram-1581266_960_720.jpg',
        };
        dataSource.push(item);

        item = {
            image: '../../../images/youtube-1837872_960_720.png',
        };
        dataSource.push(item);

        item = {
            image: '../../../images/logo-2078018_960_720.png',
        };
        dataSource.push(item);
        
        item = {
            image: '../../../images/logo-google-1991840_960_720.png',
        };
        dataSource.push(item);

        item = {
            image: '../../../images/tux-158547_960_720.png',
        };
        dataSource.push(item);

        item = {
            image: '../../../images/animal-2028258_960_720.png',
        };
        dataSource.push(item);

        item = {
            image: '../../../images/lotus-with-hands-1889661_960_720.png',
        };
        dataSource.push(item);

        return dataSource;
    }
}


