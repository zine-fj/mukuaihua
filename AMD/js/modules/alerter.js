
define(['dataService'],function(dataService) {
    let name = 'Tome';
    function showMsg() {
        alert(dataService.getMsg() +' , '+ name);
    }
    return {showMsg} // 暴露模块
})


// 如何引入第三方库
// define(['dataService','jquery'],function(dataService,$) {
//     let name = 'Tome';
//     function showMsg() {
//         alert(dataService.getMsg() +' , '+ name);
//     }
//     $('body').css('background','green')
//     return {showMsg} // 暴露模块
// })










