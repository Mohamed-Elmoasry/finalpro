import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faRotateLeft, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
export default function HomeFeature() {
    return <>
        <section className="bg-white py-4">
            <div className="container">
                <div className="home-feature grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="p-3 border-2 border-gray-100 rounded-lg flex items-center justify-center space-x-3">
                        <div className="icon p-5 bg-primary-400/70 text-primary-700 size-4 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faTruckFast} className="text-xl"/>
                        </div>
                        <div className="content">
                            <h3 className="text-black/70">Free Delievery</h3>
                            <p className="text-gray-400">Orders 50$ or More</p>
                        </div>
                    </div>
                                        <div className="p-3 border-2 border-gray-100 rounded-lg flex items-center justify-center space-x-3">
                        <div className="icon p-5 bg-primary-400/70 text-primary-700 size-4 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faRotateLeft} className="text-xl"/>
                        </div>
                        <div className="content">
                            <h3 className="text-black/70">30 Days Return</h3>
                            <p className="text-gray-400">Satisfaction guaranteed</p>
                        </div>
                    </div>
                                        <div className="p-3 border-2 border-gray-100 rounded-lg flex items-center justify-center space-x-3">
                        <div className="icon p-5 bg-primary-400/70 text-primary-700 size-4 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faShieldHalved} className="text-xl"/>
                        </div>
                        <div className="content">
                            <h3 className="text-black/70">Secure Payment</h3>
                            <p className="text-gray-400">100% Protection</p>
                        </div>
                    </div>
                                        <div className="p-3 border-2 border-gray-100 rounded-lg flex items-center justify-center space-x-3">
                        <div className="icon p-5 bg-primary-400/70 text-primary-700 size-4 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faHeadset} className="text-xl"/>
                        </div>
                        <div className="content">
                            <h3 className="text-black/70">24/7 Support</h3>
                            <p className="text-gray-400">Ready To Help Any Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}