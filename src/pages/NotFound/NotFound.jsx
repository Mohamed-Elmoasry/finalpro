import { Link } from "react-router";
import notFoundImage from "../../assets/images/notFound.svg" 
import PageMetaData from "../../components/PageMetaData/PageMetaData";
 export default function NotFound() {
  <PageMetaData title={"Not Found page"} description={"please , this Page Not Found"}/>
  
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-36 bg-green-500 rounded-full flex items-center justify-center">
      <img src={notFoundImage} alt="" />
          </div>
        </div>

    
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for seems to have gone shopping! <br />
          Don't worry, our fresh products are still available for you.
        </p>

        
        <div className="flex justify-center mb-10">
          <Link to={"/"} className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
            Back to Home
          </Link>
        </div>


        <div className="bg-green-50 rounded-lg p-6 max-w-lg mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h2>
          <p className="text-gray-600 mb-4">Our customer support team is here to assist you 24/7</p>

          <div className="flex flex-col gap-2 text-gray-700">
            <p>📞 +1 (800) 123-4567</p>
            <p>📧 support@freshcart.com</p>
            <p>💬 Live Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

