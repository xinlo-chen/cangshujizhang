const localstorageKeyName = 'recordList'
const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
  },
  clone(data :RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },

  save(data:RecordItem[]) {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(data));
  }
}
export default model;