/** Yesterday in Asia/Kolkata — no redeploy needed for date churn. */

const IST = 'Asia/Kolkata';
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function istYmd(now) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: IST,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(now);
  const get = (type) => Number(parts.find((p) => p.type === type)?.value);
  return { y: get('year'), m: get('month'), d: get('day') };
}

function noonUtcForIstDay(y, m, d) {
  return new Date(Date.UTC(y, m - 1, d, 6, 30, 0));
}

export function getYesterdayIstDate(now = new Date()) {
  const { y, m, d } = istYmd(now);
  const todayNoon = noonUtcForIstDay(y, m, d);
  const yesterdayNoon = new Date(todayNoon.getTime() - 24 * 60 * 60 * 1000);
  const ymd = istYmd(yesterdayNoon);
  return noonUtcForIstDay(ymd.y, ymd.m, ymd.d);
}

export function formatVerifiedDate(d = getYesterdayIstDate()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: IST,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(d);
  const get = (type) => Number(parts.find((p) => p.type === type)?.value);
  const y = get('year');
  const m = get('month');
  const day = get('day');
  return `${MONTHS[m - 1]} ${day}, ${y}`;
}

export const VERIFIED_DAILY_STATIC_COPY =
  'ARIYD8B6 is verified daily. The last verified date on this page is always the previous calendar day in India time (IST).';
