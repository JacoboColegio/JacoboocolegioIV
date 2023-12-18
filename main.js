// for scroll animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.main-container`, {origin: 'bottom'})
sr.reveal(`.heading`, {origin: 'left'})
sr.reveal(`.name`, {origin: 'left'})
sr.reveal(`.profile`, {origin: 'right'})
sr.reveal(`.about-img`, {origin: 'right'})
sr.reveal(`.about`, {origin: 'left'})
sr.reveal(`.infographics`, {origin: 'bottom'})
// sr.reveal(`.blog`, {origin: 'top'})
sr.reveal(`.learning1`, {origin: 'left'})
sr.reveal(`.learning2`, {origin: 'left'})
sr.reveal(`.learning3`, {origin: 'left'})
sr.reveal(`.learning4`, {origin: 'left'})
sr.reveal(`.flex`, {origin: 'left'})