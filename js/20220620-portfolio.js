$("document").ready(function(){
    // alert()

    
    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 100,
        loop: true,
        backSpeed: 50,
        cursorChar: "|"            
    })

    let bar = new ProgressBar.Line("#pro1",{
        strokeWidth: 5,        
        color: "#69bbf9",
        trailColor: "#69bbf94f",        
        duration: 1000,        
        trailWidth: 5,        
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    
    let bar2 = new ProgressBar.Line("#pro2",{
        strokeWidth: 5,        
        color: "#69bbf9",
        trailColor: "#69bbf94f",        
        duration: 1000,        
        trailWidth: 5,        
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    
    let bar3 = new ProgressBar.Line("#pro3",{
        strokeWidth: 5,        
        color: "#69bbf9",
        trailColor: "#69bbf94f",        
        duration: 1000,        
        trailWidth: 5,        
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    
    let bar4 = new ProgressBar.Line("#pro4",{
        strokeWidth: 5,        
        color: "#69bbf9",
        trailColor: "#69bbf94f",        
        duration: 1000,        
        trailWidth: 5,        
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    
    let bar5 = new ProgressBar.Line("#pro5",{
        strokeWidth: 5,        
        color: "#69bbf9",
        trailColor: "#69bbf94f",        
        duration: 1000,        
        trailWidth: 5,        
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= $(".skill").offset().top-700){
            bar.animate(0.8)
            bar2.animate(0.8)
            bar3.animate(0.9)
            bar4.animate(0.9)
            bar5.animate(0.9)
        }
    })

    // 행성을 누르세요:)
    const $list = $(".work .work-wrap .work-bottom .work-left ul li")
    const $img = $(".work .work-wrap .work-bottom .work-right .right-box img")
    let list_index = 0;
    $list.click(function(e){
       e.preventDefault();
        list_index = $(this).index();
        // alert(list_index)
        $list.removeClass("on").eq(list_index).addClass("on")

        $img.attr("src", "images/portfolio/work_img_"+(list_index+1)+".png")
    })

    $list.mouseover(function(){
        $list.not($(this)).stop().animate({
            
        },500)
    })
    $list.mouseout(function(){
        // $list.removeClass("on")
    })

    
    // 작업물은 크게크게~    

    let pos = 0;
    let pos2 = 0;
    $(window).scroll(function(){
        pos = $(window).scrollTop();
        console.log(pos)
    })

    $(".work .work-wrap .work-bottom .work-right .right-box img").click(function(){
        
        let content_index = $(this).index();
               
        $(".modal").slideDown();
        $(".modal-content").slideDown();
        $(".modal-content img").attr("src", "images/portfolio/work_img_big_"+(list_index+1)+".png")
        $("html, body").css("overflow", "hidden");
        $("html, body").scrollTop(pos)
        pos2 = pos
    })
    
    $(".modal").click(function(){
        $(".modal").slideUp();              
        $(".modal-content").slideUp();
        $("html, body").css("overflow", "visible");
        $("html, body").scrollTop(pos2)
        
    })

    
})