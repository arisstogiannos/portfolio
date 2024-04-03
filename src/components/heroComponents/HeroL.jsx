import React, {  useLayoutEffect } from "react";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import MovingText from "../globalComponents/MovingText";
import SplitType from "split-type";
import gsap from "gsap";

import { motion } from "framer-motion";


const medium = localfont({ src: "../../../fonts/medium.otf" });

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function HeroL() {
 
   
  
  
  useLayoutEffect(() => {
    const mytext1 = new SplitType("#mytext1");
    const mytext2 = new SplitType("#mytext2");

    gsap.from(".char", {
      y: 130,
      opacity: 1,
      stagger: 0.015,
    
      duration: 0.8,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <>
      <section
        style={montserat.style}
        className="myContainer flex flex-col    relative cursor-default"
      >
        <div className="w-full h-[120px] md:h-[147px]  xl:h-[180px] 2xl:h-[234px] 3xl:h-[284px] flex mt-10 justify-between text-white font-medium text-3xl  md:text-4xl  xl:text-5xl 2xl:text-6xl 3xl:text-7xl  relative 3xl:mb-10  pb-2">
          {/* <div
         
          className="w-full md:h-[147px]  xl:h-[180px] 2xl:h-[224px] flex mt-10 justify-between text-white font-semibold md:text-4xl  xl:text-5xl 2xl:text-6xl relative 3xl:mb-20 "
        > */}
          <h1 id="mytext1" className="scaleCursor mb-auto leading-tight">
            Let's Start <br /> Working
          </h1>
          <motion.hr
            animate={{ scaleX: 1, translateX: "-50%" }}
            transition={{
              duration: 0.6,
              ease: [0, 0.55, 0.45, 1],
              delay: 0.4,
            }}
            initial={{ scaleX: 0, translateX: "-50%" }}
            className="absolute top-1/2 left-[62%] md:left-[56%] lg:left-[55%] 2xl:left-[57%] -translate-x-1/2 h-1 w-[45%] md:w-[60%] lg:w-[65%] origin-left "
          />
          <h1 id="mytext2" className="scaleCursor mt-auto text-end leading-tight">
            On <br /> Your Website
          </h1>
        </div>
        <motion.div initial={{clipPath:'inset(100% 0 0 0)'}} animate={{clipPath:'inset(0 0 0 0)',transition:{duration:1,delay:0.2}}} className="origin-right scale-50 md:scale-75 lg:scale-[0.85] 2xl:scale-95 top-[80px] sm:top-[70px] -left-20 sm:-left-14  relative w-60 h-60 bg-mblack rounded-full z-40">
          <div
            onClick={() => {
              scrollTo({ top: 1000, left: 0, behavior: "smooth" });
            }}
            className="scaleCursor top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  absolute cursor-pointer  "
          >
            <div className="absolute top-1/2 left-1/2   animate-mBounce-long ">
              {arrow()}
            </div>
            <div className=" animate-spin-slow"> {scrollButton()}</div>
          </div>
        </motion.div>

        <div
          
          style={medium.style}
          className="  h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px]   uppercase  font-bold  flex items-center text-mblack text-7xl md:text-[90px] xl:text-[150px] lg:text-[130px] rounded-xl  overflow-hidden relative mb-32"
        >
          <motion.div id="cont" initial={{scaleY:0}} animate={{scaleY:1,transition:{duration:1,delay:0.2}}} className="origin-bottom bg-mblue/80 filter rounded-xl absolute w-full h-full backdrop-blur-[3px] "></motion.div>
          <MovingText text={"freelance. developer. designer"} />
        </div>
      </section>
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5625 34.1949L12.0563 43.7012C11.4729 44.2845 10.5271 44.2845 9.94378 43.7012L0.437564 34.1949C-0.145785 33.6116 -0.145785 32.6658 0.437564 32.0825C1.02091 31.4991 1.96671 31.4991 2.55006 32.0825L9.50627 39.0387L9.50627 0.819702L12.4938 0.819702L12.4938 39.0387L19.45 32.0825C20.0333 31.4991 20.9791 31.4991 21.5625 32.0825C22.1458 32.6658 22.1458 33.6116 21.5625 34.1949Z"
        fill="white"
      />
    </svg>
  );
};

const scrollButton = () => {
  return (
    <svg
      width="199"
      height="199"
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M173.496 106.208C173.62 104.88 173.936 103.629 174.447 102.454C174.975 101.281 175.594 100.377 176.306 99.7396L178.162 100.841C177.52 101.451 176.96 102.252 176.483 103.246C176.006 104.239 175.715 105.292 175.612 106.404C175.518 107.416 175.558 108.249 175.732 108.901C175.906 109.553 176.178 110.047 176.549 110.383C176.936 110.72 177.386 110.912 177.901 110.96C178.498 111.015 178.998 110.861 179.4 110.497C179.801 110.149 180.138 109.67 180.412 109.059C180.702 108.467 180.964 107.805 181.199 107.073C181.435 106.342 181.695 105.604 181.982 104.861C182.284 104.136 182.638 103.474 183.045 102.876C183.451 102.294 183.961 101.839 184.578 101.512C185.211 101.185 185.992 101.065 186.921 101.152C187.817 101.235 188.617 101.543 189.321 102.077C190.039 102.63 190.577 103.416 190.935 104.437C191.307 105.476 191.422 106.758 191.28 108.285C191.186 109.297 190.96 110.289 190.603 111.26C190.245 112.231 189.783 113.059 189.217 113.743L187.302 112.736C187.869 112.036 188.299 111.281 188.592 110.471C188.901 109.663 189.092 108.869 189.164 108.089C189.255 107.11 189.206 106.293 189.015 105.639C188.825 104.986 188.536 104.49 188.149 104.153C187.76 103.832 187.309 103.648 186.794 103.6C186.18 103.543 185.673 103.689 185.272 104.037C184.87 104.401 184.533 104.88 184.26 105.474C183.986 106.085 183.723 106.755 183.471 107.485C183.236 108.216 182.975 108.945 182.69 109.672C182.404 110.416 182.058 111.078 181.652 111.66C181.245 112.258 180.734 112.721 180.117 113.049C179.501 113.377 178.737 113.498 177.824 113.413C176.944 113.332 176.145 113.015 175.426 112.463C174.724 111.912 174.188 111.109 173.817 110.054C173.462 109.016 173.355 107.734 173.496 106.208Z"
        fill="white"
      />
      <path
        d="M170.133 122.633C170.531 121.36 171.105 120.247 171.856 119.294C172.618 118.363 173.505 117.618 174.517 117.061C175.54 116.525 176.638 116.195 177.811 116.072C178.985 115.949 180.192 116.082 181.433 116.469C182.674 116.856 183.742 117.434 184.637 118.202C185.532 118.97 186.237 119.871 186.753 120.905C187.284 121.944 187.59 123.061 187.671 124.256C187.763 125.472 187.61 126.716 187.213 127.989C186.811 129.278 186.218 130.394 185.435 131.336C184.663 132.3 183.728 133.03 182.631 133.525L181.611 131.505C182.478 131.077 183.195 130.515 183.761 129.819C184.344 129.128 184.776 128.329 185.059 127.422C185.352 126.483 185.466 125.558 185.401 124.648C185.331 123.753 185.102 122.922 184.713 122.154C184.324 121.387 183.784 120.712 183.092 120.13C182.412 119.568 181.611 119.143 180.688 118.855C179.765 118.568 178.856 118.459 177.961 118.528C177.078 118.619 176.257 118.87 175.501 119.28C174.745 119.69 174.083 120.243 173.517 120.939C172.945 121.651 172.513 122.476 172.22 123.415C171.937 124.322 171.831 125.223 171.901 126.117C171.986 127.017 172.272 127.892 172.758 128.742L170.77 129.824C170.149 128.792 169.787 127.658 169.684 126.421C169.577 125.2 169.726 123.937 170.133 122.633Z"
        fill="white"
      />
      <path
        d="M167.181 131.42L182.248 140.321L178.777 146.197C177.997 147.517 177.123 148.521 176.156 149.208C175.189 149.895 174.163 150.256 173.077 150.292C171.991 150.328 170.902 150.024 169.812 149.38C168.721 148.736 167.93 147.929 167.437 146.961C166.959 146.001 166.787 144.931 166.922 143.753C167.057 142.574 167.514 141.325 168.294 140.005L171.066 135.312L171.484 136.866L165.909 133.573L167.181 131.42ZM161.23 141.494L168.961 140.892L167.6 143.195L159.844 143.84L161.23 141.494ZM171.269 136.739L172.896 136.393L170.162 141.021C169.348 142.399 169.028 143.613 169.201 144.663C169.38 145.737 170.007 146.592 171.083 147.227C172.16 147.863 173.204 147.996 174.216 147.626C175.22 147.271 176.128 146.404 176.942 145.026L179.676 140.399L180.18 142.003L171.269 136.739Z"
        fill="white"
      />
      <path
        d="M152.714 151.348C153.643 150.391 154.67 149.658 155.794 149.146C156.906 148.647 158.04 148.377 159.194 148.337C160.36 148.308 161.495 148.503 162.597 148.924C163.699 149.344 164.711 150.001 165.631 150.895C166.552 151.789 167.238 152.781 167.69 153.871C168.142 154.96 168.364 156.082 168.358 157.238C168.363 158.404 168.132 159.551 167.665 160.677C167.198 161.804 166.494 162.851 165.554 163.82C164.625 164.776 163.61 165.498 162.509 165.986C161.409 166.497 160.275 166.766 159.109 166.795C157.943 166.848 156.814 166.658 155.724 166.226C154.621 165.806 153.604 165.143 152.672 164.237C151.739 163.331 151.047 162.333 150.595 161.244C150.131 160.166 149.903 159.038 149.909 157.859C149.916 156.704 150.153 155.563 150.62 154.437C151.087 153.334 151.785 152.304 152.714 151.348ZM154.31 152.898C153.637 153.592 153.135 154.347 152.805 155.165C152.463 155.995 152.299 156.835 152.311 157.683C152.324 158.555 152.507 159.395 152.86 160.203C153.202 161.023 153.72 161.77 154.413 162.444C155.107 163.117 155.868 163.613 156.698 163.931C157.516 164.261 158.355 164.414 159.215 164.389C160.076 164.389 160.916 164.205 161.735 163.84C162.543 163.486 163.284 162.963 163.958 162.269C164.643 161.564 165.156 160.796 165.498 159.966C165.828 159.148 165.986 158.303 165.974 157.431C165.973 156.571 165.802 155.731 165.46 154.911C165.106 154.103 164.583 153.362 163.889 152.688C163.196 152.015 162.44 151.513 161.622 151.183C160.792 150.865 159.942 150.712 159.07 150.725C158.21 150.749 157.375 150.938 156.567 151.292C155.748 151.657 154.995 152.193 154.31 152.898Z"
        fill="white"
      />
      <path
        d="M144.569 159.016L154.232 173.606L152.148 174.987L143.685 162.21L135.786 167.442L134.585 165.629L144.569 159.016Z"
        fill="white"
      />
      <path
        d="M133.219 166.13L140.096 182.222L137.797 183.205L131.775 169.113L123.062 172.836L122.207 170.836L133.219 166.13Z"
        fill="white"
      />
      <path
        d="M108.838 173.805L109.243 191.3L101.87 191.471C100.004 191.514 98.3539 191.185 96.9206 190.485C95.4707 189.785 94.3389 188.786 93.5253 187.488C92.695 186.19 92.2598 184.675 92.2196 182.942C92.1795 181.209 92.5441 179.675 93.3134 178.34C94.066 177.006 95.1503 175.955 96.5663 175.189C97.9656 174.423 99.5983 174.019 101.464 173.975L108.838 173.805ZM106.389 176.037L101.665 176.146C100.215 176.18 98.9719 176.484 97.9349 177.058C96.8813 177.632 96.0743 178.418 95.5139 179.415C94.9538 180.428 94.6889 181.584 94.719 182.884C94.7495 184.2 95.0677 185.343 95.6736 186.313C96.2796 187.282 97.1221 188.03 98.2012 188.555C99.2637 189.08 100.52 189.326 101.969 189.293L106.693 189.183L106.389 176.037Z"
        fill="white"
      />
      <path
        d="M82.1353 171.764C83.4322 172.074 84.5877 172.581 85.6019 173.285C86.5998 173.986 87.4112 174.822 88.0361 175.794C88.6571 176.782 89.0689 177.857 89.2713 179.019C89.4738 180.181 89.4261 181.386 89.1282 182.634C88.8304 183.883 88.3288 184.979 87.6234 185.925C86.918 186.87 86.0672 187.635 85.0709 188.22C84.0708 188.821 82.9673 189.209 81.7605 189.384C80.5537 189.558 79.2937 189.489 77.9806 189.175C76.6836 188.866 75.5443 188.363 74.5626 187.666C73.5608 186.981 72.7494 186.145 72.1284 185.157C71.4873 184.182 71.0736 183.115 70.8873 181.957C70.6848 180.795 70.7345 179.582 71.0362 178.317C71.3379 177.053 71.8415 175.948 72.5469 175.002C73.236 174.053 74.0888 173.28 75.1051 172.683C76.1014 172.098 77.2029 171.718 78.4097 171.544C79.5965 171.381 80.8383 171.455 82.1353 171.764ZM81.6188 173.929C80.6786 173.704 79.7726 173.659 78.9008 173.794C78.0129 173.925 77.2075 174.212 76.4846 174.657C75.7416 175.113 75.1133 175.7 74.5995 176.417C74.0695 177.13 73.6923 177.957 73.4679 178.897C73.2436 179.838 73.2068 180.746 73.3577 181.621C73.4924 182.493 73.79 183.292 74.2506 184.019C74.691 184.758 75.2779 185.386 76.0111 185.904C76.7281 186.418 77.5567 186.787 78.497 187.011C79.4535 187.239 80.3757 187.288 81.2636 187.157C82.1354 187.023 82.9427 186.727 83.6857 186.27C84.4248 185.83 85.0593 185.253 85.5893 184.54C86.1031 183.823 86.4722 182.994 86.6965 182.054C86.9209 181.114 86.9657 180.208 86.8311 179.336C86.6802 178.46 86.3764 177.651 85.9197 176.908C85.4591 176.181 84.8703 175.561 84.1533 175.047C83.4201 174.53 82.5753 174.157 81.6188 173.929Z"
        fill="white"
      />
      <path
        d="M68.2997 167.616L64.4356 185.659L62.2186 184.349L65.805 167.71L66.9243 168.371L53.91 179.441L51.9297 178.271L55.4516 161.594L56.5278 162.23L43.6212 173.363L41.5763 172.155L55.514 160.063L57.7741 161.398L54.5485 176.885L53.9674 176.542L65.9966 166.255L68.2997 167.616Z"
        fill="white"
      />
      <path
        d="M49.6272 155.396L36.6823 167.173L35.3028 165.656L38.147 147.421L38.8704 148.216L28.2371 157.889L26.5547 156.04L39.4997 144.264L40.8792 145.78L38.035 164.016L37.3116 163.22L47.9449 153.547L49.6272 155.396Z"
        fill="white"
      />
      <path
        d="M23.8452 126.8L21.8644 127.418L19.8611 120.999L21.8418 120.38L23.8452 126.8Z"
        fill="white"
      />
      <path
        d="M25.5984 91.6868C25.4548 93.0124 25.1186 94.2584 24.5898 95.4249C24.0445 96.5896 23.411 97.4849 22.6894 98.1108L20.8504 96.9811C21.5022 96.3812 22.0743 95.5882 22.5667 94.6022C23.0591 93.6161 23.3655 92.568 23.4858 91.4579C23.5953 90.4471 23.5682 89.6144 23.4044 88.9596C23.2407 88.3048 22.9762 87.8067 22.6108 87.4654C22.2289 87.1222 21.7811 86.9228 21.2674 86.8672C20.6709 86.8025 20.1689 86.9493 19.7612 87.3075C19.3554 87.6491 19.0107 88.123 18.727 88.7293C18.4286 89.3173 18.1562 89.9751 17.9097 90.7028C17.6632 91.4304 17.3909 92.1637 17.0929 92.9026C16.7802 93.6231 16.4157 94.2793 15.9995 94.8712C15.5851 95.4466 15.0673 95.8934 14.446 96.2117C13.8082 96.5282 13.0254 96.6361 12.0975 96.5356C11.2027 96.4386 10.4077 96.1178 9.71229 95.573C9.00216 95.0099 8.47637 94.2153 8.13492 93.1892C7.7787 92.1447 7.68318 90.8603 7.84837 89.3359C7.9579 88.3252 8.19908 87.3371 8.57193 86.3716C8.94477 85.4061 9.41924 84.5858 9.99534 83.9106L11.8948 84.9463C11.3169 85.6381 10.8754 86.3865 10.5702 87.1916C10.2485 87.995 10.0454 88.7861 9.961 89.5648C9.85507 90.5424 9.89226 91.3595 10.0726 92.0161C10.2529 92.6727 10.534 93.1726 10.9159 93.5157C11.2996 93.8423 11.7483 94.0334 12.262 94.089C12.8751 94.1555 13.3845 94.0179 13.7904 93.6763C14.198 93.3181 14.5427 92.8442 14.8246 92.2544C15.1082 91.6481 15.3815 90.982 15.6446 90.2562C15.8911 89.5285 16.1625 88.8035 16.4587 88.0812C16.7567 87.3423 17.1129 86.6852 17.5272 86.1098C17.9434 85.5179 18.4622 85.0628 19.0834 84.7445C19.7046 84.4263 20.4709 84.3165 21.3822 84.4153C22.2604 84.5104 23.0546 84.8396 23.7647 85.4027C24.4583 85.964 24.9823 86.7752 25.3367 87.8362C25.6764 88.8789 25.7636 90.1624 25.5984 91.6868Z"
        fill="white"
      />
      <path
        d="M29.1632 75.4532C28.7469 76.7198 28.1559 77.8238 27.3903 78.7651C26.6141 79.6854 25.7159 80.4165 24.6957 80.9583C23.6648 81.4791 22.562 81.7921 21.3871 81.8971C20.2122 82.0021 19.0072 81.8517 17.7723 81.4457C16.5373 81.0397 15.4781 80.446 14.5946 79.6643C13.7112 78.8827 13.0196 77.9711 12.5198 76.9297C12.0042 75.883 11.715 74.7616 11.652 73.5654C11.5784 72.3482 11.7498 71.1063 12.1662 69.8397C12.5878 68.5572 13.1972 67.4505 13.9944 66.5195C14.781 65.5676 15.7267 64.8521 16.8316 64.3732L17.8203 66.4087C16.9472 66.8235 16.2221 67.3746 15.6452 68.0622C15.0525 68.7446 14.6078 69.537 14.3112 70.4395C14.0041 71.3736 13.8762 72.2965 13.9274 73.2081C13.9838 74.1038 14.2008 74.9383 14.5782 75.7115C14.9556 76.4847 15.4855 77.1677 16.1679 77.7604C16.8396 78.3321 17.6346 78.7689 18.5529 79.0707C19.4713 79.3726 20.3783 79.4953 21.2741 79.4389C22.1592 79.3614 22.983 79.1234 23.7456 78.725C24.5082 78.3265 25.1779 77.7835 25.7548 77.0959C26.3369 76.3925 26.7815 75.5737 27.0885 74.6396C27.3852 73.7371 27.5053 72.838 27.4489 71.9422C27.3766 71.0413 27.1042 70.1622 26.6315 69.3051L28.6352 68.2532C29.2404 69.2942 29.5851 70.4339 29.6693 71.6721C29.7587 72.8945 29.59 74.1548 29.1632 75.4532Z"
        fill="white"
      />
      <path
        d="M32.2564 66.6364L17.3217 57.5148L20.8791 51.6902C21.6783 50.3816 22.5665 49.3911 23.5437 48.7185C24.5208 48.0459 25.5526 47.6995 26.6389 47.6795C27.7253 47.6595 28.809 47.9796 29.8899 48.6398C30.9709 49.3001 31.7505 50.118 32.2288 51.0936C32.6928 52.0605 32.8487 53.1322 32.6965 54.3087C32.5443 55.4852 32.0686 56.7277 31.2694 58.0363L28.4287 62.6874L28.0336 61.1278L33.5595 64.5028L32.2564 66.6364ZM38.3549 56.6514L30.6162 57.1393L32.0105 54.8564L39.7752 54.3259L38.3549 56.6514ZM28.247 61.2582L26.6152 61.5797L29.4168 56.9926C30.2508 55.6272 30.589 54.4179 30.4315 53.3647C30.2685 52.2887 29.6536 51.4249 28.5869 50.7734C27.5201 50.1218 26.4779 49.9735 25.4604 50.3285C24.4516 50.6693 23.5302 51.5224 22.6962 52.8879L19.8945 57.475L19.4142 55.8634L28.247 61.2582Z"
        fill="white"
      />
      <path
        d="M46.8687 47.0496C45.9259 47.9924 44.8888 48.7113 43.7575 49.2062C42.6379 49.6894 41.5006 49.9428 40.3457 49.9664C39.179 49.9782 38.0476 49.766 36.9516 49.33C35.8555 48.8939 34.8538 48.2222 33.9464 47.3147C33.0389 46.4073 32.3672 45.4055 31.9311 44.3095C31.4951 43.2135 31.2888 42.088 31.3124 40.9331C31.3242 39.7664 31.5717 38.6232 32.0548 37.5036C32.538 36.384 33.2569 35.347 34.2115 34.3924C35.1543 33.4495 36.1796 32.7424 37.2874 32.271C38.3952 31.7761 39.5325 31.5227 40.6992 31.5109C41.866 31.4755 42.9914 31.6818 44.0757 32.1296C45.1717 32.5657 46.1793 33.2433 47.0985 34.1625C48.0178 35.0818 48.6954 36.0894 49.1315 37.1854C49.5793 38.2697 49.7914 39.401 49.7679 40.5795C49.7443 41.7345 49.4909 42.8717 49.0077 43.9913C48.5245 45.0873 47.8115 46.1068 46.8687 47.0496ZM45.2954 45.4763C45.979 44.7927 46.4916 44.0444 46.8334 43.2312C47.1869 42.4062 47.3637 41.5695 47.3637 40.721C47.3637 39.8489 47.1928 39.0062 46.8511 38.1931C46.5211 37.3681 46.0143 36.6138 45.3308 35.9303C44.6472 35.2468 43.893 34.74 43.068 34.41C42.2549 34.0683 41.4181 33.9033 40.5578 33.9151C39.6975 33.9033 38.8549 34.0742 38.0299 34.4277C37.2167 34.7695 36.4684 35.2821 35.7848 35.9657C35.0895 36.661 34.5651 37.4211 34.2115 38.2461C33.8698 39.0593 33.6989 39.9019 33.6989 40.774C33.6871 41.6343 33.8462 42.4769 34.1762 43.3019C34.5179 44.1151 35.0306 44.8634 35.7141 45.547C36.3977 46.2305 37.146 46.7432 37.9592 47.0849C38.7841 47.4149 39.6327 47.5799 40.5048 47.5799C41.3651 47.5681 42.2018 47.3913 43.015 47.0496C43.84 46.696 44.6001 46.1716 45.2954 45.4763Z"
        fill="white"
      />
      <path
        d="M55.1068 39.4513L45.6584 24.7212L47.7627 23.3714L56.0368 36.2708L64.0121 31.1551L65.1864 32.9859L55.1068 39.4513Z"
        fill="white"
      />
      <path
        d="M66.6939 32.406L60.0578 16.213L62.3711 15.265L68.1824 29.4454L76.9497 25.8525L77.7745 27.865L66.6939 32.406Z"
        fill="white"
      />
      <path
        d="M90.7536 25.0657L90.6185 7.56621L97.9932 7.50927C99.8599 7.49486 101.504 7.84884 102.927 8.57122C104.366 9.29346 105.482 10.3099 106.275 11.6205C107.085 12.9309 107.497 14.4528 107.511 16.1861C107.524 17.9193 107.136 19.4474 106.346 20.7702C105.573 22.0929 104.472 23.1264 103.045 23.8708C101.634 24.615 99.995 24.9943 98.1283 25.0088L90.7536 25.0657ZM93.2367 22.8715L97.9616 22.835C99.4115 22.8238 100.659 22.5391 101.705 21.981C102.767 21.4228 103.587 20.6498 104.162 19.662C104.738 18.6575 105.021 17.5053 105.011 16.2054C105 14.8887 104.7 13.741 104.109 12.7622C103.518 11.7834 102.687 11.0231 101.616 10.4814C100.562 9.93951 99.31 9.67417 97.86 9.68537L93.1352 9.72184L93.2367 22.8715Z"
        fill="white"
      />
      <path
        d="M117.871 27.4888C116.579 27.1596 115.432 26.635 114.428 25.915C113.441 25.1992 112.643 24.3508 112.033 23.3698C111.427 22.3727 111.031 21.2916 110.846 20.1266C110.662 18.9616 110.728 17.7573 111.045 16.5137C111.361 15.2701 111.88 14.181 112.599 13.2464C113.319 12.3118 114.181 11.5597 115.186 10.9902C116.195 10.4046 117.305 10.0336 118.514 9.8773C119.723 9.72102 120.982 9.80952 122.29 10.1428C123.582 10.472 124.714 10.9924 125.685 11.7042C126.676 12.4039 127.475 13.2523 128.081 14.2494C128.707 15.2345 129.104 16.3075 129.273 17.4684C129.458 18.6334 129.39 19.8458 129.069 21.1055C128.748 22.3653 128.228 23.4625 127.508 24.3971C126.804 25.3358 125.94 26.0959 124.915 26.6774C123.91 27.247 122.802 27.6098 121.593 27.7661C120.404 27.9104 119.163 27.8179 117.871 27.4888ZM118.421 25.3326C119.357 25.5713 120.263 25.6299 121.136 25.5085C122.026 25.3912 122.836 25.1159 123.565 24.6826C124.315 24.2373 124.952 23.66 125.477 22.9509C126.018 22.2459 126.408 21.4251 126.646 20.4883C126.885 19.5516 126.935 18.6443 126.798 17.7665C126.676 16.8928 126.391 16.0892 125.942 15.3555C125.512 14.6098 124.935 13.9726 124.21 13.4438C123.501 12.9192 122.678 12.5376 121.741 12.2989C120.788 12.0562 119.867 11.9934 118.977 12.1107C118.103 12.2321 117.292 12.5155 116.542 12.9608C115.796 13.39 115.153 13.9571 114.612 14.6621C114.087 15.3712 113.706 16.1941 113.467 17.1309C113.229 18.0676 113.17 18.9728 113.291 19.8465C113.429 20.7243 113.72 21.5381 114.166 22.2879C114.615 23.0216 115.194 23.6507 115.903 24.1754C116.629 24.7041 117.468 25.0899 118.421 25.3326Z"
        fill="white"
      />
      <path
        d="M131.394 31.6727L135.523 13.6888L137.721 15.031L133.89 31.6152L132.78 30.9376L145.956 20.0609L147.919 21.2597L144.152 37.8831L143.085 37.2315L156.154 26.2896L158.181 27.5276L144.067 39.4131L141.827 38.0448L145.28 22.6067L145.856 22.9585L133.677 33.067L131.394 31.6727Z"
        fill="white"
      />
      <path
        d="M150.061 44.2123L163.175 32.6256L164.533 34.1619L161.424 52.3541L160.712 51.5484L171.485 42.0308L173.14 43.9043L160.025 55.491L158.668 53.9547L161.777 35.7626L162.489 36.5682L151.716 46.0859L150.061 44.2123Z"
        fill="white"
      />
      <path
        d="M175.5 73.1839L177.489 72.5958L179.396 79.045L177.406 79.6332L175.5 73.1839Z"
        fill="white"
      />
    </svg>
  );
};
export default HeroL;
