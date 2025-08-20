export interface ResponseSuccess {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  /** Дата в формате ISO 8601 (без ведущих нулей), например '1979-5-4' */
  birthDate: string;
  image: string;
  /** Группа крови по системе ABO */
  bloodGroup: BloodGroup;
  height: number;
  weight: number;
  eyeColor: EyeColor;
  hair: HairType;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: Role;
}

export type Gender = 'male' | 'female';

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type EyeColor =
  | 'Amber'
  | 'Black'
  | 'Blue'
  | 'Brown'
  | 'Gray'
  | 'Green'
  | 'Hazel'
  | 'Red'
  | 'Violet'
  | (string & {});

export interface Hair {
  color: HairColor;
  type: HairType;
}

type HairColor = 'Black' | 'Blonde' | 'Blue' | 'Brown' | 'Gray' | 'Green' | 'Purple' | 'Red' | 'White' | (string & {});

type HairType = 'Curly' | 'Kinky' | 'Straight' | 'Wavy' | (string & {});

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: Coin;
  wallet: string;
  network: string;
}

type Coin = 'Bitcoin' | (string & {});

const enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}
