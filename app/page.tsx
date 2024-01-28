import Dates from "./component/Dates"
import Notify from "./component/Notify"
import About from "./component/About"

export default function page() {
    return (
        <>
            <div className=" h-[100vh] text-black bg-slate-200 ">

                <div className=" h-[70vh] grid  justify-center text-center items-center">
                    <div className="m-10 z-40">
                    <div>
                        <h2 className=" text-xl mt-3 ">Code Wave Tech</h2>
                    </div>
                    <div className="  grid gap-4 align-middle justify-center text-center  mt-16" >
                        <h1 className="text-4xl font-bold "> We are coming soon</h1>
                        <p className="text-sm max-w-[355px] sm:max-w-auto text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit  sed eiu sit amet consectetur adipisicing</p>
                    </div>
                    <div>
                        <Dates />
                    </div>
                    <div className=" mt-10 font-bold grid gap-4 justify-center grid-flow-col" >
                        <Notify/>
                        <About/>
                    </div>

                    </div>

                    <div className="absolute opacity-90 w-screen overflow-hidden justify-end align-baseline items-end">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="1080" preserveAspectRatio="none" viewBox="0 0 1440 1080">
                            <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
                                <path d="M1488 1080L0 1080 L0 828.87Q17.63 726.5, 120 744.14Q163.08 667.22, 240 710.3Q330.17 680.47, 360 770.64Q442.97 733.61, 480 816.57Q506.19 770.76, 552 796.94Q577.41 750.36, 624 775.77Q642.85 722.62, 696 741.46Q779.38 704.84, 816 788.22Q888.83 741.05, 936 813.88Q970.49 728.37, 1056 762.86Q1109.59 696.44, 1176 750.03Q1276.44 730.47, 1296 830.91Q1304.55 767.46, 1368 776.02Q1417.42 705.44, 1488 754.87z" fill="rgba(226, 62, 87, 1)"></path>
                                <path d="M1464 1080L0 1080 L0 854.1Q61.37 795.48, 120 856.85Q177.75 842.6, 192 900.35Q221.24 857.59, 264 886.82Q288.42 791.24, 384 815.66Q437.18 748.84, 504 802.02Q555.55 781.57, 576 833.11Q669.63 806.74, 696 900.37Q725.88 858.25, 768 888.12Q821.34 869.46, 840 922.8Q853.63 864.43, 912 878.06Q910.84 804.9, 984 803.74Q1077.75 825.5, 1056 919.25Q1044.22 835.47, 1128 823.69Q1180.6 756.29, 1248 808.89Q1317.3 806.19, 1320 875.5Q1379.5 863, 1392 922.5Q1413.5 872, 1464 893.5z" fill="rgba(136, 48, 78, 1)"></path>
                                <path d="M1512 1080L0 1080 L0 916.76Q71.56 868.32, 120 939.88Q133.42 881.3, 192 894.71Q262.66 845.37, 312 916.03Q419.27 903.3, 432 1010.57Q464.51 923.09, 552 955.6Q572.13 903.73, 624 923.85Q646.32 874.17, 696 896.49Q739.6 868.09, 768 911.68Q853.24 876.92, 888 962.16Q934.53 888.69, 1008 935.23Q1052.84 860.07, 1128 904.9Q1169.3 874.19, 1200 915.49Q1305.36 900.85, 1320 1006.21Q1326.52 940.73, 1392 947.24Q1460.82 896.06, 1512 964.87z" fill="rgba(82, 37, 70, 1)"></path>
                                <path d="M1464 1080L0 1080 L0 1068.08Q6.69 1002.77, 72 1009.46Q96.08 961.54, 144 985.61Q222.87 944.48, 264 1023.35Q311.47 998.82, 336 1046.28Q372.96 963.24, 456 1000.2Q486.96 959.16, 528 990.12Q586.55 976.67, 600 1035.23Q661.7 1024.93, 672 1086.63Q700.16 994.79, 792 1022.95Q836.29 995.24, 864 1039.52Q910.53 966.05, 984 1012.58Q1068.77 977.35, 1104 1062.12Q1134.11 972.23, 1224 1002.34Q1297.72 956.06, 1344 1029.78Q1428.46 994.24, 1464 1078.69z" fill="rgba(49, 29, 63, 1)"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}
