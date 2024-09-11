let API = "https://66de9f23de4426916ee1b9e7.mockapi.io/Mentor";
let cardLarge = document.getElementById("card-large");
let cardSmall = document.getElementById("card-small");
let buttonBottom = document.getElementById("button-bottom");

let searchMentor = document.getElementById("search-mentor");
searchMentor.addEventListener("keypress", handleSearch);

function handleSearch(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

async function getMentors() {
  let respons = await fetch(API);
  let mentors = await respons.json();
  mentors.map((item) => {
    // handle async for card-large-device
    cardLarge.innerHTML += `
            <div class="card container d-none d-lg-block mb-3 shadow" data-aos="fade-left" data-aos-duration="1500" >
              <div class="row">
                <div class="col-5"><img
                    src="${item.avatar}"
                    class="rounded img-fluid mt-4 d-flex " alt="..."></div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title my-1">${item.name}</h5>
                    <h6 class="my-0">${item.universitas}</h6>
                    <p class="nav-item border-bottom my-1">${item.asalDaerah}</p>
                    <p class="card-text text-justify">${item.deskripsi}</p>
                    <div class="text-end">
                      <a href="#" class="btn " id="btn-more">Selengkapnya <i class="bi bi-arrow-right"></i></a>
                      <a href="#" class="btn" id="btn-register">Daftar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;

    //handle async card-small-device
    cardSmall.innerHTML += `<div class="col-sm-12 col-md-6" id="card-small">
                <div class="card d-block mx-auto d-lg-none m-1" style="width: 15rem;" data-aos="fade-left" data-aos-duration="1500">
                  <img
                    src="${item.avatar}"
                    class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title my-0">${item.name}</h5>
                    <p class="my-1">${item.universitas}</p>
                    <small class="d-block my-0">${item.asalDaerah}</small>
                    <p class="card-text">
                    </p>
                    <div class="text-center">
                      <a href="#" class="btn " id="btn-more">Info <i class="bi bi-arrow-right"></i></a>
                      <a href="#" class="btn" id="btn-register">Daftar</a>
                    </div>
                </div>
              </div>`;
  });
  buttonBottom.innerHTML += `<a href="#" class="btn" id="btn-next">Previous</a>
            <a href="#" class="btn" id="btn-next" >Next <i class="bi bi-arrow-right"></i></a>`;
}
getMentors();

AOS.init();
