
    //Getting Categories from JSON
    fetch('./js/JSON/categories.json').then((res) => { return res.json(); }).then((obj) => {
        var catBoxHTML = '';
        for (var i = 0; i < obj.categories.length; i++) {
            console.log(obj.categories[i]);
            catBoxHTML += `
            <div class="col-md-6">
                <div class="box">
                    <div class="imgBox">
                        <img src="./images/${obj.categories[i].image}" alt="HandBags">
                    </div>
                    <div>
                        <p><a href="./products.html?e=${obj.categories[i].param_as_file_name}">${obj.categories[i].name}</a></p>
                    </div>
                </div>    
            </div>
    `;
        }
        document.getElementById('categories').innerHTML = catBoxHTML;
        //console.log(catBoxHTML);
    }).catch((error) => { alert(error); })
