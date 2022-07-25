import noData from '@/assets/noData.svg'

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <img src={noData} style={{ maxWidth: '100%' }} />
    <p>暂无内容</p>
  </div>
);

export default customizeRenderEmpty;