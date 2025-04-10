// môdun đăng kí
$(document).ready(function(){
    
    $("#dangky").click(function(){
        $("#mymodal").modal("show");
    })

    var txtHoten=$("#txtHoten");
    var tbHoten=$("#tbHoten");
    function kiemTraTen(){
        var kt = /^([A-Z]{1})([a-z]+)(\s([A-Z]{1})([a-z]+))*$/;
        if(txtHoten.val()==""){
            tbHoten.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtHoten.val())){
            tbHoten.html("*Chữ cái đầu phải viết hoa");
            return false;
        }
        tbHoten.html("*");
        return true;
    }
    txtHoten.blur(kiemTraTen);

// Kiểm tra sdt
    var txtSdt=$("#txtSdt");
    var tbSdt=$("#tbSdt");
    function kiemTraSdt(){
        var kt = /^0[0-9]{9}$/; 
        if(txtSdt.val()==""){
            tbSdt.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtSdt.val())){
            tbSdt.html("*Bắt đầu bằng số 0 và phải có 10 số");
            return false;
        }
        tbSdt.html("*");
        return true;
    }
    txtSdt.blur(kiemTraSdt);
    
    // Kiểm tra địa chỉ
    var txtDc=$("#txtDc");
    var tbDc=$("#tbDc");
    function kiemTraDc(){
        var kt = /^([A-Z]{1})([a-z]+)(\s([A-Z]{1})([a-z]+))*$/;
        if(txtDc.val()==""){
            tbDc.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtDc.val())){
            tbDc.html("*Tên tỉnh buộcbuộc viết hoa");
            return false;
        }
        tbDc.html("*");
        return true;
    }
    txtDc.blur(kiemTraDc);

    // Kiểm tra tuoi
    var txtNgay=$("#txtNgay");
    var tbNgay=$("#tbNgay");
    function checkNgay(){
        if(txtNgay.val()==""){
            tbNgay.html("*Bắt buộc nhập");
            return false;
        }
        var day= new Date(txtNgay.val()); 
        var today= new Date(); 
        today.setFullYear(today.getFullYear());  
        var tuoi=today-day;
        if(tuoi<16){
            tbNgay.html("*Phải đủ 16 tuổi");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(checkNgay);

    // Kiểm tra email
    var txtEmail=$("#txtEmail");
    var tbEmail=$("#tbEmail");
    function kiemTraEmail(){
        var kt = /^[A-Za-z0-9(_)]+(@gmail.com)$/;
        if(txtEmail.val()==""){
            tbEmail.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtEmail.val())){
            tbEmail.html("*Nhập theo cú pháp xxxx@gmail.com");
            return false;
        }
        tbEmail.html("*");
        return true;
    }
    txtEmail.blur(kiemTraEmail);

    // Kiểm tra passwword
    var txtPass=$("#txtPass");
    var tbPass=$("#tbPass");
    function kiemTraPass(){
        var kt = /^[A-Za-z0-9(!@#$%^&*()_)]{8,}$/;
        if(txtPass.val()==""){
            tbPass.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtPass.val())){
            tbPass.html("*Mật khẩu phải có từ 8 ký tự trở lên");
            return false;
        }
        tbPass.html("*");
        return true;
    }
    txtPass.blur(kiemTraPass);

    //lưu thong tin vào tbody
    $("#btnSave").on("click",function(){
        if(kiemTraTen()||kiemTraSdt()||kiemTraDc()||checkNgay()||kiemTraEmail()||kiemTraPass()){
        var hoten=txtHoten.val();
        var sdt=txtSdt.val();
        var diachi=txtDc.val();
        var ngay=txtNgay.val();
        var email=txtEmail.val();
        var pass=txtPass.val();
        var them="<tr><td>"+hoten+"</td><td>"+sdt+"</td><td>"+diachi+"</td><td>"+ngay+"</td><td>"+email+"</td><td>"+pass+"</td></tr>";
        $("table tbody").append(them);
        $("#mymodal").modal("hide");
        alert("Đăng ký tài khoản thành công!");
        return true;
    }
    else{
        alert("Bạn chưa nhập đầy đủ thông tin!");
        return false;
    }
    })




     // Xử lý phần chuyển từ form đăng nhập sang đăng kí
    $(".register-request").on("click",function (e) {
        $("#myModal").modal("hide");
        $("#mymodal").modal("show");
    });
 
})