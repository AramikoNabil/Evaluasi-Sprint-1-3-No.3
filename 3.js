let Panjang = prompt("Masukkan Nilai Panjang");
let Lebar = prompt("Masukkan Lebar ");

const hitungLuasPersegiPanjang = (Panjang, Lebar) => {
  return Panjang * Lebar;
};

document.write(`Panjang : ${Panjang} <br>`);
document.write(`Lebar : ${Lebar} <br>`);
document.write(`Luas Persegi Panjang : ${ hitungLuasPersegiPanjang(Panjang, Lebar)}`);
