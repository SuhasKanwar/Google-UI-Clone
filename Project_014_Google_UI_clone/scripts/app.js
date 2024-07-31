const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const clearBtn = document.querySelector(".clear-btn-container");
const searchIcon = document.querySelector("#search-icon");

function directQuery() {
    let searchValue = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${searchValue}`;
}

const searchActive = (event) => {
    searchInput.style.margin_right = "0rem";
    if(searchInput.value != ""){
        clearBtn.style.display = "flex";
    }
    else{
        clearBtn.style.display = "none";
    }
    if(event.key === 'Backspace' || event.key === 'Delete'){
        if(searchInput.value != ""){
            clearBtn.style.display = "flex";
        }
        else{
            clearBtn.style.display = "none";
        }
    }
    if(event.key === 'Enter'){
        directQuery();
    }
}

searchInput.addEventListener('keydown', function (event) {
    searchActive(event);
});

searchBtn.addEventListener('click', directQuery);
searchIcon.addEventListener('click', directQuery);

const clear = () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
}

clearBtn.addEventListener('click', clear);