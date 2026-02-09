
export interface ScheduleItem {
  date: string;
  title: string;
  activities: string[];
  location: string;
  icon?: string;
}

export enum RegistrationType {
  TEMPLE = 'TEMPLE',
  SINGLE = 'SINGLE'
}

export const REGISTRATION_LINKS = {
  [RegistrationType.TEMPLE]: 'https://pages.razorpay.com/pl_SE1yNhOmZ95UfP/view',
  [RegistrationType.SINGLE]: 'https://pages.razorpay.com/pl_SE2ETMa8WehjEy/view'
};
