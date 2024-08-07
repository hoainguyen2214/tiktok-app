import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu( {children, items = []} ) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />)
    }

    return ( 
        <Tippy interactive placement='bottom-end' delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    );
}

export default Menu;