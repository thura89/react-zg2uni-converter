import { React } from 'react';
import './ControlBox.css';
function ControlBar({clearIt, zawgyi, unicode}) {
    const copyToClipBoard = (ref) => {
        ref.current.select()
        document.execCommand('copy')
    }
    return(
        <div className='row ControlBox'>
            <div className='text-center'>
                <input type="button" className='btn btn-info' value="Clear" onClick={() => clearIt()}></input>
                <input type="button" className='btn btn-secondary' onClick={() => copyToClipBoard(unicode)} value="Copy Unicode"></input>
                <input type="button" className='btn btn-primary' onClick={() => copyToClipBoard(zawgyi)} value="Copy ZawGyi"></input>
                
            </div>
        </div>
    );
}
export default ControlBar;