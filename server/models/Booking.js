const mongoose = require('mongoose');

// Define the schema for bookings
const bookingSchema = new mongoose.Schema({
    petOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the pet
    petName: { type: String, required: true }, // Name of the pet
    petType: { type: String, required: true }, // Type of pet (e.g., dog, cat)
    appointmentDate: { type: Date, required: true }, // Date and time of the appointment
    reason: { type: String }, // Reason for the appointment (e.g., vaccination, checkup)
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }, // Booking status
    createdAt: { type: Date, default: Date.now }, // Timestamp of when the booking was created
});

// Define the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
