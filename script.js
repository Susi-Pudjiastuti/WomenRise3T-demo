// Navigation Bar ==========================================================
let navbar = document.getElementById("navbar")
navbar.innerHTML = `<nav class="navbar navbar-expand-lg border-bottom">
    <div class="container-fluid px-5 py-2 mx-5 d-flex gap-5">
        
            <div class="d-flex gap-2 align-items-center">
                <img src="../gambar/Logo WomenRise3T.svg" width="48" height="auto">
                <a href="../index.html"><div class="vesper-libre-bold pt-2" id="nav-title">WomenRise3T</div></a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-text gap-5 flex-grow-1 ms-5">
                    <li class="nav-item "><a href="../index.html">Home</a></li>
                    <li class="nav-item"><a href="">Beasiswa</a></li>
                    <li class="nav-item"><a href="/mentor/mentor.html">Mentor</a></li>
                    <li class="nav-item"><a href="">Donasi</a></li>
                </ul>

                <div class="d-flex gap-2 align-items-center">
                    <a class="btn button-style-outline px-3 py-2" href="">Log Out</a>
                </div>
            </div>
        </div>
    </div>
</nav>`
// ===================================================================================

// Footer ============================================================================
document.getElementById("footer").innerHTML = 
`<footer class="border-top">
        <div class="container px-5 px-md-0">
            
            <div class="row pt-5 pb-4 gy-4 ">
                <div class="col-sm-4">
                    <div class="vesper-libre-bold mb-3">
                        <img src="../gambar/Logo WomenRise3T.svg" width="32" height="auto">
                        WomenRise3T
                    </div>
                    <div class="text-body-tertiary">Jalan Inspirasi No. 123, Jakarta, Indonesia</div>
                    <div class="text-body-tertiary mb-3">Telepon: +62 8123 456 7890</div>
                    <a href=""><img src="../gambar/icon/facebook.svg" class="me-2" width="24" height="24"></a>
                    <a href=""><img src="../gambar/icon/instagram.svg" width="24" height="24"></a>
                </div>
                    
                <div class="col-sm col-md">
                    <p>Get Help</p>
                    <a class="text-body-tertiary" href=""><p>FAQ</p></a>
                    <a class="text-body-tertiary" href=""><p>Contact us</p></a>
                    <a class="text-body-tertiary" href=""><p>Support us</p></a>

                </div>
                <div class="col-sm col-md">
                    <p>Our Program</p>
                    <a class="text-body-tertiary" href=""><p>Mentorship</p></a>
                    <a class="text-body-tertiary" href=""><p>Scholarship</p></a>
                    <a class="text-body-tertiary" href=""><p>Community</p></a>
                </div>
                <div class="col-sm col-md">
                    <p>Company</p>
                    <a class="text-body-tertiary" href=""><p>About us</p></a>
                    <a class="text-body-tertiary" href=""><p>Our Team</p></a>
                    <a class="text-body-tertiary" href=""><p>Our Impact</p></a>
                </div>
            </div>
            
            <hr>
            <p class="text-body-tertiary mb-5"> &copy; 2024 WomenRise3T. All Rights Reserved.</p>
        </div>
     </footer>`
//===========================================================================================

// Abous us Descriptions ====================================================================
let aboutUs = {
    tentangWR3T: "WomenRise3T adalah platform yang didedikasikan untuk mendukung perempuan dari wilayah 3T (tertinggal, terdepan, terluar) dalam mengakses informasi beasiswa dan mendapatkan sesi mentoring eksklusif. Kami percaya bahwa setiap perempuan berhak mendapatkan kesempatan untuk berkembang melalui pendidikan. Oleh karena itu, kami menyediakan informasi beasiswa yang dapat diakses oleh siapa saja, serta menawarkan mentoring khusus untuk perempuan 3T yang telah terdaftar dan terverifikasi. Melalui WomenRise3T, kami berupaya memberikan akses yang lebih luas dan adil bagi perempuan marjinal untuk meraih pendidikan tinggi dan mewujudkan potensi mereka.",
    tentang2WR3T: "Platform WomenRise3T menawarkan basis data lengkap tentang peluang beasiswa yang dapat diakses oleh semua pengguna, memastikan informasi penting dapat dijangkau oleh siapa saja. WomenRise3T juga menawarkan sesi mentoring pribadi yang dirancang khusus untuk perempuan dari wilayah 3T yang telah terdaftar dan terverifikasi. Sesi ini bertujuan untuk memberikan bimbingan, dukungan, dan inspirasi dari mentor yang memiliki latar belakang serupa, sehingga perjalanan menuju pendidikan tinggi menjadi lebih relevan dan dapat dicapai."
}

let tentang1 = document.getElementById("tentang1")
let tentang2 = document.getElementById("tentang2")

tentang1.textContent = aboutUs.tentangWR3T
tentang2.textContent = aboutUs.tentang2WR3T

// =================================================

// Mentor ==========================================
let API = "https://66de9f23de4426916ee1b9e7.mockapi.io/Mentor";

let listMentor = document.getElementById("list-mentor")

async function getMentors() {
    let respons = await fetch(API)
    let mentors = await respons.json()

    // mentors.map((item) =>{
    //    listMentor.innerHTML=``
    // })
    
}

getMentors();

// ====================================================

// Testimoni pengguna =================================
let testiAPI = "https://66e5d6615cc7f9b6273e7e59.mockapi.io/testimonipengguna";

let listTesti = document.getElementById("list-testi")

async function getTesti() {
    let respons = await fetch(testiAPI)
    let testi = await respons.json()

    let NamaTesti = testi.map((item) =>{
       listTesti.innerHTML +=
       `
        <div class="col-lg-4 col-12 card" >
                <div class="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <img src="/gambar/icon/petik.svg" width="32" height="auto">
                  <p class="card-text p-2">${item.testimoni}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <img class="rounded-img" src="${item.avatar}" width="40" height="40">
                    <div class="d-flex flex-column ms-2">
                        <p class="m-0 fw-bold button-style-text" id="testimony-profile">${item.name}</p>
                        <p class="m-0" id="testimony-profile">${item.daerah}</p>
                    </div>
                    </div>
                </div>
        </div>
        `
        return item.name
    })
    console.log(NamaTesti)
}
getTesti();