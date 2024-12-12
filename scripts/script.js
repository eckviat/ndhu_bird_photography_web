document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active'); // 切換選單的顯示狀態
    });

    const container = document.querySelector('.container');

    // 延遲 100ms 加入類名，觸發浮出效果
    setTimeout(() => {
        container.classList.add('show');
    }, 100);

    const fadeInElements = document.querySelectorAll('.fade-in'); // 選取所有目標元素

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 顯示
                entry.target.classList.remove('hide'); // 確保移除隱藏
            } else {
                entry.target.classList.add('hide'); // 隱藏
                entry.target.classList.remove('show'); // 確保移除顯示
            }
        });
    }, {
        rootMargin: '0% 0px -20% 0px', // 提前 100px 時觸發離場
        threshold: 0.1 // 當 10% 的元素可見時觸發
    });

    // 將每個目標元素添加到 Observer 中
    fadeInElements.forEach(el => observer.observe(el));

    const overlay = document.querySelector('.fullscreen-overlay');
    const dismissButton = document.querySelector('.dismiss-button');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('#main-content');

    // 點擊按鈕後觸發動畫
    dismissButton.addEventListener('click', (e) => {
        e.preventDefault(); // 防止默認跳轉
        overlay.classList.add('hidden'); // 背景模糊與消失

        navbar.classList.remove('hidden'); // 移除 hidden 類
        navbar.classList.add('visible'); // 添加 visible 顯示類
        
        mainContent.classList.add('show'); // 顯示主內容
    });
});