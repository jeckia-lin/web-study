$(function(){
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');
    $.ajax({
        type:'GET',
        url:"orders.json",
        datatype:"JSON",//如果json，自动封装为JSON
        success:function(orders){
            console.log('success',orders);
            
            //var obj = JSON.parse(orders); //string 转换
            //console.log(obj);
            $.each(orders,function(i,order){
                $orders.append('<li>name:'+order.name+',drink:'+order.drink+'</li>');
            });
        },
        error:function(){
            alert('error loading orders');
        }
    });

    $('#add-order').on('click',function(){
        var order = {
            name: $name.val(),
            drink: $drink.val()
        }
        $.ajax({
            type:"POST",
            url:"orders.json",
            data:order,
            success:function(neworder){
                $orders.append('<li>name:'+neworder.name+',drink:'+neworder.drink+'</li>'); 
            }
        });
    }
    );

});