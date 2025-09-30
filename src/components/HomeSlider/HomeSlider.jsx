import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,Navigation,Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import homeImageSlider from "../../assets/images/home-slider-1.png"
export default function HomeSlider(){
    return <>
<Swiper
modules={[Pagination,Navigation,Autoplay]}
slidesPerView={1}
loop={true}
spaceBetween={5}
pagination
navigation={true}
autoplay={{delay:5000}}

>

<SwiperSlide>
    <div className="" style={{backgroundImage:`url(${homeImageSlider})`,backgroundPosition:"center",backgroundSize:"cover"}}>
         <div className="overlay py-20 bg-gradient-to-r from-primary-600/80 to-primary-600/40">
            <div className="container text-white space-y-4">
                <h2 className="text-4xl font-bold">Modern clothes delievered to <br/> your door</h2>
                <p className="text-2xl font-semibold">Get 20 % off for your first order</p>
            <div className="space-x-3">
                <button className="btn border-2 border-white bg-white hover:bg-gray-100 text-primary-600 transition-colors duration-300">Shop Now</button>
                <button className="btn border-2 border-white bg-transparent hover:bg-primary-600/80  text-white transition-colors duration-300">View Deals</button>
            </div>
         </div>
            </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="" style={{backgroundImage:`url(${homeImageSlider})`,backgroundPosition:"center",backgroundSize:"cover"}}>
         <div className="overlay py-20 bg-gradient-to-r from-primary-600/80 to-primary-600/40">
            <div className="container text-white space-y-4">
                <h2 className="text-4xl font-bold">Modern clothes delievered to <br/> your door</h2>
                <p className="text-2xl font-semibold">Get 20 % off for your first order</p>
            <div className="space-x-3">
                <button className="btn border-2 border-white bg-white hover:bg-gray-100 text-primary-600 transition-colors duration-300">Shop Now</button>
                <button className="btn border-2 border-white bg-transparent hover:bg-primary-600/80  text-white transition-colors duration-300">View Deals</button>
            </div>
         </div>
            </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="" style={{backgroundImage:`url(${homeImageSlider})`,backgroundPosition:"center",backgroundSize:"cover"}}>
         <div className="overlay py-20 bg-gradient-to-r from-primary-600/80 to-primary-600/40">
            <div className="container text-white space-y-4">
                <h2 className="text-4xl font-bold">Modern clothes delievered to <br/> your door</h2>
                <p className="text-2xl font-semibold">Get 20 % off for your first order</p>
            <div className="space-x-3">
                <button className="btn border-2 border-white bg-white hover:bg-gray-100 text-primary-600 transition-colors duration-300">Shop Now</button>
                <button className="btn border-2 border-white bg-transparent hover:bg-primary-600/80  text-white transition-colors duration-300">View Deals</button>
            </div>
         </div>
            </div>
    </div>
</SwiperSlide>

</Swiper>
  
    </>
}