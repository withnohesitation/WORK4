//original

    fetch(`https://raw.githubusercontent.com/withnohesitation/WORK4/refs/heads/main/assets/data/data_original.json`)
    .then(res=>res.json())
    .then(json=>{

        data = json.items;
        console.log(json.items);
        
        let html=``;
            data.forEach(element => {
                html+=`
                <li class="swiper-slide content-item">
                    <a href="https://www.youtube.com/watch?v=${element.videoId}" target="_blank">
                        <div class="thumb">
                            <img src="${element.thumbnails.url}" alt="오리지널 썸네일">
                        </div>
                        <div class="desc">
                            ${element.title}
                        </div>
                    </a>
                </li>`
            });

        $('.sc-original .swiper ul').html(html);

        
        })
        
        .catch(error => {
            console.error('Error fetching data:', error)
        });


    //tab1

    fetch(`https://raw.githubusercontent.com/withnohesitation/WORK4/refs/heads/main/assets/data/data_recomm.json`)
    .then(res=>res.json())
    .then(json=>{

        data = json.items;
        console.log(data);

        let html=``;
            data.forEach(element => {
                html+=`
                <li class="swiper-slide content-item">
                    <a href="https://www.youtube.com/watch?v=${element.videoId}" target="_blank">
                        <div class="thumb">
                            <img src="${element.thumbnails.url}" alt="추천 썸네일">
                        </div>
                        <div class="text">
                            <div class="desc">
                                <span>${element.title}</span>
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


    fetch(`https://raw.githubusercontent.com/withnohesitation/WORK4/refs/heads/main/assets/data/data_hot.json`)
    .then(res=>res.json())
    .then(json=>{

        data = json.items;
        console.log(data);

        let html=``;
            data.forEach(element => {
                html+=`
                <li class="swiper-slide content-item">
                    <a href="https://www.youtube.com/watch?v=${element.videoId}" target="_blank">
                        <div class="thumb">
                            <img src="${element.thumbnails.url}" alt="추천 썸네일">
                        </div>
                        <div class="text">
                            <div class="desc">
                                <span>${element.title}</span>
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