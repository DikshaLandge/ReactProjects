import './main.css';
import React from 'react';
import Grocery from './grocery.jpg';
import Mob from './mobiles.png';
import Fashion from './fashion.png';
import elec from './laptop.png';
import Home from './home.jpg';
import Projector from './projector.png';


function Main() {

    return (
        <div className='main'>
            <div className='card'>
                <div className='card1'>
                    <img src={Grocery} className='Grocery' />
                    <h3><span className='grocery'>Grocery</span></h3 >

                </div>

                <div className='card2'>
                    <img src={Mob} className='Grocery' alt='grocery' />
                    <h3 ><span className='mob'>Mobiles</span></h3>

                </div>
                <div className='card3'>
                    <img src={Fashion} className='Grocery' alt="" />
                    <h3><span className='fashion'>Fashion</span></h3>

                </div>

                <div className='card4'>
                    <img src={elec} className='Grocery' alt="" />
                    <h3><span className='elect'>Electronics</span></h3>

                </div>

                <div className='card5'>
                    <img src={Home} className='Grocery' alt="" />
                    <h3><span className='home'>Home & Furniture</span></h3>

                </div>
                <div className='card6'>
                    <img src={Grocery} className='Grocery' alt="" />
                    <h3><span className='app'>Appliances</span></h3>

                </div>
                <div className='card7'>
                    <img src={Grocery} className='Grocery' alt="" />
                    <h3><span className='travel'>Travel</span></h3>

                </div>
                <div className='card8'>
                    <img src={Grocery} className='Grocery' alt="" />
                    <h3><span className='beauty'>Beauty, toys & more</span></h3>

                </div>
                <div className='card9'>
                    <img src={Grocery} className='Grocery' alt="" />
                    <h3><span className='wheel'>Two wheelers</span></h3>

                </div>


            </div>


            <div className='Elect_Cards'>
                <div className='best_elect'>
                    <h3><span className='best'>Best of Electronics</span></h3>
                </div>
                <div className='electronics'>
                    <div className='projectors'>
                        <img src={Projector} className='project' alt=""/>
                        <h3><span className='content'>Projectors</span></h3>
                        <h2><span className='from'>From 9999</span></h2>  
                    </div>
                    <div className='projectors'>
                        <img src={Projector} className='project' alt=""/>
                        <h3><span className='content'>Monitor</span></h3>
                        <h2><span className='from'>From 9999</span></h2>  
                    </div>
                    <div className='projectors'>
                        <img src={Projector} className='project' alt=""/>
                        <h3><span className='content'>Projector</span></h3>
                        <h2><span className='from'>From 9999</span></h2>  
                    </div>
                    <div className='projectors'>
                        <img src={Projector} className='project' alt=""/>
                        <h3><span className='content'>Printers</span></h3>
                        <h2><span className='from'>From 9999</span></h2>  
                    </div>
                    <div className='projectors'>
                        <img src={Projector} className='project' alt=""/>
                        <h3><span className='content'>Top Mirrorless Cameras</span></h3>
                        <h2><span className='from'>From 9999</span></h2>  
                    </div>
                 

                </div>

            </div>

          
            <div className='Elect_Cards'>
                <div className='best_elect'>
                    <h3><span className='best'>Beauty,Food ,Toys & more</span></h3>
                </div>
             </div>



        </div>




    );
}

export default Main;