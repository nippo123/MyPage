const auchors = document.querySelectorAll('a[href*="#"]');
auchors.forEach(anchor=>{
    anchor.addEventListener('click',e=>{e.preventDefault()
    const blockID = anchor.getAttribute('href').substring(1);
    document.getElementById(blockID).scrollIntoView({
        behavior:"smooth",
        block:'start',
    });
    })
})


const createSelectedSection = (root) => {
	const nav = root.querySelector('nav');

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
					let id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).classList.add('active');
				}
			})
		}, {}).observe(s);
	})
}



createSelectedSection(document.querySelector('#page'))