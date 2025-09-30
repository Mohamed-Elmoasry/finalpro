import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useOfflineScreen } from "../../hooks/UseOfflineScreen";
export default function OfflineScreen({children}) {
const online = useOfflineScreen()

if(online){
    return children
}

  return <>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 z-[9999]">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl bg-white shadow-lg rounded-2xl p-6 text-center">
        <FontAwesomeIcon
          icon={faWifi}
          className="text-6xl text-red-500 mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Connection Lost
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Oops! It looks like you&apos;ve lost your internet connection. Don&apos;t
          worry, we&apos;ll help you get back online.
        </p>
        <div className="flex justify-between text-sm mb-4">
          <span className="flex items-center gap-2">
            <span className="font-semibold">Network Status:</span>
            <span className="text-red-500">Offline</span>
          </span>
          <span className="text-gray-500">9:46:23 PM</span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
           Try Again
        </button>
        <div className="mt-6 text-left">
          <p className="font-semibold text-gray-700 mb-2">Quick Fixes:</p>
          <ul className="text-gray-500 text-sm list-disc list-inside space-y-1">
            <li>Check your WiFi connection</li>
            <li>Try moving closer to your router</li>
            <li>Restart your router or mobile data</li>
            <li>Contact your internet provider if the issue persists</li>
          </ul>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          🔄 Auto-checking connection every 30 seconds.
        </p>
      </div>
    </div>
  </>
  }
