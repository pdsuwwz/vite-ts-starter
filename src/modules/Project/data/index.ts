const date = new Date()
const [, id] = String(Math.random()).split('.')
const today = `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`

export const projectDetail = {
  id,
  name: 'This is Test Name 测试项目',
  corpName: 'This is Test Company 测试公司',
  notes: 'This is Test Remarks 备注',
  isPublished: false,
  createTime: today
}

export const projectList = [
  {
    id: '111',
    name: 'Test Name 测试项目',
    corpName: 'Test Company 测试公司',
    notes: 'Test Remarks 备注',
    isPublished: false,
    createTime: today
  },
  {
    id: '222',
    name: 'This is Test Test Test Test Name',
    corpName: 'This is Test Test Test Company',
    notes: 'Remarks.... 这是备注😄',
    isPublished: true,
    createTime: today
  },
  {
    id: '333',
    name: 'This is Test Test Test Test Name',
    corpName: 'This is Test Test Test 中文名称',
    notes: '中文备注',
    isPublished: false,
    createTime: today
  }
]
