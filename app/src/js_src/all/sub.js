/*
   [ sub.js ]
   
   2018.05.05
   nykim@nykim.net

   서브페이지(work_**.html) 내용을 자동으로 생성합니다.
   이제 jQuery의 한계를 느낀드아앍@#$!@

*/



// ======================================


/* 
    [!] 서브 페이지 내용 설정 
*/

var customSubPage = {
    
    
    '코인원': 
        {
            'number': 13, //몇 번째 sub페이지가 될지 설정합니다.
            'name': 'coinone', //폴더 및 이미지의 이름입니다. CSS 스타일링 역시 반드시 이 이름으로 지정해야 합니다.
            
            'title': 'Coinone Admin',  
            'desc': '코인원의 관리자 계정 페이지', //설명
            'client': 'Coinone', //클라이언트
            'role': 'UI Development & Design', //역할
            'percent': '(100% &middot; 70%)', //기여도
            'viewCode': true, //true=코드 링크 있음, false=코드 링크 없음
            
            'detailTitle': '웹퍼블리싱 & 웹디자인 | 구축',
            'detailInfo' : [
                '코인원의 어드민 유저를 위해 만든 관리자 페이지입니다.<br/> 디자이너의 시안 없이, 컬러 가이드만 있는 상태에서 UI 개발을 진행했기에 기억에 남는 작업입니다.<br/>',
                '기획서를 보면서 바로 작업했기 때문에 제가 할 수 있는 범위가 넓어 즐겁게 작업할 수 있었습니다.<br/> 어드민 페이지이기 때문에 디자인 자체보다는 UX 측면을 중시하려 했고,<br/> 일부 요소들은 문구나 위치 선정에 있어 기획자와 디자이너의 의견을 물어가며 바꿔보기도 했습니다.<br/>',
                '또, 공통된 디자인 요소가 많았기 때문에 SASS 모듈화를 도입하였습니다.<br/> 주요 컬러는 변수에 넣고, 버튼 스타일은 mixin으로 만들어 빠르게 재사용할 수 있도록 했습니다.'
            ],
            
            'link': false,
        },
    
    
    'AR GEAR':
        {
            'number': 12,
            'name': 'arGear',
            
            'title': 'AR GEAR',
            'desc': '랜딩 페이지 (풀반응형)',
            'client': 'AR GEAR',
            'role': 'UI Development',
            'percent': '(100%)',
            
            'viewCode': true, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
        },
    
    
    
    '스테이지':
        {
            'number': 11,
            'name' : 'stayge',
            
            'title': 'STAYGE One',
            'desc': '랜딩 페이지 (풀반응형)',
            'client': 'STAYGE',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
            'existLink' : 'http://stayge.io/',
        },
    
    
    'ICOP':
        {
            'number': 10,
            'name': 'icop',
            
            'title': 'ICO Platform',
            'desc': '펀딩 플랫폼',
            'client': 'ICON Foundation',
            'role': 'UI Development & Design',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 & 웹디자인 | 구축',
            'detailInfo' : [
                '123'
            ],
            
            'link': false,
        },
    
    
    '파트너스 협약식':
        {
            'number': 9,
            'name': 'partners',
            
            'title': 'Presentation Page',
            'desc': '협약식 체결 화면',
            'client': 'the loop',
            'role': 'UI Development & Design',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': false,
            
            
        },
    
    
    '실크로드':
        {
            'number': 8,
            'name': 'silkroad',
            
            'title': 'silkroad',
            'desc': '랜딩 페이지(풀반응형)',
            'client': 'silkroad Foundation',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
            'existLink' : 'http://silkroadfoundation.io/',
        },
    
    
    'Chain Sign':
        {
            'number': 7,
            'name': 'sign',
            
            'title': 'Chain SIGN',
            'desc': '랜딩 페이지(풀반응형)',
            'client': 'the loop',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
            'existLink' : 'http://chainsign.co.kr/',
        },
    
    
    '챙스타':
        {
            'number': 6,
            'name': 'chang',
            
            'title': 'Lyrics Page',
            'desc': 'Changstarr 가사 정보 페이지(웹, 모바일)',
            'client': "D'Amusements",
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': false,
            
        },
    
    
    '3M HCA':
        {
            'number': 5,
            'name': 'hca',
            
            'title': '3M HCA',
            'desc': '3M 제품 사용자를 위한 플랫폼',
            'client': '3M',
            'role': 'UI Development',
            'percent': '(50%)',
            'viewCode': true, 
            'detailTitle': '웹퍼블리싱 | 구축, 유지보수',
            'detailInfo' : [
                ''
            ],
            
            'link': false,
        },
    

    
    '구 포트폴리오':
        {
            'number': 4,
            'name': 'old',
            
            'title': 'Old Portfolio',
            'desc': '과거 포트폴리오 (반전매력?!)',
            'client': 'ME!',
            'role': 'UI Development & Design',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 & 웹디자인 | 구축',
            'detailInfo' : [
                '3M 제품 사용자를 위한 플랫폼 웹페이지입니다.<br/> 어드민 사이트와 엔드 유저 사이트 둘로 나뉘며, 엔드 유저용 사이트는 반응형으로 제작했습니다.<br/>',
                '경력 퍼블리셔와 함께 작업을 진행하였고, 그 과정에서 CSS 작성법과 네이밍룰을 배울 수 있었습니다.<br/> 또, 필요한 내용을 요청하는 법, 주석을 남겨 파일을 원활하게 전달하는 법 등 함께 일하면서 필요한 기본 능력 등도 익힐 수 있었습니다.<br/>',
                '유지보수 분량이 꽤 많았던 작업인데, 기존 CSS를 빠르게 읽고 고치는 방법과,<br/> 다른 CSS를 덮어쓰지 않도록 우선순위를 조정하는 방법 등도 숙지시켜준 즐거운 작업이었습니다.<br/>'
            ],
            
            'link': true,
        },
    

    
    'SBI 저축은행':
        {
            'number': 3,
            'name': 'sbi',
            
            'title': 'SBI BANK',
            'desc': 'SBI저축은행 하이브리드앱',
            'client': 'SBI Bank',
            'role': 'UI Development',
            'percent': '(50%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 유지보수',
            'detailInfo' : [
                'SBA 저축은행의 앱에 추가로 들어갈 페이지를 만들어 전달드린 작업입니다.<br/> 유지보수 작업이라 쉽게 마쳤던 작업이지만, 다른 사람의 코드를 읽고 활용하는 방법을 배울 수 있었습니다.<br/> 이때 봐두었던 코드 덕분에, 나중에 웹뷰 페이지를 제작할 때 em 개념을 활용한 손쉬운 작업이 가능했습니다.'
            ],
            
            'link': false,
        },

    
    'ICON 초기 랜딩페이지':
        {
            'number': 2,
            'name': 'icon',
            
            'title': 'ICON LANDING',
            'desc': 'ICON 랜딩 페이지 (반응형)',
            'client': 'ICON Fondation',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
        },
    
    
    '3M VR 예약페이지':
        {
            'number': 1,
            'name': 'vr',
            
            'title': '3M VR',
            'desc': '가상현실 체험 예약 페이지 (웹, 모바일)',
            'client': '3M',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': true, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                ''
            ],
            
            'link': true,
        },
    
    }

    var subPageList = [];


// ======================================


function checkHasSubPage(){
    for (var i in customSubPage) {
        //서브페이지가 존재하는 work 아이템인지 파악해 변수에 넣습니다.
        if(customSubPage[i].link === false){
            subPageList.push(customSubPage[i].name);
            console.log(subPageList);
        }
    }
}


function generateMainPage(){
    
    var myTurn = 0; //아이템이 삽입될 컬럼의 인덱스
            
    for (var i in customSubPage) {
        
        
        var mainHtml = '';
        
        mainHtml += '<div class="work_item">';
        mainHtml += '<figure>';
        
            mainHtml += ' <img src="images/thumb_'+customSubPage[i].name+'.png" alt="'+customSubPage[i].desc+'" class="work_image" /> ';

            if (customSubPage[i].link === true) {
                 // link 프로퍼티가 true인 경우 external 링크 추가
                 mainHtml += ' <figcaption class="work_caption external"> ';
            }else{
                 mainHtml += ' <figcaption class="work_caption"> ';
            }
                
            mainHtml += ' <div class="caption_textWrap"> ';
                mainHtml += ' <strong class="caption_title">'+customSubPage[i].title+'</strong> ';
                mainHtml += ' <p class="caption_desc">'+customSubPage[i].desc+'</p> ';
            mainHtml += ' </div> ';

            if(customSubPage[i].link  === true ){ //link 프로퍼티가 true인 경우 링크 주소 변경. 이때, existLink가 있다면 그걸로 변경
                if(customSubPage[i].hasOwnProperty('existLink')){
                    mainHtml += ' <a href="'+customSubPage[i].existLink+'" target="_blank"></a> ';
                }else{
                    mainHtml += ' <a href=" work/view_'+ customSubPage[i].name +'/index.html" target="_blank"></a> ';
                }
            }else{
                mainHtml += ' <a href=" work/work_'+ customSubPage[i].name +'.html "></a> '; 
            }
        
        mainHtml += ' </figcaption> ';
        
        mainHtml += '</figure>';
        mainHtml += '</div>';
        
        $(".work_list .column").eq(myTurn).append(mainHtml); //인덱스 번호에 맞춰 아이템 삽입
                
       if(myTurn<$(".work_list .column").length-1){ //컬럼 개수에 맞춰 인덱스 증가
           myTurn++;
       }else{
           myTurn = 0;
       }
        
    }
}
// ======================================


function generateSubPage(){
    
    var pageName = $(".wrap").data("sub").substring(5);
    var num = 0;
    // var maxNum = Object.keys(customSubPage).length;
    var maxNum = subPageList.length;
    
    console.log('pageName=', pageName);
    console.log('maxNum=', maxNum);
    
    for (var i in customSubPage) {
 
 

        if(customSubPage[i].name === pageName){

            num = subPageList.indexOf(pageName) + 1; //현재 페이지가 배열의 몇 번째인지 파악해 num에 대입합니다.

            
            // --
            // hero 화면 생성
            var html_hero = '';
            
            html_hero += '<div class="inner">';
                html_hero+= '<h2 class="hero_title">'+customSubPage[i].title+'<i class="hero_title_sm"> <span class="text_hide_m">featured</span> work #'+num+'</i></h2>';
                html_hero+= '<div class="hero_top"><p class="info_heading info_client">CLIENT<span class="info_text">'+customSubPage[i].client+'</span></p><p class="info_heading info_role">ROLE<span class="info_text">'+customSubPage[i].role+'<i class="info_percentage">'+customSubPage[i].percent+'</i></span></p></div>';
                html_hero+= '<div class="hero_center">';
            
                if (customSubPage[i].viewCode === true) { //viewCode 프로퍼티가 true라면 링크 추가
                     html_hero += '<a href="view_'+customSubPage[i].name+'/index.html" target="_blank" class="hero_link btn_effect"><span>VIEW CODE</span></a>';
                     html_hero+= '<p class="hero_scroll">or just scroll down to see screenshots!</p>';
                }else{
                    html_hero+= '<p class="hero_scroll">Scroll down to see screenshots!</p>';
                }

                html_hero+= '</div>';
            html_hero += '</div>';
            
            
            // --
            //detail top 화면 생성
            
            var html_detailTop = '';
            
            html_detailTop += '<h2 class="detail_title">WebPub. <i class="detail_title_sm">'+customSubPage[i].detailTitle+'</i></h2>';
            html_detailTop += '<div class="detail_info"> <p class="detail_info_text">';
            
            for (var x=0; x < customSubPage[i].detailInfo.length; x++){
                html_detailTop += customSubPage[i].detailInfo[x];
                html_detailTop += '<span class="ly_mt_sm"></span>';
            }
            
            html_detailTop += '<span class="detail_mobile br_m"> 모바일에선 현재 페이지를 확대할 수 있어요! <br/>두 손가락으로 화면을 확대한 뒤 살펴보세요. <i class="detail_ico"></i></span>';
            html_detailTop += '<span class="detail_line"></span>';
            html_detailTop += '</p></div>';
            
            
            // --
            //detail main 화면에 alt 삽입 (lazyload 때문에 이미지는 html에 직접 작성하기로 함...)
            
            $(".shots_item_img").attr("alt",customSubPage[i].title+' Image');
            
            
            // --
            //detail bottom 화면 생성
            var html_detailBottom = '';
            html_detailBottom += '<div class="bottom_inner">';
            
            var prevNum = 0;
            var nextNum = 0;
            

            function getPrevHtmlName(){
                var prevHtml = subPageList[(num-2)];

                if(prevHtml === undefined){
                    prevHtml = subPageList[(subPageList.length - 1)];
                }
                
                return prevHtml;
            }

            function getNextHtmlName(){
                var nextHtml = subPageList[num];

                if(nextHtml === undefined){
                    nextHtml = subPageList[0];
                }
                
                return nextHtml;

            }

            (num <= 1)? prevNum = maxNum : prevNum = (num - 1);
            (num >= maxNum)? nextNum = 1 : nextNum = (num + 1);
            
            html_detailBottom += '<a href="work_'+getPrevHtmlName()+'.html" class="detail_btn prev"><span class="detail_btn_title">WORK #'+prevNum+'</span>Prev.</a>';
            
             if (customSubPage[i].viewCode === true){ 
                 html_detailBottom += '<a href="view_'+customSubPage[i].name+'/index.html" target="_blank"  class="detail_link btn_effect"><span>view code</span></a>';
            }
            
            
            
            html_detailBottom += '<a href="work_'+getNextHtmlName()+'.html" class="detail_btn next"><span class="detail_btn_title">WORK #'+nextNum+'</span>Next.</a>';
            html_detailBottom += '</div>';
            
            
            $(".hero").append(html_hero);
            $(".detail_top").append(html_detailTop);
            $(".detail_bottom").append(html_detailBottom);
            $(".wrap").addClass(customSubPage[i].name);
            
            
        }
    }
}


$(window).on("load",function(){

    checkHasSubPage();
    
    if (!$(".wrap").data('sub')){
        generateMainPage();
      //return false;
    }else{
      generateSubPage(); 
    }
    
});
