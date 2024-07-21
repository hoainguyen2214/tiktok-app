import classNames from 'classnames/bind';
import Button from "~/components/Button";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({data}) {
    return ( 
        <Button leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
     );
}

export default MenuItems;