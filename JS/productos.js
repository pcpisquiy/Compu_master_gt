        const filterizr = $('.gallery').filterizr({
            controlsSelector: '.fltr-controls',
            gridItemsSelector: '.filtr-item',
            spinner: {
                enabled: true,
            },
        });
        $("#shuffle").click(() => {
            filterizr.filterizr('shuffle');
        })


        