$.ajax(
    // 'https://api.adviceslip.com/advice',
    'http://www.boredapi.com/api/activity',
{
        success: function (response) {
          
//  let adviceTag = document.getElementById('postAdvice');
//             adviceTag.innerHTML = response.advice;
let activityTag = document.getElementById('postAdvice');
            activityTag.innerHTML = response.activity + ".";
        }
    })

    