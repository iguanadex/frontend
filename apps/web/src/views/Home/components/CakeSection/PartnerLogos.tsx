import { Svg, SvgProps } from '@iguanadex/uikit'
import { PANCAKE_ASSET_CDN } from 'config/constants/endpoints'
import Image from 'next/image'
import React from 'react'

export const PartnerVenus: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.63063 9.59697C3.61881 9.57203 3.6524 9.54709 3.67346 9.56563C4.56443 10.3338 5.31802 10.0735 5.96381 8.94651L9.26878 3.34428C9.92857 2.19237 9.95463 0.952834 8.84414 0.583787C8.81535 0.574193 8.82157 0.51535 8.85187 0.514711L11.2897 0.5C12.827 0.5 13.7877 2.17702 13.0191 3.51889L8.08924 11.7946C7.32063 13.1365 5.39908 13.1365 4.63047 11.7946L3.63063 9.59697ZM7.02353 15.5196C7.00818 15.487 7.05189 15.455 7.07929 15.4787C8.23896 16.479 9.87467 16.2737 10.7152 14.8058L16.6776 4.39706C17.5363 2.89785 17.2018 1.11721 15.7564 0.636874C15.7189 0.624721 15.727 0.54797 15.7665 0.54733L18.3969 0.506396C20.3978 0.506396 21.6483 2.68934 20.6479 4.43607L12.7696 18.1899C11.7691 19.9367 9.26807 19.9367 8.26764 18.1899L7.02353 15.5196ZM2.27428 5.09102C3.53033 5.09102 4.54857 4.06447 4.54857 2.79871C4.54857 1.53295 3.53033 0.506396 2.27428 0.506396C1.01824 0.506396 0 1.53295 0 2.79871C0 4.06447 1.01824 5.09102 2.27428 5.09102Z"
      fill="url(#paint0_linear_1406_14330)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1406_14330"
        x1="0"
        y1="0.5"
        x2="20.9689"
        y2="19.5343"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#47E0B7" />
        <stop offset="1" stopColor="#0032FF" />
      </linearGradient>
    </defs>
  </Svg>
)

export const PartnerApolloX: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1538 4.82785C16.7506 8.01089 14.4554 10.7317 11.5385 12.6697C8.62166 14.6076 5.20466 15.6822 1.69001 15.7667C0.962615 14.6992 0.455275 13.5007 0.196955 12.2397C-0.0613655 10.9786 -0.0656257 9.67967 0.184434 8.417C0.434494 7.1543 0.933975 5.95264 1.65435 4.88056C2.37474 3.8085 3.3019 2.88704 4.38292 2.16879C5.46396 1.45054 6.67766 0.949554 7.95476 0.694488C9.23186 0.439403 10.5473 0.435203 11.8261 0.682106C13.1048 0.929028 14.3218 1.42224 15.4074 2.13357C16.4932 2.8449 17.4264 3.76043 18.1538 4.82785ZM18.8 4.76687V3.55213C18.8002 3.53953 18.8034 3.52717 18.8098 3.51636C18.816 3.50554 18.8252 3.49666 18.8358 3.49063L19.8968 2.87558C19.9074 2.86935 19.9192 2.86608 19.9314 2.8661C19.9434 2.86612 19.9552 2.86939 19.9658 2.87564C19.9762 2.88187 19.9848 2.89084 19.9908 2.90163C19.9968 2.91241 20 2.92464 20 2.93708V4.15182C19.9998 4.16424 19.9966 4.17643 19.9906 4.18721C19.9846 4.19798 19.976 4.20697 19.9656 4.21332L18.9032 4.82837C18.8926 4.8346 18.8808 4.83787 18.8686 4.83785C18.8566 4.83783 18.8448 4.83456 18.8342 4.82831C18.8238 4.82208 18.8152 4.81311 18.8092 4.80232C18.8032 4.79153 18.8 4.77931 18.8 4.76687ZM17.9466 15.9254C19.1518 14.2616 19.8 12.2673 19.8 10.2216C19.8004 8.71404 19.4466 7.22692 18.7664 5.87728C15.667 9.83204 13.7024 14.5375 13.0788 19.5C15.0393 18.8391 16.7414 17.5892 17.9466 15.9254Z"
      fill="url(#paint0_linear_1406_14354)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1406_14354"
        x1="-7.98601"
        y1="6.2499"
        x2="19.8319"
        y2="19.7712"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C040FC" />
        <stop offset="1" stopColor="#4B3CFF" />
      </linearGradient>
    </defs>
  </Svg>
)

export const PartnerLedger: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 21 20" {...props}>
    <path d="M13.0184 18.3036V19.4997H21V14.105H19.8371V18.3036H13.0184ZM13.0184 0.5V1.69617H19.8371V5.89499H21V0.5H13.0184ZM9.15624 5.89499H7.99329V14.1047H13.2384V13.0258H9.15624V5.89499ZM0 14.105V19.5H7.9817V18.3036H1.16295V14.105H0ZM0 0.5V5.89499H1.16295V1.69617H7.9817V0.5H0Z" />
  </Svg>
)

export const PartnerAlpaca: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 20 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.527588 22.5316C0.653061 22.2199 0.814514 21.8815 0.978088 21.5387C1.36286 20.7323 1.75936 19.9014 1.72679 19.3351C1.72012 19.1602 1.72679 18.9854 1.75321 18.8107C1.86585 18.0802 1.83275 17.3497 1.77314 16.6255C1.74663 16.3258 1.77314 16.0325 1.82608 15.7328C1.93872 15.0898 2.00491 14.4529 1.92546 13.7974C1.85259 13.1793 1.93205 12.5612 2.06452 11.9557C2.17707 11.4437 2.1639 10.9318 2.07778 10.4198C2.05794 10.3075 2.03801 10.1888 2.05794 10.0827C2.13072 9.7019 2.17049 9.31481 2.18374 8.88398C2.57451 9.20868 2.99169 9.2274 3.43548 9.1337C3.79973 9.0588 4.01824 8.8341 4.16398 8.52812C4.17047 8.51413 4.17645 8.49964 4.18242 8.48518C4.21902 8.39647 4.25524 8.30867 4.409 8.34088C4.49513 8.3596 4.59442 8.34709 4.60768 8.23474C4.62093 8.12861 4.53481 8.09737 4.4421 8.07865C4.27673 8.04295 4.11075 8.00669 3.94453 7.97038C3.55828 7.886 3.17073 7.80134 2.78644 7.72279C2.75577 7.71637 2.72491 7.70976 2.69393 7.70313C2.54421 7.67107 2.39152 7.63838 2.24336 7.62287C2.08436 7.60415 2.05127 7.53546 2.06452 7.39809C2.14398 6.76136 2.26987 6.13698 2.54141 5.54392C2.80628 4.9695 3.14401 4.4264 3.62748 3.98313C3.63004 3.98072 3.63262 3.9783 3.63522 3.97586C3.69314 3.92154 3.75825 3.86047 3.72019 3.77086C3.68051 3.67716 3.60106 3.65222 3.50826 3.68345C3.40897 3.71469 3.3692 3.66473 3.32284 3.60226C3.29756 3.56482 3.27179 3.52738 3.24592 3.48981C3.17693 3.38959 3.10729 3.28844 3.04472 3.18398C2.76875 2.75825 2.43923 2.37172 2.10695 1.98195C2.08839 1.96019 2.06983 1.93841 2.05127 1.91662C1.9784 1.82922 1.88569 1.7543 1.7864 1.68563C1.48835 1.48584 1.22339 1.59822 1.19029 1.94784C1.16387 2.1726 1.18371 2.40359 1.26983 2.61586C1.3497 2.80652 1.42477 2.99923 1.49986 3.19199C1.71739 3.75038 1.93507 4.30917 2.26987 4.8197C2.35101 4.94573 2.29107 5.02306 2.22895 5.10319C2.20491 5.13421 2.18054 5.16565 2.1639 5.20049C2.0519 5.12602 1.99233 5.02066 1.93962 4.92743L1.93872 4.92584C1.32277 3.90194 0.806203 2.84062 0.587602 1.66689C0.528079 1.36098 0.528078 1.04882 0.541247 0.742907C0.561176 0.405769 0.72008 0.318367 1.06449 0.39953C1.31619 0.46196 1.50819 0.6118 1.69369 0.774118C2.16949 1.18963 2.59232 1.64442 3.01651 2.10069C3.1532 2.24771 3.29002 2.39488 3.42881 2.54094C3.58113 2.70326 3.73345 2.86559 3.87918 3.0279C3.97189 3.1278 4.05801 3.22145 4.07127 3.37126C4.08444 3.53987 4.21033 3.58983 4.37591 3.52736C4.41559 3.51485 4.45536 3.49612 4.49513 3.47118C4.77325 3.29015 5.08456 3.22769 5.41563 3.17774C6.32295 3.02167 7.21703 3.0841 8.1111 3.25891C8.24039 3.28794 8.35247 3.34929 8.46862 3.41287C8.47748 3.41772 8.48636 3.42258 8.49527 3.42744C8.76682 3.58353 8.86611 3.54608 8.94565 3.25891C8.96549 3.17774 9.01843 3.10907 9.07804 3.04664C9.29448 2.81872 9.50632 2.58701 9.71813 2.35534C10.2258 1.80011 10.7332 1.24509 11.3033 0.742907C11.4821 0.586828 11.661 0.436988 11.8994 0.368312C12.2901 0.249691 12.4557 0.362073 12.4822 0.742907C12.5285 1.46711 12.3431 2.15386 12.0981 2.82813C11.853 3.50242 11.5152 4.13923 11.1576 4.76353C11.1136 4.83967 11.0634 4.91003 11.0105 4.98421C10.968 5.04386 10.9237 5.10598 10.8794 5.17556C10.7103 4.93796 10.6293 4.82594 10.6253 4.71122C10.6215 4.60587 10.6827 4.49825 10.8 4.28903C10.8289 4.23814 10.8578 4.18736 10.8867 4.13664C11.1627 3.65222 11.436 3.17266 11.6279 2.64707C11.7139 2.40359 11.7868 2.15386 11.7802 1.89165C11.7735 1.72932 11.7404 1.58573 11.5683 1.50458C11.4027 1.42965 11.2702 1.49833 11.151 1.59198C11.0053 1.7106 10.853 1.83546 10.7205 1.97281C10.6398 2.05553 10.5576 2.13727 10.4754 2.21904C10.0923 2.60013 9.7087 2.98175 9.4688 3.46497C9.45041 3.504 9.41363 3.53549 9.37679 3.56705C9.30757 3.62633 9.23811 3.68582 9.28997 3.7958C9.32289 3.86561 9.38387 3.91852 9.44439 3.97103C9.48134 4.0031 9.51813 4.03502 9.54825 4.07054C10.0185 4.60743 10.396 5.19428 10.6278 5.85603C10.7735 6.27435 10.8729 6.7114 10.9325 7.14837C10.959 7.37315 10.959 7.37315 10.7139 7.43562C10.4144 7.51006 10.1166 7.58451 9.81879 7.65896C9.51723 7.73435 9.21568 7.80974 8.91246 7.8851C8.89912 7.88825 8.88577 7.89101 8.87242 7.89376C8.8328 7.90193 8.79316 7.91011 8.75356 7.92876C8.62775 7.98502 8.6145 8.09116 8.73372 8.15976L8.73532 8.16064C8.81379 8.20385 8.8597 8.22912 8.88604 8.32837C8.98533 8.72797 9.25687 8.9839 9.6874 9.04007C10.1178 9.10254 10.5219 9.03386 10.7735 8.64677C10.7867 8.62183 10.7934 8.60932 10.8398 8.63426C10.8265 9.09625 10.8662 9.56453 10.959 10.0265C10.9788 10.1139 10.9656 10.2138 10.9523 10.3012C10.8265 10.888 10.853 11.4687 10.9788 12.0493C11.1113 12.6923 11.151 13.3354 11.0715 13.9847C11.0119 14.4592 11.0583 14.9337 11.151 15.3957C11.2569 15.92 11.2835 16.4383 11.2238 16.9627C11.1642 17.4996 11.1841 18.0303 11.2437 18.5672C11.2625 18.7264 11.6196 19.1238 11.9892 19.5351C12.4021 19.9945 12.8305 20.4712 12.82 20.6524C12.9318 20.8351 13.0557 21.0802 13.1865 21.3389C13.2939 21.5513 13.406 21.773 13.5198 21.9768C11.5046 23.2578 9.1109 24.0001 6.54311 24.0001C4.37236 24.0001 2.326 23.4696 0.527588 22.5316Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1396 17.6844C19.3211 15.7477 20 13.4834 20 11.064C20 10.9236 19.9977 10.7838 19.9932 10.6445C19.7769 10.7193 19.5605 10.794 19.3441 10.8686L19.3431 10.8689C17.4159 11.537 15.5482 12.3299 13.7402 13.2413C13.0713 13.5785 12.462 13.9968 11.8925 14.4588C11.8554 14.4887 11.8184 14.5206 11.7813 14.5526C11.7257 14.6005 11.67 14.6485 11.6143 14.6898C11.611 14.6867 11.6077 14.6851 11.6044 14.6836C11.6011 14.682 11.5978 14.6804 11.5944 14.6773C11.5679 14.7522 11.5083 14.8208 11.4288 14.8521C11.3957 14.9769 11.2964 15.0831 11.1176 15.0831H11.0779C11.0646 15.8198 11.0911 16.5565 11.1772 17.2932C11.2103 17.5616 11.1375 17.7427 10.9388 17.9425C9.95859 18.9289 8.85259 19.7592 7.72008 20.5709C7.70792 20.58 7.69399 20.5883 7.6799 20.5967C7.65562 20.6112 7.63089 20.626 7.61411 20.6457C7.50815 20.7956 7.38893 20.7831 7.23002 20.7082C6.93864 20.5709 6.64717 20.6457 6.38889 20.7893C6.24324 20.8705 6.13728 20.8642 6.0048 20.8018C5.3425 20.4834 4.68687 20.165 4.07759 19.753C4.05114 19.7353 4.02468 19.7176 3.99823 19.6999C3.2035 19.1685 2.41184 18.6391 1.71318 17.9987C1.62715 17.9237 1.56754 17.8426 1.53444 17.7614C1.52796 17.7583 1.51989 17.7553 1.51179 17.7523C1.50332 17.7491 1.49482 17.7459 1.48808 17.7427C1.48141 17.7427 1.48141 17.7427 1.47483 17.7365L1.47483 17.7364C1.40216 17.7084 1.42501 17.6463 1.44648 17.5879C1.46807 17.5292 1.48825 17.4742 1.40854 17.4617C1.392 17.468 1.37709 17.4726 1.36219 17.4773C1.34729 17.482 1.33239 17.4867 1.31584 17.4929C1.30278 17.5053 1.26175 17.5183 1.20526 17.5362C1.09006 17.5727 0.910538 17.6296 0.772755 17.7427C0.759499 17.7552 0.739658 17.7677 0.719817 17.7801C0.110542 18.2359 -0.0418646 18.8914 0.315799 19.5407C0.381994 19.6593 0.362153 19.7405 0.309214 19.8466C0.0310021 20.3835 0.0575153 20.9018 0.461533 21.3762C0.475486 21.3935 0.489323 21.4108 0.503165 21.4282C0.594451 21.5428 0.68598 21.6578 0.812525 21.7445L1.14368 21.963C1.33568 22.063 1.61389 22.1629 1.75954 22.2003C2.37548 22.3564 2.99802 22.4563 3.6338 22.4813C3.85365 22.4906 4.07719 22.4681 4.29881 22.4458C4.37101 22.4385 4.44302 22.4312 4.51462 22.4251C4.61229 22.4164 4.71015 22.408 4.80811 22.3995C5.27482 22.359 5.74365 22.3184 6.20347 22.2565C6.3393 22.2365 6.46969 22.2524 6.59812 22.268C6.67007 22.2768 6.74141 22.2855 6.81275 22.2877C6.8315 22.2884 6.85032 22.2892 6.86915 22.29C7.03002 22.2967 7.19227 22.3035 7.32273 22.2253C7.57591 22.081 7.85526 22.06 8.12819 22.0396C8.16226 22.037 8.19624 22.0345 8.23006 22.0317C8.90553 21.9755 9.56783 21.832 10.2103 21.6384C10.2509 21.6264 10.2916 21.6144 10.3322 21.6025C10.9471 21.4213 11.5606 21.2406 12.1508 20.9829C12.7799 20.7082 13.3296 20.3586 13.6475 19.753C13.6806 19.6968 13.7137 19.6593 13.7667 19.6281C14.0711 19.4552 14.4961 19.3367 14.8766 19.2306C15.1006 19.1681 15.3093 19.11 15.4688 19.0475C15.5695 18.9949 15.67 18.9422 15.7705 18.8896C16.3374 18.5929 16.9017 18.2975 17.4755 18.0111C17.6962 17.9013 17.9173 17.7918 18.1396 17.6844Z"
      fill="#231F20"
    />
    <path
      d="M12.8543 0.65595C12.8278 0.181467 12.4834 -0.0745081 11.9866 0.0191408C11.7614 0.0628458 11.5495 0.137762 11.3575 0.268868C10.8873 0.593512 10.4899 0.993079 10.1124 1.40512C9.66866 1.88585 9.21829 2.36658 8.78785 2.85978C8.65537 3.00962 8.53615 3.01587 8.37057 2.94719C8.11229 2.83481 7.84075 2.74741 7.55604 2.72868C6.56259 2.66001 5.56914 2.62879 4.61545 2.97841C4.41678 3.05333 4.30423 3.01586 4.17175 2.86603C3.74789 2.38531 3.31078 1.91083 2.86708 1.43634C2.47632 1.01805 2.07897 0.612245 1.5955 0.287602C1.36373 0.131523 1.11203 0.056599 0.833907 0.0441131C0.482828 0.0316271 0.251057 0.193953 0.164933 0.518596C0.138508 0.618484 0.131836 0.724619 0.131836 0.824515C0.131836 1.39264 0.244473 1.94828 0.363694 2.50393C0.535854 3.30928 0.926615 4.03971 1.26435 4.78266C1.39683 5.07612 1.57566 5.35078 1.80743 5.58177C1.89355 5.66918 1.9134 5.74417 1.8803 5.85651C1.82727 6.03133 1.78092 6.21237 1.73456 6.3934C1.54915 7.04894 1.48286 7.71698 1.58883 8.38503C1.64844 8.74088 1.63527 9.07801 1.5955 9.42757C1.54915 9.80844 1.53589 10.183 1.6286 10.5639C1.74124 11.0134 1.71472 11.4629 1.5955 11.9124C1.4697 12.3868 1.40341 12.8613 1.42993 13.3483C1.46302 13.8665 1.39683 14.3785 1.3769 14.8904C1.37032 15.1901 1.3769 15.4898 1.30412 15.7831C1.21141 16.1577 1.218 16.5386 1.27761 16.9194C1.39016 17.6623 1.31738 17.3003 1.35047 17.7497C1.49612 17.7497 1.66837 18.1805 1.82069 18.1743C1.81401 17.8246 1.77433 16.9819 1.74124 16.6322C1.71472 16.3325 1.74124 16.0392 1.79417 15.7395C1.90672 15.0964 1.97301 14.4596 1.89355 13.804C1.82069 13.186 1.90014 12.5679 2.03262 11.9624C2.14517 11.4504 2.13191 10.9385 2.04587 10.4265C2.02594 10.3142 2.0061 10.1955 2.02595 10.0894C2.09881 9.70852 2.13858 9.32152 2.15184 8.89068C2.54251 9.21538 2.95979 9.2341 3.40349 9.1404C3.76773 9.0655 3.98634 8.84072 4.13198 8.53482C4.17842 8.4349 4.19827 8.31004 4.3771 8.34758C4.46313 8.3663 4.56251 8.35379 4.57577 8.24144C4.58903 8.13531 4.5029 8.10407 4.4102 8.08535C3.86053 7.9667 3.30419 7.84184 2.75444 7.72949C2.5757 7.69204 2.39019 7.6483 2.21145 7.62957C2.05246 7.61085 2.01936 7.54216 2.03262 7.40479C2.11207 6.76798 2.23787 6.14368 2.50941 5.55062C2.77437 4.9762 3.11211 4.4331 3.59558 3.98983C3.65519 3.93358 3.72805 3.87119 3.68828 3.77757C3.6486 3.68386 3.56906 3.65892 3.47635 3.69016C3.37706 3.72131 3.33729 3.67143 3.29094 3.60896C3.19823 3.47159 3.09885 3.3343 3.01281 3.19068C2.72134 2.74116 2.37035 2.33536 2.01936 1.92331C1.94649 1.8359 1.85379 1.76099 1.7544 1.69232C1.45644 1.49253 1.19148 1.60491 1.15839 1.95452C1.13187 2.17928 1.1518 2.41028 1.23784 2.62254C1.54915 3.36545 1.78759 4.13963 2.23787 4.8264C2.35051 5.00122 2.19152 5.08234 2.13191 5.20719C2.01936 5.1323 1.95975 5.02616 1.90672 4.93254C1.29086 3.90864 0.774296 2.8473 0.555695 1.67358C0.496084 1.36767 0.496084 1.05551 0.50934 0.749591C0.529181 0.412461 0.688173 0.32506 1.03258 0.406222C1.28419 0.468652 1.47628 0.618484 1.6617 0.780809C2.2909 1.33021 2.82731 1.94828 3.3969 2.54763C3.54922 2.70995 3.70154 2.87227 3.84727 3.0346C3.93998 3.13448 4.02602 3.22813 4.03928 3.37796C4.05253 3.54657 4.17843 3.59645 4.34391 3.53406C4.38368 3.52155 4.42345 3.50282 4.46313 3.47789C4.74135 3.29685 5.05257 3.23438 5.38372 3.18444C6.29105 3.02835 7.18512 3.09079 8.07919 3.26561C8.21825 3.29677 8.33747 3.36545 8.46337 3.43414C8.73491 3.59023 8.8342 3.55278 8.91365 3.26561C8.93358 3.18443 8.98652 3.11576 9.04613 3.05333C9.7813 2.27917 10.4634 1.46132 11.2714 0.749591C11.4502 0.593512 11.6291 0.44368 11.8674 0.375003C12.2582 0.256382 12.4237 0.368765 12.4503 0.749591C12.4966 1.4738 12.3112 2.16055 12.0662 2.83481C11.8211 3.50904 11.4833 4.14585 11.1257 4.77023C11.0462 4.90752 10.9469 5.02616 10.8475 5.18226C10.5231 4.72648 10.5231 4.73278 10.7681 4.29573C11.0727 3.75884 11.3839 3.23438 11.5959 2.65376C11.682 2.41028 11.7549 2.16055 11.7483 1.89834C11.7416 1.73601 11.7085 1.59242 11.5363 1.51126C11.3708 1.43634 11.2383 1.50502 11.1191 1.59867C10.9733 1.71729 10.821 1.84215 10.6886 1.9795C10.2316 2.44774 9.72827 2.88476 9.43689 3.47159C9.38387 3.58402 9.17861 3.63398 9.25806 3.8025C9.31109 3.91485 9.43689 3.98354 9.51634 4.07725C9.98656 4.61413 10.3641 5.20098 10.5958 5.86273C10.7416 6.28105 10.8409 6.7181 10.9006 7.15507C10.927 7.37985 10.927 7.37985 10.682 7.44224C10.0793 7.59212 9.48325 7.74192 8.88056 7.8918C8.82762 7.90431 8.77459 7.91053 8.72165 7.93546C8.59576 7.99164 8.5825 8.09777 8.70173 8.16646C8.78126 8.21021 8.82762 8.23514 8.85404 8.33506C8.95342 8.73458 9.22496 8.9906 9.65541 9.04677C10.0859 9.10925 10.4899 9.04056 10.7416 8.65347C10.7548 8.62845 10.7614 8.61602 10.8078 8.64096C10.7946 9.10295 10.8343 9.57123 10.927 10.0332C10.9469 10.1206 10.9337 10.2205 10.9204 10.3079C10.7946 10.8947 10.821 11.4754 10.9469 12.056C11.0793 12.699 11.1191 13.342 11.0396 13.9914C10.98 14.4659 11.0264 14.9404 11.1191 15.4024C11.225 15.9267 11.2516 16.445 11.1919 16.9694C11.1721 17.1442 11.1588 17.319 11.1588 17.4938C11.3112 17.5 11.4635 17.5062 11.6158 17.5125C11.6224 17.4251 11.6291 17.3315 11.6423 17.2441C11.7018 16.7446 11.7747 16.2514 11.6754 15.7395C11.5297 14.9902 11.5495 14.2224 11.5363 13.4607C11.5297 12.9113 11.5164 12.3744 11.3708 11.8375C11.2581 11.4254 11.225 11.0009 11.3244 10.5826C11.437 10.1206 11.4237 9.66486 11.3575 9.20287C11.3244 8.9906 11.278 8.77212 11.3376 8.55985C11.4502 8.14152 11.437 7.7232 11.4171 7.29866C11.3906 6.79922 11.2449 6.32472 11.1125 5.8503C11.0727 5.70672 11.0793 5.6068 11.1985 5.49445C11.3508 5.35078 11.4767 5.17604 11.5694 4.98871C12.1257 3.92115 12.6224 2.84106 12.7682 1.64861C12.8211 1.33646 12.8741 0.999318 12.8543 0.65595Z"
      fill="#231F20"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5253 11.3994C19.4724 13.4697 18.9312 15.4191 18.0121 17.1375C17.7975 17.2409 17.5844 17.3463 17.3714 17.4517C17.3266 17.4739 17.2817 17.4961 17.2369 17.5183C16.462 17.8991 15.707 18.3112 14.9586 18.7357C14.7401 18.8622 14.4992 18.9359 14.2582 19.0096C14.1779 19.0342 14.0976 19.0588 14.0182 19.0853C13.9122 19.1166 13.8328 19.1041 13.7931 18.9854C13.6804 18.667 13.4354 18.4485 13.1175 18.3049C12.9983 18.2488 12.9785 18.1738 12.985 18.0552C12.9983 17.8804 12.9917 17.7056 12.9254 17.537C12.846 17.3247 12.7002 17.1874 12.4751 17.1249C12.2631 17.0626 12.0512 17.0126 11.8327 17.0375C11.6869 17.0563 11.634 17.0063 11.6273 16.8814C11.624 16.8316 11.6191 16.7801 11.6141 16.7286C11.6092 16.6771 11.6042 16.6255 11.6009 16.5756C11.5963 16.4816 11.5973 16.3868 11.5983 16.2924C11.6003 16.1171 11.6022 15.9428 11.5677 15.7764C11.5082 15.4642 11.6142 15.2645 11.8592 15.0585C12.687 14.353 13.6275 13.8286 14.6209 13.3666C16.2174 12.6211 17.8625 11.9883 19.5253 11.3994Z"
      fill="#31C77F"
    />
    <path
      d="M0.720986 20.0088C0.82695 20.0525 0.899817 20.0775 0.966012 20.1024C1.08523 20.1461 1.21113 20.1524 1.29058 20.04C1.3767 19.9214 1.29716 19.8278 1.20445 19.7466C1.09849 19.6592 0.992525 19.5718 0.886561 19.4781C0.456117 19.1036 0.641533 18.423 1.04555 18.1858C1.14484 18.1296 1.21771 18.1046 1.29716 18.1983C1.31709 18.2232 1.34352 18.242 1.36345 18.2669C2.19791 19.1534 3.2443 19.7965 4.29069 20.427C4.76757 20.7143 5.25763 20.989 5.78745 21.1887C5.91993 21.2387 5.97954 21.3011 5.95303 21.4384C5.92652 21.5509 5.93319 21.6632 5.97954 21.7756C6.0259 21.8942 5.95961 21.9254 5.85365 21.9317C5.68149 21.9504 5.50933 21.9754 5.3305 21.9754C4.66819 21.9878 4.00589 22.119 3.34368 22.0628C2.66812 22.0003 2.01249 21.863 1.39654 21.5758C1.17794 21.4759 0.985941 21.3448 0.840206 21.1576C0.55541 20.8079 0.548826 20.4333 0.720986 20.0088Z"
      fill="#31C77F"
    />
    <path
      d="M8.33492 21.5833C8.23562 21.5708 8.10314 21.6707 8.01044 21.5896C7.94424 21.5271 7.93757 21.4022 7.8978 21.3086C7.88463 21.2712 7.8647 21.2274 7.83828 21.1963C7.74548 21.0901 7.81176 21.0339 7.90447 20.9777C8.48065 20.6406 8.99063 20.2223 9.5403 19.8477C10.2092 19.3794 10.7986 18.8301 11.355 18.2494C11.5338 18.0684 11.6662 17.8499 11.653 17.5877C11.6463 17.4815 11.6994 17.4379 11.8119 17.4503C11.9179 17.4628 12.0304 17.4753 12.1364 17.5003C12.4675 17.5752 12.6066 17.8374 12.461 18.1309C12.4013 18.2494 12.3219 18.3618 12.2556 18.4804C12.2093 18.5678 12.1894 18.6552 12.2821 18.7302C12.3682 18.7988 12.461 18.7864 12.5537 18.7426C12.5602 18.7364 12.5735 18.7364 12.5802 18.7302C12.6596 18.6927 12.706 18.5741 12.7854 18.5991C12.9047 18.6365 13.0173 18.7115 13.1166 18.7864C13.355 18.9674 13.4412 19.1797 13.355 19.4045C13.2556 19.6542 13.0967 19.8789 12.8848 20.0662C12.4675 20.4346 11.9709 20.6656 11.4477 20.8404C10.5734 21.1276 9.6992 21.4085 8.7787 21.5521C8.63955 21.5708 8.49391 21.5833 8.33492 21.5833Z"
      fill="#31C77F"
    />
    <path
      d="M2.50702 4.6519C2.18254 4.35222 1.99713 4.00258 1.85798 3.64051C1.68582 3.19722 1.52024 2.75396 1.40769 2.29196C1.38118 2.19207 1.37459 2.09217 1.36792 1.98604C1.36792 1.91737 1.35467 1.83621 1.44079 1.79875C1.52691 1.76753 1.59311 1.81748 1.64605 1.86742C1.92426 2.09842 2.1627 2.36687 2.3547 2.66655C2.58656 3.02241 2.81833 3.37828 3.06336 3.73413C3.15607 3.8715 3.15607 3.97134 3.017 4.06505C2.80507 4.20863 2.69252 4.43333 2.50702 4.6519Z"
      fill="#FEFEFE"
    />
    <path
      d="M10.3816 4.48909C10.2293 4.23316 9.99754 4.05204 9.77235 3.85858C9.6598 3.75866 9.66639 3.68997 9.73925 3.57133C10.0571 3.07814 10.4545 2.64112 10.8585 2.20409C10.9777 2.07299 11.0837 1.92316 11.236 1.82327C11.4016 1.71713 11.5009 1.76083 11.5274 1.94813C11.5341 1.99807 11.5341 2.05426 11.5208 2.10421C11.4214 2.49129 11.3353 2.89085 11.1234 3.24046C10.9115 3.57762 10.726 3.92097 10.5406 4.27061C10.5008 4.34551 10.481 4.43292 10.3816 4.48909Z"
      fill="#FEFEFE"
    />
    <path
      d="M6.91337 21.9077C6.88027 21.9015 6.82066 21.9015 6.76772 21.8952C6.53587 21.8641 6.3968 21.7579 6.37029 21.5893C6.34387 21.4207 6.48951 21.196 6.6816 21.1273C7.03926 20.99 7.37033 21.0899 7.52265 21.377C7.62203 21.5581 7.59551 21.6518 7.42994 21.7766C7.30413 21.864 7.1253 21.9139 6.91337 21.9077Z"
      fill="#31C77F"
    />
    <path
      d="M2.84716 8.41062C2.69448 8.41693 2.58827 8.33554 2.58827 8.20416C2.58167 8.06647 2.66131 7.97886 2.7875 7.97886C2.94017 7.97255 3.0397 8.05393 3.04639 8.19162C3.04639 8.32932 2.98664 8.40439 2.84716 8.41062Z"
      fill="#E7EBEB"
    />
    <path
      d="M9.84772 8.20218C9.81454 8.30233 9.79457 8.40871 9.66847 8.43371C9.54897 8.45879 9.43616 8.35241 9.43616 8.23349C9.44276 8.10833 9.52239 8.04572 9.64189 8.03949C9.74811 8.03326 9.82783 8.09579 9.84772 8.20218Z"
      fill="#EFF2F2"
    />
    <path
      d="M6.72024 8.64733C6.88582 8.46 7.09775 8.37881 7.34945 8.3851C7.74679 8.39132 8.03817 8.63482 8.07127 9.0094C8.08453 9.19044 8.09779 9.38398 8.02492 9.5588C7.95872 9.7149 7.97856 9.80231 8.13756 9.91466C8.46203 10.1582 8.62761 10.4828 8.6011 10.8886C8.58784 11.0509 8.54816 11.207 8.42894 11.3131C8.27003 11.4505 8.18391 11.6315 8.10446 11.8001C7.91895 12.1809 7.58122 12.3495 7.18387 12.4119C6.74009 12.4744 6.31623 12.3683 5.93872 12.1373C5.74005 12.0186 5.60099 11.8438 5.53479 11.6315C5.50169 11.5254 5.45534 11.4567 5.35596 11.3943C4.97845 11.1508 4.87916 10.745 5.10426 10.3704C5.17713 10.2456 5.26325 10.1144 5.3758 10.027C5.54805 9.90214 5.5613 9.77728 5.50169 9.60255C5.42215 9.36526 5.47518 9.13426 5.5613 8.90948C5.73346 8.45379 6.13081 8.32263 6.5746 8.56614C6.61428 8.58486 6.66063 8.6161 6.72024 8.64733Z"
      fill="#030202"
    />
    <path
      d="M7.72495 11.3076C7.47334 11.2889 7.2349 11.1453 7.05607 10.9018C6.80437 10.5522 6.80437 10.5522 6.5726 10.9143C6.39376 11.189 6.12222 11.3263 5.7779 11.3076C5.32086 11.2764 5.10235 10.8644 5.35405 10.496C5.44675 10.3586 5.57914 10.2463 5.71829 10.1464C5.93681 9.99034 5.95006 9.95911 5.85736 9.70309C5.79774 9.53457 5.74472 9.37226 5.75798 9.19114C5.79107 8.79784 6.11564 8.63553 6.4733 8.82286C6.53283 8.85401 6.57918 8.89776 6.63221 8.929C6.76468 9.00389 6.87723 9.01011 6.95669 8.86031C7.05607 8.67928 7.22822 8.67298 7.40706 8.6917C7.60573 8.71043 7.71837 8.82286 7.79123 8.99138C7.83092 9.08501 7.82433 9.17242 7.78456 9.25983C7.73162 9.38469 7.67201 9.50333 7.61899 9.62819C7.49318 9.88421 7.50644 9.94038 7.78456 10.0527C8.01633 10.1464 8.19516 10.2837 8.29454 10.5085C8.47338 10.8956 8.22168 11.2951 7.72495 11.3076Z"
      fill="white"
    />
    <path
      d="M5.85181 11.5803C6.3286 11.5304 6.35512 11.5179 6.85184 11.0684C7.11671 11.3931 7.44786 11.5928 7.89823 11.5616C7.76576 11.9362 7.47438 12.1235 7.03059 12.136C6.54053 12.1422 5.97094 12.0236 5.85181 11.5803Z"
      fill="#FDFDFD"
    />
    <path
      d="M6.25169 9.19629C6.27153 9.2088 6.32447 9.2151 6.3444 9.24003C6.43043 9.34617 6.5033 9.46482 6.51656 9.6021C6.52314 9.66457 6.49004 9.72075 6.41718 9.74577C6.35765 9.7645 6.31121 9.73947 6.27153 9.70202C6.16557 9.59589 6.08611 9.47103 6.10596 9.31493C6.11254 9.25255 6.15231 9.2088 6.25169 9.19629Z"
      fill="#0E0D0D"
    />
    <path
      d="M7.03885 9.46398C7.05874 9.41391 7.08531 9.32006 7.13177 9.23868C7.16495 9.16991 7.2247 9.11984 7.31763 9.15737C7.38398 9.18868 7.41055 9.24499 7.39726 9.30752C7.37738 9.39514 7.3442 9.48275 7.31094 9.57037C7.27776 9.65175 7.21801 9.71429 7.1118 9.67675C7.01887 9.65175 7.01887 9.57037 7.03885 9.46398Z"
      fill="#191717"
    />
    <path
      d="M0.603763 21.2711L0.151404 22.4662L0.576917 22.5483C0.576917 22.5483 1.01579 21.5485 1.06937 21.4513C1.11583 21.3505 0.603763 21.2711 0.603763 21.2711Z"
      fill="#231F20"
    />
    <path
      d="M12.8332 20.2319L12.6052 20.3617C12.6052 20.3617 13.2419 21.9287 13.4942 21.9697C13.7469 22.0067 13.6288 21.6906 13.6288 21.6906C13.6288 21.6906 13.053 20.4552 12.9532 20.2375C12.8801 20.0635 12.8332 20.2319 12.8332 20.2319Z"
      fill="#231F20"
    />
  </Svg>
)

export const PartnerMetaMask: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 22 20" {...props}>
    <path
      d="M20.0107 0.5L12.1979 6.43757L13.6507 2.93837L20.0107 0.5Z"
      fill="#E17726"
      stroke="#E17726"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.98901 0.5L9.7323 6.49298L8.34903 2.93836L1.98901 0.5Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1971 14.2656L15.1183 17.5273L19.5695 18.7861L20.8446 14.3369L17.1971 14.2656Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.16174 14.3369L2.4291 18.7861L6.87262 17.5273L4.80154 14.2656L1.16174 14.3369Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.63304 8.75588L5.39661 10.6718L9.80146 10.8776L9.65465 6.00879L6.63304 8.75588Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3662 8.7576L12.2983 5.95508L12.1979 10.8793L16.6027 10.6735L15.3662 8.7576Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.8728 17.5279L9.53887 16.2058L7.24375 14.3691L6.8728 17.5279Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4608 16.2058L15.1192 17.5279L14.7559 14.3691L12.4608 16.2058Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.1192 17.5291L12.4608 16.207L12.6772 17.9804L12.654 18.7325L15.1192 17.5291Z"
      fill="#D5BFB2"
      stroke="#D5BFB2"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.8728 17.5291L9.34572 18.7325L9.33026 17.9804L9.53887 16.207L6.8728 17.5291Z"
      fill="#D5BFB2"
      stroke="#D5BFB2"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.39181 13.1991L7.18164 12.5341L8.74265 11.7979L9.39181 13.1991Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6069 13.1991L13.2561 11.7979L14.8248 12.5341L12.6069 13.1991Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.87292 17.5273L7.25933 14.2656L4.80188 14.3369L6.87292 17.5273Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7404 14.2656L15.119 17.5273L17.1978 14.3369L14.7404 14.2656Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6027 10.6729L12.1979 10.8787L12.6074 13.1983L13.2566 11.797L14.8253 12.5333L16.6027 10.6729Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.18173 12.5333L8.74274 11.797L9.3919 13.1983L9.80146 10.8787L5.39661 10.6729L7.18173 12.5333Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.39758 10.6729L7.24455 14.37L7.18268 12.5333L5.39758 10.6729Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8247 12.5333L14.7551 14.37L16.6021 10.6729L14.8247 12.5333Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.8012 10.8779L9.39233 13.1976L9.90914 15.9367L10.0249 12.3267L9.8012 10.8779Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.197 10.8779L11.981 12.3188L12.089 15.9367L12.6058 13.1976L12.197 10.8779Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6071 13.1982L12.0894 15.9374L12.4603 16.2066L14.7555 14.3699L14.825 12.5332L12.6071 13.1982Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.18164 12.5332L7.24351 14.3699L9.53862 16.2066L9.90957 15.9374L9.39181 13.1982L7.18164 12.5332Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6532 18.7317L12.6764 17.9796L12.4755 17.8054H9.52347L9.33026 17.9796L9.34572 18.7317L6.8728 17.5283L7.73831 18.2567L9.49253 19.4996H12.4986L14.2606 18.2567L15.1184 17.5283L12.6532 18.7317Z"
      fill="#C0AC9D"
      stroke="#C0AC9D"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4606 16.2066L12.0896 15.9375H9.91037L9.53948 16.2066L9.33081 17.98L9.52402 17.8058H12.476L12.677 17.98L12.4606 16.2066Z"
      fill="black"
      stroke="black"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3431 6.82547L21 3.54795L20.0109 0.5L12.4608 6.23968L15.3664 8.75717L19.4699 9.9843L20.3741 8.89971L19.98 8.60675L20.6059 8.02095L20.1268 7.64093L20.7528 7.15008L20.3431 6.82547Z"
      fill="#763E1A"
      stroke="#763E1A"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 3.54795L1.66459 6.82547L1.23956 7.15008L1.87324 7.64093L1.39412 8.02095L2.02007 8.60675L1.62595 8.89971L2.53011 9.9843L6.63361 8.75717L9.53923 6.23968L1.98916 0.5L1 3.54795Z"
      fill="#763E1A"
      stroke="#763E1A"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4691 9.9839L15.3656 8.75684L16.6021 10.6727L14.7551 14.3698L17.1971 14.3381H20.8446L19.4691 9.9839Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.63301 8.75684L2.52956 9.9839L1.16174 14.3381H4.80154L7.24351 14.3698L5.39659 10.6727L6.63301 8.75684Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1976 10.879L12.4603 6.23974L13.6504 2.93848H8.34912L9.53918 6.23974L9.80193 10.879L9.9024 12.3357L9.91013 15.9378H12.0894L12.0971 12.3357L12.1976 10.879Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.126161"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const PartnerMobox: React.FC = () => (
  <Image alt="mobox-logo" src={`${PANCAKE_ASSET_CDN}/web/landing/mobox.png`} width={24} height={14} unoptimized />
)
