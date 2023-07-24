
// Hàm domID:
const domID = id => document.querySelector(id);

// Call API => Show ListChosen:
const getListChosen = () => {
    const promise = axios({
        url: DOMAIN,
        method: 'GET',
    })

    promise
        .then((result) => {
            const nav = result.data[0].navPills;
            renderListChosen(nav);
        })

        .catch((err) => {
            console.log("err: ", err);
        })
}

// Gọi hàm getListChosen:
getListChosen();

// Render Show ListChosen:
const renderListChosen = (arrListChosen) => {
    let htmlContent = '';
    arrListChosen.forEach((ele) => {
        htmlContent += `<button 
                class="nav-link btnShow btn btn-outline-primary px-0"
                style="width: 14.2%" id="v-pills-home-tab"
                data-toggle="pill" data-target="#v-pills-home"
                type="button" role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="true"
                onclick="getType('${ele.type}')"
                > ${ele.showName}
                </button>`;
    });
    domID('#v-pills-tab').innerHTML = htmlContent;

    // Khi mở/ load trang web, btn đầu tiên sẽ được mở:
    domID('.btnShow').click();
}

// Call API => Show ListChosen:
const getChoseItem = () => {
    const promise = axios({
        url: DOMAIN,
        method: 'GET',
    })

    promise
        .then((result) => {
            const nav = result.data[0].tabPanes;
            renderChoseItem(nav)
        })

        .catch((err) => {
            console.log("err: ", err);
        })
}

// Hàm lấy type để choseItem ra UI:
let typeActive = '';
const getType = (type) => {

    typeActive = type;

    // Gọi hàm getChoseItem:
    getChoseItem();
}

// Render Show ListChosen:
const renderChoseItem = (arrChoseItem) => {
    let arrType = arrChoseItem.filter((ele) => ele.type === typeActive);
    let htmlContent = '';
    arrType.forEach((ele) => {
        htmlContent += `<div class="col-12 col-md-6 col-lg-3">
            <div class="card mb-4" style=" background-color: rgb(219, 238, 255); padding: 10px; ">
                <img src="${ele.imgSrc_jpg}" class="card-img-top" alt="...">
                <div class="card-body" style="padding: 10px 0 0 0;">
                    <h5 class="card-title text-center">${ele.name}</h5>
                    <a href="#" class="btn btn-info w-100" onclick="dressing('${ele.type}','${ele.imgSrc_png}')">Thử đồ</a>
                </div>
            </div>
        </div>`
    });
    domID('#tabContentHTML').innerHTML = htmlContent;
}

// Hàm thử đồ:
const dressing = (type, src) => {
    if (type === 'topclothes') {
        domID('.bikinitop').style.cssText = `background-image: url(${src})`;
    } else if (type === 'botclothes') {
        domID('.bikinibottom').style.cssText = `background-image: url(${src})`;
    } else if (type === 'shoes') {
        domID('.feet').style.cssText = `background-image: url(${src})`;
    } else if (type === 'handbags') {
        domID('.handbag').style.cssText = `background-image: url(${src})`;
    } else if (type === 'necklaces') {
        domID('.necklace').style.cssText = `background-image: url(${src})`;
    } else if (type === 'hairstyle') {
        domID('.hairstyle').style.cssText = `background-image: url(${src})`;
    } else if (type === 'background') {
        domID('.background').style.cssText = `background-image: url(${src})`;
    }
}


