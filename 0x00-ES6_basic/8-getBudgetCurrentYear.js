/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
      [`income-${getCurrentYear()}`]: income,
      [`gdp-${getCurrentYear()}`]: gdp,
      [`capita-${getCurrentYear()}`]: capita,
    };
    // eslint-disable-next-line linebreak-style
    return budget;
  }