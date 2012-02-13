$(function() {
    
    $.fn.colorboxify = function(options) {
        $("a.colorbox-form").live('click', function () {
            $.colorbox({
                href : $(this).attr('href'),
                title : '...',  
                onComplete : function(){
                    $("form#template-form").ajaxForm({
                        success: function (html) {
                            if (html.match(/^<script>.*<\/script>$/)) {
                                $('body').append(html);
                            } else if (html === 'close_popup') {
                                $.colorbox.close();
                            } else if (options.hasOwnProperty(html)) {
                                options[html].call(this);
                            } else {
                                $.colorbox({html:html, title : '...'}); 
                            }
                        }
                    })
                }
            });
            return false;
        });
    }
    
    $.fn.colorboxSubmit = function(options) {
        $(this).ajaxSubmit({
            url: options.href,
            resetForm: true,
            success: function (html) {
              $.colorbox({
                html:html,
                title : '...',
                onComplete : function(){
                  $("form#template-form").ajaxForm({
                    success: function (html) {
                      if (html.match(/^<script>.*<\/script>$/)) {
                          $('body').append(html);
                      } else if (html === 'close_popup') {
                          $.colorbox.close();
                      } else {
                          $.colorbox({html:html, title : '...'}); 
                      }
                      return false;
                    }
                  })
                }
              }); 
            }
          });
    };
});