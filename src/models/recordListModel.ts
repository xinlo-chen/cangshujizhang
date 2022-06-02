const localstorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    this.data= JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.data));
  }
};
export default recordListModel;