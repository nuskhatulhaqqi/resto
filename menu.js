var x = [0,0,0,0,0,0,0,0,0,0]
var hasil = 0;


function pagi(){
	document.getElementById("sarapan").style.display = 'block';
	document.getElementById("siang").style.display = 'none';
	document.getElementById("malam").style.display = 'none';
	document.getElementById("cek").style.display = 'block';	
	document.getElementById("banner").style.display = 'none';
}
function siang(){
	document.getElementById("sarapan").style.display = 'none';
	document.getElementById("siang").style.display = 'block';
	document.getElementById("malam").style.display = 'none';
	document.getElementById("cek").style.display = 'block';
	document.getElementById("banner").style.display = 'none';	
}
function malam(){
	document.getElementById("sarapan").style.display = 'none';
	document.getElementById("siang").style.display = 'none';
	document.getElementById("malam").style.display = 'block';
	document.getElementById("cek").style.display = 'block';
	document.getElementById("banner").style.display = 'none';	
}

function menu1_p() {
	jml = document.getElementById('order_p1').value;
	jml_fix = jml*15000
	x[0]= jml_fix
	document.getElementById('menu1_p').innerHTML= "<td>Bubur Ayam </td><td> Rp. 15000 </td><td> jumlah " +jml+"</td>";	
}
function menu2_p() {
	jml = document.getElementById('order_p2').value;
	jml_fix = jml*12000
	x[1]= jml_fix
	document.getElementById('menu2_p').innerHTML= "<td>Bubur Ayam Original</td><td>Rp. 12000 </td><td>jumlah"+jml+"</td>";	
}
function menu3_p() {
	jml = document.getElementById('order_p3').value;
	jml_fix = jml*10000
	x[2]= jml_fix
	document.getElementById('menu3_p').innerHTML= "<td>Bubur Kacang Ijo </td><td> Rp. 10000 </td><td> jumlah " +jml+"</td>";	
}
function menu4_p() {
	jml = document.getElementById('order_p4').value;
	diskon =15000*0.20
	byr = 15000-diskon
	jml_fix = (jml*byr)
	x[3]= jml_fix
	document.getElementById('menu4_p').innerHTML= "<td>Bubur Sumsum </td><td><s> Rp. 15000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}
function menu5_p() {
	jml = document.getElementById('order_p5').value;
	jml_fix = jml*12000
	x[4]= jml_fix
	document.getElementById('menu5_p').innerHTML= "<td>Ketupat Sayur </td><td> Rp. 12000 </td><td> jumlah " +jml+"</td>";	
}
function menu6_p() {
	jml = document.getElementById('order_p6').value;
	jml_fix = jml*14000
	x[5]= jml_fix
	document.getElementById('menu6_p').innerHTML= "<td>lontong Balap </td><td> Rp. 14000 </td><td> jumlah " +jml+"</td>";	
}
function menu7_p() {
	jml = document.getElementById('order_p7').value;
	diskon =25000*0.10
	byr = 25000-diskon
	jml_fix = (jml*byr)
	x[6]= jml_fix
	document.getElementById('menu7_p').innerHTML= "<td>Nasi Krawu</td><td><s>Rp. 25000 </s></td><td>Rp."+byr+"</td><td>jumlah"+jml+"</td>";	
}
function menu8_p() {
	jml = document.getElementById('order_p8').value;
	jml_fix = jml*15000
	x[7]= jml_fix
	document.getElementById('menu8_p').innerHTML= "<td>Nasi Kuning </td><td> Rp. 15000 </td><td> jumlah " +jml+"</td>";	
}
function menu9_p() {
	jml = document.getElementById('order_p9').value;
	jml_fix = jml*10000
	x[8]= jml_fix
	document.getElementById('menu9_p').innerHTML= "<td>Nasi Pecel </td><td> Rp. 10000 </td><td> jumlah " +jml+"</td>";	
}
function menu10_p() {
	jml = document.getElementById('order_p10').value;
	diskon =20000*0.1
	byr = 20000-diskon
	jml_fix = (jml*byr)
	x[9]= jml_fix
	document.getElementById('menu10_p').innerHTML= "<td>Nasi Uduk </td><td><s> Rp. 20000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}

function menu1_s() {
	jml = document.getElementById('order_s1').value;
	diskon =47000*0.2
	byr = 47000-diskon
	jml_fix = (jml*byr)
	x[0]= jml_fix
	document.getElementById('menu1_p').innerHTML= "<td>Asem - asem Daging</td><td><s> Rp. 47000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}
function menu2_s() {
	jml = document.getElementById('order_s2').value;
	jml_fix = jml*25000
	x[1]= jml_fix
	document.getElementById('menu2_p').innerHTML= "<td>Ayam Sambal Matah</td><td>Rp. 25000 </td><td>jumlah"+jml+"</td>";	
}
function menu3_s() {
	jml = document.getElementById('order_s3').value;
	jml_fix = jml*55000
	x[2]= jml_fix
	document.getElementById('menu3_p').innerHTML= "<td>Daging Bumbu Cincang</td><td> Rp. 55000 </td><td> jumlah " +jml+"</td>";	
}
function menu4_s() {
	jml = document.getElementById('order_s4').value;
	jml_fix = jml*25000
	x[3]= jml_fix
	document.getElementById('menu4_p').innerHTML= "<td>Gurame Cobek </td><td> Rp. 25000 </td><td> jumlah " +jml+"</td>";	
}
function menu5_s() {
	jml = document.getElementById('order_s5').value;
	diskon =45000*0.25
	byr = 45000-diskon
	jml_fix = (jml*byr)
	x[4]= jml_fix
	document.getElementById('menu5_p').innerHTML= "<td>Oseng-Oseng Pete Cumi</td><td><s> Rp. 45000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}
function menu6_s() {
	jml = document.getElementById('order_s6').value;
	jml_fix = jml*30000
	x[5]= jml_fix
	document.getElementById('menu6_p').innerHTML= "<td>Sate Ayam </td><td> Rp. 30000 </td><td> jumlah " +jml+"</td>";	
}
function menu7_s() {
	jml = document.getElementById('order_s7').value;
	jml_fix = jml*12000
	x[6]= jml_fix
	document.getElementById('menu7_p').innerHTML= "<td>Sayur Asem</td><td>Rp. 12000 </td><td>jumlah"+jml+"</td>";	
}
function menu8_s() {
	jml = document.getElementById('order_s8').value;
	jml_fix = jml*15000
	x[7]= jml_fix
	document.getElementById('menu8_p').innerHTML= "<td>Sayur Oyong Bihun </td><td> Rp. 15000 </td><td> jumlah " +jml+"</td>";	
}
function menu9_s() {
	jml = document.getElementById('order_s9').value;
	diskon =20000*0.05
	byr = 20000-diskon
	jml_fix = (jml*byr)
	x[8]= jml_fix
	document.getElementById('menu9_p').innerHTML= "<td>Sosis Asam Manis </td><td><s> Rp. 20000 </s></td><td>Rp."+byr+"</td><td>jumlah " +jml+"</td>";	
}
function menu10_s() {
	jml = document.getElementById('order_s10').value;
	diskon =25000*0.1
	byr = 25000-diskon
	jml_fix = (jml*byr)
	x[9]= jml_fix
	document.getElementById('menu10_p').innerHTML= "<td>Telor Ceplok Balada </td><td><s> Rp. 25000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}

function menu1_m() {
	jml = document.getElementById('order_m1').value;
	diskon =50000*0.25
	byr = 50000-diskon
	jml_fix = (jml*byr)
	x[0]= jml_fix
	document.getElementById('menu1_p').innerHTML= "<td>Ayam Asam Manis</td><td><s> Rp. 50000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}
function menu2_m() {
	jml = document.getElementById('order_m2').value;
	diskon =20000*0.25
	byr = 20000-diskon
	jml_fix = (jml*byr)
	x[1]= jml_fix
	document.getElementById('menu2_p').innerHTML= "<td>Capcay Goreng</td><td><s> Rp. 20000 </s></td><td>Rp."+byr+"</td><td> jumlah"+jml+"</td>";	
}
function menu3_m() {
	jml = document.getElementById('order_m3').value;
	jml_fix = jml*30000
	x[2]= jml_fix
	document.getElementById('menu3_p').innerHTML= "<td>Ikan Goreng Sambal Matah</td><td> Rp. 30000 </td><td> jumlah " +jml+"</td>";	
}
function menu4_m() {
	jml = document.getElementById('order_m4').value;
	jml_fix = jml*29000
	x[3]= jml_fix
	document.getElementById('menu4_p').innerHTML= "<td>Mie Godog Jawa </td><td> Rp. 29000 </td><td> jumlah " +jml+"</td>";	
}
function menu5_m() {
	jml = document.getElementById('order_m5').value;
	jml_fix = jml*30000
	x[4]= jml_fix
	document.getElementById('menu5_p').innerHTML= "<td>Nasi Goreng</td><td> Rp. 30000 </td><td> jumlah " +jml+"</td>";	
}
function menu6_m() {
	jml = document.getElementById('order_m6').value;
	jml_fix = jml*25000
	x[5]= jml_fix
	document.getElementById('menu6_p').innerHTML= "<td>Nasi Goreng Gila</td><td> Rp. 25000 </td><td> jumlah " +jml+"</td>";	
}
function menu7_m() {
	jml = document.getElementById('order_m7').value;
	diskon =55000*0.3
	byr = 55000-diskon
	jml_fix = (jml*byr)
	x[6]= jml_fix
	document.getElementById('menu7_p').innerHTML= "<td>Rawon Iga Sapi</td><td><s>Rp. 55000 </s></td><td>Rp."+byr+"</td><td>jumlah"+jml+"</td>";	
}
function menu8_m() {
	jml = document.getElementById('order_m8').value;
	jml_fix = jml*20000
	x[7]= jml_fix
	document.getElementById('menu8_p').innerHTML= "<td>Sup Merah</td><td> Rp. 20000 </td><td> jumlah " +jml+"</td>";	
}
function menu9_m() {
	jml = document.getElementById('order_m9').value;
	jml_fix = jml*25000
	x[8]= jml_fix
	document.getElementById('menu9_p').innerHTML= "<td>Sop Tomyum </td><td> Rp. 25000 </td><td> jumlah " +jml+"</td>";	
}
function menu10_m() {
	jml = document.getElementById('order_m10').value;
	diskon =55000*0.3
	byr = 55000-diskon
	jml_fix = (jml*byr)
	x[9]= jml_fix
	document.getElementById('menu10_p').innerHTML= "<td>Tongseng Ayam Jamur </td><td><s>Rp. 55000 </s></td><td>Rp."+byr+"</td><td> jumlah " +jml+"</td>";	
}

function ex1(){
	x[0]= 0
	document.getElementById('menu1_p').innerHTML= "-";	
}
function ex2(){
	x[1]= 0
	document.getElementById('menu2_p').innerHTML= "-";	
}function ex3(){
	x[2]= 0
	document.getElementById('menu3_p').innerHTML= "-";	
}function ex4(){
	x[3]= 0
	document.getElementById('menu4_p').innerHTML= "-";	
}function ex5(){
	x[4]= 0
	document.getElementById('menu5_p').innerHTML= "-";	
}
function ex6(){
	x[5]= 0
	document.getElementById('menu6_p').innerHTML= "-";	
}
function ex7(){
	x[6]= 0
	document.getElementById('menu7_p').innerHTML= "-";	
}function ex8(){
	x[7]= 0
	document.getElementById('menu8_p').innerHTML= "-";	
}function ex9(){
	x[8]= 0
	document.getElementById('menu9_p').innerHTML= "-";	
}function ex10(){
	x[9]= 0
	document.getElementById('menu10_p').innerHTML= "-";	
}
var hasil1=[];

function bayar(){
	jumlah = x.length;
	for (var i = 0; i<jumlah; i++){
			hasil += x[i];
	}
	hasil1.push(hasil)
	document.getElementById("total1").innerHTML =hasil;
	document.getElementById("tunai").style.display = 'none';
	document.getElementById("tf").style.display = 'none';
	document.getElementById("sarapan").style.display = 'none';
	document.getElementById("siang").style.display = 'none';
	document.getElementById("malam").style.display = 'none';
	document.getElementById("pilihan").style.display = 'block';
}
function tunai(){
	document.getElementById("tunai").style.display = 'block';
	document.getElementById("tf").style.display = 'none';
	document.getElementById("sarapan").style.display = 'none';
	document.getElementById("siang").style.display = 'none';
	document.getElementById("malam").style.display = 'none';
	document.getElementById("pilihan").style.display = 'none';
}
function tf(){
	document.getElementById("tunai").style.display = 'none';
	document.getElementById("tf").style.display = 'block';
	document.getElementById("sarapan").style.display = 'none';
	document.getElementById("siang").style.display = 'none';
	document.getElementById("malam").style.display = 'none';
	document.getElementById("pilihan").style.display = 'none';
}
function akhir(){
	var uang = document.getElementById("uang1").value;
	if (uang == hasil1) {
        alert('Terimakasih sudah memesan :)');
        document.forms['fromLogin']['uang1'].focus();
        return true;
        }
    if (uang > hasil1){
    	var kembalian = uang - hasil1
    	alert("total: Rp."+uang +"- Rp"+ hasil + " kembalian anda Rp. " +kembalian+ "<br> Terimakasih sudah memesan :)");
    	document.forms['fromLogin']['uang1'].focus();
        return true;
    	}
    if (uang < hasil1){
    	var kurang = hasil1 - uang
    	var yakin = confirm("Maaf uang yang anda masukkan kurang Rp. "+kurang+" Apakah anda ingin mengecek ulang?");
    	if (yakin){
    		return false;
    	}else{
    		alert('Maaf pesanan anda tidak dapat di proses');
    		return true;
    	}
    	document.forms['fromLogin']['uang1'].focus();
    	}
}
function akhir1(){
	var uang = document.getElementById("uang2").value;
	if (uang == hasil1) {
        alert('Terimakasih sudah memesan :)');
        document.forms['fromLogin']['uang2'].focus();
        return true;
        }
    if (uang > hasil1){
    	var kembalian = uang - hasil1
    	alert("total: Rp."+uang +"- Rp"+ hasil + " kembalian anda Rp. " +kembalian+ "<br> Terimakasih sudah memesan :)");
    	document.forms['fromLogin']['uang2'].focus();
        return true;
    	}
    if (uang < hasil1){
    	var kurang = hasil1 - uang
    	var yakin = confirm("Maaf uang yang anda masukkan kurang Rp. "+kurang+" Apakah anda ingin mengecek ulang?");
    	if (yakin){
    		return false;
    	}else{
    		alert('Maaf pesanan anda tidak dapat di proses');
    		return true;
    	}
    	document.forms['fromLogin']['uang2'].focus();
    	}
}
