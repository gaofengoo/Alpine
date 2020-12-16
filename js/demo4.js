// window.AlpineMagicHelpersConfig = {
//     breakpoints: {
//         mobile: 0,
//         tablet: 769,
//         desktop: 1024,
//         widescreen: 1216,
//         fullhd: 1408
//     }
// }
function demo4Data() {
    return {
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        autoTimer: 1000,
        autoIntervalTest: false,
        funtionToRun() {
            console.log('Hello console')
        },
        dataInit() {
            this.fetchData();
            // this.defineInterval();
        },
        fetchData() {
            this.$fetch(this.url).then(data => console.log(data));
        },
        defineInterval() {
            this.$interval(this.funtionToRun, this.autoTimer);
        },
        position() {
            this.$scroll(this.$refs.foo)
        }
    }
}