// mô đun dăng nhập
$(document).ready(function(){

    $("#dangnhap").click(function(){
        $("#myModal").modal("show");
    }); 

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

        var txtMk=$("#txtMk");
        var tbMk=$("#tbMk");
        function kiemTraMatKhau(){
            var kt=/^[A-Za-z0-9(!@#$%^&*()_]{8,20}$/;
            if(txtMk.val()==""){
                tbMk.html("*Bắt buộc nhập");
                return false;
            }
            if(!kt.test(txtMk.val())){
                tbMk.html("*Mật khẩu phải có 8 ký tự trở lên");
                return false;
            }
            tbMk.html("*");
            return true;
        }
        txtMk.blur(kiemTraMatKhau);

        $("#btnsave").click(function () {
            if(kiemTraEmail()&&kiemTraMatKhau()){
            alert("Đăng nhập thành công!");
            $("#myModal").modal("hide");
            return true;
        }
        else{
            alert("Bạn chưa nhập đủ thông tin!");
            return false;
        }
        })      
});


