@extends('layouts.guest')


@section('head_import')
    <link rel="stylesheet" href="{{ asset('assets/css/home.css') }}">
@endsection


@section('content')
    <div class="banner border-bottom " style="overflow: hidden;">

        <div class="container pt-md-5 pb-5">
            <div class="row  align-items-center">
                <div class="col-md-7 order-2 order-md-1 ">
                    <div class="content pe-1 text-center text-md-start" style="position: relative">
                        <span class="banner-blue-shadow"></span>
                        <span>Backend Developer</span>
                        <h1 class="mb-4" style="font-weight: 600">
                            Web Apps, Inventory, Scraping, Automation, Problems Solution & Saas Products.
                        </h1>
                        <p>I build user-friendly websites, automate tasks, web scraping, & develop custom SaaS solutions.
                            Skills PHP (Laravel, CodeiIgniter) JavaScript (nodeJS, ReactJS) & Python (Flask, FastAPIs) for
                            dynamic websites & automation.</p>
                        <div class=" mt-5 btns d-flex justify-content-center justify-content-md-start  gap-2 ">
                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#contact_me_modal" class="theme-btn">Get a quote</a>
                            <a href="{{ route('contact') }}" class="theme-btn-light">See projects</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5  order-1 order-md-2">
                    <div class="profile-pic p-3 p-md-5 text-center ">
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <div class="pic-box">
                                <img src="{{ asset('assets/images/moeez-dp.png') }}" alt="">
                            </div>
                            <span class="banner-pink-shadow"></span>
                            <div class="banner-img-block" style="position: absolute; right: 0; top:50%; z-index:-1 ;">
                                <svg width="47" height="531" viewBox="0 0 47 531" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7283 186.353C40.6069 228.272 19.7551 282.23 45.6957 347.368C53.0404 365.811 56.5381 376.626 66.8342 393.597C116.83 476.003 189.595 521.937 285.656 529.148C352.27 534.148 431.191 533.543 460.244 467.249C489.603 400.257 473.972 315.214 423.839 241.2C368.644 159.713 320.481 102.416 231.244 45.3169C183.487 14.7592 88.0571 -27.7495 33.1692 24.9451C-8.61798 65.0625 -7.15036 144.434 16.7283 186.353Z"
                                        fill="#1090CB" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="offer-section py-5" style="    overflow: hidden;" >
        <div class="container">
            <div class="row mb-5  justify-content-center text-center ">
                <div class="col-md-7">
                    <h1 class="sec-heading"  > Offering </h1>
                    <span style="font-size: 14px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam odit unde
                        corrupti architecto molestiae placeat esse sit, soluta voluptatem quae maiores, fuga.</span>
                    <div class="offer-sec-block" style="position: absolute; left: 0; top:45% ; z-index:-1">
                        <svg width="55" height="610" viewBox="0 0 55 610" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-391.591 0.394742C-445.452 -1.33151 -477.316 35.6128 -501.572 83.7334C-545.833 171.537 -560.967 276.494 -546.418 365.852C-531.868 455.21 -479.047 517.336 -426.364 554.563C-346.508 610.991 -325.59 612.6 -247.5 607.018C-190.503 602.944 -159.808 595.565 -93.8058 561.844C-27.8039 528.123 76.4386 465.113 50.4221 374.546C29.8276 302.855 -112.879 282.313 -112.879 282.313C-112.879 282.313 -179.389 274.713 -219.359 243.749C-260.729 211.701 -286.937 128.037 -286.937 128.037C-286.937 128.037 -327.164 2.45965 -391.591 0.394742Z"
                                fill="#08D3BB" />
                        </svg>
                    </div>
                    <span class="offer-sec-blue-shadow"></span>
                </div>
            </div>
            <div class="row py-3 ">
                <div class="col-md-3 col-6">
                    <h4>WordPress plugin development</h4>
                    <span style="font-size: 13px;">Custom Features & Override Functionalities.</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>APIs integration & Problem solving</h4>
                    <span style="font-size: 13px;">Google, weather APIs, Social media, kiwi, and many others.</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>SaaS products & Automations</h4>
                    <span style="font-size: 13px;">Software as a service and Automate working of systems.</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>Web scraping & Big data handling</h4>
                    <span style="font-size: 13px;">JS (puppeteer), python (Playwright, salenium, beautifull soup)</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>WordPress & Woocommerce</h4>
                    <span style="font-size: 13px;">Theme installation & setup Woocommerce Custom CSS and JS.</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>Restful APIs development</h4>
                    <span style="font-size: 13px;">APIs in Laravel, NodeJS,  Python (Flask & FastAPis)</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>WP theme customization</h4>
                    <span style="font-size: 13px;">Build Child Theme & Customize. Override Cart Page, APIs integration, etc</span>
                </div>
                <div class="col-md-3 col-6 mb-5">
                    <h4>Inventory Management</h4>
                    <span style="font-size: 13px;">Build Inventory management Apps and customize manage Database
                        Relations.</span>
                </div>
            </div>
        </div>
    </div>


    <div class="choose-me-sec pb-5" style="position: relative;">
        <div class="container">
            <div class="row  align-items-center">
                <div class="col-md-6">
                    <div class="content">
                        <div class="d-flex gap-2">
                            <span><svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="29" cy="29" r="29" fill="#4E6BFF" />
                                    <g clip-path="url(#clip0_1_230)">
                                        <path
                                            d="M29.3981 21.1959C23.6624 21.1959 18.9961 25.8623 18.9961 31.598C18.9961 37.3337 23.6624 41.9999 29.3981 41.9999C35.1337 41.9999 39.8001 37.3336 39.8001 31.598C39.8001 25.8623 35.1338 21.1959 29.3981 21.1959ZM29.3981 40.4765C24.5025 40.4765 20.5195 36.4936 20.5195 31.598C20.5195 26.7023 24.5025 22.7194 29.3981 22.7194C34.2937 22.7194 38.2766 26.7023 38.2766 31.598C38.2766 36.4936 34.2937 40.4765 29.3981 40.4765Z"
                                            fill="white" />
                                        <path
                                            d="M33.9407 33.5324C33.6214 33.2586 33.1405 33.2953 32.8666 33.6147C31.9968 34.6287 30.7326 35.2103 29.398 35.2103C28.0635 35.2103 26.7993 34.6288 25.9295 33.6148C25.6556 33.2954 25.1747 33.2587 24.8554 33.5325C24.5361 33.8065 24.4993 34.2874 24.7732 34.6066C25.9327 35.9584 27.6185 36.7337 29.398 36.7337C31.1777 36.7337 32.8634 35.9584 34.0229 34.6065C34.2968 34.2873 34.26 33.8064 33.9407 33.5324Z"
                                            fill="white" />
                                        <path
                                            d="M25.1694 30.3999C25.5901 30.3999 25.9312 30.0589 25.9312 29.6382C25.9312 29.394 26.1299 29.1953 26.3741 29.1953C26.6183 29.1953 26.817 29.394 26.817 29.6382C26.817 30.0589 27.158 30.3999 27.5787 30.3999C27.9994 30.3999 28.3404 30.0589 28.3404 29.6382C28.3404 28.554 27.4583 27.6719 26.3741 27.6719C25.2898 27.6719 24.4077 28.554 24.4077 29.6382C24.4077 30.0589 24.7488 30.3999 25.1694 30.3999Z"
                                            fill="white" />
                                        <path
                                            d="M32.4222 27.6719C31.3379 27.6719 30.4558 28.554 30.4558 29.6382C30.4558 30.0589 30.7969 30.4 31.2175 30.4C31.6382 30.4 31.9792 30.0589 31.9792 29.6382C31.9792 29.394 32.178 29.1953 32.4222 29.1953C32.6664 29.1953 32.8651 29.394 32.8651 29.6382C32.8651 30.0589 33.2061 30.4 33.6268 30.4C34.0475 30.4 34.3885 30.0589 34.3885 29.6382C34.3885 28.5539 33.5064 27.6719 32.4222 27.6719Z"
                                            fill="white" />
                                        <path
                                            d="M35.6736 20.2789H36.7848C37.2055 20.2789 37.5465 19.9379 37.5465 19.5172C37.5465 19.0965 37.2055 18.7555 36.7848 18.7555H35.6736C35.2529 18.7555 34.9119 19.0965 34.9119 19.5172C34.9119 19.9379 35.2529 20.2789 35.6736 20.2789Z"
                                            fill="white" />
                                        <path
                                            d="M38.4561 23.0342C38.8767 23.0342 39.2178 22.6932 39.2178 22.2725V21.1613C39.2178 20.7406 38.8767 20.3995 38.4561 20.3995C38.0354 20.3995 37.6943 20.7406 37.6943 21.1613V22.2725C37.6943 22.6932 38.0354 23.0342 38.4561 23.0342Z"
                                            fill="white" />
                                        <path
                                            d="M41.2382 18.7555H40.127C39.7063 18.7555 39.3652 19.0965 39.3652 19.5172C39.3652 19.9379 39.7063 20.2789 40.127 20.2789H41.2382C41.6589 20.2789 41.9999 19.9379 41.9999 19.5172C41.9999 19.0965 41.6589 18.7555 41.2382 18.7555Z"
                                            fill="white" />
                                        <path
                                            d="M38.4561 18.6347C38.8767 18.6347 39.2178 18.2936 39.2178 17.873V16.7617C39.2178 16.341 38.8767 16 38.4561 16C38.0354 16 37.6943 16.341 37.6943 16.7617V17.873C37.6943 18.2936 38.0354 18.6347 38.4561 18.6347Z"
                                            fill="white" />
                                        <path
                                            d="M17.6489 19.7711H16.7617C16.341 19.7711 16 20.1122 16 20.5328C16 20.9535 16.341 21.2946 16.7617 21.2946H17.6489C18.0695 21.2946 18.4106 20.9535 18.4106 20.5328C18.4106 20.1122 18.0695 19.7711 17.6489 19.7711Z"
                                            fill="white" />
                                        <path
                                            d="M19.9985 22.9864V22.0992C19.9985 21.6786 19.6575 21.3375 19.2368 21.3375C18.8161 21.3375 18.4751 21.6786 18.4751 22.0992V22.9864C18.4751 23.4071 18.8161 23.7481 19.2368 23.7481C19.6575 23.7481 19.9985 23.4071 19.9985 22.9864Z"
                                            fill="white" />
                                        <path
                                            d="M20.825 21.2946H21.7121C22.1328 21.2946 22.4738 20.9535 22.4738 20.5328C22.4738 20.1122 22.1328 19.7711 21.7121 19.7711H20.825C20.4043 19.7711 20.0632 20.1122 20.0632 20.5328C20.0632 20.9535 20.4043 21.2946 20.825 21.2946Z"
                                            fill="white" />
                                        <path
                                            d="M19.2368 19.728C19.6575 19.728 19.9985 19.3869 19.9985 18.9663V18.0791C19.9985 17.6584 19.6575 17.3174 19.2368 17.3174C18.8161 17.3174 18.4751 17.6584 18.4751 18.0791V18.9663C18.4751 19.3869 18.8161 19.728 19.2368 19.728Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_230">
                                            <rect width="26" height="26" fill="white"
                                                transform="translate(16 16)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h1 class="sec-heading ">Why choose Me</h1>
                        </div>
                        <h3 class="pb-4">Make My clients happy by giving Best services.</h3>
                        <p style="font-size: 15px">
                          I build user-friendly websites, automate tasks, web scraping, & develop custom SaaS solutions. Skills PHP (Laravel, CodeiIgniter) JavaScript (nodeJS, ReactJS) & Python (Flask, FastAPIs) for dynamic websites & automation.
                        </p>
                        <div class="line" style="position: absolute;top: 18%;left: 0;z-index: -1;">
                            <svg width="157" height="719" viewBox="0 0 157 719" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M133.634 1C112.254 30.5 44.578 58.1534 31 137.5C15 231 81.6451 292.627 111.5 359.5C190.409 536.252 175.5 673 -22.5 718.5"
                                    stroke="#999999" stroke-dasharray="7 7" />
                            </svg>
                        </div>
                        <span class="choose-me-sec-pink-shadow"></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="video">
                        <video width="100%" height="400px" style="filter: contrast(1.4) brightness(1.5);" frameborder="0" autoplay muted loop>
                            <source src="{{ asset('assets/images/programmer-whychooseme.mp4') }}" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="quality-services-sec" style="position: relative;">
        <div class="container">
            <div class="row text-center justify-content-center">
                <div class="col-md-7">
                    <div class="content">
                        <h1 class="sec-heading">Offer The Best Quality Service</h1>
                        <p style="font-size: 15px">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's</p>
                        <span class="quality-servoices-sec-green-shadow"></span>
                    </div>
                </div>
            </div>
            <div class="row text-center text-md-start py-5 ">
                <div class="col-md-4 col-12">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="57" height="57" viewBox="0 0 57 57" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M28.211 2.84155L32.5944 4.97262L34.4037 5.91478C35.042 6.23678 35.6265 6.49886 36.6798 6.89599L37.9169 7.34825C39.545 7.94996 40.6914 8.1426 41.1653 8.20264L41.3185 8.22024L41.566 8.23142L41.7736 8.24539L49.7278 8.88122V33.2481C49.7278 44.9194 32.7291 53.9901 28.4159 53.9901C23.4141 53.9901 7.51871 44.6657 7.11196 33.6771L7.104 33.2481V8.84349L12.8061 8.44731C13.5514 8.3904 14.2464 8.33399 14.7983 8.28322L15.3639 8.22526C15.769 8.17045 17.111 7.95442 19.227 7.28257L19.8705 7.04397C21.4361 6.44652 22.6695 5.85189 23.379 5.4871L24.049 5.12774L28.211 2.84155ZM28.332 7.14277L26.0868 8.35673L25.6366 8.60464C25.4555 8.70105 25.2422 8.81129 24.9935 8.93556L24.1798 9.33004C23.2394 9.77232 22.2067 10.2119 21.1002 10.6269C20.8116 10.7351 20.5205 10.8407 20.2273 10.9432C18.9582 11.3423 17.7766 11.6452 16.7466 11.8525L16.3147 11.9355C15.8388 12.0224 15.4954 12.0714 15.2896 12.0945L15.1299 12.1094L10.6559 12.4356V33.2835L10.6644 33.6607C10.8439 37.6773 13.8776 41.4935 18.6181 45.0685C22.2492 47.807 26.5809 50.11 28.4158 50.11C30.19 50.11 34.5324 47.7909 38.1549 45.0727C42.9345 41.4862 45.9867 37.6799 46.1673 33.6609L46.1757 33.2835V12.4514L41.8841 12.1126L41.6605 12.1038L41.4754 12.0917L41.0538 12.0486C40.8995 12.0295 40.7315 12.0055 40.5502 11.9759C39.5958 11.8201 38.5071 11.5504 37.3001 11.1398L36.0397 10.699L35.1533 10.369C34.2843 10.0331 33.4796 9.68514 32.7456 9.33605L31.9897 8.96385L31.4506 8.68104L31.3106 8.60431L31.0137 8.43298L30.7479 8.28908L28.332 7.14277Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35.8038 13.6255C39.431 14.9454 41.6603 14.9454 41.6603 14.9454L43.3339 15.0775V33.2836C43.3339 40.0138 29.9472 47.2684 28.4156 47.2684C26.7419 47.2684 13.4973 40.0138 13.4973 33.2836V15.0775L15.3088 14.9454C15.3088 14.9454 17.4002 14.8133 21.1653 13.6255C24.9304 12.3084 27.4381 10.8564 27.4381 10.8564L28.4156 10.3278L29.5295 10.8564C29.5295 10.8564 31.9008 12.3084 35.8038 13.6255ZM20.4675 29.8537L27.4379 35.9234L37.8949 23.5213L35.3858 21.2778L27.0202 31.1737L22.5589 27.3475L20.4675 29.8537Z"
                                        fill="#4E6BFF" />
                                </g>
                            </svg>
                        </div>
                        <h4>Security and privacy</h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12 pb-5">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="58" height="57" viewBox="0 0 58 57" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.3365 17.0495C12.3365 17.4675 12.2763 17.8715 12.1642 18.2533L19.6374 22.5679C19.1494 23.3796 18.76 24.2572 18.4856 25.1841L10.485 20.565C9.79935 21.0361 8.96894 21.3119 8.07414 21.3119C5.7201 21.3119 3.81177 19.4035 3.81177 17.0495C3.81177 14.6954 5.7201 12.7871 8.07414 12.7871C10.4282 12.7871 12.3365 14.6954 12.3365 17.0495ZM27.965 39.6942C28.4305 39.7523 28.9047 39.7822 29.3859 39.7822C29.867 39.7822 30.3412 39.7523 30.8065 39.6943V47.1286C32.4621 47.7137 33.6483 49.2926 33.6483 51.1485C33.6483 53.5026 31.74 55.4109 29.3859 55.4109C27.0319 55.4109 25.1236 53.5026 25.1236 51.1485C25.1236 49.2927 26.3096 47.7139 27.965 47.1288V39.6942ZM40.2863 25.1841C40.0119 24.2572 39.6224 23.3796 39.1345 22.5679L46.6078 18.2532C46.4956 17.8715 46.4354 17.4675 46.4354 17.0495C46.4354 14.6955 48.3438 12.7871 50.6978 12.7871C53.0519 12.7871 54.9602 14.6955 54.9602 17.0495C54.9602 19.4036 53.0519 21.3119 50.6978 21.3119C49.803 21.3119 48.9726 21.0361 48.2869 20.565L40.2863 25.1841Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M30.8065 14.0494C33.6536 13.4032 35.7789 10.857 35.7789 7.8144C35.7789 4.28333 32.9164 1.42084 29.3854 1.42084C25.8543 1.42084 22.9918 4.28333 22.9918 7.8144C22.9918 10.8573 25.1175 13.4037 27.965 14.0496V20.009C23.9332 20.6854 20.861 24.1919 20.861 28.4159C20.861 30.2569 21.4446 31.9616 22.4369 33.3551L16.4503 39.3417C15.4647 38.7207 14.2976 38.3614 13.0466 38.3614C9.51557 38.3614 6.65308 41.2239 6.65308 44.755C6.65308 48.286 9.51557 51.1485 13.0466 51.1485C16.5777 51.1485 19.4402 48.286 19.4402 44.755C19.4402 43.5038 19.0808 42.3366 18.4597 41.3509L24.4461 35.3645C25.8397 36.3569 27.5446 36.9406 29.3857 36.9406C31.2269 36.9406 32.9317 36.357 34.3252 35.3646L40.3119 41.3512C39.6908 42.3368 39.3315 43.5039 39.3315 44.755C39.3315 48.286 42.194 51.1485 45.7251 51.1485C49.2561 51.1485 52.1186 48.286 52.1186 44.755C52.1186 41.2239 49.2561 38.3614 45.7251 38.3614C44.474 38.3614 43.3068 38.7207 42.3211 39.3419L36.3345 33.3552C37.3269 31.9617 37.9105 30.2569 37.9105 28.4159C37.9105 24.1919 34.8383 20.6854 30.8065 20.009V14.0494Z"
                                        fill="#4E6BFF" />
                                </g>
                            </svg>
                        </div>
                        <h4>Fast & Opimized</h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12 pb-5">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="58" height="57" viewBox="0 0 58 57" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M19.104 27.5223C14.6986 25.7216 11.5965 21.3943 11.5965 16.3391C11.5965 9.66673 17.0009 4.26239 23.6733 4.26239C30.3457 4.26239 35.75 9.66673 35.75 16.3391C35.75 21.3944 32.6478 25.7217 28.2424 27.5224C32.4823 28.519 36.1992 30.8723 38.91 34.099H32.0735L31.8387 34.1055C29.6624 34.2257 27.9352 36.0063 27.9352 38.1853V46.8861H3.78198C3.78198 37.4729 10.3208 29.5869 19.104 27.5223ZM30.0534 19.2555C29.3175 22.1351 26.6881 24.1535 23.6728 24.1535C20.6575 24.1535 18.0281 22.1351 17.2922 19.2555L20.4817 18.4703C20.8459 19.914 22.1622 20.9276 23.6728 20.9276C25.1834 20.9276 26.4997 19.914 26.8639 18.4703L30.0534 19.2555Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M30.7776 38.4776C30.7776 37.6287 31.4657 36.9406 32.3145 36.9406H51.9733C52.8221 36.9406 53.5103 37.6287 53.5103 38.4776V49.9684C53.5103 50.8173 52.8221 51.5054 51.9733 51.5054H46.7295C46.038 51.5112 44.1958 52.8321 43.068 53.693C42.5337 54.1008 41.7782 54.0717 41.2644 53.6383C40.2436 52.7774 38.5714 51.511 37.5603 51.5054H32.3145C31.4657 51.5054 30.7776 50.8173 30.7776 49.9684V38.4776ZM42.144 45.6794C42.989 45.6794 43.6741 45.0273 43.6741 44.223C43.6741 43.4186 42.989 42.7665 42.144 42.7665C41.2989 42.7665 40.6139 43.4186 40.6139 44.223C40.6139 45.0273 41.2989 45.6794 42.144 45.6794ZM36.7883 45.6794C37.6334 45.6794 38.3184 45.0273 38.3184 44.223C38.3184 43.4186 37.6334 42.7665 36.7883 42.7665C35.9433 42.7665 35.2582 43.4186 35.2582 44.223C35.2582 45.0273 35.9433 45.6794 36.7883 45.6794ZM49.0288 44.223C49.0288 45.0273 48.3437 45.6794 47.4987 45.6794C46.6537 45.6794 45.9686 45.0273 45.9686 44.223C45.9686 43.4186 46.6537 42.7665 47.4987 42.7665C48.3437 42.7665 49.0288 43.4186 49.0288 44.223Z"
                                        fill="#4E6BFF" />
                                </g>
                            </svg>
                        </div>
                        <h4>Corporate with others </h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12 pb-5">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="57" height="58" viewBox="0 0 57 58" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M51.1482 18.9051L39.0004 6.15771L8.52445 6.15836C6.95508 6.15836 5.68286 7.43058 5.68286 8.99995V48.7821C5.68286 50.3515 6.95508 51.6237 8.52445 51.6237H48.3066C49.876 51.6237 51.1482 50.3515 51.1482 48.7821V18.9051ZM9.94535 10.4193H37.1734L46.8859 20.6106V47.3599H9.94535V10.4193Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M44.044 26.0495H12.7866V44.5198H44.044V26.0495ZM39.7814 30.3119H32.6774V37.4159H39.7814V30.3119Z"
                                        fill="#4E6BFF" />
                                    <rect id="Vector_3" x="12.7866" y="14.6832" width="17.0495" height="5.68317"
                                        fill="#4E6BFF" />
                                </g>
                            </svg>
                        </div>
                        <h4>Clean & Dry code </h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12 pb-5">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.0194 6.15839H10.9155H8.07387C7.28919 6.15839 6.65308 6.79449 6.65308 7.57918V7.57918V10.4208V17.5247C6.65308 18.3094 7.28919 18.9455 8.07387 18.9455H9.49466C10.2793 18.9455 10.9155 18.3094 10.9155 17.5247V10.4208H18.0194C18.8041 10.4208 19.4402 9.78465 19.4402 8.99997V7.57918C19.4402 6.7945 18.8041 6.15839 18.0194 6.15839Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40.7528 6.15839H47.8568H50.6983C51.483 6.15839 52.1191 6.79449 52.1191 7.57918V7.57918V10.4208V17.5247C52.1191 18.3094 51.483 18.9455 50.6983 18.9455H49.2776C48.4929 18.9455 47.8568 18.3094 47.8568 17.5247V10.4208H40.7528C39.9681 10.4208 39.332 9.78465 39.332 8.99997V7.57918C39.332 6.7945 39.9681 6.15839 40.7528 6.15839Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.0194 53.0445H10.9155H8.07387C7.28919 53.0445 6.65308 52.4084 6.65308 51.6237V51.6237V48.7821V41.6782C6.65308 40.8935 7.28919 40.2574 8.07387 40.2574H9.49466C10.2793 40.2574 10.9155 40.8935 10.9155 41.6782V48.7821H18.0194C18.8041 48.7821 19.4402 49.4182 19.4402 50.2029V51.6237C19.4402 52.4084 18.8041 53.0445 18.0194 53.0445Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40.7528 53.0445H47.8568H50.6983C51.483 53.0445 52.1191 52.4084 52.1191 51.6237V51.6237V48.7821V41.6782C52.1191 40.8935 51.483 40.2574 50.6983 40.2574H49.2776C48.4929 40.2574 47.8568 40.8935 47.8568 41.6782V48.7821H40.7528C39.9681 48.7821 39.332 49.4182 39.332 50.2029V51.6237C39.332 52.4084 39.9681 53.0445 40.7528 53.0445Z"
                                        fill="#4E6BFF" />
                                    <path id="Vector_5"
                                        d="M40.8008 30.7078C40.2812 32.5406 39.738 34.4413 39.4309 36.1836C38.9822 38.8083 39.1475 41.0484 39.3365 42.3155L26.1098 47.3613V41.0031C26.1098 40.6637 25.9681 40.3469 25.7319 40.1207C25.4957 39.8944 25.1651 39.7586 24.8108 39.7586H20.0397C19.4965 39.7586 19.0477 39.3514 19.0477 38.8536V33.7851C19.0477 33.1289 18.5281 32.5859 17.8432 32.5406L16.3079 32.4275C15.0089 32.337 14.5601 32.2464 14.4657 32.2238C13.7571 31.907 13.7571 31.4771 13.7571 31.3414C13.7571 31.2961 13.8988 30.2779 17.1582 26.6123L17.2763 26.4765C17.6306 26.0693 17.6306 25.662 17.6306 24.8926V24.5306C17.6542 24.4401 17.6542 24.3722 17.6542 24.2817C17.6778 18.6023 23.6771 13.3302 30.2195 13.2623H30.3612C36.7384 13.2623 42.1708 18.2177 42.1708 24.0554C42.218 25.7977 41.4858 28.2867 40.8008 30.7078Z"
                                        fill="#4E6BFF" />
                                    <path id="NLP" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.076 23.1241V27.4703H20.6936V20.389H21.9269L24.7315 24.7253V20.389H26.1139V27.4703H24.8807L22.076 23.1241ZM32.3596 26.237V27.4703H27.7648V20.3891H29.1472V26.237H32.3596ZM34.8656 27.4703V24.8049H36.2282C36.5928 24.8049 36.9194 24.7468 37.2078 24.6308C37.4962 24.5148 37.7416 24.3557 37.9438 24.1534C38.146 23.9512 38.3002 23.7158 38.4062 23.4473C38.5123 23.1788 38.5654 22.8953 38.5654 22.5969C38.5654 22.2986 38.5123 22.0151 38.4062 21.7466C38.3002 21.4781 38.146 21.2427 37.9438 21.0405C37.7416 20.8382 37.4962 20.6791 37.2078 20.5631C36.9194 20.4471 36.5928 20.389 36.2282 20.389H33.4832V27.4703H34.8656ZM34.8657 23.5617H36.1587C36.4769 23.5617 36.7272 23.4738 36.9096 23.2981C37.0919 23.1224 37.1831 22.8887 37.1831 22.597C37.1831 22.3052 37.0919 22.0698 36.9096 21.8908C36.7272 21.7118 36.4769 21.6223 36.1587 21.6223H34.8657V23.5617Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </div>
                        <h4>Built-in AI features </h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12 pb-5">
                    <div class="content ">
                        <div class="pb-3">
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon">
                                    <rect id="Vector" x="53.5098" y="4.73761" width="8.52475" height="48.3069"
                                        rx="1.42079" transform="rotate(90 53.5098 4.73761)" fill="#4E6BFF" />
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M33.619 17.5247C33.619 16.7401 32.9829 16.1039 32.1982 16.1039H6.62392C5.83924 16.1039 5.20312 16.7401 5.20312 17.5247V51.6237C5.20312 52.4084 5.83924 53.0445 6.62392 53.0445H32.1982C32.9829 53.0445 33.619 52.4084 33.619 51.6237V17.5247ZM27.9354 23.2079H10.8859V26.0495H27.9354V23.2079ZM10.8859 33.1535H27.9354V35.995H10.8859V33.1535ZM27.9354 43.099H10.8859V45.9406H27.9354V43.099Z"
                                        fill="#4E6BFF" />
                                    <rect id="Vector_3" x="36.4604" y="16.1039" width="17.0495" height="36.9406"
                                        rx="1.42079" fill="#4E6BFF" />
                                </g>
                            </svg>
                        </div>
                        <h4>Productive development </h4>
                        <p style="font-size: 13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="counter-section mt-5" style="background: #C8D1FF;">
        <div class="container">
            <div class="row g-5  py-5 justify-content-center">
                <div class="col-md-4 text-center">
                    <h1>27</h1>
                    <span>Happy clients</span>
                </div>
                <div class="col-md-4 text-center">
                    <h1>100+</h1>
                    <span>Completed Projects</span>
                </div>
            </div>
        </div>
    </div>


    <div class="experience-section py-5">
        <div class="container">
            <div class="row text-center">
                <h1> Experience </h1>
            </div>
            <div class="row pt-5 justify-content-center">
                <div class="col">
                    <img src="{{ asset('assets/images/experience/maxenius.jpeg') }}" alt="">
                </div>
                <div class="col">
                    <img src="{{ asset('assets/images/experience/xlogic.jpeg') }}" alt="">
                </div>
                <div class="col">
                    <img src="{{ asset('assets/images/experience/devx-house.png') }}" alt="">
                </div>
                <div class="col">
                    <img src="{{ asset('assets/images/experience/digivider.jpeg') }}" alt="">
                </div>
                <div class="col">
                    <img src="{{ asset('assets/images/experience/ooptech.png') }}" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="blog-section">

    </div>

    <div class="contact-section py-5 " style="background: #4E6BFF;">
        <div class="container">
            <div class="row text-center mb-4">
                <h1 class="sec-heading" style="color: #fff;" > Send Me Your Requirements </h1>
            </div>
            <div style="display:none;" class="row justify-content-center">
                <div class="col-md-8">
                    <form action="" class="row justify-content-center">
                        <div class=" col-6 mb-3">
                            <label for="full_name"> Full Name: </label>
                            <input id="full_name" name="name" class="form-control" type="text">
                        </div>
                        <div class=" col-6 mb-3">
                            <label for="email"> Email: </label>
                            <input class="form-control" name="email" id="email" required type="email">
                        </div>
                        <div class=" col-12 mb-3">
                            <label for="phone"> Phone (Optional): </label>
                            <input id="phone" name="phone" class="form-control" type="tel">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="message"> Message: </label>
                            <textarea name="message" id="message" class="form-control"
                                placeholder="Write Your Project Details or Requirements ( You can freely share your requirements or task details. I will reach you soon. )"
                                id="" style="width: 100%;" rows="10"></textarea>
                        </div>
                        <div class="col-12 mb-3 text-end">
                            <button type="submit" class="btn btn-light w-50" style="color: #4E6BFF; font-size: 20px; font-weight: 600;" >Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col">
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#contact_me_modal" class="theme-btn-light">Send Now</a>
                </div>
            </div>
        </div>
    </div>


<!-- Send Query Modal -->

<div class="modal fade " id="contact_me_modal" tabindex="-1" aria-labelledby="contact_me_modal_label" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <form action="" method="post" class="modal-content">
      <div class="modal-header">
        <div class="heading-content">
            <h1 class="modal-title fs-5" id="contact_me_modal_label">Get a Quote For Your Project</h1>
            <p>I will reach out you soon, possibly within next 12 hours.</p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-4 mb-3 col-6">
                <label for="name">Name: <span style="color: red;" >*</span> </label>
                <input type="text" id="name" name="full_name" placeholder="Full Name" required class="form-control" >
            </div>
            <div class="col-md-4 mb-3 col-6">
                <label for="email">Email: <span style="color: red;" >*</span> </label>
                <input type="email" name="email" id="email" placeholder="Enter Email" class="form-control" >
            </div>
            <div class="col-md-4 mb-3 col-12">
                <label for="phone">Phone: </label>
                <input type="tel" name="phone" placeholder="Enter Phone Number" id="phone" class="form-control" >
            </div>

            <div class=" col-12 mb-3">
                <label for="industry">Enter Your Industry or Buisness: <span style="color: red;" >*</span></label>
                <input type="text" name="industry" required id="industry" placeholder="Medical, Real State, Finetech, Or your profession like Doctor, Buisnessman, Politcian " class="form-control">
            </div>
            <div class="col-12 mb-3">
                <label for="organization_type">Organization Type:</label>
                <input type="text" name="organization_type" id="organization_type" placeholder="Profitable,  Charitable, Religious, Government, NGOs, Foundations, Trusts etc  " class="form-control">
            </div>
            <div class="col-12 mb-3">
                <label for="priamry_goal">Primary Goal of the Website or Project: <span style="color: red;" >*</span> </label>
                <textarea name="priamry_goal" rows="4" id="priamry_goal" class="form-control" placeholder="Describe the main purpose whether it's brand awareness, Lead generation, e-commerce, custom solution, automations, or tools, etc"  ></textarea>
            </div>
            <div class="col-12 mb-3">
                <label for="reference_links">Provide any links to website, designs or feature that inspire the desire look or feel:  </label>
                <input type="text" name="reference_links" id="reference_links" placeholder="Each Seperated By Comma" class="form-control">
            </div>
            <div class="col-6 mb-3">
                <label for="budget">Your Budget for this project: <span style="color: red;" >*</span> </label>
                <input type="number" name="budget" id="budget" placeholder="Your Budget $" class="form-control">
            </div>
            <div class="col-6 mb-3">
                <label for="number_of_pages">Number of pages:</label>
                <input type="text" name="number_of_pages" id="number_of_pages" placeholder="Provide detail on expected number of pages you want" class="form-control">
            </div>
            <div class="col-12 mb-3">
                <label for="number_of_pages">Brief of Your Requirements:</label>
                <textarea name="priamry_goal" rows="4" id="priamry_goal" class="form-control" placeholder="Kinldy provide a detailed explanation of your requirements, including details such as competitor site you admire or any unique features you wish to implement."  ></textarea>
            </div>
            <div class="col-12 mb-3">
                <label for="uploaded_file">Upload any relevant file (maximum allowed size is 2GB):</label>
                <input type="file" class="form-control">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class=" theme-btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class=" theme-btn">Send </button>
      </div>
    </form>
  </div>
</div>

@endsection
