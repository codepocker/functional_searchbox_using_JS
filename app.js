<script>
    $(".search").click(function () {
       $(".main").addClass("show");
       $(this).css("display","none");
       $(".data").fadeIn(500);
       $(".close").fadeIn(500);
       $(".data .line").addClass("show");
       setTimeOut(function () {
           $("input").focus();
           $(".data lable").fadeIn(500);
           $(".data span").fadeIn(500);
       },800); 
    });
    $(".close").click(function () {
        $(".main").removeClass("show");
        $(".search").fadeIn(800);
        $(".data").fadeOut(500);
        $(".close").fadeOut(500);
        $(".data .line").removeClass("show");
        $("input").val("");
        $(".data label").fadeOut(500);
        $(".data span").fadeOut(500)
    })
</script>