// Fictitious data for the Lighthouse Road Fellowship demo.

export const services = [
  {
    time: "9:00 AM",
    name: "Morning service",
    text: "Traditional hymns and a quiet, reflective atmosphere.",
  },
  {
    time: "11:00 AM",
    name: "Family service",
    text: "Contemporary music with kids' church for ages 4–11.",
  },
  {
    time: "7:00 PM",
    name: "Wednesday prayer",
    text: "Midweek prayer and a short Bible reflection.",
  },
];

export const SERIES = ["All", "Sermon on the Mount", "Anchored", "Advent"];

export const sermons = [
  {
    id: 1,
    series: "Sermon on the Mount",
    title: "Blessed are the poor in spirit",
    speaker: "Pastor Samuel Reyes",
    date: "Oct 25, 2026",
    len: "34 min",
    ref: "Matthew 5:1–12",
  },
  {
    id: 2,
    series: "Sermon on the Mount",
    title: "Salt and light",
    speaker: "Pastor Samuel Reyes",
    date: "Oct 18, 2026",
    len: "31 min",
    ref: "Matthew 5:13–16",
  },
  {
    id: 3,
    series: "Sermon on the Mount",
    title: "Anger, the heart and reconciliation",
    speaker: "Pastor Samuel Reyes",
    date: "Oct 11, 2026",
    len: "36 min",
    ref: "Matthew 5:21–26",
  },
  {
    id: 4,
    series: "Anchored",
    title: "Hope when the water rises",
    speaker: "Rachel Moore",
    date: "Oct 4, 2026",
    len: "28 min",
    ref: "Hebrews 6:13–20",
  },
  {
    id: 5,
    series: "Anchored",
    title: "Faith that holds",
    speaker: "Pastor Samuel Reyes",
    date: "Sep 27, 2026",
    len: "33 min",
    ref: "Hebrews 11:1–6",
  },
  {
    id: 6,
    series: "Advent",
    title: "A light has come",
    speaker: "Pastor Samuel Reyes",
    date: "Dec 15, 2025",
    len: "29 min",
    ref: "Isaiah 9:1–7",
  },
];

export const EVENT_CATS = [
  "All",
  "Worship",
  "Community",
  "Kids & youth",
  "Groups",
];

export const events = [
  {
    day: "01",
    mon: "Nov",
    cat: "Worship",
    title: "All Saints communion service",
    when: "Sunday, 11:00 AM",
    where: "Sanctuary",
  },
  {
    day: "07",
    mon: "Nov",
    cat: "Community",
    title: "Neighbourhood soup lunch",
    when: "Saturday, 12:00 PM",
    where: "Fellowship hall",
  },
  {
    day: "13",
    mon: "Nov",
    cat: "Kids & youth",
    title: "Youth night: game and worship",
    when: "Friday, 7:00 PM",
    where: "Youth room",
  },
  {
    day: "17",
    mon: "Nov",
    cat: "Groups",
    title: "Women's Bible study",
    when: "Tuesday, 10:00 AM",
    where: "Library room",
  },
  {
    day: "21",
    mon: "Nov",
    cat: "Community",
    title: "Winter coat drive",
    when: "Saturday, 9:00 AM",
    where: "Fellowship hall",
  },
  {
    day: "29",
    mon: "Nov",
    cat: "Worship",
    title: "First Sunday of Advent",
    when: "Sunday, 9:00 and 11:00 AM",
    where: "Sanctuary",
  },
];

export const ministries = [
  {
    id: "kids",
    name: "Lighthouse Kids",
    ages: "Ages 4–11",
    text: "Stories, songs and games that help children know they are loved by God.",
  },
  {
    id: "youth",
    name: "Harbour Youth",
    ages: "Grades 7–12",
    text: "Friday nights, summer camp and mentors who walk with teenagers.",
  },
  {
    id: "music",
    name: "Worship & Music",
    ages: "All ages",
    text: "Choir, band and a team that leads us each Sunday. All skill levels welcome.",
  },
  {
    id: "outreach",
    name: "Neighbourhood Outreach",
    ages: "Everyone",
    text: "A food pantry, soup lunches and a coat drive, run by volunteers.",
  },
  {
    id: "groups",
    name: "Small Groups",
    ages: "Adults",
    text: "Weekly groups in homes across the neighbourhood for study, prayer and friendship.",
  },
  {
    id: "care",
    name: "Care Team",
    ages: "Everyone",
    text: "Meals, visits and prayer for people in a hard season.",
  },
];

export const faqs = [
  {
    q: "What should I wear?",
    a: "Whatever you are comfortable in. You will see everything from jeans to Sunday best.",
  },
  {
    q: "What about my kids?",
    a: "Lighthouse Kids runs during the 11:00 service for ages 4–11. Nursery care is available for little ones at both services.",
  },
  {
    q: "How long is a service?",
    a: "About 75 minutes, with coffee and conversation afterwards.",
  },
  {
    q: "Where do I park?",
    a: "There is free parking behind the building and on Lighthouse Road. Greeters will point the way.",
  },
];

export const funds = [
  "General fund",
  "Missions",
  "Neighbourhood food pantry",
  "Building fund",
];

// ---- Added for the redesign (fictitious) ----

export const firstSunday = [
  [
    "Arrive",
    "Greeters at the door will point you to coffee, the sanctuary and kids' church.",
  ],
  [
    "Worship",
    "About 75 minutes of singing, prayer and a message from the Bible.",
  ],
  ["Stay for coffee", "Linger, ask questions and meet a few neighbours."],
];

export const verse = {
  text: "Ye are the light of the world. A city that is set on an hill cannot be hid.",
  ref: "Matthew 5:14 (KJV)",
};
