const defaultProps = {
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '30px',
  duration: 1000,
  desktop: true,
  mobile: true
};

//header section

ScrollReveal().reveal('.hello', {
  ...defaultProps,
  delay: 300,
  distance: '10px',
  origin: window.innerWidth > 768 ? 'left' : 'bottom'
});

ScrollReveal().reveal('.hello-frontend', {
  ...defaultProps,
  delay: 1000,
  origin: window.innerWidth > 768 ? 'left' : 'bottom'
});



//project section

ScrollReveal().reveal('.section-title', {
  ...defaultProps,
  delay: 300,
  distance: '30px',
  origin: 'bottom'
});


ScrollReveal().reveal('.project-item', {
  ...defaultProps,
  delay: 700,
  origin: window.innerWidth > 768 ? 'left' : 'bottom'
});
ScrollReveal().reveal('.project-desc', {
  ...defaultProps,
  delay: 800,
  distance: '20px',
  origin: window.innerWidth > 768 ? 'right' : 'bottom'
});


//about-me section

ScrollReveal().reveal('.about-img', {
  ...defaultProps,
  delay: 700,
  distance: '15px',
  origin: 'left'
});
ScrollReveal().reveal('.about-desc', {
  ...defaultProps,
  delay: 900,
  distance: '15px',
  origin: window.innerWidth > 768 ? 'right' : 'bottom'
});

//contacts section

ScrollReveal().reveal('.angle-link', {
  ...defaultProps,
  delay: 500,
  distance: '25px',
  origin: 'top'
});

ScrollReveal().reveal('.email', {
  ...defaultProps,
  delay: 500,
});

ScrollReveal().reveal('.telegram', {
  ...defaultProps,
  delay: 1000,

});
ScrollReveal().reveal('.github', {
  ...defaultProps,
  delay: 1500,
})