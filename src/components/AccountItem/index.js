import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7368503063831740448~c5_100x100.jpeg?lk3s=a5d48078&nonce=34759&refresh_token=1d0bbbbf87a9429c75392351a16a5b2b&x-expires=1716642000&x-signature=F%2B00TenPchaP6AAqbVVRBVy%2FoOE%3D&shp=a5d48078&shcp=81f88b70" 
            alt="TEST" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem;