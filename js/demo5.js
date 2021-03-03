function initData () {
	return {
		maxSeats: 3,
        seats: [],
        availableSeats() {
            return this.maxSeats - this.seats.length;
        },
        takeSeat(seatNumber) {
            this.seats.push(seatNumber);
        }
	}
}