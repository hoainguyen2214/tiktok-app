import classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="logo" />
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false}></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}></div>
        </div>
    </header>;
}

export default Header;