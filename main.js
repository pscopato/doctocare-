window.addEventListener('scroll', onScroll)

onscroll()

function onScroll() {
  ShowNavOnScroll()
  ShowBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // o top da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
 
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndsPassedTargetline = sectionEndsAt <= targetLine

  console.log('o fundo da seção passou da linha?', sectionEndsPassedTargetline)

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndsPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  //informações dos dados
  
  //informações dos dados
  console.log(
    'o top da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )

  //verificar se a base está abaixo da limha alvo
  //quais dados vou precisar
  console.log(sectionTop)
  //console.log(sectionHeight)
}

function ShowNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function ShowBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, "services, #services header, #services .card, #about, #about header, #about .content'
)
