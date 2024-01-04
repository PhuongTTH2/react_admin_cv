import React from 'react'
import './pageitviecgrid.css'
import logo from '../../assets/images/users/itviec-logo.png'
const box = [{
    img:"../../assets/images/users/itviec-logo.png",
    company: 'Titan Technology Corporation',
    job:'6 Việc làm',
    location:'Ho Chi Minh'
},{
    img:'../../assets/images/users/itviec-logo.png',
    company: 'FPT Software',
    job:'3 Việc làm',
    location:'Ho Chi Minh'
},{
    img:'../../assets/images/users/itviec-logo.png',
    company: 'ITviec',
    job:'2 Việc làm',
    location:'Ho Chi Minh'
},{
    img:'../../assets/images/users/itviec-logo.png',
    company: 'LG Electronics Development Vietnam (LGEDV)',
    job:'5 Việc làm',
    location:'Ha Noi'
},{
    img:'../../assets/images/users/itviec-logo.png',
    company: 'Beincom',
    job:'5 Việc làm',
    location:'Ho Chi Minh'
},{
    img:'../../assets/images/users/itviec-logo.png',
    company: 'MB Bank',
    job:'11 Việc làm',
    location:'Ha Noi'
}]
const PageItViecGrid = () => {
    const PageItViecGridBox = (props) =>(
        <div className="col-3 page-it-viec-grid-box"   >
            <div className="page-it-viec-grid-box-item"  >
                <div className="page-it-viec-grid-box-item-img">
                    <img src={logo} alt=""/>
                </div>
                <div className='page-it-viec-grid-box-item-company'>
                    <span>{props.item.company}</span>
                </div>
                <div className='page-it-viec-grid-box-item-link'>
                    <span>{props.item.job}</span> - <span>{props.item.location}</span>
                </div>
            </div>
        </div>
    )
  return (
    <div className='row'>
        { box.map((item,index) => (
            <PageItViecGridBox item={item}/>
        ))  }

    </div>
  )
}

export default PageItViecGrid
