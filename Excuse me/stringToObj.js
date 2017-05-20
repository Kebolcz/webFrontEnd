/*
 *  location.search 属性是一个可读可写的字符串，可设置或返回当前 URL 的查询部分（问号 ? 之后的部分）。
 *  formatSearch()将location.search转化为{}
 */
function formatSearch(se){  
    if (typeof se !== "undefined") {      
        se = se.substr(1);  
        var arr = se.split("&"),  
            obj = {},   
            newarr = [];  
        $.each(arr, function(i, v){  
            newarr = v.split("=");  
            if(typeof obj[newarr[0]] === "undefined"){  
                obj[newarr[0]] = newarr[1];  
            }  
        });  
        return obj;  
    };  
}  

formatSearch(location.search);