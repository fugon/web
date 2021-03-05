$(function(){
/*产品目录第一个默认展开*/
/*$(".menu_li>p>span").first().addClass('on');
$(".menu_li>ul").first().show();*/

});

/*网站导航点击事件*/
var menu_flag=0;
$('.btn-menu').click(function(event){
	if(menu_flag==0){     	
		$(this).toggleClass('active');
		$('.navigation').slideToggle(300);
		menu_flag=1;
	}else{
		$(this).toggleClass('active');
		$('.navigation').slideToggle(300);
		menu_flag=0;
	 }
	event.stopPropagation();
});
<!--手机端产品目录展开-->
var menu_tit_flag=0;
$('.menu_tit').on('click',function(){
	if ( matchMedia( 'only screen and (max-width:991px)' ).matches ) {
	if(menu_tit_flag==0){
		$('.menu_list').stop(true).slideToggle(300);
		$(this).children('em').html('点击收起 -');
		menu_tit_flag=1;
	}else{
		$('.menu_list').stop(true).slideToggle(300);
		$(this).children('em').html('点击展开+');
		menu_tit_flag=0;
		}
	}
});

/*产品目录收缩*/
$(".menu_li>p>span").on('click',function(){
  $(this).parents('p').next('ul').stop(true).slideToggle(300);
  $(this).stop(true).toggleClass('on');
});
/*联系方式tab切换*/
$(".contact .tags_title .one").hover(function(){
	$(this).removeClass('ron');
	$(".contact .tags_title .two").addClass('ron');
	$(".contact .content2").hide();
    $(".contact .content1").show();
},function(){
    
});
$(".contact .tags_title .two").hover(function(){
	$(this).removeClass('ron');
	$(".contact .tags_title .one").addClass('ron');
	$(".contact .content1").hide();
    $(".contact .content2").show();
},function(){
    
});
/*产品目录收缩*/
$(".pro_mulu>ul>li").hover(function() {
  $(".pro_mulu>ul>li>div").hide();
  $(".pro_mulu>ul>li").removeClass('on');
  $(this).addClass('on');
  $(this).children('div').show();
}, function() {
  
});
/* -----QQ 侧边悬浮 ---- */
$( ".suspension .a").bind("mouseenter", function(){
	var _this = $(this);
	var s = $(".suspension");
	var isService = _this.hasClass("a-service");
	var isServicePhone = _this.hasClass("a-service-phone");
	var isQrcode = _this.hasClass("a-qrcode");
	if(isService){ s.find(".d-service").show().siblings(".d").hide();}
	if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
	if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
});
$(".suspension, .suspension .a-top").bind("mouseleave", function(){
	$(".suspension").find(".d").hide();
});
$(".suspension .a-top").bind("mouseenter", function(){
	$(".suspension").find(".d").hide(); 
});
$(".suspension .a-top").bind("click", ".suspension .a-top", function(){
	$("html,body").animate({scrollTop: 0});
});
$(window).scroll(function(){
	var st = $(document).scrollTop();
	var $top = $(".suspension .a-top");
	if(st > 400){
		$top.css({display: 'block'});
	}else{
		if ($top.is(":visible")) {
			$top.hide();
		}
	}
});	   
/*Home滚动 begin*/
/*分多种情况，一个是一行显示3个(.slideGroup)，一个是一行显示4个(.slideGroup4)，一个是一行显示2个(.slideGroup2)*/
$(document).ready(function(){		
	$(window).resize(function () {
		//执行代码块
		MenuHeight4();
	});
	MenuHeight4();

	function MenuHeight4() {
		var w=$(window).width();	
		var vis=4;
		var visM=30;
		var visM2=visM/2;
		if(w>=1200){
			vis=4;
			var visM=30;
			var visM2=visM/2;
		}else if(w<=1199 && w>880) {
			vis=3;
			var visM=30;
			var visM2=visM/2;
		}else if(w<=880 && w>380) {
			vis=2;
			var visM=10;
			var visM2=visM/2;
		}else if(w<=380){
			vis=2;
			var visM=10;
			var visM2=visM/2;
		}
		var pro_bdW=$('.slideGroup4 .parBd').width();
		var pro_LiW=(pro_bdW-visM*vis)/vis;
		if(w<=380){
			var pro_LiW=(pro_bdW-visM2*vis)/vis;
		}
		
		var slideGroup4s = $('.slideGroup4 .parBd').parent();
		if(slideGroup4s.length>0){
		$('.slideGroup4 .parBd ul li').width(pro_LiW);
	
		var swiper = new Swiper('.slideGroup4 .swiper-container', {
		 slidesPerView: vis,
        paginationClickable: true,
       prevButton: '.swiper-button-prev',

    nextButton: '.swiper-button-next',
        spaceBetween: visM,
		  autoplay:3000
		});
	}
	}
	
});
/*Home滚动 end*/
/*详情页表格 开始*/      
$(function() {    
var fuji = $('#c_detail_wrap table').parent();
if(fuji>0) {  
    $('#c_detail_wrap table').after('<section id="new-div"><section class="zoom-caret">+</section>'+$('#c_detail_wrap table')[0].outerHTML+'</section>');  
$(fuji).children('#c_detail_wrap table').remove();  
}
      
    var h_table;  
    var flag_table=0;  
      
    function setTable() {  
        var lxl=1;  
          
        $('section#new-div').removeClass('on');  
        $('section#new-div').scrollTop(0,0);  
       $("section#new-div table,section#new-div table td").removeAttr("width");  
        $("section#new-div table,section#new-div table td").removeAttr("height");  
        $("section#new-div table").css('width','initial');  
        $("section#new-div table td").css('width','initial');  
        $("section#new-div table td").css('height','initial');  
  
        $('#c_detail_wrap table').each(function() {  
            if ( matchMedia( 'only screen and (max-width:1199px)' ).matches ) {  
                var zclientWidth=$(document).outerWidth();  
                var ztableWidth=$(this).outerWidth();  
                var zscale=zclientWidth/ztableWidth*0.871546673799;  
                lxl=zscale;  
                if(lxl>1){lxl=1;}  
            }  
            $(this).css("transform","scale(" + lxl + ")");   
            var h_table=$(this).height();  
            $(this).parent('section#new-div').height(h_table*lxl+10);  
        });  
    }  
      
    $("#c_detail_wrap table").on('click',function(){  
        if ( matchMedia( 'only screen and (max-width:1199px)' ).matches ) {  
            if(flag_table==0){  
                $(this).parent('section#new-div').addClass('on');  
                $(this).parent('section#new-div').children('table').css("transform","scale(" + 1 + ")");   
                $(this).parent('section#new-div').height(h_table);  
                flag_table=1;  
            }else{  
                setTable();  
                flag_table=0;  
            }  
        }            
});  
 $("#c_detail_wrap #new-div .zoom-caret").on('click',function(){  
        if ( matchMedia( 'only screen and (max-width:1199px)' ).matches ) { 
            if(flag_table==0){  
                $(this).parent('section#new-div').addClass('on');  
                $(this).parent('section#new-div').children('table').css("transform","scale(" + 1 + ")");   
                $(this).parent('section#new-div').height(h_table);  
                flag_table=1;  
            }else{  
                setTable();  
                flag_table=0;  
            }  
        }            
    });  

      
    /*调用方法*/  
    setTable();  
      
    $(window).resize(function() {   
        /*调用方法*/  
        setTable();  
    });  
      
    /*产品详情页点击tab切换*/  
    $(".nyprodetail2 .hd span").on('click',function(){  
      var num1=$(this).index();  
      $(".nyprodetail2 .bd>section").eq(num1).show().siblings('.nyprodetail2 .bd>section').hide();  
      $(this).addClass('on').siblings('.nyprodetail2 .hd span').removeClass('on');  
        
      /*调用方法*/  
      setTable()  
    });  
          
});   
/*详情页表格 结束*/     

			   
	
