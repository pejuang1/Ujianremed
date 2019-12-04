//segitiga ganjil tambah 2
function segitigaAngka(tinggi) {
	var output = '';
	var angka = 1;

	for (a = 0; a < tinggi; a++) {
		for (b = tinggi; b > a; b--) {
			output += ' ';
		}
		for (c = 0; c <= a; c++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		for (d = 1; d <= a; d++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		if (a < tinggi - 1) {
			output += '\n';
		}
		angka += 1;
	}
	return output;
}

console.log(segitigaAngka(10));