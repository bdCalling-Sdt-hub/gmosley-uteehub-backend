import mongoose from 'mongoose';
import { ITermsCondition } from './termsCondition.interface';

export const termsConditionSchema = new mongoose.Schema<ITermsCondition>(
  {
    termsCondition: String
  },
  {
    timestamps: true,
  },
);

const TermsCondition = mongoose.model<ITermsCondition>('termsCondition', termsConditionSchema);
export default TermsCondition;
