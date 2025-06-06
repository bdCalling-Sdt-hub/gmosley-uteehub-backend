import mongoose from 'mongoose';
import { IAboutUs } from './aboutUs.interface';

export const abountUsSchema = new mongoose.Schema<IAboutUs>(
  {
    description: String
  },
  {
    timestamps: true,
  },
);

const AboutUs = mongoose.model<IAboutUs>('aboutUs', abountUsSchema);
export default AboutUs;
