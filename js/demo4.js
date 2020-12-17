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
        characters: 50, 
        count: 5,
        string: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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