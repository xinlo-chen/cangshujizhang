<template>
  <layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>

  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagsListModel from '@/models/tagsListModel';


const recordList = recordListModel.fetch();
const tagsList = tagsListModel.fetch();

// const version = window.localStorage.getItem('version') || '0';
// const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
// if (version === '1.0.0') {
//   //数据库升级，数据迁移
//   recordList.forEach(record => {
//     record.createdAt = new Date(2020, 0, 1);
//   });
//   //保存数组
//   window.localStorage.setItem('recordList', JSON.stringify(recordList));
// }
// window.localStorage.setItem('version', '1.0.1');


@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagsList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  };

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }

  // onUpdateTypes(value: string) {
  //   this.record.type = value;
  // };

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  };

};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>


