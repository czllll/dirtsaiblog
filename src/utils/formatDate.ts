import { format, parse } from 'date-fns';

export default  function formatDateWithSuffix(date: Date) {
  const day = format(date, 'd');
  const daySuffix = getDaySuffix(day);
  return `${day}${daySuffix} ${format(date, 'MMMM yyyy')}`;
}

// 根据日期获取后缀
function getDaySuffix(day: string) {
  if (day.endsWith('1') && day !== '11') return 'st';
  if (day.endsWith('2') && day !== '12') return 'nd';
  if (day.endsWith('3') && day !== '13') return 'rd';
  return 'th';
}
