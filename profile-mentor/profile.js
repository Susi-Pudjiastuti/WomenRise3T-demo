const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
informasiMentor = document.getElementById("informasi-mentor");
jadwalMentoring = document.getElementById("jadwal-mentoring");
cardSlot = document.getElementById("content-right");

console.log(id);

async function handleProfile() {
  let URL = `https://66de9f23de4426916ee1b9e7.mockapi.io/Mentor/${id}`;
  let respons = await fetch(URL);
  let mentor = await respons.json();

  informasiMentor.innerHTML += `
            <h3 class="text-blue text-center mb-4">${mentor.name} - Mentor WomenRise3T</h3>
          <p class="my-0">Wilayah asal: ${mentor.asalDaerah}</p>
          <p class="my-0">Pendidikan: ${mentor.universitas}</p>
          <img
            src="${mentor.avatar}"
            class="d-block d-md-none img-fluid mx-auto rounded p-3" alt="">
          <a href="#" class="btn d-block d-md-none" id="btn-register"> <i class="bi bi-check2-square"></i> Daftar
            Mentorship <i class="bi bi-arrow-right"></i></a>
          <p class="text-justify my-3">${mentor.profile}</p>
          <p>Prestasi:</p>
          <ul class="text-justify">
            <li>${mentor.prestasi1}</li>
            <li>${mentor.prestasi2}</li>
            <li>${mentor.prestasi3}</li>
          </ul>`;
  jadwalMentoring.innerHTML += `
          <h5 class=" text-blue">Jadwal Mentoring Mentor</h5>
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope=" col">Hari</th>
                <th scope="col">Jam</th>
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
          `;

  cardSlot.innerHTML += `        
        <div class="card mx-auto d-none d-md-block" style="width: 18rem;">
          <img
            src="${mentor.avatar}"
            class="card-img-top p-3" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${mentor.name}</h5>
            <h6 class="mb-5">${mentor.asalDaerah}</h6>
            <a href="#" class="btn" id="btn-register"> <i class="bi bi-check2-square"></i> Daftar Mentorship <i
                class="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <section class="slot-mentor text-center border my-5 py-5">
          <h5 class="text-blue">Slot Mentorship Intan tinggal</p>
            <h2 class="fw-bold text-blue">${mentor.slot} lagi✨</h2>
        </section>

  `;
}

handleProfile();
