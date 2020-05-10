import dva from 'dva';
import './index.css';
import ReactDOM from 'react-dom';

const createBrowserHistory = require('history').createBrowserHistory;
// 1. Initialize
const app = dva({
    history: createBrowserHistory(),
    onError(e, dispatch) {
        // alert(e.message, /* duration */3);
        dispatch({type: 'users/catchErr', payload: e})
    },
});

// 2. Plugins
// app.use({});

//3. Model
// app.model(LoginModel);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start();

ReactDOM.render(<App />,
    document.getElementById('root'))
