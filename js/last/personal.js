$(document).ready(function () {
    $('[name="area_title"]').click(function () {
        $('[name="area_title"]').not(this).removeClass('active');
        $('.area_container').addClass('hidden');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('[area_container='+$(this).attr('val')+']').removeClass('hidden');
            $('.groups_predmets_by_area').show();
        }
    });
    $('.pgroup_btn').click(function(){
        $('.pgroup_btn').not(this).removeClass('active');
        var group_id = $(this).attr('value');
        $('.group_container').addClass('hidden');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $('[group_container='+group_id+']').removeClass('hidden');
            $(this).addClass('active');
        }
    });
});
