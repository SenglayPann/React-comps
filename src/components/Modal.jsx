import ReactDOM from 'react-dom'
import Button from "./Button"
import { useEffect } from 'react';
function Modal({ children, value, onChange, actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div className=" fixed inset-0 bg-gray-300 opacity-80" onClick={() => onChange(value)}></div>
            <div className=" fixed inset-40 p-10 bg-white">
                <div className='flex h-full flex-col justify-between'>
                    {children}
                    <div className='flex justify-end'>{actionBar}</div>
                </div>
            </div>
        </div>,

        document.querySelector('#modal-container')
    );
}

export default Modal