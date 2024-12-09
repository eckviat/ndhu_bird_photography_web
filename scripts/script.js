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
                // 僅在未顯示時添加 "show"
                if (!entry.target.classList.contains('show')) {
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hide');
                }
            } else {
                // 僅在未隱藏時添加 "hide"
                if (!entry.target.classList.contains('hide')) {
                    entry.target.classList.add('hide');
                    entry.target.classList.remove('show');
                }
            }
        });
    }, {
        rootMargin: '-10% 0px -10% 0px', // 提前 100px 時觸發離場
        threshold: 0.1 // 當 10% 的元素可見時觸發
    });

    // 將每個目標元素添加到 Observer 中
    fadeInElements.forEach(el => observer.observe(el));
});