const MONTH_NAMES = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря',
};


export default (wms) => {
  const date = new Date(wms);
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  return `${d} ${MONTH_NAMES[m]} ${y}`;
};