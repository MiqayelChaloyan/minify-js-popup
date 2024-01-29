import { Button } from '../ui/Button';
import './style.css';

export const Modal = ({ open, handleClose, children }) => {
    return (
        <div className="modal" style={{right: open ? '10px' : '-400px'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button onClick={handleClose} text='X' style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }} fontSize='20px' />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
};