import React from 'react'

function footer() {
  return (
    <div>
  <div className="footer">
    <div className="foot">
        <img className="logo" src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="SAURSLogo"/>
        <div className="foot-continer">
            <p className="foot-text">شارك كمدرب</p>
            <p className="foot-text2">حول الأكاديمية</p>
        </div>
        <div className="foot-continer">
            <p className="foot-text">الشروط والاحكام</p>
            <p className="foot-text2"> سياسية الخصوصية</p>
        </div>

        <div className="foot-continer">
          <div className="foot-icon">
          <img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg" alt="" />
          <img src="https://tuwaiq.edu.sa/icons/snapchat-icon.svg" alt="" />
          <img src="https://tuwaiq.edu.sa/icons/youtube-icon.svg" alt="" />
          <img src="https://tuwaiq.edu.sa/icons/twitter-icon.svg" alt="" />
          <img src="https://tuwaiq.edu.sa/icons/discord-icon.svg" alt="" width="23rem" />
        </div>  
            <p className="foot-text"> @TuwaiqAcademy </p>
        </div>
        <img className="logo" src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="SAURSLogo" />
                </div>
        </div>
        <p className="copy">جميع الحقوق محفوظة لأكاديمية طويق 2024 &copy;</p>
        </div>
)
}

export default footer