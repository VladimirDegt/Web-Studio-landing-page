const { height: pageHeaderHeight } = document
.querySelector('.scroll')
.getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;