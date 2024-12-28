import { useState } from "react";
import { Calendar, Clock, User, Bookmark, Mail, Phone } from "lucide-react";
import axios from "axios"; // Import axios to make HTTP requests


const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Executive Consultation",
    "Business Strategy Session",
    "Portfolio Review",
    "Investment Planning",
    "Risk Assessment",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

   // Helper function to convert 12-hour format to 24-hour format
   const convertTo24HourFormat = (timeStr) => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) {
      hours += 12; // Convert PM time to 24-hour format
    }
    if (period === "AM" && hours === 12) {
      hours = 0; // Handle 12 AM case
    }
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`; // Return in 24-hour format
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.service
    ) {
      setError("Please fill in all required fields");
      return;
    }
    const convertedTime = convertTo24HourFormat(formData.time);
    const dataToSubmit = { ...formData, time: convertedTime };
    try {
      console.log("Your form data is :", dataToSubmit);
      const response = await axios.post("http://localhost:5000/appointments", dataToSubmit);
      
      // On success, set the submitted state to true
      setSubmitted(true);
    } catch (err) {
      setError("Error creating appointment: " + err.message);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
            <Bookmark className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-100">
            Appointment Confirmed
          </h3>
          <p className="text-gray-400">
            Thank you for your booking. You will receive a confirmation email
            shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-100">
            Schedule Appointment
          </h2>
          <p className="text-gray-400 mt-2">Choose your preferred time slot</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  name="date"
                  className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  name="time"
                  className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="relative">
              <select
                name="service"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="notes"
              placeholder="Additional Notes"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500 h-24"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:translate-y-[-2px]"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
