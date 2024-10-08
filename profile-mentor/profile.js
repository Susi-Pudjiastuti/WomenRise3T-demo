const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
informasiMentor = document.getElementById("informasi-mentor");
jadwalMentoring = document.getElementById("jadwal-mentoring");
cardSlot = document.getElementById("content-right");

console.log(id);

async function handleProfile() {
  try {
    let URL = `https://66de9f23de4426916ee1b9e7.mockapi.io/Mentor/${id}`;
    let respons = await fetch(URL);
    let mentor = await respons.json();

    informasiMentor.innerHTML += `
        <div data-aos="fade-up" data-aos-duration="1500"> 
          <h3 class="text-blue text-center mb-4">${mentor.name} - Mentor WomenRise3T</h3>
          <p class="my-0"><span class="text-blue fw-bold">Wilayah asal: </span> ${mentor.asalDaerah}</p>
          <p class="my-0"><span class="text-blue fw-bold">Pendidikan: </span> ${mentor.universitas}</p>
          <img
            src="${mentor.avatar}"
            class="d-block d-md-none img-fluid mx-auto rounded p-3" alt="">
          <a href="#" class="btn d-block d-md-none" id="btn-register"> <i class="bi bi-check2-square"></i> Daftar
            Mentorship <i class="bi bi-arrow-right"></i></a>
          <p class="text-justify my-3">${mentor.profile}</p>
          <p class="text-blue fw-bold">Prestasi:</p>
          <ul class="text-justify">
            <li>${mentor.prestasi1}</li>
            <li>${mentor.prestasi2}</li>
            <li>${mentor.prestasi3}</li>
          </ul>
        </div>`;

    jadwalMentoring.innerHTML += `
        <div data-aos="fade-down" data-aos-duration="1500">
          <h5 class="text-blue">Jadwal Mentoring Mentor</h5>
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope=" col">Hari</th>
                <th scope="col">Jam (WIB)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${mentor.hari1}</td>
                <td>${mentor.jam1}</td>
              </tr>
              <tr>
                <td>${mentor.hari2}</td>
                <td>${mentor.jam2}</td>
            </tbody>
          </table>
        </div>
          `;

    cardSlot.innerHTML += `        
        <div class="card mx-auto d-none d-md-block" data-aos="fade-left" data-aos-duration="1500" style="width: 18rem;">
          <img
            src="${mentor.avatar}"
            class="card-img-top p-3" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${mentor.name}</h5>
            <h6 class="mb-5">${mentor.asalDaerah}</h6>
            <a href="/booking-page/booking.html" class="btn" id="btn-register"> <i class="bi bi-check2-square"></i> Daftar Mentorship <i
                class="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <section class="slot-mentor text-center border my-5 py-5" data-aos="fade-down" data-aos-duration="1000">
          <h5 class="text-blue">Slot Mentorship Intan tinggal</p>
            <h2 class="fw-bold text-blue">${mentor.slot} lagi✨</h2>
        </section>

  `;
  } catch (error) {
    alert("error");
  }
}

handleProfile();

AOS.init();
