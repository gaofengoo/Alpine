// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();

document.addEventListener('alpine: initializing', () => {
    Alpine.data('updateV3', () => ({
        show1: true,
        text1: 'hello alpinev3',
        // $el获取当前元素
        elClick (e) {
            console.log(e);
        },
        // 自动调用init()数据对象方法
        init () {
            console.log('init');
        },
        blockInput (e) {
            e.preventDefault();  // preventDefault()通知不要执行浏览器默认的动作
        }
    }));
});
// function updateV3 () {
//     return {
        
//     }
// }