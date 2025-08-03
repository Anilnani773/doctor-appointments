import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

const sampleDoctors = [
  {
    _id: '507f1f77bcf86cd799439011',
    name: 'Dr. Richard James',
    email: 'dr.richard@medicare.com',
    password: 'password123',
    image: '/src/assets/doc1.png',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    available: true,
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    date: Date.now(),
    slots_booked: {}
  },
  {
    _id: '507f1f77bcf86cd799439012',
    name: 'Dr. Emily Larson',
    email: 'dr.emily@medicare.com',
    password: 'password123',
    image: '/src/assets/doc2.png',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    available: true,
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    date: Date.now(),
    slots_booked: {}
  },
  {
    _id: '507f1f77bcf86cd799439013',
    name: 'Dr. Sarah Patel',
    email: 'dr.sarah@medicare.com',
    password: 'password123',
    image: '/src/assets/doc3.png',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    available: true,
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    date: Date.now(),
    slots_booked: {}
  },
  {
    _id: '507f1f77bcf86cd799439014',
    name: 'Dr. Christopher Lee',
    email: 'dr.christopher@medicare.com',
    password: 'password123',
    image: '/src/assets/doc4.png',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    available: true,
    fees: 40,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    date: Date.now(),
    slots_booked: {}
  },
  {
    _id: '507f1f77bcf86cd799439015',
    name: 'Dr. Jennifer Garcia',
    email: 'dr.jennifer@medicare.com',
    password: 'password123',
    image: '/src/assets/doc5.png',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    available: true,
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    date: Date.now(),
    slots_booked: {}
  }
];

const seedDoctors = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/medicare`);
    console.log('Connected to MongoDB');

    // Hash passwords
    const hashedDoctors = await Promise.all(
      sampleDoctors.map(async (doctor) => ({
        ...doctor,
        password: await bcrypt.hash(doctor.password, 10)
      }))
    );

    // Clear existing doctors
    await doctorModel.deleteMany({});
    console.log('Cleared existing doctors');

    // Insert sample doctors
    await doctorModel.insertMany(hashedDoctors);
    console.log('Sample doctors added successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDoctors(); 