$.tablesorter.addParser({
    'id' : 'russian',
    'is' : function(string) {
         return false;
         },
    'format' : function(string) {
        if (string == "") {
            return '';
        }
        var thedate = string.split(/\.| |[/]/);
   
        var monthint = {};
        monthint['января'] = "01";
        monthint['февраля'] = "02";
        monthint['марта'] = "03"; 
        monthint['апреля'] = "04";
        monthint['мая'] = "05";
        monthint['июня'] = "06";
        monthint['июля'] = "07";
        monthint['августа'] = "08";
        monthint['сентября'] = "09";
        monthint['октября'] = "10";
        monthint['ноября'] = "11";
        monthint['декабря'] = "12";
        var date_day = $.trim(String(thedate[0]));

        if (date_day.length == 1) {
        date_day = '0' + date_day;
        }
        if (thedate[1].length > 2) {
        var date_month = monthint[thedate[1]];
        }
        else date_month = $.trim(thedate[1]);
        var date_year = $.trim(thedate[2]);

        console.log(date_day,date_month,date_year);
        return date_year + date_month + date_day;
         

    },
    'type' : 'numeric'
    });


    $('#table-id').tablesorter({
        'headers' : {
            2 : {
                'sorter' : 'russian'
                } 
            } 
        });