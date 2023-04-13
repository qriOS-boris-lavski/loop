const toDate = new Date('January 1, ' + (new Date().getFullYear() + 1) + ' 00:00:00').getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();
  const distance = toDate - now;

  const days = ~~(distance / (1000 * 60 * 60 * 24));
  const hours = ~~((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = ~~((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = ~~((distance % (1000 * 60)) / 1000);

  const date = document.getElementById('date');
  date.innerHTML = `<h3>The New Year will come in:</h3><p>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</p>`;
  const centerBlock = () => {
    date.style.fontSize = '34px';
    date.style.display = 'flex';
    date.style.height = '100vh';
    date.style.alignItems = 'center';
    date.style.justifyContent = 'center';
    date.style.flexDirection = 'column';
  };
  centerBlock();

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('date').innerHTML = `<iframe src="../hny.gif" alt="" width="480" height="240" frameBorder="0" class="new-year">`;
    centerBlock();
  }
}, 1000);
