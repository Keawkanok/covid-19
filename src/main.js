import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routers'
// import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
// // import VCalendar from 'v-calendar';

// // Setup plugin for defaults or `$screens` (optional)

// // Use plugin with defaults
// // App.use(VCalendar, {})
// App.use(SetupCalendar, {})
//     // Use the components
// App.component(Calendar)
// App.component(DatePicker)
createApp(App).use(router).mount('#app')