import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E4002B] to-[#c4001b] text-white font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* 装饰元素 - 背景图案 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      {/* 装饰元素 - 鸡腿图标 */}
      <div className="absolute top-10 left-10 opacity-20 hidden sm:block">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
          <path d="M15.5,9.63a1.91,1.91,0,0,1-.55.79,1.91,1.91,0,0,1-2.69,0,1.91,1.91,0,0,1,0-2.69,1.91,1.91,0,0,1,2.69,0A1.91,1.91,0,0,1,15.5,9.63Z"/>
          <path d="M21.68,1.5a1,1,0,0,0-.6-.39,1,1,0,0,0-.75.12l-4.18,2.75a5.92,5.92,0,0,0-4.7,0L7.67,1.23A1,1,0,0,0,6.32,2.32l2.75,4.17A5.92,5.92,0,0,0,9.07,11.2L3.71,14.56a3.16,3.16,0,0,0-.16,5.15L6,22.17a3.17,3.17,0,0,0,5.15-.16l3.36-5.36a5.92,5.92,0,0,0,4.71,0l4.18,2.75a1,1,0,0,0,.75.12,1,1,0,0,0,.6-.39,1,1,0,0,0,.09-1.09l-2.75-4.17a5.92,5.92,0,0,0,0-4.71l2.75-4.18A1,1,0,0,0,21.68,1.5ZM16.84,14.17a4,4,0,1,1,0-5.66A4,4,0,0,1,16.84,14.17Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-20 hidden sm:block transform rotate-45">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
          <path d="M15.5,9.63a1.91,1.91,0,0,1-.55.79,1.91,1.91,0,0,1-2.69,0,1.91,1.91,0,0,1,0-2.69,1.91,1.91,0,0,1,2.69,0A1.91,1.91,0,0,1,15.5,9.63Z"/>
          <path d="M21.68,1.5a1,1,0,0,0-.6-.39,1,1,0,0,0-.75.12l-4.18,2.75a5.92,5.92,0,0,0-4.7,0L7.67,1.23A1,1,0,0,0,6.32,2.32l2.75,4.17A5.92,5.92,0,0,0,9.07,11.2L3.71,14.56a3.16,3.16,0,0,0-.16,5.15L6,22.17a3.17,3.17,0,0,0,5.15-.16l3.36-5.36a5.92,5.92,0,0,0,4.71,0l4.18,2.75a1,1,0,0,0,.75.12,1,1,0,0,0,.6-.39,1,1,0,0,0,.09-1.09l-2.75-4.17a5.92,5.92,0,0,0,0-4.71l2.75-4.18A1,1,0,0,0,21.68,1.5ZM16.84,14.17a4,4,0,1,1,0-5.66A4,4,0,0,1,16.84,14.17Z"/>
        </svg>
      </div>

      <main className="max-w-full sm:max-w-3xl w-full bg-white text-black rounded-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col items-center relative z-10 border border-white/30">
        {/* 装饰带 */}
        <div className="absolute -top-3 left-0 right-0 h-6 bg-[#E4002B] transform -skew-y-1"></div>
        
        {/* 头部 - 肯德基Logo和婚礼标题 */}
        <div className="flex flex-col items-center mb-6 mt-4">
          <div className="relative">
            <Image
              src="/kfc.png"
              alt="KFC Logo"
              width={200}
              height={74}
              className="mb-3 drop-shadow-md"
            />
            <div className="absolute -top-2 -right-2 bg-[#E4002B] text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
              V我50
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#E4002B] text-center drop-shadow-sm">疯狂星期四 · 甜蜜联盟</h1>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#E4002B] to-transparent my-2"></div>
          <p className="text-lg sm:text-xl mt-2 text-center px-2 italic">我们决定一起吮指原味鸡一辈子</p>
        </div>

        {/* 新人信息 */}
        <div className="flex justify-center gap-6 sm:gap-12 my-5 sm:my-8 flex-wrap">
          <div className="text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-[#E4002B]">王大帅</div>
            <div className="text-gray-600 text-sm sm:text-base">爱吃原味鸡</div>
          </div>
          <div className="text-[#E4002B] text-3xl sm:text-4xl font-bold flex items-center animate-bounce">❤</div>
          <div className="text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-[#E4002B]">李漂亮</div>
            <div className="text-gray-600 text-sm sm:text-base">爱吃辣翅</div>
          </div>
        </div>

        {/* 婚礼信息 */}
        <div className="border-2 border-[#E4002B] border-dashed rounded-lg p-5 sm:p-6 w-full my-4 sm:my-6 bg-[#fffaf5]">
          <h2 className="text-lg sm:text-xl font-bold text-center text-[#E4002B] mb-3 sm:mb-4 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#E4002B]"></span>
            诚挚邀请您
            <span className="inline-block w-5 h-0.5 bg-[#E4002B]"></span>
          </h2>
          <div className="grid grid-cols-1 gap-3 text-sm sm:text-base">
            <div className="flex items-center gap-2 hover:bg-white/80 p-2 rounded-md transition-colors">
              <span className="font-bold min-w-[3rem] text-[#E4002B]">日期：</span>
              <span>2025年3月20日 星期四</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-white/80 p-2 rounded-md transition-colors">
              <span className="font-bold min-w-[3rem] text-[#E4002B]">时间：</span>
              <span>下午 6:00</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-white/80 p-2 rounded-md transition-colors">
              <span className="font-bold min-w-[3rem] text-[#E4002B]">地点：</span>
              <span>肯德基欢乐餐厅 豪华包间</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-white/80 p-2 rounded-md transition-colors">
              <span className="font-bold min-w-[3rem] text-[#E4002B]">餐券：</span>
              <span>V肯德基全家桶</span>
            </div>
          </div>
        </div>

        {/* 疯狂星期四元素 */}
        <div className="bg-gradient-to-r from-[#E4002B] to-[#ff1f4b] text-white p-4 sm:p-5 rounded-lg text-center my-4 sm:my-6 w-full shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 drop-shadow-sm">疯狂星期四特别福利</h3>
          <p className="text-sm sm:text-base">参加我们的婚礼，即可获得肯德基疯狂星期四优惠券一张！</p>
          <p className="text-xs sm:text-sm mt-2 bg-white/20 p-2 rounded-md inline-block">*优惠详情：原味鸡+葡式蛋挞+百事可乐 仅需19.9元</p>
        </div>

        {/* 按钮区域 */}
        <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 w-full">
          <a
            className="flex-1 rounded-full bg-[#E4002B] text-white px-4 py-3 font-bold hover:bg-red-700 transition-all text-center text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            href="#"
          >
            确认出席
          </a>
          <a
            className="flex-1 rounded-full border-2 border-[#E4002B] text-[#E4002B] px-4 py-3 font-bold hover:bg-red-50 transition-all text-center text-sm sm:text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            href="#"
          >
            查看地图
          </a>
        </div>
        
        {/* 装饰元素 - 底部图案 */}
        <div className="w-full flex justify-between mt-6 opacity-30">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4002B">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4002B">
            <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"/>
          </svg>
        </div>
      </main>

      <footer className="mt-6 sm:mt-10 text-white/90 text-xs sm:text-sm text-center px-4 backdrop-blur-sm bg-black/10 py-3 rounded-full">
        <p>期待您的光临，我们的幸福需要您的见证！</p>
        <p className="mt-1 sm:mt-2">©2024 肯德基疯狂星期四专属爱情</p>
      </footer>
    </div>
  );
}
