import { Creator } from '../types';

export interface CSVRow {
  username: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  followersCount: string;
  category: string;
  engagementRate: string;
  isVerified: string;
  contactPrice: string;
}

export const parseCSV = (csvText: string): CSVRow[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',').map(value => value.trim());
      return headers.reduce((obj: any, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
};

export const validateCSVRow = (row: CSVRow): string[] => {
  const errors: string[] = [];

  if (!row.username) errors.push('Username is required');
  if (!row.email?.includes('@')) errors.push('Valid email is required');
  if (!row.fullName) errors.push('Full name is required');
  if (!row.avatarUrl?.startsWith('http')) errors.push('Valid avatar URL is required');
  if (isNaN(Number(row.followersCount))) errors.push('Valid followers count is required');
  if (!row.category) errors.push('Category is required');
  if (isNaN(Number(row.engagementRate))) errors.push('Valid engagement rate is required');
  if (isNaN(Number(row.contactPrice))) errors.push('Valid contact price is required');

  return errors;
};

export const convertCSVRowToCreator = (row: CSVRow): Partial<Creator> => ({
  username: row.username,
  full_name: row.fullName,
  email: row.email,
  avatar_url: row.avatarUrl,
  followers_count: parseInt(row.followersCount),
  category: row.category,
  engagement_rate: parseFloat(row.engagementRate),
  is_verified: row.isVerified.toLowerCase() === 'true',
  contact_price: parseInt(row.contactPrice)
});