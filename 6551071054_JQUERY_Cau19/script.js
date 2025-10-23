$(document).ready(function() {
  const bangGia = {
    "8h – 12h": 45000,
    "12h – 17h": 55000,
    "17h – 20h": 65000
  };

  const giaPhong = {
    "A": 0,
    "B": 5000,
    "Vàng": 10000
  };

  $('#muaVe').click(function() {
    let tenKhach = "Nguyễn Văn A";
    let ngayChieu = $('#ngayChieu').val();
    let phim = $('#phim').val();
    let suat = $('#suatChieu').val();
    let phong = $('#phongChieu').val();
    let ghe = $('#choNgoi').val();

    if (!ngayChieu || !phim || !suat || !phong || !ghe || ghe.length === 0) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    let giaVe = bangGia[suat] + giaPhong[phong];
    let tong = giaVe * ghe.length;

    let html = `
      <h4>Thông tin vé</h4>
      <p><strong>Khách hàng:</strong> ${tenKhach}</p>
      <p><strong>Ngày chiếu:</strong> ${ngayChieu}</p>
      <p><strong>Phim:</strong> ${phim}</p>
      <p><strong>Suất chiếu:</strong> ${suat}</p>
      <p><strong>Phòng chiếu:</strong> ${phong}</p>
      <table>
        <tr><th>Ghế</th><th>Giá vé</th></tr>
    `;

    ghe.forEach(g => {
      html += `<tr><td>${g}</td><td>${giaVe.toLocaleString()} đ</td></tr>`;
    });

    html += `
        <tr><td><b>Tổng tiền</b></td><td><b>${tong.toLocaleString()} đ</b></td></tr>
      </table>
    `;

    $('#thongTinVe').hide().html(html).fadeIn(600);
  });
});
