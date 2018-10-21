$(function(){
    // 定义卡片内容
    let arr = [{"name":'Jax-1',"id" : "1"},{"name":'Joye-2',"id" : "2"},{"name":'Jimmy-3',"id" : "3"},{"name":'Jay-4',"id" : "4"},,{"name":'Jax-1',"id" : "1"},{"name":'Joye-2',"id" : "2"},{"name":'Jimmy-3',"id" : "3"},{"name":'Jay-4',"id" : "4"},,{"name":'Jax-1',"id" : "1"},{"name":'Joye-2',"id" : "2"},{"name":'Jimmy-3',"id" : "3"},{"name":'Jay-4',"id" : "4"},,{"name":'Jax-1',"id" : "1"},{"name":'Joye-2',"id" : "2"},{"name":'Jimmy-3',"id" : "3"},{"name":'Jay-4',"id" : "4"},];
    let tmp = {
      data:{           
        isLock:false, 
        zindex:0,           
        item:null,           
        clientX:0,
        clientY:0,
        offsetLeft:0,
        offsetTop:0,
        mouseX:0,
        mouseY:0,        
      },
      init:function(){         
        this.bind();      
        this.setCard();
      },
      setCard:function(){        
        let background = ['#fff0f0','#fdfbe9','#f0f5ff','#f1fff0'];
        let containerWidth   = $('.guestbook-section').width();//800
        let containerHeight  = $('.guestbook-section').height();//400
        let itemWidth        = 100;
        let itemHeight       = 100;
        let paddingOffset    = 50;
        let maxWidth         = containerWidth - itemWidth - paddingOffset;//800-100-50=650
        let maxHeight        = containerHeight - itemHeight - paddingOffset;//400-100-50=250
        let htmlCss = '';
        arr.forEach(function(card,index){
          let randomTop = tmp.randomBetween(paddingOffset,maxHeight);//50 250
          let randomLeft = tmp.randomBetween(paddingOffset,maxWidth);//50 650 
          // let randomH5 = 16;   
          // let randomP = 14;   
          let key = `<div class="guestbook-item" 
                      style="z-index:${index + 1};
                      background:${background[index%background.length]};                  
                      top:${randomTop}px; 
                      left:${randomLeft}px";
                      >  
                      <h5 class="guestbook-item-title">小兔兔说：</h5>;
                      <p class="guestbook-item-text">耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！</p>
                          ${card.name}
                    </div>`;
          htmlCss += key 
      })        
        $('.guestbook-section').append(htmlCss);
        // 存储与数量相关的层级数
        tmp.data.zindex = arr.length;
//       htmlCss += key;
// 				let aa  = $('.guestbook-item').eq(0).clone();
// 				let bb  = $('.guestbook-item').eq(1).clone();
// 				let cc  = $('.guestbook-item').eq(2).clone();
// 				let dd  = $('.guestbook-item').eq(3).clone();   
// 				$('.guestbook-section').append(aa);
// 				$('.guestbook-section').append(bb);
// 				$('.guestbook-section').append(cc);
// 				$('.guestbook-section').append(dd);
      },
    bind:function(){
        $('.guestbook-section').on('mousedown','.guestbook-item',this.mousedownEvent)//鼠标按下
        $('.guestbook-section').on('mousemove',this.mousemoveEvent)//鼠标移动
        $('.guestbook-section').on('mouseup','.guestbook-item',this.lockMouseEvent)//鼠标触发
        $('.guestbook-section').on('mouseleave',this.lockMouseEvent)//鼠标离开
    },      
    mousedownEvent:function(event){//鼠标按下
      tmp.data.isLock = false;                  
      let clientX = event.clientX;
      let clientY = event.clientY;       
      let offsetLeft = this.offsetLeft;
      let offsetTop = this.offsetTop;
      tmp.data.clientX = clientX;
      tmp.data.clientY = clientY;
      tmp.data.offsetLeft = offsetLeft;
      tmp.data.offsetTop = offsetTop;
      let zindex = tmp.data.zindex + 1;
      $(this).css({'z-index':zindex});
      tmp.data.zindex = zindex;
      tmp.data.item = $(this);     
    },
    mousemoveEvent:function(event){//鼠标移动
      if(tmp.data.isLock){
        isLock = true;
      }else{
      	let clientX = tmp.data.clientX 
		    let clientY = tmp.data.clientY		   
		    let offsetLeft = tmp.data.offsetLeft 
		    let offsetTop = tmp.data.offsetTop           		      
		    let donmouseX = event.clientX - clientX;
		    let donmouseY = event.clientY - clientY;
		    let left = offsetLeft + donmouseX; 
				let top = offsetTop + donmouseY;
				tmp.data.item.css({
        top:top,
        left:left 
        })
      }                 
    },
    lockMouseEvent:function(){//鼠标触发 离开
      // 移动结束，锁回去
      tmp.data.isLock =true;
    },    
    randomBetween:function(min,max){
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
  tmp.init();
})