console.log('--->> visual.js 시작합니닷 <<---');
$(function(){
    
    // 전역변수 선언
    var tl_visual = null;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        tl_visual = new TimelineLite();
    }

    function visual_ani() {
        
        var $tree = {
            tr01 : $(".visual_tree01"),
            tr02 : $(".visual_tree02"),
            tr03 : $(".visual_tree03"),
            tr04 : $(".visual_tree04")
        };
        
        var $fog = {
            fg01 : $(".visual_fog01"),
            fg02 : $(".visual_fog02")
        }
        
        tl_visual
                .addLabel("label_01")
                .to(
                    $tree.tr02, //왼쪽 앞
                    2, //듀레이션
                    {left: -80, top: 80}
                )
                .to(
                    $tree.tr01, //왼쪽 뒤
                    3,
                    {left: -40, top: 40}, //왼쪽 아래로 이동
                    "label_01+=0.3"
                )
                .to(
                    $tree.tr04, //오른쪽 앞
                    2,
                    {right: -70, top: 70}, //오른쪽 아래로 이동
                    "label_01"
                )
                .to(
                    $tree.tr03, //왼쪽 뒤
                    3,
                    {right: -30, top: 30}, //왼쪽 아래로 이동
                    "label_01+=0.3"
                );
               /* .to(
                    $fog.fg01,
                    4,
                    {right: 60},
                    "label_01"
                );*/
        
    }
    
    function visualTitleFindN(){
        
        var $title_text = $(".title_text");
        
        
        $title_text.html( //비주얼 타이틀 쪼개기
            $title_text.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;")
        );
        
        $title_text.children().each(function(){ //N을 찾아서 i 태그로 감싸기
            if($(this).text().indexOf('N')>-1 || $(this).text().indexOf('n')>-1){
                $(this).wrap('<i></i>');
            }
        });
        
    }
    
    
    
    function initEvent(){
        

        
    }
    
    
    
    $(window).on('load',function(){
        init();
        visual_ani();
        visualTitleFindN();    
    });
    
    
    
    
    
    
    
 
    console.log('--->> visual.js 끝났습니닷 <<---');
});
console.log('---!! 비주얼js 가장 하단의 코드입니다 !!---');


