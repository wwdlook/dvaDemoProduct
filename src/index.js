import dva from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import createLoading from 'dva-loading';

// document.addEventListener('deviceready', function () {
    // 1. Initialize
    const app = dva();

    // 2. Plugins 
    app.use(createLoading());

    // 3. Model
    app.model(require('./models/indexpage').default);
    app.model(require('./models/ehrbasic').default);
    app.model(require('./models/recuitPlatform/recuitTasks').default);
    app.model(require('./models/recuitPlatform/queryDetail').default);
    app.model(require('./models/recuitPlatform/AppointmentRecords').default);
    app.model(require('./models/recuitPlatform/CommentaryRecords').default);

    // 4. Router
    app.router(require('./router').default);

    // 5. Start
    app.start('#root');
// }, false);