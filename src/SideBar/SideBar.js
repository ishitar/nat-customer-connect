import './sidebar.css';
import { Dashboard, Assessment, People, CallSplit } from '@material-ui/icons';

export default function SideBar() {
    return (
        <div className='sideBarWrapper'>
            <Dashboard className='sideNavImage'/>
            <Assessment className='sideNavImage'/>
            <CallSplit className='sideNavImage'/>
            <People className='sideNavImage'/>

        </div>
    )
}
