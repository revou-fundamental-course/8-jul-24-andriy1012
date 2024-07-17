const form = document.getElementById('form');
const inputMan = document.getElementById('section-man');
const inputWoman = document.getElementById('section-woman');
const inputBeratBadan = document.getElementById('input-berat-badan');
const inputTinggiBadan = document.getElementById('input-tinggi-badan');
const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category');
const genderResult = document.getElementById('gender-result');
const hilangkan = document.getElementById('perhatian');
const menghilangkan = document.getElementById('ilang');
const penjelasan = document.getElementById('penjelasan');
// membuat isi form atau tombol submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const beratBadan = inputBeratBadan.value;
    const tinggiBadan = inputTinggiBadan.value;
    const bmi = calculateBMI(beratBadan, tinggiBadan);
    const category = getBMICategory(bmi);
    let gender;

    // requared fields
    if (beratBadan === '' || tinggiBadan === '') {
        alert('Silakan isi semua data!');
        return; 
      }
    //   display pada output
    if (inputMan.checked) {
        gender = 'Laki-laki';
    } else if (inputWoman.checked) {
        gender = 'Perempuan';
    } else {
        gender = 'Tidak diketahui';
    }

    bmiResult.textContent = `BMI: ${bmi.toFixed(2)}`;
    bmiCategory.textContent = `${category}`;
    genderResult.textContent = `Jenis Kelamin: ${gender}`;
    hilangkan.style.display = 'none'; //output  jika data sudah di submut elment html menghilang
    menghilangkan.style.display = 'none'; //output  jika data sudah di submut elment html menghilang
    const penjelasanText = getPenjelasanText(category); //pengambilan utnuk penjelasan dari hasil
    penjelasan.textContent = penjelasanText;
});
// rumus kalkulasi
function calculateBMI(beratBadan, tinggiBadan) {
    return beratBadan / (tinggiBadan ** 2);
}
// hasil dari kalkulasi
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Kurus, silakan konsultasi ke dokter untuk mendapatkan saran lebih lanjut.';
    } else if (bmi < 25) {
        return 'Normal, Anda sehat!';
    } else if (bmi < 30) {
        return 'Anda Memiliki berad badan berlebih';
    }
    else if (bmi > 30) {
        return 'Obesitas';
    } else {
        return 'Eror';
    }
}
// penjelasan dari hasil kalkualsi yg di dapat
function getPenjelasanText(category) {
  switch (category) {
    case 'Kurus, silakan konsultasi ke dokter untuk mendapatkan saran lebih lanjut.':
      return 'Hasil kurang dari 18 .5, silakan konsultasi ke dokter untuk mendapatkan saran lebih lanjut. jika BMI Anda berada dalam kategori ini maka di ajurkan makan makanan yang bergizi dan sehat';
    case 'Normal, Anda sehat!':
      return 'Hasil di antara 18.5 dan 25, Anda normal tidak perlu konsultasi ke dokter.';
    case 'Anda Memiliki berad badan berlebih':
      return 'Hasil di antara 25 dan 30, silakan konsultasi ke dokter untuk mendapatkan saran lebih lanjut. untuk program diet.';
    case 'Obesitas':
      return 'Berat badan Anda sangat lebih dari normal. Silakan konsultasi ke dokter untuk mendapatkan saran lebih lanjut.';
    default:
      return 'Diluar Nalar';
  }
}


// tombol reset
form.addEventListener('reset', (e) => {
    e.preventDefault();
    const beratBadan = inputBeratBadan.value;
    const tinggiBadan = inputTinggiBadan.value;
    const bmi = calculateBMI(beratBadan, tinggiBadan);
    const category = getBMICategory(bmi);
    let gender;
        // output display
    bmiResult.style.display = 'none';
    bmiCategory.style.display = 'none';
    genderResult.style.display = 'none';
    hilangkan.style.display = 'block'; //menampilkan elemet html jika data belum di submit
    menghilangkan.style.display = 'block'; //menampilkan elemet html jika data belum di submit
});