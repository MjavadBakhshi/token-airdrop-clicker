import React, {useState, useRef, useEffect} from 'react';
import '../styles/HomeScreen.css';
import { CSSTransition } from 'react-transition-group';
import { AssignmentTurnedInOutlined, Diversity1Outlined, EmojiEventsOutlined, HardwareOutlined } from "@mui/icons-material";
import { register } from 'swiper/element/bundle';

function HomeScreen(props) {
    const [animate, setAnimate] = useState(false);
    const [balance, setBalance] = useState(0);
    const nodeRef = useRef(null);

    const handleButtonClick = () => {
      setAnimate(true);
      setBalance(balance +1);
    };

    const swiperElRef = useRef(null);
    useEffect(() => {
        // Register Swiper web component
        register();
    
        // Object with parameters
        const params = {
          slidesPerView: 1,
          breakpoints: {
            369: {
              slidesPerView: 1,
            },
          },
        };
    
        // Assign it to swiper element
        Object.assign(swiperElRef.current, params);
 
        // initialize swiper
        swiperElRef.current.initialize();
      }, []);



    return (
        <div className='bg-container flex-column d-flex align-items-center'>
            
           <CSSTransition
                nodeRef={nodeRef}
                in={animate}
                unmountOnExit
                timeout={500}
                classNames="dollar-sign"
                onEntered={() => setAnimate(false)}
            >
                <span className='dollar-sign' ref={nodeRef}>$</span>
            </CSSTransition>

            <div  onClick={handleButtonClick} id="logo" className='circle-button '>
                <img src={require('../images/logo.png')} />
            </div>

            <div className='bottom-panel d-flex flex-column pt-2'>
               
                <div id="account-level" className='d-flex'>
                    <span>Starter</span>
                    <span>Master</span>
                    <span>Epic</span>
                    <span>Legendary</span>
                </div>
               
                <div id='balance-container' className="w-100 d-flex align-items-center justify-content-center mb-3">
                    <img src={require('../images/coin.png')} alt="" />
                    <h1 id='balance' className='text-center'>{balance}</h1>
                </div>

                <div className="row">
                    <div className="col-12">
                    <swiper-container
                        ref={swiperElRef}
                        init="false"
                >
                    <swiper-slide>
                    <div className="task-card X-card">
                        <h1>Follow on X</h1>
                        <a>Check</a>
                    </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="task-card youtube-card">
                            <h1>Subscribe on youtube</h1>
                            <a>Check</a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                    <div className="task-card X-card">
                        <h1>Follow on X2</h1>
                        <a>Check</a>
                    </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="task-card youtube-card">
                            <h1>Subscribe on youtube2</h1>
                            <a>Check</a>
                        </div>
                    </swiper-slide>
              
                   
                </swiper-container>


                    </div>
                </div>

            
           

                <div id='footer-nav' className='mt-auto d-flex jsutify-content-between'>
                    <a>
                        <AssignmentTurnedInOutlined />
                        <span>Tasks</span>
                    </a>
                    <a>
                        <Diversity1Outlined  />
                        <span>Invite</span>
                    </a>
                    <a>
                        <EmojiEventsOutlined  />
                        <span>Ranking</span>
                    </a>
                    <a>
                        <HardwareOutlined />
                        <span>Mine</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;