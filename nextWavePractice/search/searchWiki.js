let searchInputEle = document.getElementById("searchInput");
let searchResultEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");

function createAndAppendSearchResult(result){
    let {title,link,description}=result;
    //divcontainer---result-item 
    let resultItemEle = document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultEle.appendChild(resultItemEle);

    //Anchor Title ---result-title 
    let resultTitelEle = document.createElement("a");
    resultTitelEle.classList.add("result-title");
    resultTitelEle.textContent = title;
    resultTitelEle.href = link;
    resultTitelEle.target="_blank";
    searchResultEle.appendChild(resultTitelEle);

    //title break
     let titleBreak = document.createElement("br");
     searchResultEle.appendChild(titleBreak);

    //Anchor url---result-url
    let urlEle = document.createElement("a");
    urlEle.classList.add("result-url");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    searchResultEle.appendChild(urlEle);

    //linebeak
    let lineBreak = document.createElement("br");
    searchResultEle.appendChild(lineBreak);

    //paragraph---link-description 
    let descEle = document.createElement("p");
    descEle.classList.add("link-description");
    descEle.textContent=description;
    searchResultEle.appendChild(descEle);

}

function displayResults(searchResult){
    spinnerEle.classList.toggle("d-none");
    for(let Result of searchResult){
        createAndAppendSearchResult(Result);
    }
}

function searchWiki(event){
    if(event.key === "Enter"){
        searchResultEle.textContent="";
        spinnerEle.classList.toggle("d-none");
        let searchInput = searchInputEle.value;
        //console.log(searchInput);
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options={
            method:"GET"
        }
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            //console.log(jsonData);
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}

searchInputEle.addEventListener("keydown",searchWiki);