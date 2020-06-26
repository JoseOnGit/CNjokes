
function shakeChuck() {
  const chuck = document.querySelector('.chuck');
  chuck.classList.add('animate__animated', 'animate__tada', 'animate__fast');
  setTimeout(() => {
      chuck.classList.remove('animate__animated', 'animate__tada', 'animate__fast')
  }, 1000)
}
export default shakeChuck;
