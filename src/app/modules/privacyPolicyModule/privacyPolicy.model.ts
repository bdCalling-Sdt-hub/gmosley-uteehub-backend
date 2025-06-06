import mongoose from 'mongoose';
import { IPrivacyPolicy } from './privacyPolicy.interface';

export const privacyPolicySchema = new mongoose.Schema<IPrivacyPolicy>(
  {
    privacyPolicy: String,
  },
  {
    timestamps: true,
  },
);

const PrivacyPolicy = mongoose.model<IPrivacyPolicy>('privacyPolicy', privacyPolicySchema);
export default PrivacyPolicy;
