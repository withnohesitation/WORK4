//api
const API_KEY = config.apikey;

//original
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=PlusLIVEEpilogue&channelId=UC1HWc_zvrY3WQdOAPiAMsFA&maxResults=8&key=${API_KEY}`)
.then(res=>res.json())
.then(json=>{

    data = json.items;
    console.log(data);

    let html=``;
        data.forEach(element => {
            html+=`
            <li class="swiper-slide content-item">
                <a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank">
                    <div class="thumb">
                        <img src="${element.snippet.thumbnails.medium.url}" alt="오리지널 썸네일">
                    </div>
                    <div class="desc">
                        ${element.snippet.title}
                    </div>
                </a>
            </li>`
        });

    $('.sc-original .swiper ul').html(html);

    
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


//tab1

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=EP.838&channelId=UCbD8EppRX3ZwJSou-TVo90A&maxResults=5&key=${API_KEY}`)
.then(res=>res.json())
.then(json=>{

    data = json.items;
    console.log(data);

    let html=``;
        data.forEach(element => {
            html+=`
            <li class="swiper-slide content-item">
                <a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank">
                    <div class="thumb">
                        <img src="${element.snippet.thumbnails.medium.url}" alt="추천 썸네일">
                    </div>
                    <div class="text">
                        <div class="desc">
                            <span>${element.snippet.title}</span>
                        </div>
                        <div class="name">
                            <span>엠카운트다운</span>
                        </div>
                    </div>
                </a>
            </li>`
        });

    $('.sc-video #tab1 ul').html(html);

    
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


//tab2


fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=엠카운트다운&channelId=UCbD8EppRX3ZwJSou-TVo90A&maxResults=10&key=${API_KEY}`)
.then(res=>res.json())
.then(json=>{

    data = json.items;
    console.log(data);

    let html=``;
        data.forEach(element => {
            html+=`
            <li class="swiper-slide content-item">
                <a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank">
                    <div class="thumb">
                        <img src="${element.snippet.thumbnails.medium.url}" alt="추천 썸네일">
                    </div>
                    <div class="text">
                        <div class="desc">
                            <span>${element.snippet.title}</span>
                        </div>
                        <div class="name">
                            <span>엠카운트다운</span>
                        </div>
                    </div>
                </a>
            </li>`
        });

    $('.sc-video #tab2 ul').html(html);

    
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });