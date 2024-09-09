let API = "https://66de9f23de4426916ee1b9e7.mockapi.io/Mentor";
let cardLarge = document.getElementById("card-large");

async function getMentors() {
  let respons = await fetch(API);
  let mentors = await respons.json();
  mentors.map((item) => {
    cardLarge.innerHTML += `
            <div class="card container d-none d-lg-block">
              <div class="row">
                <div class="col-5"><img
                    src="${item.avatar}"
                    class="rounded img-fluid mt-3 d-flex " alt="..."></div>
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
  });
}
getMentors()