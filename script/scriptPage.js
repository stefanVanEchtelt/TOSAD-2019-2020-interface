getBusinessRules();

function getBusinessRules() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let column_name = urlParams.get('column');
    fetch('http://localhost:8080/api/tosad/businessRule/businessRule/businessRules/column/'  + column_name,  {method: 'GET'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("not ok");
            }
        })
        .then((ruleJson) => {
            let py5 = document.getElementById('py-5-id');
            let index;
            for (index = 0; index < ruleJson.length; index++){
                py5.innerHTML += getCardHtml(ruleJson[index].id);
            }
            console.log("then myJson");
        })
}

function getCardHtml(ruleName) {
    let html =
        "<div class=\"container\">\n" +
        "      <div class=\"row\">\n" +
        "        <div class=\"col-md-12\">\n" +
        "          <div class=\"card\">\n" +
        "            <div class=\"card-body\">\n" +
        "              <p class=\"card-text\">" +
                            ruleName +
        "              </p>" +
        "               <a class=\"btn btn-info mr-3\" href=\"#\" style=\"\">Run</a><a class=\"btn btn-info\" href=\"table.html\">Terug</a>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>";
    return html;
}