// Hiển thị thông báo lỗi khi nhập sai tên đăng nhập hoặc mật khẩu
function showError(message) {
    $(".error-message").text(message);
    $(".error-message").show();
}

// Xử lý sự kiện submit form
$("#login-form").submit(function(e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === "" || password === "") {
        showError("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Gửi yêu cầu đăng nhập đến server
    // ...

    // Sau khi đăng nhập thành công, chuyển hướng đến trang chủ
    // ...
});
