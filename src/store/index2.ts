import recordListModel from '@/models/recordListModel';
import tagsListModel from '@/models/tagsListModel';

const store = {
  //record store
  recordList: recordListModel.fetch(),

  createRecord: (record: RecordItem) => recordListModel.create(record),

  //Tag store
  tagList: tagsListModel.fetch(),

  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },

  createTag: (name: string) => {
    const message = tagsListModel.create(name);  //知识点2 ，最小知识原则
    if (message === 'duplicated') {
      window.alert('标签重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },

  removeTag: (id: string) => {
    return tagsListModel.remove(id);
  },

  updateTag: (id: string, name: string) => {
    return tagsListModel.update(id, name);
  }
};

export default store;