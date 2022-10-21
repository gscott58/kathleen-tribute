    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("copyright-1").innerHTML = "<strong><mark>&copy; Copyright " + d.getFullYear() + "</mark></strong>.";

    $(document).ready(function() {

        $("#accordion").accordion({
            event: "click",
            heightStyle: "content",
            active: false,
            collapsible: true
        });
    
    /*  $("#sticker").sticky({ topSpacing: 0, bottomSpacing: 65, center:true, className:"is-sticky" });*/   
    /*  $("#color-schemes").delay(4000).fadeOut(2000).fadeIn(2000);  */  
    
        var familyMemberDob = new Date("12/13/1960");
        var familyMemberDod = new Date("08/11/2022");
        var todaysDate      = new Date();

        document.getElementById("Kathleen-birth-date").innerHTML= familyMemberDob.getFullYear();
        document.getElementById("Kathleen-death-date").innerHTML= familyMemberDod.getFullYear();
        var familyMemberDeathAge = getAge(familyMemberDob, familyMemberDod);
        document.getElementById("Kathleen-death-age").innerHTML= familyMemberDeathAge;
        var familyMemberTodayAge = getAge(familyMemberDob, todaysDate);

        $(".family-name").toggle(0000);      
        $(".main-content").toggle(0000);
        $(".main-content-title").toggle(0000);
        $(".sidebar").toggle(0000);
        $("footer").toggle(0000);
        $("#copyright-1").toggle(0000);
        $("#copyright-2").toggle(0000);
        $("#contact-email").toggle(0000);

        $("#accordion").toggle( "explode", {pieces:36}, 2000 );
        $("#obit-cover-page").toggle( "explode", {pieces:36}, 2000 );
                           
        $("footer").hover(function() {
            $("#contact-name").effect("shake");
            }, function() {
            $("#contact-email").effect("shake");
            $("#copyright-1").effect("shake");
        });

        $("td").hover(function() {
            $( this ).children("span").addClass   ( "text-on-background-1" );             
            }, function() {
            $( this ).children("span").removeClass   ( "text-on-background-1" );
        });

        $(".icon-roll").mouseenter(function() {
            $( this ).effect("shake");
            });     
        
        $(".icon-roll").click(function() {       
            var $bgimage       = $(this).closest("[class^=row]").find(".sibling-bg-image");
            var $maincontent   = $(this).closest("[class^=row]").find(".sibling-main-content");
            
            if ($bgimage.is(":hidden")) {
               $bgimage.show(1500);
            } else {
               $bgimage.hide(1500);
            }
            if ($maincontent.is(":hidden")) {
               $maincontent.show(1500);
            } else {
               $maincontent.hide(1500);
            }
 
            if ($body5.is(":hidden")) {
               $body5.show(1500);
            } else {
               $body5.hide(1500);
            }
            
            if ($body12.is(":hidden")) {
               $body12.show(1500);
            } else {
               $body12.hide(1500);
            }                    
         });
         

          $("#color-schemes ul li").on("click", function(){
            var path = $(this).data("path");
            $("#color-switcher").attr("href", path);
         });

        $(".descendant-photo").hover(function() {
            $( this ).children("figure").addClass      ( "enlarge-descendant-photo" );             
            }, function() {
            $( this ).children("figure").removeClass   ( "enlarge-descendant-photo" );
        });
        
        $(".toggle-all-children").click(function() {       
            $("#john-bg-image").toggle();
            $("#john-main-content").toggle();
            
            $("#Irene-bg-image").toggle();
            $("#Irene-main-content").toggle();
            
            $("#patricia-bg-image").toggle();
            $("#patricia-main-content").toggle();       

            $("#loretta-bg-image").toggle();
            $("#loretta-main-content").toggle();   

            $("#joseph-bg-image").toggle();
            $("#joseph-main-content").toggle();       

            $("#jerry-bg-image").toggle();
            $("#jerry-main-content").toggle();
           
            $("#christine-bg-image").toggle();
            $("#christine-main-content").toggle();
            
            $("#rejeana-bg-image").toggle();
            $("#rejeana-main-content").toggle();
            
            $("#-bg-image").toggle();
            $("#-main-content").toggle();
           
            $("#-bg-image").toggle();
            $("#-main-content").toggle();           
        });
         
/*      $("#sticker").unstick();    */

        function getAge(DOB, DOD) {
            var today       = new Date();
            var birthDate   = new Date(DOB);
            var deathDate   = new Date(DOD);
            var m           = '0';
            var age         = '0';
            
            if  (deathDate.getFullYear () > 0) {
                var age = deathDate.getFullYear() - birthDate.getFullYear();
                var m = deathDate.getMonth() - birthDate.getMonth();
            }
            else {
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                var comment = "";
            }
            
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }
            
            return "<strong>" + age + "</strong>";
        }
        
    });
