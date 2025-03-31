// const { default: axios } = require("axios");
let today = new Date()
let the_day = document.getElementById('the_day');
let days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
the_day.innerHTML = `
<span>${days[today.getDay()]} : </span>
<span>${today.getFullYear()}</span>
<span> / ${today.getMonth()}</span>
  <span> / ${today.getDate()}</span>
`

function convertTO12Hure(time12) {
    let partes = time12.slice(0, 5).split(":")
    let part1 = partes[0];
    let part2 = partes[1];
    part1 = part1 > 12 ? part1 - 12 : part1
    // console.log(part1 - 12);
    // console.log(Number(part2));
    return part1 + ":" + part2

}
// convertTO12Hure("18:02(ITS)")

let paramas = {
    country: this.paramas,
    city: this.paramas
}



let contary = document.getElementById('contary');
// let city_sudan = document.getElementById('city_sudan');
// let city_sudia = document.getElementById('city_sudia');
let city = document.querySelector('.city-contanir');
let countery_name = document.getElementById('countery_name');
let cityLable = document.createElement('label');
cityLable.setAttribute("for", "city");
cityLable.innerHTML = 'إختار المدينة';

let cityChange = document.querySelector('body > section > div.city-contanir > select');


let loadingSpinner = document.getElementById('loading-spinner');


cityChange.addEventListener('change', () => {
    getCity(paramas.country = 'SD', paramas.city);

})


contary.addEventListener('change', function () {
    if (contary.value == '') {
        alert('الرجاء إختيار دولة لإكمال الإجراء')
    }
    if (contary.value === "SD") {
        countery_name.innerHTML = `السودان`
        let select = document.createElement('select');
        select.innerHTML = `
            <option value="" selected class="city"  >إختار المدينة</option>
            <option value="SD-KH" class="city">الخرطوم</option>
            <option value="SD-NR" class="city">نهر النيل</option>
            <option value="SD-DN" class="city">شمال دارفور</option>
            <option value="SD-KN" class="city">شمال كردفان</option>
            <option value="SD-RS" class="city">البحر الأحمر</option>
            <option value="SD-GZ" class="city">الجزيرة</option>
        `
        select.setAttribute("id", "city");
        city.innerHTML = '';
        city.appendChild(cityLable);
        city.appendChild(select);
        select.addEventListener('change', function () {
            paramas.country = "SD";
            paramas.city = select.value;
            getCity(paramas.country, paramas.city);
        })

    } else if (contary.value === "SA") {
        countery_name.innerHTML = "السعودية"
        let select = document.createElement('select');
        select.innerHTML = `
            <option value="" selected   >إختار المدينة</option>
            <option value="SA-01" class="city">الرياض</option>
            <option value="SA-05" class="city">القصيم</option>
            <option value="SA-02" class="city">مكة المكرمة</option>
            <option value="SA-04" class="city">الشرقية</option>
            <option value="SA-07" class="city">تبوك</option>
            <option value="SA-03" class="city">المدينة</option>
`
        select.setAttribute("id", "city");
        city.innerHTML = '';
        city.appendChild(cityLable);
        city.appendChild(select);
        select.addEventListener('change', () => {
            paramas.country = "SA";
            paramas.city = select.value;
            getCity(paramas.country, paramas.city);
        })
    } else if (contary.value === "EG") {
        countery_name.innerHTML = "مصر"
        let select = document.createElement('select');
        select.innerHTML = `
            <option value="" selected   >إختار المدينة</option>
            <option value="EG-ALX" class="city">الإسكندرية</option>
            <option value="EG-C" class="city">القاهرة</option>
            <option value="EG-IS" class="city">الإسماعلية</option>
            <option value="EG-GZ" class="city">الجيزة</option>
            <option value="EG-MN" class="city">المنية</option>
            <option value="EG-SIN" class="city">شمال سيناء</option>
`
        city.innerHTML = '';
        select.setAttribute("id", "city");
        city.appendChild(cityLable);
        city.appendChild(select);
        select.addEventListener('change', () => {
            paramas.country = "EG";
            paramas.city = select.value;
            getCity(paramas.country, paramas.city);
        })
    }
})
getCity("SD", "SD-KH")
function getCity(contery, city) {

    let Times_prayer = document.getElementById('Times_prayer');
    loadingSpinner.classList.remove("hidden");
    Times_prayer.style.visibility = 'hidden'

    axios.get(`http://api.aladhan.com/v1/calendarByCity?=&country=${contery}&year=${today.getFullYear()}&month=${today.getMonth()}&city=${city}`)
        .then(respons => {
            // console.log(respons.data);
            let citys = respons.data.data[today.getDay()].timings
            console.log(citys);

            let Times_prayer = document.getElementById('Times_prayer');
            Times_prayer.innerHTML = `
                    
                        <div class="card">
                                                            <div class="content">
                                    <h3>الفجر</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Fajr)}</p>
                        </div>
        
                        
                        <div class="card">
                                                            <div class="content">
                                    <h3>الشروق</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Imsak)}</p>
                        </div>
        
                        <div class="card">
                                                            <div class="content">
                                    <h3>الظهر</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Dhuhr)}</p>
                        </div>
                        
                        <div class="card">
                                                            <div class="content">
                                    <h3>العصر</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Asr)}</p>
                        </div>
        
                        <div class="card">
                                                            <div class="content">
                                    <h3>المغرب</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Maghrib)}</p>
                        </div>
                        
                        <div class="card">
                                <div class="content">
                                    <h3>العشاء</h3>
                                    <img src="assest/4527060.png" style="width: 30px;">
                                </div>
                            <p>${convertTO12Hure(citys.Isha)}</p>
                        </div>
        `
        })
        .catch(error => {
            console.log(error);

        })
        .finally(() => {
            loadingSpinner.classList.add("hidden")
            Times_prayer.style.visibility = 'visible'
        })

}

// let showContact = document.querySelector('.tooltip-content');
// let button = document.querySelector('.button-content');
// button.addEventListener('click', () => {
//     showContact.classList.toggle('show')
// })


let dark = document.getElementById('dark');
let light = document.getElementById('light');

let bodyTheme = document.body;

function dark_() {
    bodyTheme.setAttribute('data-theme', 'light')
    light.classList.toggle('toggle');
    dark.classList.toggle('toggle');
}

function light_() {
    bodyTheme.setAttribute('data-theme', 'dark')
    light.classList.toggle('toggle');
    dark.classList.toggle('toggle');
}

let overlay = document.querySelector('.overlay');
setTimeout(() => {
    overlay.classList.add('hide')
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 900);
}, 2000);


document.addEventListener('DOMContentLoaded', function () {
    const share = document.getElementById('share');
    const status = document.getElementById('status');

    function show(pram){
        pram.style.visibility = 'visible';
        setTimeout(() => {
            pram.style.visibility = 'hidden'
        }, 2000);
    }

    share.addEventListener('click', async () => {
        try {

            if (navigator.share) {
                await navigator.share({
                    title: " صدقة جارية لوالدي, معرفة مواقيت الصلاة",
                    url: window.location.href
                })
                show(status);
                console.log("done" + navigator.share);

            } else {
                await navigator.clipboard.writeText(window.location.href);
                show(status);
            }

        } catch (error) {
            console.log("erros :" + error);
            
        }
    })

})