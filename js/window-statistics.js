    $(document).ready(function() {

        $("#family-title").click (function () {
            const outer_width = window.outerWidth;
            const inner_width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
            
            const outer_height = window.outerHeight;           
            const inner_height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
            
            alert ("Screen Outer-Width:  " + outer_width); 
            alert ("Screen Inner-Width:  " + inner_width);

            alert ("Screen Outer-Height: " + outer_height);
            alert ("Screen Inner-Height: " + inner_height);
        });
          
    });
