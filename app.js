const laptops = [
    {
        id: 1,
        category: 'hp',
        title: 'HP LAPTOP - 14Z-FQ000',
        price: '12,858.36',
        img: 'https://www.hp.com/us-en/shop/app/assets/images/product/9VN16AV_1/center_facing.png?_=1646132870701&imwidth=270&imdensity=1',
        desc: 
        `<ul>
            <li>Windows 11 Home</li>
            <li>AMD 3020e processor</li>
            <li>AMD Radeon™ Graphics</li>
            <li>8 GB memory; 128 GB SSD storage</li>
        </ul>`,
    },
    {
        id: 2,
        category: 'acer',
        title: 'Aspire A314-35-C733',
        price: '21,999.00',
        img: 'https://static-ecapac.acer.com/media/catalog/product/cache/3406b1b44daa08472620e74815bd5d93/a/s/aspire3_314-35_sv_01a_front_1.jpg',
        desc: 
        `<ul>
            <li>14" HD 1366 x 768 resolution</li>
            <li>Intel UHD Graphics</li>
            <li>36.7 Wh 2-cell Li-ion battery</li>
            <li>Battery life up to 8 hours</li>
            <li>2 Years Warranty</li>
        </ul>`,
    },
    {
        id: 3,
        category: 'lenovo',
        title: 'ideapad slim 3i (15", Gen 5)',
        price: '37,795.00',
        img: 'https://www.lenovo.com/medias/IdeaPad_Slim_3i_15_88IPS301421_400x300.png?context=bWFzdGVyfHJvb3R8ODQ3NDR8aW1hZ2UvcG5nfGhlZS9oM2UvMTE2MjA4Mjk0NjI1NTgucG5nfGFmZjY0MmYyNDdiMGFiZTM4NTYxNWUxYWZmMDcyYzE1OGZhZGZiNzExOWI4MTc4Mzc1ZTNiZDk2NGE1MmM1MmQ',
        desc: 
        `<ul>
            <li>15.6" entry-level laptop you can count on</li>
            <li>Latest Intel® Core™ processors</li>
            <li>Great for everyday work & play</li>
        </ul>`,
    },
    {
        id: 4,
        category: 'lenovo',
        title: 'thinkpad l14 gen 2 - build your own no ethernet rj-45 included',
        price: '41,195.00',
        img: 'https://www.lenovo.com/medias/L14_Gen2_intel_22TPL14L4N2400x300.png?context=bWFzdGVyfHJvb3R8ODQ0NjB8aW1hZ2UvcG5nfGgwYy9oZmUvMTE2MTYwNjQ3NjU5ODIucG5nfGZiYzQ5N2Y0ZWNmZmMxODE5NWQzNGRkN2ZjNTNkMjkyNTVlMDcyMTY2NzViNDNlODhjYzljNmE2M2MwMTM5ODQ',
        desc: 
        `<ul>
            <li>Entry-level business laptop</li>
            <li>WiFi 6 & optional 4G WWAN connection</li>
            <li>Time-saving features to enhance productivity</li>
        </ul>`,
    },
    {
        id: 5,
        category: 'lenovo',
        title: 'thinkpad l15 gen 2 - build your own no ethernet rj-45 included',
        price: '39,995.00',
        img: 'https://www.lenovo.com/medias/L15_Gen2_intel_22TPL15L5N2_400x300.png?context=bWFzdGVyfHJvb3R8OTY1MTJ8aW1hZ2UvcG5nfGhkMS9oN2MvMTE2MTYyNDkzMTUzNTgucG5nfGM5M2NkZjY4ZjY4NzE4Y2U2NzQzNDM5ZmE1MjU5YmFmNWY1OGZlNDJlZDRiMTQyOTVkZjlkZmY2ZDJhYWY2YjE',
        desc: 
        `<ul>
            <li>15.6" laptop with numeric pad</li>
            <li>WiFi 6 & optional 4G WWAN connection</li>
            <li>Productivity features like Modern Standby & Rapid Charge</li>
        </ul>`,
    },
    {
        id: 6,
        category: 'lenovo',
        title: 'ideapad slim 1i (14", Gen 7)',
        price: '22,195.00',
        img: 'https://www.lenovo.com/medias/lenovo-laptops-ideapad-1i-gen-7-14-intel-series.png?context=bWFzdGVyfHJvb3R8NDMyNDA2fGltYWdlL3BuZ3xoOGQvaDIwLzEyODE3NjUxMDA3NTE4LnBuZ3wzN2IxMWQxNGQ0Nzk4ZjlkYWEyZTg3MWU3ZGFlYWE1YWE0YWU4MjA1YjAyNmYzOTg1ZGRhZWJlZmM5NTdlYWNi',
        desc: 
        `<ul>
            <li>Powered by dependable Intel® processors</li>
            <li>Available in fun color options</li>
            <li>Astounding thin & portable design</li>
        </ul>`,
    },
    {
        id: 7,
        category: 'acer',
        title: 'Aspire 3 A314-35-C6Y8',
        price: '21,999.00',
        img: 'https://static-ecapac.acer.com/media/catalog/product/cache/3406b1b44daa08472620e74815bd5d93/w/h/whatsapp_image_2021-04-26_at_10.08.25_pm_1__2.jpeg',
        desc: 
        `<ul>
            <li>Windows 10 Home</li>
            <li>Intel Celeron N4500</li>
            <li>14" TFT LCD with HD 1366 x 768 resolution</li>
            <li>Intel® UHD Graphics</li>
            <li>4 GB LPDDR4 SDRAM, 256 GB NVMe M.2</li>
            <li>36.7 Wh 2-cell Li-ion battery</li>
            <li>Battery life up to 8 hours</li>
        </ul>`,
    },
    {
        id: 8,
        category: 'acer',
        title: 'Aspire 3 A314-35-P4BJ',
        price: '24,999.00',
        img: 'https://static-ecapac.acer.com/media/catalog/product/cache/3406b1b44daa08472620e74815bd5d93/w/h/whatsapp_image_2021-04-26_at_10.08.25_pm_1__5.jpeg',
        desc: 
        `<ul>
            <li>Windows 10 Home</li>
            <li>Intel Pentium Silver N6000</li>
            <li>14" TFT LCD w/ HD 1366 x 768 resolution</li>
            <li>Intel UHD Graphics</li>
            <li>8 GB LPDDR4 SDRAM, 256 Gb NVMe M.2</li>
            <li>36.7 Wh 2-cell Li-ion battery</li>
            <li>Battery life up to 8 hours</li>
        </ul>`,
    },
    {
        id: 8,
        category: 'macbook',
        title: 'MacBook Pro 14”',
        price: '116,990.00',
        img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000',
        desc: 
        `<ul>
            <li>Apple M1 Pro chip or Apple M1 Max chip</li>
            <li>10-core CPU</li>
            <li>Up to 64GB unified memory</li>
            <li>8TB Maximum configurable storage1</li>
            <li>Touch ID</li>
        </ul>`,
    },
    {
        id: 9,
        category: 'acer',
        title: 'Aspire 3 A315-35-C672',
        price: '21,999.00',
        img: 'https://static-ecapac.acer.com/media/catalog/product/cache/3406b1b44daa08472620e74815bd5d93/w/h/whatsapp_image_2021-06-18_at_4.24.55_pm_2.jpeg',
        desc: 
        `<ul>
            <li>Windows 10 Home</li>
            <li>Intel Celeron N4500</li>
            <li>15.6" TFT LCD with Full HD 1920 x 1080 resolution</li>
            <li>Intel UHD Graphics</li>
            <li>4GB LPDDR4 SDRAM, 256 SSD NVMe M.2</li>
            <li>36.7 Wh 2-cell Li-ion battery</li>
            <li>Battery life up to 8.5 hours</li>
        </ul>`,
    },
    {
        id: 10,
        category: 'macbook',
        title: 'MacBook Pro 16”',
        price: '146,990.00',
        img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788574000',
        desc: 
        `<ul>
            <li>Apple M1 Pro chip or Apple M1 Max chip</li>
            <li>10-core CPU</li>
            <li>Up to 64GB unified memory</li>
            <li>8TB Maximum configurable storage1</li>
            <li>Touch ID</li>
        </ul>`,
    },
    {
        id: 11,
        category: 'hp',
        title: 'HP Laptop - 15z-ef2000 touch optional',
        price: '21,602.39',
        img: 'https://www.hp.com/us-en/shop/app/assets/images/product/2K3T2AV_1/center_facing.png?_=1646132759316&imwidth=270&imdensity=1',
        desc: 
        `<ul>
            <li>Windows 11 Home</li>
            <li>AMD Ryzen™ 5 processor</li>
            <li>AMD Radeon™ Graphics</li>
            <li>8 GB memory; 128 GB SSD storage</li>
        </ul>`,
    },
    {
        id: 12,
        category: 'hp',
        title: 'HP LAPTOP - 17Z-CP000 TOUCH OPTIONAL',
        price: '18,001.91',
        img: 'https://www.hp.com/us-en/shop/app/assets/images/product/2V2H8AV_1/center_facing.png?_=1646132762300&imwidth=270&imdensity=1',
        desc: 
        `<ul>
            <li>Windows 11 Home</li>
            <li>AMD Athlon™ Gold 3150U processor</li>
            <li>AMD Radeon™ Graphics</li>
            <li>8 GB memory; 128 GB SSD storage</li>
        </ul>`,
    },
    {
        id: 13,
        category: 'macbook',
        title: 'MacBook Pro 13”',
        price: '71,990.00',
        img: 'https://www.apple.com/v/macbook-pro-13/j/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg',
        desc: 
        `<ul>
            <li>Apple M1 chip</li>
            <li>8-core CPU</li>
            <li>Up to 16GB unified memory</li>
            <li>2TB Maximum configurable storage1</li>
            <li>Touch Bar and Touch ID</li>
        </ul>`,
    },

   
];

// select items
const laptopContainer = document.querySelector('.laptops');
const btnContainer = document.querySelector('.btn-container');
const modal = document.querySelector('.modal');


window.addEventListener('DOMContentLoaded', function() {

    displayItems(laptops);

    const categories = laptops.map(function(item) {
        return item.category;
    });
    
    const category = categories.reduce(function(values, item) {
        if(!values.includes(item)) {
            values.push(item);
        }
        return values;
    }, ['all']);

    const categoryBtns = category.map(function(item) {
        return `<button class="filter-btn" type="button" data-id="${item}">${item}</button>`;
    }).join('');

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;

            const categories = laptops.filter(function(item) {
                if(item.category === category) {
                    return item;
                };
            });

            if(category === 'all') {
                displayItems(laptops);
            } else {
                displayItems(categories);
            }

        });
    });

});

function displayItems(laptops) {
    const laptopItems = laptops.map(function(item) {
        return `<article class="laptop">
        <img src="${item.img}" alt="${item.title}" class="laptop__photo">
        <div class="laptop__info">
            <header>
                <h4>${item.title}</h4>
            </header>
            <div class="laptop__desc">
                ${item.desc}
            </div>
            
        </div>
        <div class="laptop__purchase">
                <h4 class="price">&#8369;${item.price}</h4>
                <button type="button" class="laptop__purchase-btn">purchase</button>
            </div>
    </article>`
    }).join('');

    laptopContainer.innerHTML = laptopItems;


    const purchaseBtns = document.querySelectorAll('.laptop__purchase-btn');

    purchaseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.classList.toggle('show-modal');
    });


});
};

// modal
const modalBtn = document.querySelector('.modal__btn');
modalBtn.addEventListener('click', function() {
    modal.classList.toggle('show-modal');
});
