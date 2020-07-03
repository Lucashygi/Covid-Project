var ha;
var filePath;
var data;
var name;

$(document).ready(function(){
    $(" #algorithm_selected ").change(function(){
        var selected_algo = $(this).children(":selected").attr('value');
        var selected_filt = $('#filter_selected').children(':selected').attr('value');
        if( (selected_algo == 'SPegasos' || selected_algo == 'SVM') && selected_filt == 'Class Balancer'){
            $('#matrix_selected').val('Yes');
            $('#matrix_selected').prop('disabled','disabled');
        }else{
            $('#matrix_selected').prop('disabled', false);
        }
    });
});

$(document).ready(function(){
    $(" #filter_selected ").change(function(){
        var selected_algo = $('#algorithm_selected').children(":selected").attr('value');
        var selected_filt = $(this).children(':selected').attr('value');
        if( selected_filt == 'Class Balancer' && (selected_algo == 'SPegasos' || selected_algo == 'SVM')){
            $('#matrix_selected').val('Yes');
            $('#matrix_selected').prop('disabled','disabled');
        }else{
            $('#matrix_selected').prop('disabled', false);
        }
    });
});


function showResults(){
    data = {
        time: $('#date_selected').children(':selected').attr('value'),
        algo: $('#algorithm_selected').children(':selected').attr('value'),
        filter: $('#filter_selected').children(':selected').attr('value'),
        cost: $('#matrix_selected').children(':selected').attr('value'),
        presenting: $('#presenting_selected').children(':selected').attr('value')
    };
    name = (data.algo + '_' + data.time + '_' + data.filter + '_' + data.presenting + '_' + data.cost + 'Cost' + '.txt'); 
    function getFilePath(){
        filePath = ('data_files/' + data.time.toLowerCase() + '/' + data.algo.toLowerCase() + '/' + data.filter.toLowerCase() + '/' + data.presenting.toLowerCase() + '/' + data.cost).toString().replace(/\s/g,'_');
        return filePath;
    }
    $('#text_area').load(getFilePath()+'.txt', function (){
        $(this).value = " ";
        $(this).height(0);
        $(this).height(this.scrollHeight);
        if (data.presenting == 'Summary'){
            $(this).css("whiteSpace","pre");
        }else{
            $(this).css("whiteSpace","pre");
        }
    });
}

function downloadFile() {
    var a = document.createElement('a'),
        ev = document.createEvent("MouseEvents");
    a.href = filePath+'_download.txt';
    a.download = name;
    ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0,
                      false, false, false, false, 0, null);
    a.dispatchEvent(ev);
}