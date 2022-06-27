import {
    Layout, Button, Input, Steps, Form, Select, Row, Radio, DatePicker,
    Col, Checkbox, Switch, Menu
} from 'ant-design-vue'

const ant = {
    install(Vue: any) {
        Vue.component(Layout.name, Layout)
        Vue.component(Button.name, Button)
        Vue.component(Input.name, Input)
        Vue.component(Steps.name, Steps)
        Vue.component(Form.name, Form)
        Vue.component(Select.name, Select)
        Vue.component(Row.name, Row)
        Vue.component(Radio.name, Radio)
        Vue.component(DatePicker.name, DatePicker)
        Vue.component(Col.name, Col)
        Vue.component(Checkbox.name, Checkbox)
        Vue.component(Switch.name, Switch)
        Vue.component(Menu.name, Menu)
    }
}
export default ant

