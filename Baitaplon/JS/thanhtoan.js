function capnhatTien() {
   
    let soluong = document.getElementById("quantity")// Lấy phần tử chứa thông tin về số lượng sản phẩm
    const sl = Number(soluong.value)// Chuyển đổi giá trị của số lượng thành số

    let dongia = document.getElementById("gia")// Lấy phần tử chứa thông tin về đơn giá sản phẩm
    const dg = Number(dongia.value) // Chuyển đổi giá trị của đơn giá thành số

    let thanhtien = sl * dg // Tính tổng tiền
    $('#thanhtien').html(thanhtien); // Hiển thị tổng tiền trong phần tử có id 'thanhtien' bằng jQuery]

    let phiship = document.getElementById("txtDongia")// Lấy phần tử chứa thông tin về phí ship
    const ps = Number(phiship.value) // Chuyển đổi giá trị của phí ship thành số

    let tongtien = thanhtien + ps// Tính tổng tiền cuối cùng (tổng tiền + phí ship)
    $('#tongtien').html(tongtien); // Hiển thị tổng tiền cuối cùng trong phần tử có id 'tongtien' bằng jQuery
    return true
}

// 
$(document).ready(function(){

    var txtTen=$("#txtTen");
    var tbTen=$("#tbTen");
    function kiemTraTen(){
        var kt = /^([A-Z]{1})([a-z]+)(\s([A-Z]{1})([a-z]+))*$/;
        if(txtTen.val()==""){
            tbTen.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtTen.val())){
            tbTen.html("*Chữ cái đầu phải viết hoa");
            return false;
        }
        tbTen.html("*");
        return true;
    }
    txtTen.blur(kiemTraTen);

    $("#sanpham").change(function(e) {
      let gia = $("#sanpham option:selected").val();
     $("#gia").val(gia);
   });
   
    $("#vanchuyen").change(function(e) {
    let vanchuyen = $("#vanchuyen option:selected").val();
    $("#txtDongia").val(vanchuyen);
    });

    var txtdiachi=$("#diachi");
    var tbdiachi=$("#tbdiachi");
    function kiemTraDiaChi(){
        if(txtdiachi.val()==""){
            tbdiachi.html("(*)Bắt buộc nhập");
            return false;
        }
        tbdiachi.html("*");
        return true;
    }
    txtdiachi.blur(kiemTraDiaChi);
   
    var txtSdt=$("#txtSdt");
    var tbSdt=$("#tbSdt");
    function kiemTraSdt(){
        var kt = /^0[0-9]{9}$/;
        if(txtSdt.val()==""){
            tbSdt.html("(*)Bắt buộc nhập");
            return false;
        }
        if(!kt.test(txtSdt.val())){
            tbSdt.html("(*)Bắt đầu bằng số 0 và phải có 10 số");
            return false;
        }
        tbSdt.html("*");
        return true;
    }
    txtSdt.blur(kiemTraSdt);
        $("#btndathang").click(function () {
            if(kiemTraDiaChi()==false||kiemTraSdt()==false||$("#quantity").val()==""){
            alert("Bạn chưa nhập đầy đủ thông tin!");
            return flase;
        }
        else{
            alert("Bạn đã đặt hàng thành công!");
            return true;
        }
        })    
});