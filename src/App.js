// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import store from './store'
import {Provider} from 'react-redux'

import {persistor} from './store'
import {PersistGate} from 'redux-persist/integration/react'

// ----------------------------------------------------------------------

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeConfig>
                    <ScrollToTop/>
                    <Router/>
                </ThemeConfig>
            </PersistGate>
        </Provider>
    );
}
