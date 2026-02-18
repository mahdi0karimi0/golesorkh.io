// داده‌های دو زبانه
const translations = {
    fa: {
        // ناوبری
        home: "خانه",
        about: "درباره ما",
        menu: "منو",
        order: "سفارش",
        notice: "توجه",
        contact: "تماس",

        // بخش قهرمان
        restaurant_name: "چلوکبابی گل سرخ",
        hero_title: "طعم اصیل ایرانی با دستپخت علی کریمی",
        hero_subtitle: "کباب مرغ و گوشت با کیفیت عالی، برنج خوش عطر، نوشیدنی‌های خنک",
        highlight_fresh: "مواد اولیه تازه",
        highlight_price: "قیمت‌های ثابت و منصفانه",
        highlight_delivery: "تحویل سریع",
        view_menu: "مشاهده منو",
        order_now: "سفارش سریع",
        image_overlay: "چلوکبابی گل سرخ",

        // بخش درباره ما
        about_title: "درباره چلوکبابی گل سرخ",
        about_subtitle: "با بیش از ۱۰ سال تجربه در پخت غذاهای ایرانی",
        our_story: "داستان ما",
        story_text: "چلوکبابی گل سرخ توسط علی کریمی، آشپز با سابقه و با عشق به غذاهای ایرانی تأسیس شد. ما در این مجموعه بر کیفیت مواد اولیه و طعم اصیل غذاهای ایرانی تأکید داریم. هر روز با انتخاب بهترین مواد، غذایی لذیذ و سالم برای شما آماده می‌کنیم.",
        chef_name: "علی کریمی",
        chef_title: "مالک و آشپز ارشد",
        closed_friday: "تعطیلی جمعه‌ها",
        closed_friday_text: "چلوکبابی روزهای جمعه تعطیل می‌باشد",
        takeaway_only: "فقط بیرون‌بر",
        takeaway_only_text: "خدمات ما فقط به صورت بیرون‌بر می‌باشد",
        fixed_prices: "قیمت ثابت",
        fixed_prices_text: "قیمت‌های ما ثابت و بدون تغییر می‌باشد",

        // بخش منو
        menu_title: "منوی چلوکبابی گل سرخ",
        menu_subtitle: "انتخاب از میان غذاهای لذیذ و با کیفیت",
        all: "همه",
        main_dishes: "غذای اصلی",
        drinks: "نوشیدنی",
        side_dishes: "اضافی",
        add_to_cart: "افزودن به سبد",
        currency: "تومان",

        // بخش توجه
        important_notice: "توجه مهم",
        notice_friday: "روزهای جمعه",
        notice_friday_text: "چلوکبابی گل سرخ روزهای جمعه تعطیل می‌باشد. سفارش‌های مربوط به جمعه باید روز قبل انجام شود.",
        notice_takeaway: "نحوه سرویس",
        notice_takeaway_text: "خدمات ما فقط به صورت بیرون‌بر (Takeaway) ارائه می‌شود. امکان صرف غذا در محل وجود ندارد.",
        notice_prices: "قیمت‌ها",
        notice_prices_text: "تمامی قیمت‌های منو ثابت و مقطوع می‌باشند و بدون اطلاع قبلی تغییر نمی‌کنند.",
        notice_delivery: "زمان تحویل",
        notice_delivery_text: "زمان تحویل سفارش‌ها معمولاً ۴۵-۶۰ دقیقه می‌باشد. در ساعات شلوغی ممکن است این زمان بیشتر شود.",

        // بخش سفارش
        order_title: "سفارش آنلاین",
        order_subtitle: "غذای مورد علاقه خود را انتخاب و سفارش دهید",
        order_form_title: "فرم سفارش",
        full_name: "نام و نام خانوادگی *",
        phone_number: "شماره تماس *",
        delivery_address: "آدرس تحویل *",
        address_placeholder: "آدرس کامل برای تحویل غذا",
        select_food: "انتخاب غذا اصلی *",
        select_drink: "انتخاب نوشیدنی (اختیاری)",
        select_side: "انتخاب مایعات/ماست (اختیاری)",
        choose_food_option: "-- لطفاً غذا اصلی را انتخاب کنید --",
        no_drink_option: "-- بدون نوشیدنی --",
        no_side_option: "-- بدون مایعات --",
        quantity: "تعداد *",
        additional_notes: "توضیحات اضافی (اختیاری)",
        notes_placeholder: "مثال: غذا کم نمک باشد، نوشابه بزرگ همراه غذا",
        agree_terms: "با شرایط و قوانین چلوکبابی گل سرخ موافقم",
        submit_order: "ثبت سفارش",
        order_summary: "خلاصه سفارش",
        summary_text: "هیچ آیتمی انتخاب نشده است",
        total: "مجموع:",
        delivery_info: "اطلاعات تحویل",
        delivery_time: "زمان تحویل: ۴۵-۶۰ دقیقه",
        payment_method: "پرداخت فقط در محل",
        support_phone: "پشتیبانی: 09139812028",

        // بخش تماس
        contact_title: "تماس با ما",
        contact_subtitle: "برای سفارش و اطلاعات بیشتر با ما در ارتباط باشید",
        address_title: "آدرس چلوکبابی",
        phone_title: "تلفن سفارشات",
        hours_title: "ساعات کاری",
        hours_text: "شنبه تا پنجشنبه: 11 تا 14 و 17 تا 21",
        friday_closed: "جمعه: تعطیل",
        service_info: "نحوه خدمات",
        service_text: "فقط به صورت بیرون‌بر",
        follow_us: "ما را دنبال کنید",
        location_title: "موقعیت ما",
        location_text: "طاقانک، خیابان امام",
        location_detail: "جنب گلستان 35، چلوکبابی گل سرخ",

        // فوتر
        footer_slogan: "طعمی که ماندگار می‌شود",
        chef_credit: "آشپز: علی کریمی",
        quick_links: "لینک‌های سریع",
        contact_info: "اطلاعات تماس",
        working_days: "شنبه تا پنجشنبه: 11 تا 14 و 17 تا 21",
        friday_off: "جمعه: تعطیل",
        important_notice: "توجه",
        notice_takeaway_footer: "سرویس فقط به صورت بیرون‌بر",
        notice_prices_footer: "قیمت‌ها مقطوع",
        notice_friday_footer: "جمعه‌ها تعطیل",
        copyright: "© 1404 چلوکبابی گل سرخ. تمامی حقوق محفوظ است.",
        order_now_footer: "سفارش آنلاین",

        // اعلان
        order_success: "سفارش شما با موفقیت ثبت شد!",
        order_success_desc: "به زودی با شما تماس می‌گیریم"
    },
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        menu: "Menu",
        order: "Order",
        notice: "Notice",
        contact: "Contact",

        // Hero Section
        restaurant_name: "Gol-e Sorkh Restaurant",
        hero_title: "Authentic Iranian Taste by Chef Ali Karimi",
        hero_subtitle: "High-quality chicken and meat kebabs, aromatic Iranian rice, refreshing drinks",
        highlight_fresh: "Fresh Ingredients",
        highlight_price: "Fixed Fair Prices",
        highlight_delivery: "Fast Delivery",
        view_menu: "View Menu",
        order_now: "Quick Order",
        image_overlay: "Chicken and Meat Kebab with Iranian Rice",

        // About Section
        about_title: "About Gol-e Sorkh Restaurant",
        about_subtitle: "With over 10 years of experience in Iranian cuisine",
        our_story: "Our Story",
        story_text: "Gol-e Sorkh Restaurant was founded by Ali Karimi, an experienced chef with a passion for Iranian food. In this establishment, we emphasize the quality of ingredients and authentic Iranian flavors. Every day, we prepare delicious and healthy food for you by selecting the best ingredients.",
        chef_name: "Ali Karimi",
        chef_title: "Owner and Head Chef",
        closed_friday: "Closed on Fridays",
        closed_friday_text: "The restaurant is closed on Fridays",
        takeaway_only: "Takeaway Only",
        takeaway_only_text: "Our service is only available for takeaway",
        fixed_prices: "Fixed Prices",
        fixed_prices_text: "Our prices are fixed and do not change",

        // Menu Section
        menu_title: "Gol-e Sorkh Restaurant Menu",
        menu_subtitle: "Choose from our delicious and high-quality dishes",
        all: "All",
        main_dishes: "Main Dishes",
        drinks: "Drinks",
        side_dishes: "Extras",
        add_to_cart: "Add to Cart",
        currency: "Toman",

        // Notice Section
        important_notice: "Important Notice",
        notice_friday: "Fridays",
        notice_friday_text: "Gol-e Sorkh Restaurant is closed on Fridays. Orders for Friday must be placed the day before.",
        notice_takeaway: "Service Type",
        notice_takeaway_text: "Our service is only available for takeaway. Dining in is not possible.",
        notice_prices: "Prices",
        notice_prices_text: "All menu prices are fixed and will not change without prior notice.",
        notice_delivery: "Delivery Time",
        notice_delivery_text: "Delivery time is usually 45-60 minutes. During busy hours, this time may be longer.",

        // Order Section
        order_title: "Online Order",
        order_subtitle: "Choose and order your favorite food",
        order_form_title: "Order Form",
        full_name: "Full Name *",
        phone_number: "Phone Number *",
        delivery_address: "Delivery Address *",
        address_placeholder: "Complete address for food delivery",
        select_food: "Select Main Food *",
        select_drink: "Select Drink (Optional)",
        select_side: "Select Side Items (Optional)",
        choose_food_option: "-- Please select main food --",
        no_drink_option: "-- No drink --",
        no_side_option: "-- No side items --",
        quantity: "Quantity *",
        additional_notes: "Additional Notes (Optional)",
        notes_placeholder: "Example: Less salt in food, large drink with meal",
        agree_terms: "I agree with Gol-e Sorkh Restaurant terms and conditions",
        submit_order: "Submit Order",
        order_summary: "Order Summary",
        summary_text: "No items selected",
        total: "Total:",
        delivery_info: "Delivery Information",
        delivery_time: "Delivery Time: 45-60 minutes",
        payment_method: "Payment: Cash on delivery only",
        support_phone: "Support: 0912 123 4567",

        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "Get in touch with us for orders and more information",
        address_title: "Restaurant Address",
        phone_title: "Order Phone",
        hours_title: "Working Hours",
        hours_text: "Saturday to Thursday: 11:00 AM to 10:00 PM",
        friday_closed: "Friday: Closed",
        service_info: "Service Type",
        service_text: "Takeaway only - Delivery to your location",
        follow_us: "Follow Us",
        location_title: "Our Location",
        location_text: "Taghanak, Emam Street",
        location_detail: "Next to Golestan 35",

        // Footer
        footer_slogan: "A taste that lasts",
        chef_credit: "Chef: Ali Karimi",
        quick_links: "Quick Links",
        contact_info: "Contact Information",
        working_days: "Sat-Thu: 11AM-10PM",
        friday_off: "Friday: Closed",
        important_notice: "Notice",
        notice_takeaway_footer: "Service: Takeaway only",
        notice_prices_footer: "Fixed prices",
        notice_friday_footer: "Closed on Fridays",
        copyright: "© 2024 Gol-e Sorkh Restaurant. All rights reserved.",
        order_now_footer: "Order Online",

        // Notification
        order_success: "Your order has been successfully placed!",
        order_success_desc: "We will contact you soon"
    }
};

// داده‌های منو مطابق با مشخصات شما با تصاویر ایرانی
const menuItems = [{
        id: 1,
        name: "کباب گوشت سیخی",
        name_en: "Beef Kebab Skewer",
        description: "کوبیده گوشت",
        description_en: "Beef kebab with Iranian rice and butter",
        price: 80000,
        category: "main",
        image: "img/goosht.jpg"
    },
    {
        id: 2,
        name: "کباب مرغ سیخی",
        name_en: "Chicken Kebab Skewer",
        description: "کوبیده مرغ",
        description_en: "Chicken kebab with Iranian rice and butter",
        price: 50000,
        category: "main",
        image: "img/morgh.jpg"
    },
    {
        id: 3,
        name: "برنج و کباب مرغ",
        name_en: "Rice with Chicken Kebab",
        description: "برنج با کباب مرغ و کره",
        description_en: "Iranian rice with chicken kebab and butter",
        price: 170000,
        category: "main",
        image: "img/morghandrice.jpg"
    },
    {
        id: 4,
        name: "برنج و کباب گوشت",
        name_en: "Rice with Beef Kebab",
        description: "برنج با کباب گوشت و کره",
        description_en: "Iranian rice with beef kebab and butter",
        price: 210000,
        category: "main",
        image: "img/gooshtandrice.jpg"
    },
    {
        id: 7,
        name: "نوشابه بزرگ",
        name_en: "Large Soda",
        description: "نوشابه گازدار ۱.۵ لیتری",
        description_en: "1.5L carbonated soda",
        price: 59000,
        category: "drink",
        image: "img/noshabebozorg.jpg"
    },
    {
        id: 8,
        name: "نوشابه کوچک",
        name_en: "Small Soda",
        description: "نوشابه گازدار ۳۳۰ میلی‌لیتری",
        description_en: "330ml carbonated soda",
        price: 25000,
        category: "drink",
        image: "img/noshabekochak.jpg"
    },
    {
        id: 9,
        name: "ماست",
        name_en: "Yogurt",
        description: "ماست محلی تازه",
        description_en: "Fresh local yogurt",
        price: 24000,
        category: "side",
        image: "img/mast.jpg"
    },
    {
        id: 10,
        name: "دوغ بزرگ",
        name_en: "Doogh",
        description: "دوغ سنتی ایرانی",
        description_en: "Traditional Iranian doogh",
        price: 69000,
        category: "drink",
        image: "img/dogh.jpg"
    }
];

// متغیرهای سراسری
let currentLanguage = 'fa';
let cart = [];
let currentCategory = 'all';

// تابع برای تغییر زبان
function changeLanguage(lang) {
    currentLanguage = lang;

    // تغییر جهت صفحه برای انگلیسی
    if (lang === 'en') {
        document.body.classList.add('en');
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        document.body.classList.remove('en');
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'fa');
    }

    // بروزرسانی دکمه‌های تغییر زبان
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // ترجمه تمام عناصر با داده-کلید
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // بروزرسانی منو
    renderMenuItems();

    // بروزرسانی گزینه‌های انتخاب غذا در فرم سفارش
    populateFoodOptions();

    // بروزرسانی سبد خرید
    updateOrderSummary();
}

// تابع برای رندر آیتم‌های منو
function renderMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
    const filteredItems = currentCategory === 'all' ?
        menuItems :
        menuItems.filter(item => item.category === currentCategory);

    menuContainer.innerHTML = '';

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;

        menuItem.innerHTML = `
        <div class="menu-item-img">
        <img src="${item.image}" alt="${currentLanguage === 'fa' ? item.name : item.name_en}">
    </div>    
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3 class="menu-item-name">${currentLanguage === 'fa' ? item.name : item.name_en}</h3>
                    <span class="menu-item-price">${item.price.toLocaleString()} ${translations[currentLanguage].currency}</span>
                </div>
                <p class="menu-item-desc">${currentLanguage === 'fa' ? item.description : item.description_en}</p>
                <span class="menu-item-category">${translations[currentLanguage][item.category + (item.category === 'main' ? '_dishes' : item.category === 'drink' ? 's' : '_dishes')]}</span>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i>
                    ${translations[currentLanguage].add_to_cart}
                </button>
            </div>
        `;

        menuContainer.appendChild(menuItem);
    });

    // اضافه کردن رویداد به دکمه‌های افزودن به سبد
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.dataset.id);
            addToCart(itemId);
        });
    });
}

// تابع برای افزودن به سبد خرید
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    updateOrderSummary();
    showNotification(translations[currentLanguage].order_success);
}

// تابع برای بروزرسانی خلاصه سفارش
function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const summaryText = document.querySelector('.empty-summary');

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '';
        totalPriceElement.textContent = '0';
        if (summaryText) {
            summaryText.style.display = 'block';
        }
        return;
    }

    // پنهان کردن خلاصه متن
    if (summaryText) {
        summaryText.style.display = 'none';
    }

    // ایجاد آیتم‌های سبد خرید
    orderItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';

        itemElement.innerHTML = `
            <div class="order-item-name">${currentLanguage === 'fa' ? item.name : item.name_en} × ${item.quantity}</div>
            <div class="order-item-price">${(item.price * item.quantity).toLocaleString()} ${translations[currentLanguage].currency}</div>
        `;

        orderItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total.toLocaleString();
}

// تابع برای پر کردن گزینه‌های انتخاب غذا
function populateFoodOptions() {
    const foodSelect = document.getElementById('foodItem');
    const drinkSelect = document.getElementById('drinkItem');
    const sideSelect = document.getElementById('sideItem');

    // پاک کردن گزینه‌های قبلی (به جز گزینه پیش‌فرض)
    while (foodSelect.children.length > 1) {
        foodSelect.removeChild(foodSelect.lastChild);
    }
    while (drinkSelect.children.length > 1) {
        drinkSelect.removeChild(drinkSelect.lastChild);
    }
    while (sideSelect.children.length > 1) {
        sideSelect.removeChild(sideSelect.lastChild);
    }

    // پر کردن منوی غذاهای اصلی
    menuItems.filter(item => item.category === 'main').forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = currentLanguage === 'fa' ? item.name : item.name_en;
        option.dataset.price = item.price;
        foodSelect.appendChild(option);
    });

    // پر کردن منوی نوشیدنی‌ها
    menuItems.filter(item => item.category === 'drink').forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = currentLanguage === 'fa' ? item.name : item.name_en;
        option.dataset.price = item.price;
        drinkSelect.appendChild(option);
    });

    // پر کردن منوی مایعات/ماست
    menuItems.filter(item => item.category === 'side').forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = currentLanguage === 'fa' ? item.name : item.name_en;
        option.dataset.price = item.price;
        sideSelect.appendChild(option);
    });
}

// تابع برای نمایش اعلان
function showNotification(message) {
    const notification = document.getElementById('orderSuccess');
    const notificationTitle = notification.querySelector('.notification-title');
    const notificationDesc = notification.querySelector('.notification-desc');

    notificationTitle.textContent = message;
    notificationDesc.textContent = translations[currentLanguage].order_success_desc;
    notification.style.display = 'flex';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

// تابع برای مدیریت ارسال فرم سفارش
function handleOrderFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const foodItemId = parseInt(document.getElementById('foodItem').value);
    const drinkItemId = parseInt(document.getElementById('drinkItem').value) || null;
    const sideItemId = parseInt(document.getElementById('sideItem').value) || null;
    const quantity = parseInt(document.getElementById('quantity').value);
    const notes = document.getElementById('notes').value;

    if (!name || !phone || !address || !foodItemId) {
        alert(currentLanguage === 'fa' ? 'لطفا تمام فیلدهای اجباری را پر کنید' : 'Please fill in all required fields');
        return;
    }

    // افزودن غذای اصلی به سبد خرید
    const mainItem = menuItems.find(i => i.id === foodItemId);
    if (mainItem) {
        const existingMain = cart.find(i => i.id === foodItemId);
        if (existingMain) {
            existingMain.quantity += quantity;
        } else {
            cart.push({
                ...mainItem,
                quantity: quantity
            });
        }
    }

    // افزودن نوشیدنی به سبد خرید (اگر انتخاب شده باشد)
    if (drinkItemId) {
        const drinkItem = menuItems.find(i => i.id === drinkItemId);
        if (drinkItem) {
            const existingDrink = cart.find(i => i.id === drinkItemId);
            if (existingDrink) {
                existingDrink.quantity += quantity;
            } else {
                cart.push({
                    ...drinkItem,
                    quantity: quantity
                });
            }
        }
    }

    // افزودن مایعات/ماست به سبد خرید (اگر انتخاب شده باشد)
    if (sideItemId) {
        const sideItem = menuItems.find(i => i.id === sideItemId);
        if (sideItem) {
            const existingSide = cart.find(i => i.id === sideItemId);
            if (existingSide) {
                existingSide.quantity += quantity;
            } else {
                cart.push({
                    ...sideItem,
                    quantity: quantity
                });
            }
        }
    }

    // ریست کردن فرم
    e.target.reset();
    document.getElementById('quantity').value = 1;

    // بروزرسانی خلاصه سفارش
    updateOrderSummary();

    // نمایش پیام موفقیت
    showNotification(translations[currentLanguage].order_success);

    // اسکرول به بخش سفارش
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
}

// تابع برای مدیریت منوی موبایل
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('open');
        mobileNavOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
    mobileNavOverlay.addEventListener('click', closeMobileMenu);

    // بستن منو با کلیک روی لینک‌ها
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
        mobileNav.classList.remove('open');
        mobileNavOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// تابع برای مدیریت ناوبری فعال
function initActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// تابع برای مدیریت تغییر دسته‌بندی منو
function initMenuCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // حذف کلاس active از همه دکمه‌ها
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // اضافه کردن کلاس active به دکمه کلیک شده
            this.classList.add('active');

            // بروزرسانی دسته‌بندی فعلی و رندر مجدد منو
            currentCategory = this.dataset.category;
            renderMenuItems();
        });
    });
}

// تابع برای مدیریت فرم عضویت در خبرنامه
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                showNotification(currentLanguage === 'fa' ?
                    'ایمیل شما با موفقیت ثبت شد!' :
                    'Your email has been successfully registered!');
                this.reset();
            }
        });
    }
}

// تابع برای بستن اعلان
function initNotificationClose() {
    const closeNotificationBtn = document.querySelector('.close-notification');

    if (closeNotificationBtn) {
        closeNotificationBtn.addEventListener('click', function() {
            document.getElementById('orderSuccess').style.display = 'none';
        });
    }
}

// تابع اولیه‌سازی
function init() {
    // تنظیم زبان پیش‌فرض
    changeLanguage('fa');

    // رویداد تغییر زبان
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });

    // رویداد فرم سفارش
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderFormSubmit);
    }

    // مقداردهی اولیه منو
    renderMenuItems();

    // مقداردهی اولیه منوی موبایل
    initMobileMenu();

    // مقداردهی اولیه ناوبری فعال
    initActiveNavigation();

    // مقداردهی اولیه دسته‌بندی‌های منو
    initMenuCategories();

    // مقداردهی اولیه فرم خبرنامه
    initNewsletterForm();

    // مقداردهی اولیه بستن اعلان
    initNotificationClose();

    // بروزرسانی خلاصه سفارش
    updateOrderSummary();
}

// اجرای تابع اولیه‌سازی پس از بارگذاری صفحه
document.addEventListener('DOMContentLoaded', init);
