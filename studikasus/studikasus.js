class Component {
    constructor(props = {}) {
        this.props = props;
    }
 
    render() {
        throw new Error("Method render() belum dibuat di class turunannya!");
    }
}
 
class Produk extends Component {
    #nama;
    #harga;
 
    constructor(props) {
        super(props);
        this.#nama = props.nama;
        this.#harga = props.harga;
    }
 
    render() {
        return this.#nama + " - Rp " + this.#harga.toLocaleString('id-ID');
    }
}
 
// DAFTAR PRODUK
const p1 = new Produk({ nama: "vans Authentic", harga: 300 });
console.log(p1.render()); 

const p2 = new Produk({ nama: "Vans SK8", harga: 400 });
console.log(p2.render()); 

const p3 = new Produk({ nama: "Vans Old Schol", harga: 350 }); // typo biarin sesuai kamu
console.log(p3.render()); 