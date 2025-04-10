
$(document).ready(function(){

$("#btnPhanHoi").click(function () {
    if ($("#txtPhanHoi").val() == "") {
        alert("Vui lòng nhập thông tin phản hồi !!!");
        return false;
    } else 
        alert("Cảm ơn bạn đã phản hồi cho chúng tôi!");
        return true;
});
});