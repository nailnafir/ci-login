const flashDataCreated = $('.flash-data-created').data('created');
const flashDataEmailNotReg = $('.flash-data-emailNotReg').data('emailnotreg');
const flashDataEmailNotActive = $('.flash-data-emailNotActive').data('emailnotactive');
const flashDataWrongPassword = $('.flash-data-wrongPassword').data('wrongpassword');
const flashDataLogout = $('.flash-data-logout').data('logout');

if (flashDataCreated) {
	Swal.fire({
		title: 'Success ',
		text: 'Your account has been ' + flashDataCreated,
		type: 'success'
	});
} else if (flashDataEmailNotReg) {
	Swal.fire({
		title: 'Failed ',
		text: 'Your email account is ' + flashDataEmailNotReg,
		type: 'error'
	});
} else if (flashDataEmailNotActive) {
	Swal.fire({
		title: 'Warning ',
		text: 'Your email account ' + flashDataEmailNotActive,
		type: 'warning'
	});
} else if (flashDataWrongPassword) {
	Swal.fire({
		title: 'Failed ',
		text: 'Your email or password ' + flashDataWrongPassword,
		type: 'error'
	});
} else if (flashDataLogout) {
	Swal.fire({
		title: 'Success ',
		text: 'You have been ' + flashDataLogout,
		type: 'success'
	});
}

// // tombol-hapus
// $('.tombol-hapus').on('click', function (e) {
// 	e.preventDefault(); // matiin link

// 	const linkHapus = $(this).attr('href');

// 	Swal.fire({
// 		title: 'Apakah Kamu Yakin?',
// 		text: "Data Ini Akan Dihapus!",
// 		type: 'warning',
// 		showCancelButton: true,
// 		confirmButtonColor: '#3085d6',
// 		cancelButtonColor: '#d33',
// 		confirmButtonText: 'Hapus Data!'
// 	}).then((result) => {
// 		if (result.value) {
// 			document.location.href = linkHapus;
// 		} else {
// 			Swal.fire(
// 				'Tidak Dihapus',
// 				'Data Kamu Aman :)',
// 				'error'
// 			);
// 		}
// 	});
// });
