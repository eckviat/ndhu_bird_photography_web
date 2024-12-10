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
});