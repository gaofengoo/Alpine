function initData () {
	return {
		maxSeats: 3,
        seats: [],
        open: false,
        showModal: false,
        trigger: {
            ['@click']() {
                this.open = true
            },
        },
        dialogue: {
            ['x-show']() {
                return this.open
            },
            ['@click.away']() {
                this.open = false
            },
            ['x-text']() {
                return 'gaofeng'
            }
        }, 
        availableSeats() {
            return this.maxSeats - this.seats.length;
        },
        takeSeat(seatNumber) {
            this.seats.push(seatNumber);
        }
	}
}