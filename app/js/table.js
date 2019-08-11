$(document).ready(function() {
    $('#table-id').tablesorter();  
    $('th').on('click', function() {
        let $table = $(this).closest('table');
        let index = $(this).index();
        document.getElementsByClassName("search")[0].placeholder='Поиск по столбцу';
        $table.find('td').removeClass('selected');
        $table.find('th').removeClass('selected');
        $table.find('tr').each(function() {
            $(this).find('td').eq(index).addClass('selected');
            $(this).find('th').eq(index).addClass('selected');
        });
    });

    $(".search").keyup(function(){
        _this = this;
        $.each($("#table-id td.selected"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
                $(this).parent('tr').hide();
            } else {
                $(this).parent('tr').show(); 
            }
        });
    });
});

    

