class Rekening {
    #saldo; // privat
    constructor() {
        this.#saldo = 0;
    }

    setor(jumlah) {
        this.#saldo = this.#saldo + jumlah;
        console.log("Berhasil setor Rp " + jumlah.toLocaleString('id-ID'));
    }

    tarik(jumlah) {
        if (jumlah <= this.#saldo) {
            this.#saldo = this.#saldo - jumlah;
            console.log("Berhasil tarik Rp " + jumlah.toLocaleString('id-ID'));
        } else {
            console.log("Saldo tidak cukup");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

// Bikin rekening atas nama Resthu
const rekeningResthu = new Rekening();

// ISI SALDO 20 JUTA DISINI
rekeningResthu.setor(20000000); 

// Cek saldo
console.log("Saldo Resthu sekarang: Rp " + rekeningResthu.getSaldo().toLocaleString('id-ID'));