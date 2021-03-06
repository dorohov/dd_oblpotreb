(function($) {
    "use strict"
    $(function() {

        $('.__dd').mousemove(function(e) {
            $('[data-tr]').css({
                transform: 'translateX(' + e.clientX / 60 + 'px) translateY(' + e.clientY / 60 + 'px)'
            })
            $('[data-tri]').css({
                transform: 'translateX(-' + e.clientX / 60 + 'px) translateY(-' + e.clientY / 60 + 'px)'
            }) 
        })

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        startAnimationBlocks()

        $(document).scroll(function() {
            startAnimationBlocks()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5fX2RkJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtdHJdJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIGUuY2xpZW50WCAvIDYwICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyBlLmNsaWVudFkgLyA2MCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRyaV0nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtJyArIGUuY2xpZW50WCAvIDYwICsgJ3B4KSB0cmFuc2xhdGVZKC0nICsgZS5jbGllbnRZIC8gNjAgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkJsb2NrcygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtYmxvY2snKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBbmltID0gJCh0aGlzKS5kYXRhKCdhbmltbmFtZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpc0FuaW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiB0aGlzRGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
