window.onload = function () {
    const menu = document.getElementById('menu'),
        menuDataSource = [
            {
                label: 'Technology',
                value: 'technology'
            },
            {
                label: 'Design',
                value: 'design'
            },
            {
                label: 'Culture',
                value: 'culture'
            },
            {
                label: 'Business',
                value: 'business'
            },
            {
                label: 'Politics',
                value: 'politics'
            },
            {
                label: 'Opinion',
                value: 'opinion'
            },
            {
                label: 'Science',
                value: 'science'
            },
            {
                label: 'Health',
                value: 'health'
            },
            {
                label: 'Style',
                value: 'style'
            },
            {
                label: 'Travel',
                value: 'travel'
            }
        ];

    menu.dataSource = menuDataSource;
}