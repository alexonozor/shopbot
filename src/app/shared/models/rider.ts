import { Bank } from './bank';

export interface Rider {
  _id: string;
  email: string;
  profilePicture: string;
  driversLicense: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  state: string;
  localGovt: string;
  country: string;
  phoneNumber: string;
  gender: string;
  address: string;
  yearsOfExperience: string;
  activate: boolean;
  ban: boolean;
  isActivationEmailSent: boolean;
  vehicle: string;
  walletBallance: string;
  currency: string;
  bank: Bank
  password: string;
  status: string;
  location: {
    type: {
      type: string; // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      default: 'Point',
      // required: true
    },
    coordinates: {
      type: number[],
      default: number[],
      // required: true
    },
  },

}