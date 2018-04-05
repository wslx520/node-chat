import { connect} from 'react-redux';
import SidebarComponent from '../components/Sidebar';

export const Sidebar = connect(state => (console.log('container Sidebar', state),{
    users: state.users
}), {})(SidebarComponent);
