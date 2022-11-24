function checkFullName(){
    let fn = $("#firstname").val();
    let ln = $("#lastname").val();
    let reg = /^([A-Z]{1}[a-z]*\s{1})*([A-Z]{1}[a-z]*)$/;
    if (fn.trim() == "" || ln.trim()=="")
    {
        alert("Chưa điền Họ hoặc Tên");
        // $("#firstname").addClass("warning");
        return false; 
    }
    else 
        if (!reg.test(fn) || !reg.test(ln)) {
            alert("Họ và Tên bắt đầu bằng ký tự hoa.");
            return false;
        }
        else 
            return true;
}

function checkEmail(){
    let temp = $("#email").val();
    let reg =/^[\w]+\@[\w]+\.[\w]{3}$/;
    if (temp.trim() == "") {
        alert("chưa điền email");
        return false;
    }
    else
        if (!reg.test(temp))
        {
            alert("email không hợp lệ!");
            return false;
        }
        else
            return true;
}

function checkReEmail(){
    let temp = $("#remail").val();
    let temp1 = $("#email").val();
    if (temp != temp1) {
        alert("email không khớp");
        return false;
    }
    else
        return true;
}

function checkPassword(){
    let temp = $("#pass").val();
    let reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
    if (temp.trim() == "") {
        alert("chưa điền mật khẩu");
        return false;
    }   
    else
        if (!reg.test(temp))
        {
            alert("mật khẩu không hợp lệ! (gồm chữ thường, in hoa và tối thiểu 6 kí tự)");
            return false;
        }
        else
            return true;
}

function checkdateofbirth(){
    let temp = $("#dateofbirth").val();
    let reg =/^[\d]*$/;
    if (temp.trim() == "") {
        alert("chưa điền năm sinh");
        return false;
    }   
    else
        if (!reg.test(temp) || temp > 2002)
        {
            alert("năm sinh là số và < 2002");
            return false;
        }
        else
            return true;
}

$(document).ready(function(){
    $('#submit').click(function(){
        if (checkFullName() && checkEmail() && checkReEmail && checkPassword && checkdateofbirth())
            alert("Đăng ký thành công");
    })
}) 