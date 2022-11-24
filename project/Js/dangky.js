function checkFullName(){
    let fn = $("#hoten").val();
    let fnc = document.getElementById('hoten');
    let reg = /^([A-Z]{1}[a-z]*\s{1})*([A-Z]{1}[a-z]*)$/;
    if (fn.trim() == "" || !reg.test(fn))
    {   
        fnc.classList.add('warning');
        return false; 
    }
    else 
    {
        fnc.classList.remove('warning')
        return true;
    }
}

function kiemtrMatKhau() {
    let text = $("#mât_khẩu").val();
    let mkc = document.getElementById('mât_khẩu');
    let regex = /^[\w]{6,}$/
    if (text.trim() == "" || !regex.test(text)) {
        mkc.classList.add('warning');
        return false;
    }
    else {
        mkc.classList.remove('warning');
        return false;  
    }
}

function kiemtraNLMatKhau() {
    let mk = $("#mât_khẩu2").val();
    let mk2 = $("#mât_khẩu2").val();
    let mk2c = document.getElementById('mât_khẩu2');
    if (mk != mk2) {
        mk2c.classList.add('warning');
        return false;
    }
    else
        mk2c.classList.remove('warning');
        return true;
}

function kiemTraTenDN() {
    let tenDN = $("#tên_tk").val();
    let tenDNc = document.getElementById('tên_tk')
    let regexTenDN = /^[\w]{2,}$/i;
    if (tenDN.trim() == "" || !regexTenDN.test(tenDN)) {
        tenDNc.classList.add('warning');
        return false;
    }
    else {
        tenDNc.classList.remove('warning');
        return true;
    }
}

function kiemtraDienThoai() {
    let text = $("#std").val();
    let textc = document.getElementById('std');
    let regex = /^[0]{1}[\d]{9}$/
    if (text.trim() == "" || !regex.test(text)) {
        textc.classList.add('warning');
        return false;
    }
    else {
        textc.classList.remove('warning');
        return true;
    }
}


function kiemtra() {
    let mk = $("#mât_khẩu").val();
    let mknl = $("#mât_khẩu2").val();
    if (!kiemTraTenDN() || !kiemTraMK() || !kiemtraDienThoai() || !checkFullName())
      {
        alert("Sai thông tin!")
        return false;
      }  

    if (mk != mknl) {
        alert("Mật khẩu nhập lại không chính xác")
        return false;
    }
    alert("Đăng ký thành công")
    return true;
}