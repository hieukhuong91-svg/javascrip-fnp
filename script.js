/* 1. Hàm upDate: Chạy khi di chuột vào (onmouseover) hoặc nhấn Tab đến (onfocus) */
function upDate(previewPic) {
  console.log("Sự kiện upDate được kích hoạt!");
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2. Hàm unDo: Chạy khi rời chuột khỏi (onmouseout) hoặc rời focus (onblur) */
function unDo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Di chuột hoặc dùng phím Tab để xem hình ảnh.";
}

/* 3. Hàm initializeGallery: Khởi chạy khi trang web tải xong (onload) */
function initializeGallery() {
  console.log("Trang web đã tải xong (onload event)!");
  addTabFocus(); // Gọi hàm thêm tabindex cho các hình ảnh
}

/* 4. Hàm addTabFocus: Sử dụng vòng lặp for để tự động thêm tabindex="0" cho từng ảnh */
function addTabFocus() {
  console.log("Đang thêm thuộc tính tabindex cho các hình ảnh...");

  // Lấy tất cả thẻ img nằm trong section có class gallery
  let images = document.querySelectorAll(".gallery img");

  // Vòng lặp duyệt qua tất cả ảnh
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh thứ " + (i + 1));
  }
}
