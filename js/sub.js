function beforeSubmit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username.length < 6 || password.length < 6) {
        alert('格式不正确！');
        return false;
    } else {
        return true;
    }
}