$(document).ready(function() {
    fetch('http://localhost:8080/api/tosad/table', {method: 'GET'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((tables) => {
            let tableHtml = document.getElementById('table_table__body_data');
            var i;
            for (i = 0; i < tables.length; i++) {
                tableHtml.innerHTML += getTrHtml(tables[i].name);
            }
        });
});

function getTrHtml(tableName) {
    let html = "<tr>";
    html += '<th class="table-light">' + tableName + '</th>';
    html += '<td class="table-light text-center"><a class="btn btn-info" href="script.html?table=' + tableName + '">Show rules</a></td>';
    html += '<td class="table-light text-center"><a class="btn btn-info" href="rule.html?table=' + tableName + '">New rule</a></td>';
    html += '</tr>';

    return html;
}