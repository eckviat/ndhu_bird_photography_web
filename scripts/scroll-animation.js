// 選取所有目標元素
const fadeInElements = document.querySelectorAll('.photo-text-box');

// 建立 IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 進入視野：添加滑入效果
                if (entry.target.classList.contains('left-image')) {
                    entry.target.classList.add('slide-in-left');
                } else if (entry.target.classList.contains('right-image')) {
                    entry.target.classList.add('slide-in-right');
                }
                entry.target.classList.remove('fade-out'); // 確保移除淡出效果
            } else {
                // 離開視野：添加淡出效果
                entry.target.classList.add('fade-out');
                entry.target.classList.remove('slide-in-left'); // 移除左滑入效果
                entry.target.classList.remove('slide-in-right'); // 移除右滑入效果
            }
        });
    },
    {
        rootMargin: '0% 0px -20% 0px', // 提前觸發淡出效果
        threshold: 0.1, // 當 10% 的元素可見時觸發
    }
);

// 將所有目標元素交給 Observer
fadeInElements.forEach((el) => observer.observe(el));
