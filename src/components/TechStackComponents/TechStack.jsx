import React, {    useRef } from "react";
import localfont from "next/font/local";

import { useScroll, useTransform, motion, useMotionValueEvent, useMotionTemplate, useInView } from "framer-motion";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function TechStack({loco}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],

  });

  const scale1 = useTransform(scrollYProgress, [0,0.6, 0.7], [1, 4, 50]);
  const scale2 = useTransform(scrollYProgress, [0, 0.7], [1,  4]);
  const scale3 = useTransform(scrollYProgress, [0, 0.7], [1,  3]);
  const scale4 = useTransform(scrollYProgress, [0, 0.7], [1,  4]);
  const scale5 = useTransform(scrollYProgress, [0, 0.7], [1,  5]);
  const scale6 = useTransform(scrollYProgress, [0, 0.7], [1,  6]);
  const scale10 = useTransform(scrollYProgress, [0, 0.7], [1,  10]);
  const scaletext = useTransform(scrollYProgress, [0.7,1], [0,1]);
  const height = useTransform(scrollYProgress,[0.8,1],[50,0])
  
  
  // useLayoutEffect(() => {

  //   let prevScrollY = window.scrollY;
  //   const scrollHandle = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > prevScrollY && opacity.get() === 0) {
  //       loco.scrollTo('#contact', { duration: 2 });
  //       // opacity.set(0.0001)
  //     }else if(currentScrollY < prevScrollY && opacity.get() >0 && opacity.get() < 0.9 ){
  //       loco.scrollTo('#techStack', { duration: 2 });
  //     }
  
  //     prevScrollY = currentScrollY;
  //   };
  
  //   window.addEventListener('scroll', scrollHandle);
  
  //   return () => {
  //     window.removeEventListener('scroll', scrollHandle);
  //   };
  // }, [loco, opacity]);
  
  // useEffect(() => {
    
  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.target.id === "contact") {
  //         entry.isIntersecting&& loco.scrollTo('#contact', { duration: 2 });

  //       entry.isIntersecting&& console.log('contact')

  //       } else if (entry.target.id === "techStack") {
  //         entry.isIntersecting&& loco.scrollTo('#techStack', { duration: 2 });
  //         entry.isIntersecting&& console.log('tech')

  //       }

       
  //     });
  //   };

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.1, // Adjust as needed
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   observer.observe(document.getElementById("services"));
  //   observer.observe(document.getElementById("techStack"));

  //   return () => observer.disconnect();
  // }, []);

  const svgs = [
    {
      key: "nextjs",
      scale: scale4,
      width: "130px",
      top: -200,
      left: 410,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 179 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M131.763 167.441C131.1 167.785 131.155 167.897 131.79 167.58C131.995 167.499 132.168 167.384 132.319 167.247C132.32 167.13 132.32 167.13 131.763 167.441ZM133.1 166.732C132.782 166.99 132.782 166.99 133.16 166.821C133.361 166.706 133.539 166.597 133.539 166.564C133.54 166.414 133.451 166.447 133.1 166.732ZM133.969 166.218C133.651 166.476 133.651 166.476 134.029 166.307C134.235 166.193 134.408 166.072 134.408 166.044C134.41 165.906 134.321 165.933 133.969 166.218ZM134.849 165.71C134.531 165.968 134.531 165.968 134.899 165.793C135.105 165.684 135.277 165.569 135.278 165.536C135.279 165.397 135.19 165.424 134.849 165.71ZM136.037 164.938C135.429 165.338 135.216 165.596 135.773 165.313C136.146 165.089 136.783 164.595 136.672 164.594C136.433 164.681 136.232 164.829 136.031 164.938L136.037 164.938ZM84.3942 0.737818C83.9893 0.762136 82.7742 0.862812 81.7089 0.942569C56.4745 3.01478 32.7697 16.3887 17.6411 37.1703C9.27834 48.5607 3.7996 61.8273 1.65843 75.7872C0.902203 80.6601 0.801375 82.1009 0.74576 88.7152C0.690193 95.3239 0.766966 96.744 1.44115 101.629C5.98996 134.996 29.4619 163.171 61.509 173.809C67.2762 175.704 73.3253 177.03 80.2213 177.87C82.9022 178.181 94.5063 178.278 97.1922 178.013C109.135 176.782 119.233 173.923 129.244 168.923C130.781 168.16 131.071 167.957 130.867 167.783C126.043 161.305 121.307 154.823 116.566 148.285L102.55 129.021L85.0129 102.564C79.1657 93.7104 73.2961 84.8784 67.3318 76.1121C67.2708 76.1116 67.0948 87.8037 66.9417 102.063C66.6707 127.039 66.6621 128.054 66.3413 128.628C66.0194 129.318 65.4934 129.891 64.7977 130.206C64.2466 130.462 63.7527 130.514 61.1303 130.492L58.1309 130.466L57.3532 129.972C56.868 129.652 56.4669 129.21 56.2107 128.693L55.8403 127.908L56.1603 93.14L56.5136 58.3726L57.0684 57.6842C57.4212 57.2602 57.8566 56.9146 58.3467 56.6581C59.0759 56.3149 59.3647 56.2619 62.3641 56.2871C65.8847 56.3167 66.4657 56.4602 67.383 57.4826C74.4783 68.2545 81.5512 79.0539 88.5073 89.8856C99.8868 107.458 115.421 131.436 123.057 143.199L136.943 164.602L137.64 164.148C144.437 159.697 150.63 154.382 155.988 148.306C167.272 135.603 174.657 119.924 177.254 103.146C178.01 98.2731 178.111 96.8268 178.167 90.2181C178.222 83.6038 178.145 82.1893 177.471 77.3043C172.922 43.9374 149.45 15.7618 117.403 5.11839C111.409 3.16618 105.238 1.81686 98.9846 1.09892C97.3062 0.91292 85.8424 0.611379 84.3997 0.748953L84.3942 0.737818ZM120.241 54.6945C121.075 55.1008 121.701 55.8601 121.982 56.7274C122.128 57.1944 122.074 66.836 121.864 88.5526L121.541 119.733L116.128 111.259L110.683 102.78L110.873 80.1432C110.996 65.4676 111.127 57.2405 111.208 56.8364C111.476 55.9127 112.115 55.1419 112.961 54.6611C113.652 54.3175 113.918 54.2921 116.663 54.3151C119.23 54.3367 119.667 54.3681 120.241 54.6945Z"
            fill="#00A8B7"
            
          />
        </svg>
      ),
    },
    {
      key: "react",
      scale: scale10,
      width: "200px",
      top: -100,
      left: -210,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 202 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M100.81 108.075C111.198 108.075 119.619 99.6539 119.619 89.2661C119.619 78.8784 111.198 70.4574 100.81 70.4574C90.4222 70.4574 82.0012 78.8784 82.0012 89.2661C82.0012 99.6539 90.4222 108.075 100.81 108.075Z"
            fill="#00A8B7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M102.192 49.6201C134.261 49.8385 169.249 52.1781 193.266 73.5952C193.972 74.2252 194.652 74.8804 195.316 75.5567C200.982 81.332 203.943 90.6566 199.369 98.3304C189.986 114.086 169.001 120.957 148.684 125.187C118.3 131.512 86.5292 131.563 56.1571 125.993C38.6799 122.784 20.8078 117.16 8.38767 105.395C3.55318 100.817 -0.579867 94.7938 0.0669717 88.0902C1.11703 77.2452 11.5211 70.2854 20.2786 65.5727C44.6022 52.4847 74.2392 49.5571 102.192 49.6201ZM99.865 54.547C69.5223 54.7528 36.6806 56.6892 13.2516 76.0901C12.4325 76.7664 11.6429 77.4762 10.8826 78.2196C10.3912 78.6985 9.91656 79.1983 9.45874 79.7107C5.34669 84.331 3.9312 91.7529 7.81224 97.3014C11.7185 102.884 17.6492 106.912 23.7564 110.196C46.5974 122.478 73.5882 124.658 99.9028 124.75C126.545 124.847 154.019 122.419 177.553 110.251C186.928 105.399 197.479 98.2758 197.105 89.1025C196.761 80.6852 188.553 75.4853 182.408 71.7723C180.745 70.7684 179.036 69.8401 177.301 68.9665C153.939 57.2604 126.562 54.4882 99.865 54.547Z"
            fill="#00A8B7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.291 0.00241457C155.023 0.300632 161.101 14.4051 161.903 24.8217C162.062 26.8924 162.121 28.9716 162.096 31.0507C162.071 33.302 161.949 35.5533 161.752 37.7963C159.278 65.5683 146.597 92.0173 131.665 116.442C117.061 140.333 99.2518 164.157 75.0248 175.229C67.0149 178.891 57.4887 181.151 50.3987 177.064C40.6793 171.465 39.6167 158.369 39.7973 148.435C39.8435 145.995 40.0031 143.554 40.2551 141.122C43.9891 105.168 62.214 71.1085 85.0214 41.7655C98.3278 24.6453 114.159 7.66367 133.879 1.5145C136.983 0.544246 139.448 -0.0437882 143.291 0.00241457ZM142.729 4.92511C128.956 5.14352 116.59 15.3501 105.64 25.9558C76.8519 53.8328 55.6364 90.9085 47.1015 129.79C46.4421 132.802 45.8876 135.834 45.4802 138.888C45.1652 141.253 44.9342 143.63 44.8124 146.016C44.7158 147.914 44.6822 149.817 44.741 151.72C44.783 153.207 44.8796 154.693 45.0434 156.172C45.1652 157.302 45.329 158.428 45.5348 159.545C45.6902 160.372 45.8708 161.195 46.0809 162.015C46.2531 162.678 46.4463 163.338 46.6647 163.993C48.3826 169.172 52.8097 174.12 58.753 174.283C72.618 174.661 85.6724 164.551 96.9585 153.564C116.771 134.28 131.535 110.049 143.069 84.5787C152.377 64.0143 160.891 41.6605 156.136 19.0254C155.955 18.1685 155.745 17.3201 155.506 16.48C155.308 15.7954 155.086 15.1191 154.842 14.4513C152.994 9.41518 148.647 4.91251 142.729 4.92511Z"
            fill="#00A8B7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M59.2612 0.187385C74.2309 0.477202 87.6759 10.6376 99.613 22.0161C121.395 42.7779 137.461 69.1891 149.651 96.9864C159.093 118.521 167.779 142.694 160.059 165.417C157.627 172.578 151.474 179.131 143.27 179.299C128.229 179.601 114.289 168.664 102.192 156.89C71.8451 127.346 49.315 88.3423 41.5949 46.9782C41.0405 44.0212 40.5994 41.039 40.297 38.0443C40.0492 35.5997 39.8938 33.1426 39.8518 30.6854C39.8182 28.7029 39.8602 26.7204 39.9988 24.7463C40.0912 23.4274 40.2256 22.1169 40.4062 20.8106C40.5784 19.5841 40.7969 18.3619 41.0699 17.1522C41.2505 16.35 41.4521 15.5561 41.6831 14.7665C43.947 7.0254 49.8358 0.128581 59.2612 0.187385ZM58.6941 5.11428C49.9282 5.30749 45.917 15.6443 45.1105 22.8981C44.9467 24.385 44.8459 25.8845 44.7997 27.384C44.7409 29.2993 44.7661 31.2188 44.8627 33.1342C46.2404 60.8516 58.6311 87.6492 73.584 112.187C87.6633 135.288 104.666 158.297 128.053 170.125C134.807 173.54 143.014 176.224 148.848 172.998C156.165 168.949 157.064 159.301 157.455 152.111C157.56 150.153 157.572 148.187 157.509 146.226C157.434 143.765 157.24 141.307 156.951 138.863C154.254 116.026 144.14 94.4158 132.522 73.9942C118.065 48.5911 100.352 23.272 75.2851 10.0454C70.0936 7.30681 64.4737 5.06808 58.6941 5.11428Z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
    {
      key: "tailwind",
      scale: scale4,
      width: "150px",
      top: 220,
      left: 400,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 132 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M37.125 56.5124C40.975 41.1124 50.6 33.4124 66 33.4124C89.1 33.4124 91.9875 50.7374 103.538 53.6249C111.238 55.5499 117.975 52.6624 123.75 44.9624C119.9 60.3624 110.275 68.0624 94.875 68.0624C71.775 68.0624 68.8875 50.7374 57.3375 47.8499C49.6375 45.9249 42.9 48.8124 37.125 56.5124ZM8.25 91.1624C12.1 75.7624 21.725 68.0624 37.125 68.0624C60.225 68.0624 63.1125 85.3874 74.6625 88.2749C82.3625 90.1999 89.1 87.3123 94.875 79.6123C91.025 95.0123 81.4 102.712 66 102.712C42.9 102.712 40.0125 85.3874 28.4625 82.4999C20.7625 80.5749 14.025 83.4624 8.25 91.1624Z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
    {
      key: "html",
      scale: scale5,
      width: "70px",
      top: -200,
      left: 0,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0736 0.101562H26.752V4.72388H31.0316V0.101562H35.7104V14.0987H31.032V9.41139H26.7524V14.0987H22.074V0.101562H22.0736ZM41.8624 4.74338H37.7441V0.101562H50.6616V4.74338H46.5412V14.0987H41.8628V4.74338H41.8624ZM52.7115 0.101562H57.5906L60.591 5.01983L63.5889 0.101562H68.4686V14.0987H63.8093V7.16117L60.5908 12.1377H60.5105L57.2898 7.16117V14.0987H52.7115V0.101562ZM70.7974 0.101562H75.477V9.47233H82.0564V14.0987H70.7974V0.101562ZM15.2319 20.5004L21.9241 95.5618L51.9549 103.898L82.069 95.5498L88.7683 20.5002L15.2319 20.5004ZM74.8089 38.3132L74.3899 42.9804L74.2058 45.0499H74.1756H52.0002H51.9681H38.977L39.8184 54.4763H51.9681H52.0002H70.8868H73.3677L73.1431 56.9487L70.9798 81.1856L70.8413 82.7399L52.0002 87.9621V87.9637L51.958 87.9757L33.1 82.7403L31.81 68.2857H36.0695H41.0516L41.707 75.6279L51.9596 78.3969L51.9681 78.3943V78.3934L62.2363 75.6228L63.3041 63.6829H52.0002H51.9681H31.3989L29.1362 38.3132L28.9159 35.8438H51.9681H52.0002H75.0293L74.8089 38.3132Z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
    {
      key: "css",
      scale: scale6,
      width: "100px",
      top: 250,
      left: 100,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 54 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M53.6146 0.0585938L48.6236 54.1188L26.9997 59.9412L5.37546 54.1188L0.385498 0.0585938H53.6146ZM43.5575 11.0509H26.9803H10.1094L10.9162 17.5792H26.9803H27.8826L26.9803 17.9548L11.5033 24.4008L12.0166 30.782L26.9803 30.8305L35.0003 30.8559L34.4869 39.3645L26.9801 41.4779V41.4713L26.9186 41.4884L19.6689 39.6582L19.229 34.3766H19.205H12.4805H12.4569L13.3371 44.5727L26.9804 48.6074V48.6001L27.005 48.6074L40.5752 44.6462L42.3355 24.4008H26.9804H26.9425L26.9804 24.3844L42.898 17.5792L43.5575 11.0509Z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
    {
      key: "nodejs",
      scale: scale3,
      width: "190px",
      top: 260,
      left: -350,
      code: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 149 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5388 50.5343L20.6487 46.0163C20.1527 45.724 19.8447 45.1966 19.8447 44.6241V35.0108C19.8447 34.4384 19.5403 33.9073 19.0433 33.6226L15.6846 31.6875C15.4412 31.5419 15.1594 31.4704 14.8868 31.4704C14.6066 31.4704 14.3327 31.5419 14.0828 31.6875L10.7217 33.6226C10.2245 33.9076 9.92135 34.4387 9.92135 35.0108V44.6241C9.92135 45.1966 9.61693 45.7204 9.11898 46.0163L1.22619 50.5343C0.981145 50.6845 0.676731 50.6845 0.429395 50.5343C0.178122 50.3962 0.0291951 50.1295 0.0291951 49.8431L0 29.2647C0 28.6877 0.307695 28.1576 0.802696 27.8715L14.0824 20.229C14.3104 20.0968 14.5614 20.0289 14.8146 20.0181C14.8343 20.0181 14.9301 20.0181 14.953 20.0181C15.2076 20.0289 15.4585 20.0968 15.6842 20.229L28.963 27.8718C29.4616 28.1582 29.7644 28.688 29.7644 29.265L29.7388 49.8435C29.7388 50.1298 29.5849 50.3965 29.3399 50.5346C29.0955 50.6849 28.7862 50.6849 28.5388 50.5343ZM79.6227 45.0184V29.6819C79.6227 29.1085 79.9284 28.5797 80.4241 28.2937L93.7104 20.6266C94.2051 20.3402 94.8162 20.3392 95.3135 20.6253L98.6384 22.5423C98.813 22.643 99.0278 22.643 99.201 22.5423C99.3732 22.4416 99.4812 22.2562 99.4812 22.0561V1.67646C99.4812 1.39139 99.6317 1.12962 99.8764 0.984306C100.123 0.840956 100.426 0.838659 100.675 0.977089L108.579 5.38847C109.089 5.67091 109.403 6.20823 109.403 6.78917V45.0184C109.403 45.5922 109.097 46.1206 108.6 46.408L95.3142 54.08C94.8182 54.3687 94.2057 54.3687 93.7084 54.08L80.4248 46.408C79.9284 46.1206 79.6227 45.5918 79.6227 45.0184ZM89.5175 39.9802C89.5175 40.1232 89.5936 40.2554 89.7173 40.3269L94.2789 42.9558C94.4026 43.026 94.5554 43.026 94.6791 42.9558L99.2407 40.3269C99.3644 40.2554 99.4405 40.1232 99.4405 39.9802V34.7126C99.4405 34.5696 99.3644 34.4361 99.2407 34.3659L94.6804 31.7308C94.5554 31.6593 94.4026 31.6593 94.2776 31.7308L89.716 34.3659C89.5936 34.4361 89.5175 34.5696 89.5175 34.7126V39.9802ZM148.201 28.0851L135.002 20.4206C134.506 20.1319 133.892 20.1309 133.395 20.4193L120.114 28.0851C119.618 28.3714 119.313 28.9012 119.313 29.4746V44.8062C119.313 45.3832 119.623 45.9143 120.123 46.2007L133.321 53.7195C133.807 53.9987 134.405 53.9996 134.893 53.7293L142.875 49.2927C143.128 49.1507 143.286 48.8853 143.287 48.5966C143.29 48.3079 143.136 48.0399 142.884 47.8956L129.521 40.2249C129.272 40.0819 129.118 39.8162 129.118 39.5288V34.7248C129.118 34.4384 129.271 34.173 129.52 34.0287L133.679 31.6301C133.926 31.4881 134.232 31.4881 134.479 31.6301L138.641 34.0287C138.889 34.173 139.042 34.4387 139.042 34.7248V38.5053C139.042 38.7917 139.196 39.0571 139.445 39.2001C139.693 39.3422 139.999 39.3422 140.247 39.1988L148.201 34.5752C148.697 34.2878 149 33.7594 149 33.1869V29.4723C149 28.8999 148.697 28.3711 148.201 28.0851ZM40.6413 46.1242L53.92 53.7959C54.4173 54.0823 55.0281 54.0823 55.5254 53.7959L68.8091 46.1242C69.3051 45.8369 69.6105 45.3081 69.6105 44.7347V29.3923C69.6105 28.8198 69.3048 28.2888 68.8078 28.0027L55.5254 20.3382C55.0281 20.0509 54.4173 20.0509 53.921 20.3382L40.6413 28.0027C40.144 28.2891 39.8386 28.8202 39.8386 29.3923V44.7347C39.8386 45.3084 40.1443 45.8369 40.6413 46.1242ZM119.75 81.5131L78.8007 57.8488C76.2312 56.3841 72.7852 56.3841 70.1941 57.8488L29.2431 81.5131C26.59 83.041 24.9482 85.9074 24.9482 88.9774V136.238C24.9482 139.306 26.59 142.176 29.2431 143.706L39.9803 149.892C45.1832 152.453 47.0484 152.453 49.4142 152.453C57.1154 152.453 61.5409 147.794 61.5409 139.67V93.0106C61.5409 92.3506 61.0026 91.8307 60.3541 91.8307H55.1607C54.501 91.8307 53.9712 92.3506 53.9712 93.0106V139.67C53.9712 143.271 50.2438 146.855 44.1578 143.816L32.9394 137.331C32.5441 137.116 32.2929 136.692 32.2929 136.238V88.9774C32.2929 88.529 32.5441 88.0826 32.9417 87.8546L73.8684 64.2313C74.2476 64.0105 74.7521 64.0105 75.1293 64.2313L116.065 87.8484C116.456 88.0826 116.7 88.5139 116.7 88.9771V136.238C116.7 136.691 116.456 137.125 116.074 137.344L75.1224 160.982C74.7721 161.195 74.2348 161.195 73.8539 160.982L63.3497 154.744C63.0371 154.565 62.6369 154.497 62.3334 154.669C59.4257 156.319 58.8753 156.536 56.1517 157.482C55.4775 157.717 54.482 158.121 56.5217 159.26L70.1947 167.35C71.5042 168.109 72.9945 168.499 74.4897 168.499C76.0065 168.499 77.4918 168.109 78.8017 167.35L119.751 143.706C122.403 142.163 124.053 139.306 124.053 136.238V88.9774C124.052 85.9074 122.402 83.0469 119.75 81.5131ZM88.7522 131.73C76.532 131.73 73.8438 128.66 72.943 122.582C72.8387 121.934 72.283 121.45 71.6164 121.45H65.6456C64.9059 121.45 64.3121 122.042 64.3121 122.785C64.3121 130.561 68.5451 139.837 88.7525 139.837C103.384 139.837 111.775 134.077 111.775 124.016C111.775 114.038 105.032 111.385 90.8431 109.506C76.5018 107.608 75.0447 106.63 75.0447 103.271C75.0447 100.504 76.2791 96.8033 86.9011 96.8033C96.3872 96.8033 99.884 98.8473 101.322 105.239C101.448 105.842 101.997 106.281 102.617 106.281H108.611C108.983 106.281 109.336 106.121 109.588 105.856C109.841 105.576 109.976 105.211 109.94 104.828C109.013 93.813 101.693 88.6802 86.9008 88.6802C73.7335 88.6802 65.8811 94.2371 65.8811 103.551C65.8811 113.659 73.6945 116.454 86.3284 117.7C101.448 119.185 102.622 121.393 102.622 124.368C102.622 129.53 98.4807 131.73 88.7522 131.73ZM134.309 33.8568C134.215 33.801 134.097 33.801 134.003 33.8568L131.455 35.3277C131.359 35.3825 131.301 35.4842 131.301 35.5934V38.5388C131.301 38.648 131.359 38.7501 131.455 38.8045L134.003 40.2754C134.097 40.3302 134.215 40.3302 134.309 40.2754L136.859 38.8045C136.955 38.7501 137.013 38.648 137.013 38.5388V35.5934C137.013 35.4842 136.955 35.3825 136.859 35.3277L134.309 33.8568Z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
    {
      key: "figma",
      scale: scale5,
      width: "190px",
      top: 60,
      left: 350,
      code: (
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 35 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M17.4985 2.56592H9.99854C5.85641 2.56592 2.49854 5.92379 2.49854 10.0659C2.49854 14.208 5.85641 17.5659 9.99854 17.5659M17.4985 2.56592V17.5659M17.4985 2.56592H24.9985C29.1408 2.56592 32.4985 5.92379 32.4985 10.0659C32.4985 14.208 29.1408 17.5659 24.9985 17.5659M9.99854 17.5659H17.4985M9.99854 17.5659C5.85641 17.5659 2.49854 20.9237 2.49854 25.0659C2.49854 29.2082 5.85641 32.5659 9.99854 32.5659M17.4985 17.5659H24.9985M17.4985 17.5659V32.5659M24.9985 17.5659C29.1408 17.5659 32.4985 20.9237 32.4985 25.0659C32.4985 29.2082 29.1408 32.5659 24.9985 32.5659C20.8563 32.5659 17.4985 29.2082 17.4985 25.0659C17.4985 20.9237 20.8563 17.5659 24.9985 17.5659ZM17.4985 32.5659H9.99854M17.4985 32.5659V40.0659C17.4985 44.2082 14.1408 47.5659 9.99854 47.5659C5.85641 47.5659 2.49854 44.2082 2.49854 40.0659C2.49854 35.9237 5.85641 32.5659 9.99854 32.5659"
            stroke="#00A8B7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            

          />
        </svg>
      ),
    },
    {
      key: "framer",
      scale: scale2,
      width: "100px",
      top: -200,
      left: -400,
      code: (
        <svg
          height="100"
          viewBox="3.7 3.7 43.6 43.6"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
            fill="#00A8B7"
          />
          <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#00A8B7" />
          <path
            d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
            fill="#00A8B7"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
    <div ref={container}  className={` h-[300vh]  relative my-40  `}>
      <div id='techStack' className={`sticky top-0 h-screen overflow-hidden `}>
        {svgs.map((item, index) => {
          return (
            <motion.div
            key={index}
            
              style={{ scale: item.scale}}
              className="   w-full h-full  absolute top-0 flex items-center justify-center"
            >
              <div
                key={index}
                id={item.key}
                style={{ top: item.top, left: item.left, width: item.width }}
                className={` relative `}
              >
                {item.code}
              </div>
            </motion.div>
          );
        })}
        
        <motion.div
          style={{ scale: scale1}}
          className={`scl w-full h-full absolute top-0 flex  items-center justify-center `}
        >
          <div className=" w-[550px] relative">
            <h2
              id="txt"
              style={medium.style}
              className={`text-8xl  text-center  text-mblack uppercase pointer-events-none z-50 `}
            >
              Tech Stack
            </h2>
          </div>
        </motion.div>
        <motion.div  className="text-9xl text-mwhite top-1/2 left-0 h-full w-full flex justify-center items-center capitalize " style={{scale:scaletext,opacity:scaletext }}><p  >Seen enough?</p></motion.div>
      </div>
    </div>
      <motion.div style={{height:height}} className="relative mt-0  ">
        <div className="shadow-[0_68px_58px_rgba(0,0,0,0.7)] absolute h-[750%] w-[120%] -left-[10%] bg-mblack rounded-b-[50%] "></div>
      </motion.div>
      </>
  );
}

export default TechStack;
