import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative flex justify-center items-center py-4 bg-red-50">
          <Image
            src="/kfc.png"
            alt="KFC疯狂星期四"
            width={300}
            height={200}
            style={{ objectFit: 'contain' }}
            priority
            className="rounded-lg"
          />
          <div className="absolute top-0 right-0 bg-red-600 text-white py-2 px-4 rounded-bl-lg font-bold">
            V我50
          </div>
        </div>
        
        <div className="p-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">疯狂星期四 & 结婚喜宴</h1>
          
          <div className="w-24 h-1 bg-red-300 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-700 mb-6">诚邀您参加我们的&quot;疯狂星期四&quot;婚礼</p>
          
          <div className="mb-8 py-4 px-6 bg-red-50 rounded-lg inline-block border-2 border-dashed border-red-400">
            <p className="text-2xl font-bold text-red-600 mb-2">2025年3月20日</p>
            <p className="text-3xl font-black text-red-700 mb-2">疯狂星期四</p>
            <p className="text-lg font-medium text-gray-800">肯德基豪华餐厅 VIP包间</p>
          </div>
          
          <p className="text-gray-600 mb-8 font-bold">
            &quot;你说你喜欢吃肯德基，我不仅和你吃肯德基，还要在肯德基和你结婚&quot;
          </p>
          
          <div className="bg-yellow-100 p-4 mb-8 rounded-lg">
            <p className="text-red-500 font-bold">婚礼套餐：</p>
            <p className="text-gray-700">豪华全家桶 + 结婚证 = 只要998</p>
            <p className="text-sm text-gray-500 mt-2">*转发并@五位单身好友，婚礼现场免费赠送吮指原味鸡一份</p>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              V我50参加
            </button>
            <button className="px-6 py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-colors">
              打开肯德基APP
            </button>
          </div>
          
          <div className="mt-10 text-sm text-gray-500">
            <p>备注：参加婚礼需要购买任意套餐</p>
            <p>疑问请联系：肯德基疯四热线 4008-823-823</p>
          </div>
        </div>
      </div>
    </div>
  );
}
