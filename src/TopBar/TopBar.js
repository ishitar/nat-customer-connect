import './topbar.css';
import { FilterDrama, Language, ContactSupport, Phone } from '@material-ui/icons';
import { Divider } from '@material-ui/core';

export default function TopBar() {
    return (
        <div className='topBarWrapper'>
            <div className="topBarLogo">
                <FilterDrama className='logoImg'/>
                <span className="logoTitle">NatWest Connect</span>
            </div>
            <div className="topBarActions">
                <div className='actionsWrapper'>
                    <div className='actionItem'>
                        <Language className='topBarActionImg'/>
                        <span className="language">English</span>
                        
                    </div>
                    <Divider className='divider' orientation="vertical" flexItem />
                    <div className='actionItem'>
                        <Phone className='topBarActionImg'/>
                        
                    </div>
                    <Divider className='divider' orientation="vertical" flexItem />
                    <div className='actionItem'>
                        <ContactSupport className='topBarActionImg'/>
                    </div>
                    

                    
                    

                    
                </div>
            </div>
        </div>
    )
}
