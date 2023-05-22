moreIcon.addEventListener('click', () => {
  moreIcon.style.display = 'none'
  lessIcon.style.display = 'block'
  divConfig.style.display = 'block'
  lessIcon.style.animationName = 'iconAnim';
  lessIcon.style.animationDuration = '1s';
  lessIcon.style.animationTimingFunction = 'ease-in-out';
  moreIcon.style.animationName = 'iconAnim';
  moreIcon.style.animationDuration = '1s';
  moreIcon.style.animationTimingFunction = 'ease-in-out';
})

lessIcon.addEventListener('click', () => {
  moreIcon.style.display = 'block'
  lessIcon.style.display = 'none'
  divConfig.style.display = 'none'
  moreIcon.style.animationName = 'iconAnim';
  moreIcon.style.animationDuration = '1s';
  moreIcon.style.animationTimingFunction = 'ease-in-out';
  lessIcon.style.animationName = 'iconAnim';
  lessIcon.style.animationDuration = '1s';
  lessIcon.style.animationTimingFunction = 'ease-in-out';
})