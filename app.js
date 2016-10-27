(function(){
    "use strict";
    var app = {
        url:"http://192.168.1.83:1337/",
       
        init:function(){
            this.recupAlice(); 
          },

        recupAlice : function(){
            //Récuperez le fichier en markdown du serveur distant
            var chemin = "/alice.md";
            $.ajax(this.url + chemin).done(this.aliceDone).fail(this.aliceFail);
        },

        aliceDone :function(dataAliceMakdown){
           // transformez le en HTML grace à showdown
            var converter = new showdown.Converter();
            var dataAliceHtml = converter.makeHtml(dataAliceMakdown);
            //insérez le dans votre page html dans un element `<div id="md">` que vous aurez créé auparavant
            $('#md').html(dataAliceHtml);
        },

        aliceFail : function(){
            console.log("aliceFail");
        },


   };    

   $(document).ready(function(){
        app.init();         
   });

})();