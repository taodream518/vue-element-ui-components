import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入字体图标
import './assets/fonts/iconfont.css'

// 引入TButton组件
import TButton from './components/TButton'
// 引入TDialog组件
import TDialog from "./components/TDialog";
// 引入TInput组件
import TInput from "./components/TInput";
// 引入TSwitch组件
import TSwitch from "./components/TSwitch";
// 引入TRadio组件
import TRadio from "./components/TRadio";
// 引入TRadioGroup组件
import TRadioGroup from "./components/TRadioGroup";
// 引入TCheckbox组件
import TCheckbox from "./components/TCheckbox";
// 引入TCheckboxGroup组件
import TCheckboxGroup from "./components/TCheckboxGroup";
// 引入TForm组件
import TForm from "./components/TForm";
// 引入TFormItem组件
import TFormItem from "./components/TFormItem";

// 全局注册组件
Vue.component(TButton.name, TButton);
Vue.component(TDialog.name, TDialog);
Vue.component(TInput.name, TInput);
Vue.component(TSwitch.name, TSwitch);
Vue.component(TRadio.name, TRadio);
Vue.component(TRadioGroup.name, TRadioGroup);
Vue.component(TCheckbox.name, TCheckbox);
Vue.component(TCheckboxGroup.name, TCheckboxGroup);
Vue.component(TForm.name, TForm);
Vue.component(TFormItem.name, TFormItem);



new Vue({
  render: h => h(App),
}).$mount('#app')
