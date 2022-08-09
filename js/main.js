/* 상단검색 포커스 */
$(function(){
    const search = $('#search');
    search.focus(function(){
        $('.search_box').css('border-color', '#35C5F0');
    });
    search.blur(function(){
        $('.search_box').css('border-color', '#C2C8CC');
    });
});


/* 제품상세 옵션박스 첫번째 값 (기본값 + select박스 클릭시 비활성) */
$(function(){
    $(".form-control").val("none").prop("selected", true);
    $(".form-control").click(function(){
        $(this).find("option.none").prop("disabled", true).css('color', '#ccc');
    });
});


/* 장바구니 modal */
$(function(){
    $("#cart_add_btn").click(function(){
       $('.modal_wrap').css('display', 'flex');
    });
    $('.modal_wrap .close').click(function(){
        $('.modal_wrap').hide();
    });
    $('.modal_wrap .modal_close_btn').click(function(){
        $('.modal_wrap').hide();
    });
});