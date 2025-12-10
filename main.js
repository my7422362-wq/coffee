// ==========================
// 1. Navigation & Section Toggle
// ==========================
const menuLinks = document.querySelectorAll('nav ul li a');
const sections = {
    "fresh-menu-link": document.getElementById("fresh-menu"),
    "coffee-menu-link": document.getElementById("coffee-menu"),
    "pizza-menu-link": document.getElementById("pizza-menu"),
    "burger-menu-link": document.getElementById("burger-menu"),
    "dessert-menu-link": document.getElementById("dessert-menu")
};

// نخفي كل الأقسام
function hideAllSections() {
    for (let sec in sections) {
        sections[sec].style.display = "none";
    }
}

// عند تحميل الصفحة، نعرض Fresh Menu فقط
hideAllSections();
sections["fresh-menu-link"].style.display = "block";

// ربط الروابط بالأقسام
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        hideAllSections();

        const target = link.getAttribute("href").replace("#", "");
        const sectionId = target + "-menu"; // مثال: fresh-menu
        if (sections[sectionId]) {
            sections[sectionId].style.display = "block";
        }

        // Scroll لأعلى
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ==========================
// 2. Cart Management
// ==========================
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartPanel = document.getElementById("cart-panel");
const clearCartBtn = document.getElementById("clear-cart");

let cart = [];

// Add to Cart Buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-named");
        const price = parseFloat(button.getAttribute("data-price"));

        // إذا العنصر موجود، زد الكمية بدل إضافة عنصر جديد
        const existingItem = cart.find(item => item.name === name);
        if(existingItem){
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

// تحديث العربة
function updateCart() {
    // تحديث العدد
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // عرض العناصر
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
        cartItemsList.appendChild(li);
    });

    // تحديث المجموع
    cartTotal.textContent = `Total: $${total}`;
}

// إظهار/إخفاء Cart Panel
document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
    cartPanel.style.display = (cartPanel.style.display === "block") ? "none" : "block";
});

// Clear Cart
clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCart();
});





// ===== Testimonials Slider =====
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

// نخفي كل الكروت في البداية
cards.forEach((card, index) => {
    if(index !== 0) card.style.display = 'none';
});

// وظيفة تغيير الكارت تلقائياً كل 3 ثواني
function showNextTestimonial() {
    cards[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].style.display = 'block';
}

// تشغيل السلايدر
setInterval(showNextTestimonial, 3000);









const orderForm = document.getElementById('orderForm');
const message = document.getElementById('message');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const order = document.getElementById('order').value.trim();

    if(name && phone && address && order){
        message.textContent = `Thank you, ${name}! Your order has been sent successfully.`;
        message.style.color = '#1b4332';

        // إعادة ضبط الحقول
        orderForm.reset();
    } else {
        message.textContent = 'Please fill in all fields.';
        message.style.color = '#9d0208';
    }
});






// اختيار كل أيقونات الفوتر
const socialLinks = document.querySelectorAll('.social-link');

// إضافة حدث click لكل أيقونة
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // منع إعادة التوجيه لفترة قصيرة إذا أحببت الاختبار
        // e.preventDefault();

        // الحصول على اسم الشبكة من الكلاس
        let network = '';
        if(link.classList.contains('facebook')) network = 'Facebook';
        if(link.classList.contains('instagram')) network = 'Instagram';
        if(link.classList.contains('linkedin')) network = 'LinkedIn';
        if(link.classList.contains('github')) network = 'GitHub';
        if(link.classList.contains('whatsapp')) network = 'WhatsApp';

        // إنشاء رسالة مؤقتة
        const message = document.createElement('div');
        message.textContent = `Opening ${network}...`;
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.background = '#c49b63';
        message.style.color = '#fff';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '8px';
        message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        message.style.zIndex = '9999';
        message.style.fontFamily = 'Arial, sans-serif';
        message.style.opacity = '0';
        message.style.transition = '0.4s ease';

        document.body.appendChild(message);

        // عرض الرسالة تدريجي
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);

        // إخفاء الرسالة بعد 2 ثانية
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
            }, 400);
        }, 2000);
    });
});




