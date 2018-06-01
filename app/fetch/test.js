import 'whatwg-fetch'
import 'es6-promise'

export default function getData(){
    //获取字符串
    // var result = fetch("http://localhost:8081/hero/query?id=4",{
    //     credentials:'include',
    //     headers:{
    //         'Accept':'application/json, text/plain, */*'
    //     }
    // });
    //
    // result.then(res => {
    //     return res.text()
    // }).then(text => {
    //     console.log(text)
    // })

    //获取json
    var result = fetch("http://localhost:8081/hero/query?id=4",{
        credentials:'include',
        headers:{
            'Accept':'application/json, text/plain, */*'
        }
    });

    return result

    //POST请求
    // var form = {
    //     "pageNum": 1,
    //     "pageSize": 5
    // }
    // var result = fetch("http://localhost:8081/hero/queryList",{
    //     method:'POST',
    //     credentials:'include',
    //     headers:{
    //         'Accept':'application/json, text/plain, */*',
    //         'Content-type':'application/json'
    //     },
    //     //针对后端@RequestBody参数接收方式
    //     body:JSON.stringify(form)
    // });
    //
    // result.then(res => {
    //     return res.json()
    // }).then(json => {
    //     console.log(json)
    // })

    // var result = fetch("http://localhost:8081/jwt/login",{
    //     method:'POST',
    //     credentials:'include',
    //     headers:{
    //         'Accept':'application/json, text/plain, */*'
    //     }
    // });
    //
    // result.then(res => {
    //     if(res.status !== 200){
    //         console.log("请求超时")
    //     }
    //     return res.text()
    // }).then(token => {
    //     var result2 = fetch("http://localhost:8081/jwt/get",{
    //         method:'POST',
    //         credentials:'include',
    //         headers:{
    //             'Accept':'application/json, text/plain, */*',
    //             'Authorization':token
    //         }
    //     })
    //     result2.then(res => {
    //         return res.json();
    //     }).then(json => {
    //         console.log(json)
    //     })
    // })

}