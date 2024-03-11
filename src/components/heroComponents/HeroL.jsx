import React, { useEffect } from "react";
import { Montserrat, Work_Sans } from "next/font/google";
import localfont from "next/font/local";
import MovingText from "../globalComponents/MovingText";
import Cursor from "../globalComponents/Cursor";
import { useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import {motion} from 'framer-motion'


const hanson = localfont({ src: "../../../fonts/Hanson-Bold.ttf" });
const satoshiBold = localfont({ src: "../../../fonts/OTF/Satoshi-Bold.otf" });
const medium = localfont({ src: "../../../fonts/medium.otf" });
const ttnorms = localfont({ src: "../../../fonts/TT Norms Pro Regular.otf" });
const rethink = localfont({
  src: "../../../fonts/RethinkSans-Variablefont_wght.ttf",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function HeroL() {

 useEffect(()=>{
   const mytext1 = new SplitType('#mytext1')
   const mytext2 = new SplitType('#mytext2')
 
 
     gsap.to('.char',{
       y:0,
       opacity:1,
       stagger:0.05,
       delay:0.1,
       duration:0.1,
       ease:'power4'
     })

 },[])
  

  return (
    <>
      <section
        style={montserat.style}
        className="w-[1440px] flex flex-col mx-auto  gap-0 flex-initial relative cursor-default"
      >
        <div
         
          className="w-full h-[224px] flex mt-10 justify-between text-white font-semibold text-6xl relative 3xl:mb-20 "
        >
          <h1 id="mytext1" className=" mb-auto leading-tight">
            Let's Start <br /> Working
          </h1>
          <motion.hr animate={{ scaleX: 1, translateX:'-50%' }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay: 0.8,
        }}
        initial={{ scaleX: 0, translateX:'-50%' }} 
        className="absolute top-1/2 left-[55%] -translate-x-1/2 h-1 w-[70%] origin-left " />
          <h1 id="mytext2" className=" mt-auto text-end leading-tight">
            On <br /> Your Website
          </h1>
        </div>
        <div className="top-[70px] -left-14  relative w-52 h-52 bg-mblack rounded-full z-50">
          <div
            onClick={() => {
              scrollTo({ top: 1000, left: 0, behavior: "smooth" });
            }}
            className=" top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  absolute cursor-pointer  "
          >
            <div className="absolute top-1/2 left-1/2   animate-mBounce-long ">
              {arrow()}
            </div>
            <div className=" animate-spin-slow"> {scrollButton()}</div>
          </div>
          </div>
            
       
        <div
          style={medium.style}
          
          className=" h-[250px]  uppercase  font-bold  flex items-center text-mblack text-[150px] rounded-xl  overflow-hidden relative mb-32"
        >
          <div className="bg-mwhite/30 filter rounded-xl absolute w-full h-full backdrop-blur-[3px] "></div>
          <MovingText text={"i design. i develop. you grow"}  />
        </div>
      </section>
      {/* <Cursor cursorScale={cursorScale} /> */}
    </>
  );
}
const arrow = () => {
  return (
    <svg
      width="22"
      height="45"
      viewBox="0 0 22 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5625 34.1949L12.0563 43.7012C11.4729 44.2845 10.5271 44.2845 9.94378 43.7012L0.437564 34.1949C-0.145785 33.6116 -0.145785 32.6658 0.437564 32.0825C1.02091 31.4991 1.96671 31.4991 2.55006 32.0825L9.50627 39.0387L9.50627 0.819702L12.4938 0.819702L12.4938 39.0387L19.45 32.0825C20.0333 31.4991 20.9791 31.4991 21.5625 32.0825C22.1458 32.6658 22.1458 33.6116 21.5625 34.1949Z"
        fill="white"
      />
    </svg>
  );
};

const scrollButton = () => {
  return (
    <svg
      width="133"
      height="143"
      viewBox="0 0 133 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M117.684 77.3774C117.845 76.037 118.21 74.8117 118.778 73.7016C119.362 72.6114 120.11 71.7404 121.022 71.0885L123.285 73.5356C122.659 73.9137 122.106 74.4455 121.625 75.1311C121.159 75.8366 120.872 76.6451 120.763 77.5566C120.696 78.1106 120.722 78.576 120.84 78.9527C120.958 79.3294 121.186 79.5382 121.526 79.5789C121.776 79.609 121.983 79.5432 122.148 79.3817C122.33 79.2223 122.507 78.8809 122.679 78.3577L123.279 76.5262C123.821 74.887 124.465 73.7497 125.212 73.1142C125.975 72.4988 126.901 72.2565 127.991 72.3874C128.724 72.4753 129.394 72.7824 130.002 73.3085C130.627 73.8369 131.09 74.5903 131.389 75.569C131.706 76.5498 131.778 77.764 131.605 79.2116C131.441 80.5698 131.101 81.7436 130.584 82.733C130.066 83.7223 129.395 84.4758 128.572 84.9933L126.366 82.5258C126.954 82.1613 127.44 81.6577 127.826 81.015C128.211 80.3724 128.444 79.7115 128.526 79.0324C128.577 78.6035 128.577 78.2317 128.524 77.9172C128.487 77.6227 128.405 77.3953 128.279 77.2352C128.154 77.0751 127.983 76.9821 127.769 76.9564C127.537 76.9285 127.318 77.0111 127.114 77.2041C126.925 77.4171 126.732 77.8199 126.534 78.4125L125.758 80.794C125.343 82.1401 124.768 83.0773 124.034 83.6055C123.3 84.1338 122.468 84.3421 121.539 84.2306C120.663 84.1254 119.904 83.7987 119.263 83.2504C118.622 82.7021 118.152 81.9386 117.852 80.9599C117.571 79.9834 117.515 78.7892 117.684 77.3774Z"
        fill="white"
      />
      <path
        d="M127.542 95.3748C127.042 96.6482 126.444 97.6315 125.746 98.3247C125.059 99.0411 124.322 99.5156 123.534 99.748C122.757 100.004 122.002 100.056 121.269 99.9032L121.511 95.4443C122.277 95.6098 122.899 95.6024 123.376 95.4221C123.863 95.2652 124.221 94.8935 124.451 94.307C124.662 93.7708 124.714 93.2691 124.607 92.8019C124.511 92.3579 124.23 91.9386 123.766 91.5439C123.319 91.1557 122.685 90.8005 121.864 90.4783C121.043 90.1561 120.334 89.9937 119.735 89.9909C119.154 89.9947 118.673 90.1349 118.294 90.4115C117.932 90.6946 117.652 91.0875 117.454 91.5902C117.29 92.0091 117.231 92.3822 117.276 92.7094C117.332 93.06 117.474 93.3867 117.704 93.6893C117.933 93.992 118.256 94.254 118.672 94.4752L115.931 97.8374C115.24 97.4307 114.703 96.8527 114.32 96.1031C113.948 95.3768 113.758 94.5291 113.752 93.5598C113.746 92.5905 113.963 91.5445 114.403 90.4219C114.943 89.0479 115.664 87.9485 116.568 87.1237C117.488 86.3054 118.543 85.8105 119.732 85.6389C120.937 85.4739 122.227 85.661 123.601 86.2002C124.975 86.7394 126.04 87.4762 126.794 88.4105C127.566 89.3514 128.009 90.4147 128.124 91.6006C128.249 92.8098 128.055 94.0679 127.542 95.3748Z"
        fill="white"
      />
      <path
        d="M111.553 97.3208L122.67 104.98L120.372 108.315L117.863 106.816C118.499 107.67 118.858 108.529 118.94 109.394C119.011 110.274 118.751 111.144 118.159 112.003C117.965 112.285 117.779 112.507 117.602 112.669C117.414 112.846 117.243 112.968 117.087 113.036L114.235 110.513C114.396 110.406 114.573 110.244 114.766 110.027C114.964 109.835 115.175 109.576 115.4 109.25C115.706 108.805 115.896 108.324 115.969 107.806C116.041 107.288 115.967 106.777 115.745 106.275C115.527 105.797 115.13 105.359 114.552 104.961L108.949 101.1L111.553 97.3208Z"
        fill="white"
      />
      <path
        d="M110.586 119.953C109.534 120.909 108.427 121.539 107.266 121.841C106.104 122.168 104.946 122.139 103.792 121.753C102.637 121.392 101.562 120.666 100.569 119.575C99.5759 118.483 98.9483 117.338 98.6863 116.141C98.4232 114.969 98.5033 113.813 98.9267 112.674C99.3489 111.559 100.086 110.524 101.138 109.567C102.163 108.634 103.257 108.004 104.419 107.677C105.593 107.363 106.758 107.386 107.913 107.747C109.067 108.133 110.141 108.871 111.134 109.963C112.127 111.055 112.756 112.187 113.019 113.359C113.281 114.556 113.194 115.718 112.758 116.844C112.335 117.984 111.611 119.02 110.586 119.953ZM108.387 117.536C108.773 117.185 109.021 116.789 109.131 116.348C109.241 115.907 109.182 115.414 108.953 114.868C108.724 114.322 108.313 113.723 107.719 113.07C107.126 112.418 106.568 111.952 106.046 111.672C105.536 111.406 105.05 111.3 104.589 111.355C104.14 111.423 103.722 111.632 103.336 111.984C102.937 112.347 102.682 112.749 102.572 113.19C102.474 113.644 102.534 114.137 102.75 114.67C102.98 115.216 103.391 115.815 103.984 116.468C104.578 117.12 105.136 117.586 105.658 117.866C106.179 118.145 106.665 118.251 107.114 118.183C107.563 118.115 107.988 117.899 108.387 117.536Z"
        fill="white"
      />
      <path
        d="M101.131 133.481L93.6411 120.909C93.3371 120.398 93.0356 120.086 92.7365 119.97C92.4375 119.855 92.0869 119.917 91.6848 120.157C91.4529 120.295 91.2688 120.426 91.1326 120.549C90.9964 120.672 90.8384 120.829 90.6588 121.02L89.5045 118.502C89.6815 118.166 89.962 117.81 90.346 117.435C90.7299 117.059 91.1384 116.743 91.5714 116.485C92.8085 115.748 93.8758 115.499 94.7734 115.74C95.6709 115.98 96.5066 116.75 97.2804 118.049L105.074 131.132L101.131 133.481Z"
        fill="white"
      />
      <path
        d="M92.0976 137.736L86.4474 124.237C86.218 123.689 85.9634 123.337 85.6835 123.181C85.4035 123.025 85.0477 123.037 84.616 123.218C84.3669 123.322 84.1663 123.426 84.0142 123.528C83.862 123.631 83.6836 123.764 83.479 123.928L82.6896 121.273C82.912 120.965 83.2397 120.652 83.6726 120.335C84.1054 120.017 84.5543 119.761 85.0192 119.566C86.3475 119.01 87.4391 118.914 88.294 119.278C89.1489 119.642 89.8683 120.522 90.4521 121.917L96.3317 135.964L92.0976 137.736Z"
        fill="white"
      />
      <path
        d="M71.635 122.78C72.7489 122.711 73.7446 122.92 74.6223 123.406C75.4832 123.912 76.1794 124.672 76.7109 125.685C77.2244 126.699 77.5262 127.934 77.6161 129.389C77.7094 130.898 77.5547 132.188 77.152 133.259C76.7313 134.331 76.116 135.172 75.306 135.781C74.4781 136.391 73.5072 136.731 72.3934 136.799C71.1717 136.875 70.1693 136.558 69.386 135.849C68.586 135.159 68.0426 134.246 67.7559 133.109L68.1521 132.517L68.7684 142.488L64.1872 142.771L63.0013 123.584L67.0974 123.331L67.677 127.893L67.1131 127.523C67.1653 126.618 67.3955 125.819 67.8035 125.126C68.1936 124.435 68.7183 123.88 69.3777 123.46C70.0202 123.06 70.7727 122.833 71.635 122.78ZM70.2533 126.246C69.7323 126.279 69.3004 126.441 68.9578 126.732C68.5983 127.043 68.3369 127.483 68.1737 128.052C68.0105 128.621 67.9539 129.31 68.0039 130.119C68.0505 130.873 68.1888 131.505 68.4186 132.014C68.6316 132.541 68.935 132.928 69.3289 133.175C69.706 133.44 70.1551 133.556 70.6761 133.524C71.4665 133.475 72.077 133.14 72.5075 132.518C72.9211 131.916 73.089 130.985 73.0113 129.728C72.9335 128.47 72.6518 127.559 72.166 126.994C71.6813 126.447 71.0438 126.198 70.2533 126.246Z"
        fill="white"
      />
      <path
        d="M52.5105 135.571C51.1201 135.272 49.9643 134.739 49.0431 133.97C48.1004 133.216 47.4501 132.257 47.0921 131.094C46.7128 129.945 46.678 128.649 46.9877 127.206C47.2973 125.763 47.8628 124.586 48.684 123.676C49.4838 122.78 50.4702 122.172 51.6432 121.853C52.7949 121.548 54.0659 121.545 55.4562 121.843C56.8113 122.134 57.9602 122.657 58.9029 123.411C59.8418 124.183 60.5009 125.144 60.8802 126.293C61.2381 127.456 61.2623 128.759 60.9526 130.202C60.6429 131.645 60.0882 132.815 59.2884 133.711C58.4672 134.621 57.472 135.227 56.3027 135.528C55.1297 135.847 53.8656 135.861 52.5105 135.571ZM53.1959 132.376C53.7063 132.486 54.1727 132.457 54.5952 132.29C55.0176 132.123 55.3842 131.787 55.6948 131.283C56.0055 130.779 56.2534 130.096 56.4384 129.234C56.6235 128.371 56.6777 127.647 56.6012 127.059C56.5209 126.49 56.3243 126.034 56.0114 125.69C55.6947 125.365 55.2811 125.147 54.7708 125.037C54.2428 124.924 53.7676 124.951 53.3451 125.118C52.9189 125.303 52.5523 125.638 52.2454 126.125C51.9348 126.629 51.6869 127.312 51.5019 128.174C51.3168 129.037 51.2625 129.761 51.339 130.349C51.4156 130.936 51.6122 131.392 51.9289 131.718C52.2456 132.043 52.6679 132.263 53.1959 132.376Z"
        fill="white"
      />
      <path
        d="M26.4886 123.734L22.3598 121.275L32.7714 111.763L37.5034 114.582L35.372 122.961L41.6554 117.056L46.3641 119.861L42.9808 133.559L38.8288 131.086L41.9792 121.366L34.6072 128.571L30.7103 126.249L33.5592 116.35L26.4886 123.734Z"
        fill="white"
      />
      <path
        d="M31.2062 110.138L20.8966 118.854L18.2471 115.72L21.6368 112.536L21.5762 113.259C20.7177 113.749 19.8957 114.031 19.1104 114.106C18.3134 114.167 17.5704 114.041 16.8813 113.728C16.167 113.412 15.5309 112.925 14.9731 112.265C14.3688 111.55 13.9834 110.815 13.8167 110.061C13.6385 109.292 13.6896 108.53 13.97 107.774C14.2505 107.019 14.7962 106.298 15.6072 105.613L22.4735 99.8081L25.4367 103.313L19.4983 108.333C18.7835 108.938 18.4048 109.493 18.3623 110.001C18.3198 110.508 18.4787 110.975 18.8389 111.401C19.1178 111.731 19.4617 111.97 19.8707 112.12C20.266 112.281 20.7051 112.298 21.1882 112.173C21.6713 112.047 22.2016 111.74 22.7789 111.252L28.243 106.633L31.2062 110.138Z"
        fill="white"
      />
      <path
        d="M6.97036 85.921L10.54 84.7625L13.5905 94.1618L10.0208 95.3203L6.97036 85.921Z"
        fill="white"
      />
      <path
        d="M14.8402 68.5724C14.7622 69.9202 14.4736 71.1655 13.9747 72.3086C13.4588 73.4326 12.7657 74.348 11.8954 75.0549L9.48658 72.7517C10.0876 72.3358 10.6072 71.7709 11.0452 71.057C11.4663 70.3242 11.7034 69.4995 11.7565 68.5831C11.7888 68.026 11.7345 67.5631 11.5936 67.1943C11.4526 66.8256 11.2115 66.6313 10.8701 66.6115C10.6185 66.5969 10.4156 66.6753 10.2614 66.8467C10.0893 67.017 9.93371 67.3686 9.79466 67.9015L9.30797 69.7664C8.86867 71.4358 8.29576 72.6106 7.58924 73.2908C6.86578 73.9521 5.95598 74.251 4.85983 74.1875C4.12308 74.1448 3.43527 73.8795 2.79643 73.3918C2.13961 72.903 1.63162 72.1794 1.27246 71.221C0.895326 70.2616 0.74893 69.0541 0.833266 67.5986C0.912396 66.2329 1.17982 65.0404 1.63554 64.021C2.09127 63.0017 2.71419 62.2084 3.50432 61.6412L5.85763 63.9682C5.29355 64.3682 4.83898 64.9008 4.49393 65.5659C4.14888 66.2311 3.95658 66.9051 3.91701 67.5879C3.89202 68.0192 3.9156 68.3902 3.98775 68.7009C4.04297 68.9926 4.1383 69.2144 4.27372 69.3665C4.40915 69.5186 4.58468 69.6009 4.80032 69.6134C5.03393 69.6269 5.24682 69.5311 5.43901 69.3259C5.61428 69.1016 5.7825 68.6877 5.94369 68.084L6.57099 65.6592C6.90274 64.2902 7.41875 63.3194 8.11903 62.7469C8.81931 62.1745 9.63666 61.9154 10.5711 61.9695C11.4516 62.0205 12.2287 62.2999 12.9025 62.8077C13.5762 63.3156 14.0927 64.0487 14.4518 65.007C14.793 65.9644 14.9225 67.1528 14.8402 68.5724Z"
        fill="white"
      />
      <path
        d="M3.81328 51.4207C4.23065 50.1179 4.76519 49.0984 5.41689 48.3622C6.05694 47.6033 6.7624 47.0827 7.53326 46.8004C8.29248 46.4955 9.04271 46.3957 9.78396 46.5008L9.8277 50.966C9.05217 50.8499 8.43225 50.897 7.96793 51.1073C7.49196 51.2951 7.15788 51.6889 6.96567 52.2889C6.78993 52.8374 6.77021 53.3414 6.90652 53.8009C7.03118 54.2378 7.33756 54.6383 7.82569 55.0026C8.29667 55.3614 8.95213 55.6754 9.79206 55.9445C10.632 56.2136 11.3506 56.3304 11.9479 56.2949C12.5281 56.254 12.9985 56.0834 13.3593 55.7832C13.703 55.4774 13.9572 55.0675 14.1219 54.5532C14.2592 54.1247 14.2947 53.7486 14.2283 53.4249C14.1502 53.0785 13.9871 52.7617 13.739 52.4743C13.4908 52.1869 13.1522 51.9461 12.723 51.7518L15.2432 48.2215C15.959 48.5831 16.5318 49.1257 16.9615 49.8493C17.3795 50.5503 17.6227 51.3842 17.6909 52.3512C17.7592 53.3181 17.6093 54.3758 17.2414 55.5243C16.7911 56.9299 16.1413 58.0731 15.292 58.954C14.4256 59.8294 13.4047 60.3907 12.2293 60.6378C11.0367 60.8795 9.73762 60.7751 8.33201 60.3248C6.9264 59.8745 5.8171 59.2072 5.00412 58.323C4.17399 57.4334 3.66381 56.4005 3.47357 55.2244C3.27169 54.0256 3.38492 52.7577 3.81328 51.4207Z"
        fill="white"
      />
      <path
        d="M19.6387 48.4044L8.06635 41.4527L10.1519 37.981L12.7488 39.3205C12.0609 38.5083 11.6492 37.6731 11.5138 36.8148C11.3877 35.9412 11.5934 35.0569 12.131 34.1619C12.3071 33.8688 12.4786 33.6358 12.6454 33.463C12.8214 33.2748 12.9851 33.1421 13.1364 33.065L16.1403 35.405C15.9859 35.5222 15.8191 35.695 15.64 35.9233C15.4546 36.127 15.26 36.3985 15.0561 36.738C14.778 37.2009 14.6188 37.6931 14.5784 38.2148C14.538 38.7365 14.6442 39.2413 14.8971 39.7291C15.1438 40.1923 15.5681 40.6046 16.1698 40.9661L22.0023 44.4698L19.6387 48.4044Z"
        fill="white"
      />
      <path
        d="M19.0388 25.8776C20.0259 24.854 21.0888 24.1537 22.2277 23.7765C23.366 23.374 24.5236 23.3275 25.7004 23.6371C26.8767 23.9212 27.9961 24.5755 29.0586 25.6001C30.121 26.6246 30.8221 27.7258 31.1617 28.9035C31.5009 30.0557 31.4965 31.2142 31.1485 32.379C30.8 33.5183 30.1323 34.5997 29.1452 35.6233C28.1831 36.621 27.1329 37.3211 25.9945 37.7237C24.8432 38.1138 23.6794 38.1668 22.5031 37.8826C21.3263 37.573 20.2067 36.9059 19.1442 35.8814C18.0817 34.8568 17.3809 33.7684 17.0417 32.6162C16.7021 31.4385 16.7127 30.2735 17.0737 29.1212C17.4217 27.9565 18.0767 26.8753 19.0388 25.8776ZM21.3905 28.1454C21.0282 28.5211 20.8065 28.9325 20.7255 29.3795C20.6445 29.8265 20.7361 30.315 21.0004 30.8448C21.2646 31.3747 21.7141 31.9457 22.349 32.5579C22.9839 33.1702 23.5709 33.5987 24.11 33.8435C24.6362 34.0758 25.1276 34.1496 25.5843 34.0649C26.0281 33.9678 26.4312 33.7313 26.7935 33.3556C27.1684 32.9669 27.3963 32.549 27.4773 32.102C27.5453 31.6425 27.4537 31.154 27.2024 30.6367C26.9382 30.1068 26.4886 29.5358 25.8537 28.9235C25.2188 28.3113 24.6318 27.8828 24.0927 27.638C23.5536 27.3932 23.0622 27.3194 22.6184 27.4165C22.1746 27.5137 21.7653 27.7567 21.3905 28.1454Z"
        fill="white"
      />
      <path
        d="M27.5104 11.7863L35.8131 23.8367C36.1501 24.3259 36.4717 24.618 36.7777 24.7132C37.0837 24.8084 37.4294 24.7232 37.8148 24.4577C38.0371 24.3045 38.2122 24.162 38.34 24.0302C38.4678 23.8985 38.615 23.7315 38.7817 23.5292L40.0996 25.9655C39.9451 26.3124 39.6887 26.6858 39.3304 27.0857C38.972 27.4856 38.5853 27.8285 38.1703 28.1145C36.9845 28.9315 35.9359 29.2496 35.0244 29.0688C34.113 28.888 33.2283 28.1751 32.3705 26.9301L23.7307 14.3904L27.5104 11.7863Z"
        fill="white"
      />
      <path
        d="M36.1526 6.96029L42.6938 20.0508C42.9593 20.5822 43.2369 20.9163 43.5267 21.0532C43.8165 21.1901 44.1707 21.154 44.5893 20.9448C44.8308 20.8241 45.024 20.7074 45.169 20.5948C45.3139 20.4821 45.483 20.3373 45.6762 20.1602L46.6415 22.7565C46.4402 23.0785 46.1342 23.4124 45.7236 23.7585C45.313 24.1045 44.8823 24.3902 44.4314 24.6155C43.1433 25.2591 42.0606 25.4279 41.1832 25.1218C40.3059 24.8157 39.5293 23.9864 38.8534 22.6338L32.0467 9.01196L36.1526 6.96029Z"
        fill="white"
      />
      <path
        d="M57.6299 20.4355C56.5229 20.577 55.5156 20.4336 54.608 20.0053C53.7159 19.5568 52.9716 18.8444 52.375 17.8682C51.7962 16.8897 51.4144 15.6774 51.2295 14.2312C51.0377 12.7314 51.1078 11.434 51.4396 10.3391C51.7893 9.24194 52.3483 8.36296 53.1167 7.70219C53.903 7.03913 54.8496 6.63684 55.9566 6.49531C57.1707 6.34009 58.1917 6.59063 59.0196 7.24693C59.863 7.88309 60.465 8.75882 60.8253 9.87412L60.4687 10.4913L59.2018 0.582078L63.7547 -2.13916e-07L66.1926 19.0686L62.1218 19.589L61.2451 15.0738L61.8321 15.4071C61.8391 16.3135 61.6617 17.1255 61.2997 17.8432C60.9557 18.5586 60.4684 19.1471 59.8379 19.6088C59.2229 20.0504 58.4869 20.3259 57.6299 20.4355ZM58.782 16.8858C59.2998 16.8196 59.7201 16.6297 60.043 16.3163C60.3814 15.9827 60.6134 15.5266 60.7391 14.948C60.8647 14.3694 60.8762 13.6783 60.7734 12.8749C60.6776 12.125 60.4983 11.5037 60.2357 11.0111C59.9887 10.4982 59.6606 10.1319 59.2514 9.91202C58.8578 9.672 58.4021 9.58509 57.8843 9.65129C57.0987 9.75172 56.5115 10.1262 56.1226 10.7748C55.7493 11.4032 55.6425 12.3423 55.8023 13.5921C55.9621 14.8419 56.3028 15.7329 56.8245 16.265C57.3439 16.7793 57.9964 16.9862 58.782 16.8858Z"
        fill="white"
      />
      <path
        d="M75.9005 6.38473C77.3073 6.5921 78.4954 7.04923 79.4646 7.75613C80.4543 8.44785 81.1655 9.36233 81.5983 10.4996C82.0515 11.6217 82.1705 12.9128 81.9553 14.373C81.74 15.8332 81.2522 17.044 80.4919 18.0054C79.752 18.9516 78.8072 19.622 77.6574 20.0165C76.528 20.3959 75.2599 20.4819 73.8531 20.2745C72.482 20.0724 71.3015 19.6255 70.3118 18.9337C69.3248 18.2242 68.6046 17.3084 68.1514 16.1864C67.7186 15.0491 67.6099 13.7504 67.8251 12.2902C68.0403 10.83 68.5179 9.62675 69.2578 8.68054C70.0181 7.71915 70.9719 7.05009 72.1191 6.67336C73.2689 6.27883 74.5294 6.18262 75.9005 6.38473ZM75.4241 9.61678C74.9077 9.54065 74.4442 9.59968 74.0334 9.79386C73.6227 9.98804 73.2788 10.3467 73.0015 10.8699C72.7243 11.393 72.5213 12.0909 72.3927 12.9634C72.2641 13.836 72.257 14.5627 72.3715 15.1436C72.4887 15.7067 72.7145 16.1494 73.0491 16.4716C73.3863 16.7761 73.8131 16.9663 74.3295 17.0425C74.8638 17.1212 75.3362 17.0635 75.7469 16.8693C76.1603 16.6573 76.5042 16.2987 76.7789 15.7933C77.0561 15.2701 77.2591 14.5723 77.3877 13.6997C77.5163 12.8272 77.5233 12.1004 77.4088 11.5195C77.2943 10.9386 77.0685 10.496 76.7313 10.1915C76.3941 9.88711 75.9583 9.69552 75.4241 9.61678Z"
        fill="white"
      />
      <path
        d="M102.848 16.5573L107.123 18.7531L97.328 28.8986L92.4286 26.382L94.0304 17.8863L88.1297 24.1738L83.2543 21.6695L85.772 7.78607L90.0709 9.99429L87.5362 19.8927L94.442 12.2395L98.4768 14.312L96.2542 24.3708L102.848 16.5573Z"
        fill="white"
      />
      <path
        d="M99.0545 30.433L108.806 21.0975L111.644 24.062L108.458 27.449L108.473 26.7237C109.3 26.1815 110.103 25.8489 110.882 25.7259C111.674 25.6158 112.423 25.6958 113.13 25.9659C113.863 26.2365 114.528 26.6838 115.125 27.3079C115.773 27.984 116.203 28.6936 116.416 29.4366C116.641 30.1927 116.637 30.9564 116.404 31.7279C116.171 32.4994 115.67 33.2524 114.903 33.9868L108.409 40.2042L105.235 36.8886L110.852 31.5114C111.528 30.8641 111.871 30.286 111.882 29.777C111.893 29.268 111.706 28.812 111.32 28.4089C111.022 28.0969 110.663 27.879 110.246 27.7553C109.842 27.6192 109.402 27.6287 108.928 27.7839C108.453 27.939 107.943 28.278 107.397 28.8008L102.229 33.7486L99.0545 30.433Z"
        fill="white"
      />
      <path
        d="M124.682 52.7824L121.199 54.1795L117.52 45.0078L121.003 43.6107L124.682 52.7824Z"
        fill="white"
      />
    </svg>
  );
};
export default HeroL;