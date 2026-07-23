class Mahasiswa {
    nama; // atribut

    belajar() { // method
        console.log(this.nama + " sedang belajar");
    }
}

// Bikin OBJECT
const mhs = new Mahasiswa();

// ISI DATA KAMU DISINI
mhs.nama = "Resthu"; 

// Panggil method
mhs.belajar(); // Output: Resthu sedang belajar