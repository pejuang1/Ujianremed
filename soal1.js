const population=(populasi,persen,imigran,targetpop)=>{
    var warga=populasi
    var tahun=0
    do {
        warga+=imigran+(warga*(persen/100))
        tahun++
    } while (warga<targetpop)
    return tahun+' tahun'
}
console.log(population(1000,2,50,1200))