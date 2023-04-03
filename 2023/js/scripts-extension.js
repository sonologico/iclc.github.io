// publish bools
let publishCall = true;
let publishAbout = true;
let publishTravel = true;
let publishVenues = false;
let publishSatellite = true;
let publishTable = true;
let publishMap = true;
let publishRegistration = true;
let publishTickets = true;

function makeMenu() {
	document.body.innerHTML += `
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-black fixed-top" id="mainNav">
		<div class="container px-4 px-lg-5">
			<a class="navbar-brand" href="./index.html">ICLC2023</a>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ms-auto">
				${(publishRegistration)?`<li class="nav-item"><a class="nav-link" href="./registration.html">Registration</a></li>`:''}
				${(publishTickets)?`<li class="nav-item"><a class="nav-link" href="./tickets.html">Passes & Tickets</a></li>`:''}
				${(publishTable)?`<li class="nav-item"><a class="nav-link" href="./timetable.html">Timetable</a></li>`:''}
				${(publishMap)?`<li class="nav-item"><a class="nav-link" href="./map.html">Map</a></li>`:''}
				${(publishVenues)?`<li class="nav-item"><a class="nav-link" href="./venues.html">Venues</a></li>`:''}
				${(publishTravel)?`<li class="nav-item"><a class="nav-link" href="./travel-stay.html">Travel & Stay</a></li>`:''}
				${(publishSatellite)?`<li class="nav-item"><a class="nav-link" href="./satellite.html">Satellite Events</a></li>`:''}
				${(publishCall)?`<li class="nav-item"><a class="nav-link" href="./open-call.html">Open Call</a></li>`:''}
				${(publishAbout)?`<li class="nav-item"><a class="nav-link" href="./about.html">About</a></li>`:''}
					<!--<li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>-->
				</ul>
			</div>
		</div>
	</nav>`;
}

function header(id, head = ''){
	let d = document.getElementById(id);
	d.innerHTML += `
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8">
			<h1 class="mt-5 mb-5" id="themes">${head}</h1>
			</div>
		</div>
	</div>`;
}

function paragraph(id, head = '', txt = '') {
	let d = document.getElementById(id);
	d.innerHTML += `
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8">
			<h2 class="mt-5 mb-5" id="themes">${head}</h2>
			<p>${txt}</p>
			</div>
		</div>
	</div>`;
}

function satelliteEvent(id, anchor = '', head = '', txt = '') {
	let d = document.getElementById(id);
	d.innerHTML += `
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8">
			<h2 class="mt-5 mb-5" id="${anchor}">${head}</h2>
			<p>${txt}</p>
			</div>
		</div>
	</div>`;
}

function paragraphImageLeft(id, head = '', txt = '', img = '') {
	let d = document.getElementById(id);
	d.innerHTML += `
	<div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
		<div class="col-lg-6"><img class="img-fluid" src="${img}" alt="..." /></div>
		<div class="col-lg-6">
			<div class="bg-black h-100 project">
				<div class="d-flex h-100">
					<div class="project-text w-100 my-auto text-lg-left">
					<h4 class="mt-5 mb-3">${head}</h4>
					<p class="mb-0 text-white-50">${txt}</p>
					<hr class="d-none d-lg-block mb-0 ms-0" />
					</div>
				</div>
			</div>
		</div>
	</div>`;
}

function paragraphImageRight(id, head = '', txt = '', img = '') {
	let d = document.getElementById(id);
	d.innerHTML += `
	<div class="row gx-0 justify-content-center">
		<div class="col-lg-6"><img class="img-fluid" src="${img}" alt="..." /></div>
		<div class="col-lg-6 order-lg-first">
			<div class="bg-black h-100 project">
				<div class="d-flex h-100">
					<div class="project-text w-100 my-auto text-lg-right">
					<h4 class="mt-5 mb-3">${head}</h4>
					<p class="mb-0 text-white-50">${txt}</p>
					<hr class="d-none d-lg-block mb-0 me-0" />
					</div>
				</div>
			</div>
		</div>
	</div>`;
}

// <!-- Featured Project Row-->
// <!-- <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
// 	<div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/algo1.jpg" alt="..." /></div>
// 	<div class="col-xl-4 col-lg-5">
// 		<div class="featured-text text-center text-lg-left">
// 			<h4>Shoreline</h4>
// 			<p class="text-white-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
// 		</div>
// 	</div>
// </div> -->
// <!-- Project One Row-->

function socials() {
	document.body.innerHTML += `
	<section class="contact-section bg-black">
		<div class="container px-4 px-lg-5">
			<div class="social d-flex justify-content-center">
				<a class="mx-2" href="mailto:iclc@creativecodingutrecht.nl"><i class="fa-regular fa-envelope"></i></a>
				<a class="mx-2" href="https://t.me/iclc2023" target="blank"><i class="fab fa-telegram"></i></a>
				<a class="mx-2" href="https://discord.com/channels/790732544491913216/795094107327561748" target="blank"><i class="fab fa-discord"></i></a>
				<a class="mx-2" href="https://assemblag.es/@incolico" target="blank"><i class="fab fa-mastodon"></i></a>
				<a class="mx-2" href="https://www.instagram.com/iclc_2023/" target="blank"><i class="fab fa-instagram"></i></a>
				<a class="mx-2" href="https://www.facebook.com/livecodenet" target="blank"><i class="fab fa-facebook"></i></a>
				<!-- <a class="mx-2" href="https://www.youtube.com/@Eulerroom" target="blank"><i class="fab fa-youtube"></i></a> -->
				<!-- <a class="mx-2" href="https://twitter.com/incolico" target="blank"><i class="fab fa-twitter"></i></a> -->
			</div>
		</div>
	</section>`
}

// UNUSED CONTACT SECTION FROM TEMPLATE
// <!-- <div class="row gx-4 gx-lg-5">
// 	<div class="col-md-4 mb-3 mb-md-0">
// 		<div class="card py-4 h-100">
// 			<div class="card-body text-center">
// 				<i class="fas fa-map-marked-alt text-primary mb-2"></i>
// 				<h4 class="text-uppercase m-0">Address</h4>
// 				<hr class="my-4 mx-auto" />
// 				<div class="small text-black-50">4923 Market Street, Orlando FL</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="col-md-4 mb-3 mb-md-0">
// 		<div class="card py-4 h-100">
// 			<div class="card-body text-center">
// 				<i class="fas fa-envelope text-primary mb-2"></i>
// 				<h4 class="text-uppercase m-0">Email</h4>
// 				<hr class="my-4 mx-auto" />
// 				<div class="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="col-md-4 mb-3 mb-md-0">
// 		<div class="card py-4 h-100">
// 			<div class="card-body text-center">
// 				<i class="fas fa-mobile-alt text-primary mb-2"></i>
// 				<h4 class="text-uppercase m-0">Phone</h4>
// 				<hr class="my-4 mx-auto" />
// 				<div class="small text-black-50">+1 (555) 902-8832</div>
// 			</div>
// 		</div>
// 	</div>
// </div> -->

function footer() {
	let c = 'ICLC 2023';
	document.body.innerHTML += `
	<footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; ${c}</div></footer>
	`
}