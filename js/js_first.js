var algoList = {'Naïve Bayes':'naive','Decision Table':'decisionTable',
                'Logistic':'logistic','SPegasos':'pegasos',
                'RepTree':'repTree','Simple Logistic':'simpleLogistic',
                'Support Vector Machine (SVM)':'SVM'};
var filterList = {'Normal':'cross_normal','Class Balancer':'cross_classBalancer','SMOTE':'cross_Smote'};
var costList = {Yes:'_cost_',No:'_neutral_'};


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


function showResults(){
    var algorithm = document.getElementById('algorithm_selected');
    var filter = document.getElementById('filter_selected');
    var cost_used = document.getElementById('matrix_selected');

    algorithm = algorithm.options[algorithm.selectedIndex].text;
    filter = filter.options[filter.selectedIndex].text;
    cost_used = cost_used.options[cost_used.selectedIndex].text;


    if (filter=='Class Balancer' && cost_used == 'No'){
        alert("STOP!!!");
    }

    var fileName = algoList[algorithm] + costList[cost_used] + filterList[filter];
    document.getElementById('text_area').innerHTML = fileName;
}

