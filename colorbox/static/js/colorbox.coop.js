$(function() {
    
    var _process_form_result = function(html, options) {
        if (html.match(/^<script>.*<\/script>$/)) {
            $('body').append(html);
            
        } else if (html === 'close_popup') {
            $.colorbox.close();
        } else if (options && options.hasOwnProperty(html)) {
            options[html].call(this);
        } else {
            $.colorbox({
                html:html,
                title : '...',
                onComplete : _colorboxify_form
            }); 
        }
    }
    
    var _colorboxify_form = function(options) {
        $("form#template-form").ajaxForm({
            success: function(html) {
                _process_form_result(html, options);
            }
        });    
    }
    
    $.fn.colorboxify = function(options) {
        $("a.colorbox-form").live('click', function () {
            $.colorbox({
                href : $(this).attr('href'),
                title : '...',  
                onComplete : function(){
                    _colorboxify_form(options);
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
                    _colorboxify_form(options);
                }
              }); 
            }
        });
    };
});