$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemtraTen() {
        var i = 1;
        let maukt = /([A-Z]{1}[a-z]+)((\s{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!maukt.test($("#Name").val())) {
            $("#tbName").html("tài khoản phải dài hơn 6 kí tự");
            return true;
        }
        $("tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraTen);

    function kiemtrasoao() {
        var mauKT = /^\d*$/;
        if ($("#mk").val() == "") {
            $("#tbmk").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#mk").val())) {
            $("#tbmk").html("mật khẩu phải dài hơn hoặc bằng 8 kí tự");
            return true;
        } else {
            var soao = $("#Ao").val();
            if (soAo < 1 || soAo > 100){
                $("#tbmk").html("tu 1 den 100");
            } else {
                $("#tbName").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemtrasoao);

    function kiemtradiachi() {
        var maukt = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("diachi").val() == "") {
            $("#tbdiachi").html("Khong Duoc De Trong");
            return false;
        }
        if (!maukt.test($("#diachi").val())) {
            $("tbdiachi").html("Moi Ky Tu Dau Viet Hoa Khong Dung So");
            return true;
        }
        $("#tbdiachi").html("*");
        return true;
    }
    $("#tbdiachi").blur(kiemtradiachi);

    function kiemtraNTT() {
        if ($("#ngaytaptrung").val() == "") {
            $("#tbngaytaptrung").html("KHong Duoc de Trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#ngaytaptrung").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbngaytaptrung").html("phai sau ngay hien hanh 7 Ngay");
            return false;
        }
        $("#tbngaytaptrung").html("*");
        return true;
    }
    $("#ngaytaptrung").blur(kiemtraNTT);

    function kiemtraSDT() {
        var maukt = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#sdt").val() == "") {
            $("#tbsdt").html("Khong De Trong");
            return false;
        }
        if (!maukt.test($("#sdt").val())) {
            $("#tbsdt").html("Theo Dang 0xxx-xxx-xxx trong do so la x tu 0-9");
            return true;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#sdt").blur(kiemtraSDT);

    $("#save").click(function() {
        if (kiemtraTen() == true && kiemtrasoao() == true && kiemtraSDT() == true && kiemtraNTT() == true && kiemtradiachi() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#diachi").val() + "</th>";
            row += "<th>" + $("#ngaytaptrung").val() + "</th>";
            row += "<th>" + $("#sdt").val() + "</th>";
            row += "<th>" + $("#anhdaidien").val() + "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal("hide");
        }
    })
})    