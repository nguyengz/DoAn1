// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'About',
    type: 'group',
    children: [
        {
            id: 'About',
            title: 'About',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        }
    ]
};

export default support;
