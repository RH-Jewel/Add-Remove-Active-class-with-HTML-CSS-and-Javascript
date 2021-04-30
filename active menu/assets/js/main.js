$(function(){
    
    $(document).on('click', '.main-menu li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

});