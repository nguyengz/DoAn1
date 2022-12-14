// assets
import { ImportOutlined, ExportOutlined } from '@ant-design/icons';

// icons
const icons = {
    ImportOutlined,
    ExportOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const product = {
    id: 'product',
    title: 'Product',
    type: 'group',
    children: [
        {
            id: 'util-ImP',
            title: 'Import product',
            type: 'item',
            url: '/Importproduct',
            icon: icons.ImportOutlined
        },
        {
            id: 'util-ExP',
            title: 'Export product',
            type: 'item',
            url: '/Exportproduct',
            icon: icons.ExportOutlined
        }
    ]
};

export default product;
