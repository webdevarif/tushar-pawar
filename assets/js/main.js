;
(function($) {


    $(document).ready(function() {
        /*-------------------------------------------------------------------------------
        Share Button 
        -------------------------------------------------------------------------------*/
        if ($(".social-share-btn").length > 0) {
            $(".social-share-btn").click(function(event) {
                var width = 650, height = 450;
                event.preventDefault();
                window.open($(this).attr("href"), 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+width+',height='+height+',top='+(screen.height/2-height/2)+',left='+(screen.width/2-width/2));
            });
        };
    
        /*-------------------------------------------------------------------------------
        Testimonial Slider 
        -------------------------------------------------------------------------------*/
        if ($(".testimonial-slider-wrapper").length > 0) {
            $('.testimonial-slider-wrapper').slick({
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                arrows: true,
                fade: false,
                prevArrow:'<button type="button" class="slick-prev pull-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="19" width="18" height="18" rx="9" transform="rotate(-180 19 19)" fill="#2A2A2A"/><path d="M12 6L8 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="19" y="19" width="18" height="18" rx="9" transform="rotate(-180 19 19)" stroke="currentColor" stroke-width="2"/></svg></button>',
                nextArrow:'<button type="button" class="slick-next pull-right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="18" height="18" rx="9" fill="#2A2A2A"/><path d="M8 14L12 10L8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="1" y="1" width="18" height="18" rx="9" stroke="currentColor" stroke-width="2"/></svg></button>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            arrows: false,
                            centerPadding: '150px',
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            arrows: false,
                            centerPadding: '70px',
                        }
                    },
                ]
            });
        }

         /*-------------------------------------------------------------------------------
        Services Slider 
        -------------------------------------------------------------------------------*/
        // Function to initialize or unslick the slider based on screen width
        function initializeSlider() {
            if (window.innerWidth < 640) {
                // Initialize Slick for mobile.
                $('.services-slider-wrapper').slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                dots: true,
                                centerPadding: '150px',
                            }
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                dots: true,
                                centerPadding: '70px',
                            }
                        }
                    ]
                });
            } else {
                // If the screen width is above the breakpoint, check if the slider is initialized and unslick if necessary.
                if ($('.services-slider-wrapper').hasClass('slick-initialized')) {
                    $('.services-slider-wrapper').slick('unslick');
                }
            }
        }

        // Call the function to initialize the slider on page load
        initializeSlider();
        
        // Update the slider on window resize
        $(window).on('resize', function() {
            initializeSlider();
        });

        /*-------------------------------------------------------------------------------
        Clients Slider 
        -------------------------------------------------------------------------------*/
        if ($(".clients-slider-wrapper").length > 0) {
            $('.clients-slider-wrapper').slick({
                slidesToShow: 5,
                slidesToScroll: 2,
                dots: false,
                arrows: false,
                fade: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }
    });


}(jQuery));