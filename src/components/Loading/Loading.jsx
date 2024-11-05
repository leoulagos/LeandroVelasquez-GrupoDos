import './Loading.css';
import { SyncLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className='loading'>
            <SyncLoader />
            {/* <p>Cargando...</p> */}
        </div>
    );
}
