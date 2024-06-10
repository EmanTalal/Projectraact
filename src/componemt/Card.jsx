import React from 'react'

function Card() {
  return (
    <div className='divs'>
        <div className="container">
    <div className="cards">
        <div className="card" style={{ borderRight: '10px solid #FF69B4'}}>
        <img className='imgesa' src='https://cdn.tuwaiq.edu.sa/initiatives_admin/images/nsfaqp2p.evr.webp?h=100' ></img>

        <h3 className="category" style={{color:'#FF69B4'}}>لقاء</h3>
            <p className="card-title"> فعالية WWDC24 Watch Party</p>
            <div className="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/> الرياض</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/> يوم واحد</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدا في 15/05/2024 </p>
            </div>
            <button class="details-button" style={{ color: '#FF69B4',borderColor:'#FF69B4'}}>التفاصيل</button>
        </div>
        <div className="card" style={{ borderRight: '10px solid #8E35EF'}}>
        <h3 className="category" style={{color:'#8E35EF'}}>معسكر</h3>
            <p className="card-title">هندسة الحوسبه السحابية المتقدمة AWS</p>
            <div className="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/>  الرياض</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/>  4 اسابيع</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدأ في 19/05/2024</p>
            </div>
            <button className="details-button" style={{ color: '#8E35EF',borderColor:'#8E35EF'}}>التفاصيل</button>
        </div>
        <div className="card" style={{ borderRight: '10px solid #10D62E'}}>
        <h3 className="category" style={{color:'#10D62E'}}>برنامج</h3>
        <p className="card-title">  إداره خدمات تقنيه المعلومات(TIL)  </p>
            <div class="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/> الرياض </p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/> اسبوع واحد</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدأ في 19/05/2024</p>
            </div>
            <button className="details-button" style={{ color: '#10D62E',borderColor:'#10D62E'}}>التفاصيل</button>
        </div>

        </div>
   
        
        </div>

        <div className="container">
    <div className="cards">
        <div className="card" style={{ borderRight: '10px solid #919091'}}>
        <h3 className="category" style={{color:'#919091'}}>برنامج</h3>
        <p className="card-title" style={{color:'#919091'}}>   اساسيات علوم الشبكات +NetWork </p>
        <div className="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/> الرياض</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/>  اسبوعان</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدا في 15/05/2024 </p>
            </div>
            <button class="details-button" style={{ color: '#919091',borderColor:'#919091'}}>مغلق</button>
        </div>
        <div className="card" style={{ borderRight: '10px solid #919091'}}>
        <h3 className="category" style={{color:'#919091'}}>برنامج</h3>
        <p className="card-title" style={{color:'#919091'}}>     البنية المؤسسية بمنهجية وإطار TOOAF </p>
            <div className="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/>  الرياض</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/>  اسبوع واحد </p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدأ في 19/05/2024</p>
            </div>
            <button className="details-button" style={{ color: '#919091',borderColor:'#919091'}}>مغلق</button>
        </div>
        <div className="card" style={{ borderRight: '10px solid #919091'}}>
        <h3 className="category" style={{color:'#919091'}}>برنامج</h3>
        <p className="card-title" style={{color:'#919091'}}> امن وحماية المعلومات في osi modei </p>
            <div class="details">
                <p><img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="location"/> الرياض </p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg"/> اسبوع واحد</p>
                <p><img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="calendar"/> يبدأ في 19/05/2024</p>
            </div>
            <button className="details-button" style={{ color: '#919091',borderColor:'#919091'}}>مغلق</button>
        </div>

        </div>
   
        
        </div>


        
        <button className="det">تحميل المزيد</button>
    </div>
  )
}

export default Card