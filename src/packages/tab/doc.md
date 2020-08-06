# Tab 选项卡

常用于平级区域大块内容的的收纳和展现。

> 注意，使用该组件需要在引入 nut-tab-panel 组件

`import { TabPanel } from "@nutui/nutui";`

## 基本用法

```html
<nut-tab @tab-switch="tabSwitch" line-width="20">
    <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
    <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
    <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
</nut-tab>
```
```javascript
export default {
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event);
      }
  }
};
```

## 使用数据渲染，支持上/下/左/右四个样式；

```html
<nut-tab @tab-switch="tabSwitch"  position-nav="bottom">
    <nut-tab-panel 
      v-for="value in editableTabs" 
      v-bind:key="value.tabTitle" 
      :tab-title="value.tabTitle" 
      :icon-url="value.tabUrl" 
      v-html="value.content"
    >
    </nut-tab-panel>
</nut-tab>
```
```javascript
export default {
  data() {
    return {
      positionNavCurr:'top',
      editableTabs:[
        {
          'tabTitle':'衣物',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'content':'<p>衣物内容</p>'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'content':'<p>日用品内容</p>'
        },
        {
          'tabTitle':'器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          'content':'<p>运动器材内容</p>'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'content':'<p>电影票内容</p>'
        }
      ]
    };
  },
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event);
      }
  }
};
```
## 支持滑动选择多个页签

```html
  <nut-tab @tab-switch="tabSwitch" :is-scroll="true">
      <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
      <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
      <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
      <nut-tab-panel tab-title="页签4">页签4</nut-tab-panel>
      <nut-tab-panel tab-title="页签5">页签5</nut-tab-panel>
      <nut-tab-panel tab-title="页签6">页签6</nut-tab-panel>
      <nut-tab-panel tab-title="页签7">页签7</nut-tab-panel>
  </nut-tab>
```
## 支持滑动选择多个页签,设置tab高度为250,注意只有在 is-scroll = true的情况下，设置的 wrapper-height 才有效

```html
<nut-tab @tab-switch="tabSwitch" :is-scroll="true" position-nav="left" :wrapper-height="250">
    <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
    <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
    <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
    <nut-tab-panel tab-title="页签4">页签4</nut-tab-panel>
    <nut-tab-panel tab-title="页签5">页签5</nut-tab-panel>
    <nut-tab-panel tab-title="页签6">页签6</nut-tab-panel>
    <nut-tab-panel tab-title="页签7">页签7</nut-tab-panel>
    <nut-tab-panel tab-title="页签8">页签8</nut-tab-panel>
</nut-tab>
```

## 禁止选中，默认选中某个标签,如需更新数组后，重新渲染Tab页面，请将更新数组传入init-data

```html
<nut-tab :def-index="1" class="customer-css" @tab-switch="tabSwitch" :contentShow="true" :init-data="disableTabs">
    <nut-tab-panel
    v-for="value in disableTabs"
    v-bind:key="value.tabTitle"
    :tab-title="value.tabTitle"
    :disable="value.disable"
    v-html="value.content"
  ></nut-tab-panel>
</nut-tab>
<div style="width:100%;height=50px;text-align:center">
  <Button @click="resetHandler" type="light">重置Tab页面</Button>
  <Button @click="clickHandler">更新Tab页面</Button>
</div>
```

```javascript
import Button from '../button/button.vue';
export default {
  data() {
    return {
      positionNavCurr:'top',
      disableTabs:[
        {
          'tabTitle':'衣物',
          'disable':false,
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'content':'<p>衣物内容</p>'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'content':'<p>日用品内容</p>'
        },
        {
          'tabTitle':'运动器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          'content':'<p>运动器材内容</p>'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'content':'<p>电影票内容</p>'
        }
      ]
    };
  },
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event.target);
      },
      clickHandler:function(){
        let newEditableTabs = [
          {
            tabTitle: "衣物2",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
            content: "<p>改变衣物内容</p>"
          },
          {
            tabTitle: "日用品2",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
            content: "<p>改变日用品内容</p>"
          },
          {
            tabTitle: "器材2",
            iconUrl:
              "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
            content: "<p>改变运动器材内容</p>"
          },
          {
            tabTitle: "电影票2",
            iconUrl:
              "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
            content: "<p>改变电影票内容</p>"
          }
        ]
        this.disableTabs = newEditableTabs;
      },
      resetHandler:function(){
          let newEditableTabs = [
          {
            tabTitle: "衣物",
            disable: false,
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
            content: "<p>衣物内容</p>"
          },
          {
            tabTitle: "日用品",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
            content: "<p>日用品内容</p>"
          },
          {
            tabTitle: "运动器材",
            iconUrl:
              "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
            content: "<p>运动器材内容</p>"
          },
          {
            tabTitle: "电影票",
            iconUrl:
              "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
            content: "<p>电影票内容</p>"
          }
        ]
        this.disableTabs = newEditableTabs;
      }
  }
};
```


### Prop

### nut-tab

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| position-nav | 页签栏的分布，可选值 top/bottom/left/right | String | top
| def-index | 默认选中的页签栏 | String | 1
| init-data | 监听数据变化，渲染更新页面 | Array | []
| is-show-line|是否显示tab切换时的红条|Boolean|true|
| is-scroll|是否支持滑动选择多个页签|Boolean|false|
| wrapper-height |设置tab的高度，只有在 is-scroll=true；positionNav=left或者right 的情况下有效|Number/String|200|
| line-width | 页签底部红条自定义宽度|默认为0，则等于页签的宽度|

### nut-tab-panel

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tab-title | 页签的标题 | String | ''
| icon-url | 页签的图标地址 | String | ''
| content | 页签的自定义内容 | String | ''
| disable | 是否禁用页签 |Boolean|false|

### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| tab-switch | 切换页签时触发事件 | 点击的索引值和触发元素

