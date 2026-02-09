
import React from 'react';
import { ScheduleItem } from './types';

export const EVENT_TITLE = "EIDC Brahmachari Sangotsava 2026";
export const VENUE = "Visakhapatnam, Andhra Pradesh";
export const DATES = "April 06 - 10, 2026";

export const ACTIVITIES = [
  "Seperate discourses for seniors and juniors",
  "Panel Discussions on Brahmachari lifestyle and practices.",
  "Open hearted Q&A sessions with sannyasis and seniors.",
  "Sea Beach Sankirtan"
];

export const SCHEDULE: ScheduleItem[] = [
  {
    date: "April 06",
    title: "Arrival Day",
    location: "Visakhapatnam",
    activities: ["Welcome & Check-in", "Orientation", "Evening Sandhya Aarti"],
    icon: "🛫"
  },
  {
    date: "April 07 - 09",
    title: "Main Sessions",
    location: "Visakhapatnam",
    activities: ["Seminars & Workshops", "Ecstatic Sankirtan", "Vedic Quiz", "Q&A Sessions", "Dham Darshan"],
    icon: "📖"
  },
  {
    date: "April 10",
    title: "Return Day",
    location: "Visakhapatnam",
    activities: ["Morning Prasadam", "Valedictory Ceremony", "Farewell & Return"],
    icon: "🏠"
  }
];

export const CONTACTS = [
  { label: "Contact 1", phone: "+91 94347 60402" },
  { label: "Contact 2", phone: "+91 97352 12358" }
];
