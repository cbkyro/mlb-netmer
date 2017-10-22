$(document).ready(function(){
    
        // single out POD
        var pod_item = $(".cart-item-option-name:contains('xmpie_ustore_item_id')").parents('article.cart-item');
        // add expire id
        pod_item.attr('data-expire', cartID + sku);
    
        // foreach pod item
        pod_item.each(function(){
            var
                self = $(this),
                item_id = self.data('expire'),
                expiration = $.cookie(item_id),
                today = new Date(),
                new_expiration = today.setDate(today.getDate() + 6)
            ;
            if(expiration){
                // handle previously set expiration
                if(today>expiration){
                    self.css('border', '2px solid red'); // border in red if expired
                }else{
                    self.css('border', '2px solid blue'); // border in blue if cookie is not expired
                }
            }else{
                //option 1
                create cookie
                $.cookie(item_id, new_expiration);
                self.css('border', '2px solid green'); // border in green if cookie was just set
            }
    
        });
    
    
    });