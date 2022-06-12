import clone from '@/lib/clone';

const localstorageKeyName = 'recordList';
let data:RecordItem[] | undefined = undefined;

const recordStore = {
  //record store
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date().toISOString();
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;